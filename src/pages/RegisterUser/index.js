import "react-datepicker/dist/react-datepicker.css"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Form } from "@unform/web"

import ContainerMain from "../../components/ContainerMain"
import WrapperFlex from "../../components/WrapperFlex"

import { Creators as UserActions } from "../../store/ducks/user"

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

export default function RegisterUser() {
  const dispatch = useDispatch()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = () => {
    dispatch(UserActions.createUserRequest(name, email, password))
  }

  return (
    <FormWrapper>
      <FormTitle>Crie sua conta</FormTitle>
      <StyledForm onSubmit={() => console.log("")}>
        <Input
          name="nome"
          placeholder="digite o seu nome"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          name="email"
          placeholder="digite o seu email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          name="password"
          type="password"
          placeholder="digite sua senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <WrapperFlex
          style={{ width: "100%", justifyContent: "center", marginTop: "20px" }}
        >
          <Button style={{ width: "100%" }} onClick={() => handleSubmit()}>
            Salvar
          </Button>
        </WrapperFlex>
      </StyledForm>
    </FormWrapper>
  )
}
