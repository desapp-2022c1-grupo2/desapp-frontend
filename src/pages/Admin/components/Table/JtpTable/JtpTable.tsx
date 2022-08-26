import React, {useEffect, useState} from "react";
import {getAllCourses, getAllJtp, updateJtpDatagrid} from "../../../../../service";
import {CourseAdapter, Jtp} from "../../../../../models";

import {DataGrid, GridColDef, GridEventListener,} from '@mui/x-data-grid';
import {DataGridLocaleText} from "./DataGridLocaleText";
import {validateDate} from "../../../../../util";
import {MuiCustomToolbar} from "../MuiCustomToolbar";
import {getJtpColumns} from "./JtpColumns";
import {NewJtpModal} from "../../Modals";


export const JtpTable = () => {
    const [jtps, setJtps] = useState<Jtp[]>([]);
    const [courses, setCourses] = useState<CourseAdapter[]>([]);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const obtainedData: Jtp[] = await getAllJtp();
            const obtainedJtps: Jtp[] = obtainedData.map(jtp => new Jtp({
                id: jtp.id,
                name: jtp.name,
                lastName: jtp.lastName,
                email: jtp.email,
                courseId: jtp.courseId,
                createdAt: validateDate(jtp.createdAt),
                updatedAt: validateDate(jtp.updatedAt)
            }));
        setJtps(obtainedJtps);
        }
        const fetchAllCourses = async () => {
            const obtainedData = await getAllCourses();
            setCourses(obtainedData.map((course: CourseAdapter) => {
                return new CourseAdapter(course.id, course.name, course.parentCourseId, course.year, course.isPreviousCourse, course.createdAt, course.updatedAt);
            }));
        };
        fetchAllCourses().then(r => console.log('fetched courses'));
        fetchAllUsers().then(value => console.log("fetched users"));
    }, []);

    const handleCommit: GridEventListener<"cellEditCommit"> | undefined = (e) => {
        // if there are changes -> update jtp
        if (jtps.find(jtp => jtp.id === e.id)[e.field] !== e.value) {
            // {id: e.id, [e.field]: e.value}
            let jtp = new Jtp({id: e.id, [e.field]: e.value})
            updateJtpDatagrid(jtp).then(r => console.log('updated!', r));
        }
    }

    let columns: GridColDef[] = getJtpColumns(courses);

    const findJtpById: (id: number) => Jtp | undefined = (id: number) => {
        return jtps.find(jtp => jtp.id === id)
    }
    return (
        <div style={{height: '75vh', width: '100%'}}>
            <h3>Lista de JTPs</h3>
            <NewJtpModal courses={courses}/>
            <DataGrid rows={jtps}
                      columns={columns}
                      loading={!jtps.length}
                      onCellEditCommit={handleCommit}
                      localeText={
                          DataGridLocaleText
                      }
                      components={{
                          Toolbar: MuiCustomToolbar,
                          Pagination: null
                      }}
                      componentsProps={{
                          toolbar: {
                              showQuickFilter: true,
                              quickFilterProps: {debounceMs: 500},
                          },
                      }}
            />
        </div>);
}
