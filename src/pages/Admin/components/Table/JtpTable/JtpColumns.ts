import {useEffect, useState} from "react";
import {CourseAdapter} from "../../../../../models";
import {getAllCourses} from "../../../../../service";
import {GridColDef} from "@mui/x-data-grid";

export function getJtpColumns(): GridColDef[] {
  const [courses, setCourses] = useState<CourseAdapter[]>([]);
  useEffect(() => {
    const fetchAllCourses = async () => {
      const obtainedData = await getAllCourses();
      setCourses(obtainedData.map((course: CourseAdapter) => {
        return new CourseAdapter(course.id, course.name, course.parentCourseId, course.year, course.isPreviousCourse, course.createdAt, course.updatedAt);
      }));
    };
    fetchAllCourses().then(r => console.log('fetched courses'));
  }, []);

  return [
    {headerName: "ID", field: 'id', width: 50, editable: false},
    {headerName: "Nombre", field: 'name', width: 200, editable: true},
    {headerName: "Apellido", field: 'lastName', width: 200, editable: true},
    {headerName: "Email", field: "email", width: 200, editable: true},
    {
      headerName: "Materia",
      field: "courseId",
      width: 200,
      editable: true,
      type: "singleSelect",
      valueOptions: courses ? courses.map(course => {
        return {
          value: course.id,
          label: course.name
        }
      }) : []
    },
    {headerName: "Fecha de creación", field: "createdAt", width: 200, editable: true, type: "date"},
    {headerName: "Última actualización", field: "updatedAt", width: 200, editable: false, type: "date"},
  ];

}
