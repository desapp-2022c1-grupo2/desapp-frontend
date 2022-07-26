import React, {useEffect, useState} from "react"
import styled from "styled-components"
import {ButtonGroup, Toolbar} from "@mui/material"
import {Button, FilterAltOutlined, Input,} from '@components'
import {DeleteUserModal, EditJtpModal, NewJtpModal,} from '../../Modals'
import {JtpAdapter, CourseAdapter} from "../../../../../models";
import {getAllCourses} from "../../../../../service";
import {EditableToolbarProps} from "../EditableToolbar";

const StyledDivider = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`

const StyledToolbar = styled(Toolbar)`
display: flex;
flex-direction: column;
justify-content: center;
`

const StyledButtonGroup = styled(ButtonGroup)`
justify-content: right;
width: 100%;
`

export const JtpToolbar = ({
                             selected,
                             label,
                             rows,
                           }: EditableToolbarProps<JtpAdapter>) => {
  const userAdapter = rows.find(row => row.id === selected);
  const jtpFound = userAdapter ? userAdapter : new JtpAdapter(-1, "", "", "", -1, "", "");

  const [courses, setCourses] = useState<CourseAdapter[]>([]);

  useEffect(() => {
    const fetchAllCourses = async () => {
      const obtainedData = await getAllCourses();
      setCourses(obtainedData.map((course: CourseAdapter) => {
        return new CourseAdapter(course.id, course.name, course.parentCourseId, course.year, course.isPreviousCourse, course.createdAt, course.updatedAt);
      }));
    };

    fetchAllCourses();
  }, []);

  return (
    <StyledToolbar>
      <StyledDivider>
        <h4 id={`${label}Title`}>{label}</h4>
      </StyledDivider>
      <StyledDivider>
        <Input disabled placeholder={"Buscar"} variant='search'/>
        <Button disabled={true} color={'secondary'} title={'Filtrar'} startIcon={<FilterAltOutlined/>}>Filtrar</Button>
        <StyledButtonGroup>
          {selected > 0 &&
              <>
                  <EditJtpModal jtp={jtpFound} courses={courses}/>
                  <DeleteUserModal jtp={jtpFound} courses={courses}/>
              </>
          }
          {<NewJtpModal jtp={jtpFound} courses={courses}/>}
        </StyledButtonGroup>
      </StyledDivider>
    </StyledToolbar>)
}
