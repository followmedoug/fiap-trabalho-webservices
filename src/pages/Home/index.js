import "./customStyles.css"
import "react-datepicker/dist/react-datepicker.css"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled, { css } from "styled-components"
import { FaRegEdit, FaRegTrashAlt, FaPlus } from "react-icons/fa"
import { format, subDays } from "date-fns"

import ContainerMain from "../../components/ContainerMain"
import Wrapper from "../../components/Wrapper"
import ContainerCard from "../../components/ContainerCard"
import WrapperFlex from "../../components/WrapperFlex"
import { Creators as UserActions } from "../../store/ducks/user"

const TableHeader = styled(WrapperFlex)`
  background: #d6d6b1;
  border: inherit;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding: 15px 30px;
  justify-content: space-between;
`

const TableItem = styled.div`
  flex: 1;
  justify-content: flex-start;

  p {
    width: inherit;
  }

  ${({ flex }) =>
    flex
      ? css`
          flex: ${flex};
        `
      : ""}
`

const TableLine = styled(WrapperFlex)`
  background: #fff;
  justify-content: space-between;
  padding: 15px 30px;
  transition: all 0.3s ease;
  width: calc(100% - 60px);

  :hover {
    background: rgba(214, 214, 177, 0.6);
  }
`

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #de541e;
  color: #fff;
  cursor: pointer;
  padding: 5px 15px;
  transition: all 0.3s ease;

  :hover {
    background: #af4217;
  }
`

export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { data } = useSelector((state) => state.user)

  useEffect(() => {
    const initialDate = format(subDays(new Date(), 30), "yyyy-MM-dd")
    const finalDate = format(new Date(), "yyyy-MM-dd")

    dispatch(UserActions.getAppointmentsRequest(initialDate, finalDate))
  }, [])

  console.log(data)

  return (
    <ContainerMain>
      <Wrapper>
        <WrapperFlex
          style={{ justifyContent: "flex-end", padding: "15px 30px" }}
        >
          <Button onClick={() => history.push("/register")}>
            <FaPlus /> Nova Entrada
          </Button>
        </WrapperFlex>
        <ContainerCard>
          <TableHeader>
            <TableItem flex={0.2}>id</TableItem>
            <TableItem flex={1}>Batida</TableItem>
            <TableItem flex={1}>Criado em:</TableItem>
            <TableItem flex={1}>Editado em:</TableItem>
            <TableItem flex={0.3}></TableItem>
            <TableItem flex={0.3}></TableItem>
          </TableHeader>
          {data.length
            ? data.map((d) => (
                <TableLine>
                  <TableItem flex={0.2}>{d.id}</TableItem>
                  <TableItem flex={1}>2021-09-24T23:06:11.892Z</TableItem>
                  <TableItem flex={1}>2021-09-24T23:06:11.892Z</TableItem>
                  <TableItem flex={1}>2021-09-24T23:06:11.892Z</TableItem>
                  <TableItem flex={0.3}>
                    <div style={{ cursor: "pointer" }}>
                      <FaRegEdit onClick={() => history.push("/edit/1")} />
                    </div>
                  </TableItem>
                  <TableItem flex={0.3}>
                    <div style={{ cursor: "pointer" }}>
                      <FaRegTrashAlt />
                    </div>
                  </TableItem>
                </TableLine>
              ))
            : ""}
        </ContainerCard>
      </Wrapper>
    </ContainerMain>
  )
}
