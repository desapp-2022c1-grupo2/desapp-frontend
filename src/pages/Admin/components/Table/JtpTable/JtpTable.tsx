import React, {useEffect, useState} from "react";
import {getAllCourses, getAllJtp, updateJtpDatagrid} from "../../../../../service";
import {CourseAdapter, Jtp} from "../../../../../models";

import {DataGrid, GridColDef, GridEventListener} from '@mui/x-data-grid';
import {DataGridLocaleText} from "./DataGridLocaleText";
import {validateDate} from "../../../../../util";
import {MuiCustomToolbar} from "../MuiCustomToolbar";
import {getJtpColumns} from "./JtpColumns";
import {NewJtpModal} from "../../Modals";


export const JtpTable = () => {
    const [jtps, setJtps] = useState<Jtp[]>([]);
    const [courses, setCourses] = useState<CourseAdapter[]>([]);
    const [pageSize, setPageSize] = React.useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchAllCourses = async () => {
            const obtainedData = await getAllCourses();
            setCourses(obtainedData.map((course: CourseAdapter) => {
                return new CourseAdapter(course.id, course.name, course.parentCourseId, course.year, course.isPreviousCourse, course.createdAt, course.updatedAt);
            }));
        };
        fetchAllCourses().then(r => console.log('fetched courses'));
    }, []);

    useEffect(() => {
        const fetchAllUsers = async () => {
            const obtainedData = await getAllJtp();
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
        const interval = setInterval(() => {
            fetchAllUsers();
        }, 3000);
        return () => clearInterval(interval);
    }, [jtps]);



    const handleCommit: GridEventListener<"cellEditCommit"> | undefined = (e) => {
        // if there are changes -> update jtp
        if (jtps.find(jtp => jtp.id === e.id)[e.field] !== e.value) {
            // {id: e.id, [e.field]: e.value}
            let jtp = new Jtp({id: e.id, [e.field]: e.value})
            updateJtpDatagrid(jtp).then(r => console.log('updated!', r));
        }
    }

    let columns: GridColDef[] = getJtpColumns(courses, setLoading);

    return (
        <div>
            <h3>Lista de JTPs</h3>
            <NewJtpModal setRows={setJtps} courses={courses}/>
        <div style={{height: '500px'}}>
            <DataGrid rows={jtps}
                      columns={columns}
                      loading={loading || !jtps.length}
                      onCellEditCommit={handleCommit}
                      pagination
                      pageSize={pageSize}
                      rowsPerPageOptions={[10, 25, 50]}
                      onPageSizeChange={(newPage) => setPageSize(newPage)}
                      localeText={
                          DataGridLocaleText
                      }
                      components={{
                          Toolbar: MuiCustomToolbar,
                      }}
                      componentsProps={{
                          toolbar: {
                              showQuickFilter: true,
                              quickFilterProps: {debounceMs: 500},
                          },
                      }}
            />
        </div>
        </div>);
}
