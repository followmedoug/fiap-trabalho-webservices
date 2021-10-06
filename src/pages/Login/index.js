import "react-datepicker/dist/react-datepicker.css"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { Form } from "@unform/web"
import ContainerMain from "../../components/ContainerMain"
import WrapperFlex from "../../components/WrapperFlex"

const FormWrapper = styled(ContainerMain)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin-top: 20px;
`

const FormTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-weight: 900;
  text-transform: uppercase;
  font-size: 25px;
`

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #de541e;
  color: #fff;
  cursor: pointer;
  padding: 5px 15px;
  transition: all 0.3s ease;
  padding: 10px 30px;

  :hover {
    background: #af4217;
  }
`

const Input = styled.input`
  border: none;
  border-radius: 15px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
`

export default function Login() {
  const history = useHistory()

  return (
    <FormWrapper>
      <FormTitle>Acesse sua conta</FormTitle>
      <StyledForm onSubmit={console.log("validando...")}>
        <Input name="email" placeholder="digite o seu email" />
        <Input name="password" type="password" placeholder="digite sua senha" />
        <a onClick={() => history.push("/register-user")}>
          Não tem uma conta? Se cadastre aqui!
        </a>
        <WrapperFlex
          style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}
        >
          <Button style={{ width: "100%" }} onClick={() => history.push("/")}>
            Entrar
          </Button>
        </WrapperFlex>
      </StyledForm>
    </FormWrapper>
  )
}
