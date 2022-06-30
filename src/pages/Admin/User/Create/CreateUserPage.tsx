import React from "react"
import {GoToBack} from "../../../../components/GoTo";
import {Container} from "@mui/material";
import {Field} from "../../../../components";
import AutocompleteField from "../../../../components/AutocompleteField/AutocompleteField";
import {CustomButton} from "../../../../components/Button/Button";
import {CheckOutlined, Clear} from "@mui/icons-material";

interface CreateUserPageProps {
}

function getMaterias() {
  return [{materia_id:"2","materia_padre_id":null,"nombre":"Dise&ntilde;o Industrial","anio":"2021","es_cursada_anterior":"0"}, {"materia_id":"4","materia_padre_id":null,"nombre":"An&aacute;lisis de Producto","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"5","materia_padre_id":null,"nombre":"Ergonom&iacute;a","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"6","materia_padre_id":null,"nombre":"F&iacute;sica 1","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"7","materia_padre_id":null,"nombre":"F&iacute;sica 2","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"8","materia_padre_id":null,"nombre":"Matem&aacute;tica","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"9","materia_padre_id":null,"nombre":"Historia del dise&ntilde;o industrial","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"10","materia_padre_id":null,"nombre":"Industria Argentina","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"11","materia_padre_id":null,"nombre":"Introducci&oacute;n al dise&ntilde;o y arquitectura moderna","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"12","materia_padre_id":null,"nombre":"Legislaci&oacute;n y practica profesional","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"13","materia_padre_id":null,"nombre":"Materia optativa 1","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"14","materia_padre_id":null,"nombre":"Materia optativa 2","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"15","materia_padre_id":null,"nombre":"Metodolog&iacute;a","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"16","materia_padre_id":null,"nombre":"Morfolog&iacute;a","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"17","materia_padre_id":null,"nombre":"Morfolog&iacute;a Especial 1","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"18","materia_padre_id":null,"nombre":"Morfolog&iacute;a Especial 2","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"19","materia_padre_id":null,"nombre":"Sociologia aplicada al dise&ntilde;o","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"20","materia_padre_id":null,"nombre":"Tecnolog&iacute;a 1","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"21","materia_padre_id":null,"nombre":"Tecnolog&iacute;a 2","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"22","materia_padre_id":null,"nombre":"Tecnolog&iacute;a 3","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"23","materia_padre_id":null,"nombre":"Tecnolog&iacute;a 4","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"24","materia_padre_id":null,"nombre":"Dise&ntilde;o Industrial 1","anio":"2021","es_cursada_anterior":"1"}, {"materia_id":"25","materia_padre_id":null,"nombre":"Dise&ntilde;o Industrial 2","anio":"2021","es_cursada_anterior":"1"}, {"materia_id":"26","materia_padre_id":null,"nombre":"Dise&ntilde;o Industrial 3","anio":"2021","es_cursada_anterior":"1"}, {"materia_id":"27","materia_padre_id":null,"nombre":"Dise&ntilde;o Industrial 4","anio":"2021","es_cursada_anterior":"1"}, {"materia_id":"28","materia_padre_id":null,"nombre":"Dise&ntilde;o Industrial 5","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"29","materia_padre_id":"2","nombre":"Dise&ntilde;o 1","anio":"2021","es_cursada_anterior":"0"}, {"materia_id":"30","materia_padre_id":"2","nombre":"Dise&ntilde;o 2","anio":"2021","es_cursada_anterior":"0"}, {"materia_id":"31","materia_padre_id":"2","nombre":"Dise&ntilde;o 3","anio":"2021","es_cursada_anterior":"0"}, {"materia_id":"32","materia_padre_id":"2","nombre":"Dise&ntilde;o 4","anio":"2021","es_cursada_anterior":"0"}, {"materia_id":"33","materia_padre_id":"2","nombre":"Dise&ntilde;o 5","anio":"2021","es_cursada_anterior":"0"}, {"materia_id":"3","materia_padre_id":null,"nombre":"Ninguna","anio":null,"es_cursada_anterior":"1"}, {"materia_id":"34","materia_padre_id":null,"nombre":"Tecno","anio":null,"es_cursada_anterior":"0"}];
}

function getRoles() {
  return [{nombre: "JTP"}];
}

export const CreateUserPage = (props: CreateUserPageProps) => {
  return (
    <>
      <GoToBack text={"Volver"}></GoToBack>
      <Container>
        <Field label={"Nombre"} placeholder={"Ingresá el nombre"}/>
        <Field label={"Apellido"} placeholder={"Ingresá el apellido"}/>
        <Field label={"Email"} placeholder={"Ingresá el email"}/>
        <Field label={"DNI"} placeholder={"Ingresá el DNI"}/>
        <AutocompleteField data={getRoles()} label={"Roles"} placeholder={"Ingresá los roles"}/>
        <AutocompleteField data={getMaterias()} label={"Materias"} placeholder={"Ingresá las materias"}/>
        <>
          <CustomButton color={'info'} title={'Limpiar datos'} endIcon={<Clear/>} href={"/admin/users/create"}>Limpiar datos</CustomButton>
          <CustomButton color={'primary'} title={'Crear'} endIcon={<CheckOutlined color={"primary"}/>} href={"/admin/users/create"}>Crear</CustomButton>
        </>
      </Container>
    </>
  );
}