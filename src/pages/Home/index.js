import "./customStyles.css"
import "react-datepicker/dist/react-datepicker.css"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import styled from "styled-components"
import { FaPlus } from "react-icons/fa"
import { MdArrowDownward } from "react-icons/md"
import { format, subDays } from "date-fns"
import { Collapse } from "react-collapse"

import ContainerMain from "../../components/ContainerMain"
import Wrapper from "../../components/Wrapper"
import WrapperFlex from "../../components/WrapperFlex"
import { Creators as UserActions } from "../../store/ducks/user"

const Button = styled.button`
  border: none;
  border-radius: 20px;
  background-color: #e91c5d;

  color: #fff;
  cursor: pointer;
  padding: 5px 15px;
  transition: all 0.3s ease;

  :hover {
    background: #b10f44;
  }
`

const WrapperCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Card = styled.div`
  display: flex;
  background-color: white;
  width: 320px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  border-radius: 20px;
`

const WrapperButton = styled.div`
  padding: 10px;
  width: 100%;
  justify-content: flex-end;
  display: flex;
`

const ItemHeader = styled.div`
  padding: 10px;
`

const ContentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  border-radius: 15px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  width: 90%;
`

export default function Home() {
  const dispatch = useDispatch()
  const history = useHistory()

  const { data } = useSelector((state) => state.user)

  const [collapse, setCollapse] = useState(false)

  useEffect(() => {
    const initialDate = format(subDays(new Date(), 30), "yyyy-MM-dd")
    const finalDate = format(new Date(), "yyyy-MM-dd")

    dispatch(UserActions.getAppointmentsRequest(initialDate, finalDate))
  }, [])

  console.log("data: ", data)
  return (
    <ContainerMain>
      <Wrapper>
        <WrapperFlex style={{ justifyContent: "center", padding: "15px 30px" }}>
          <Button onClick={() => history.push("/register")}>
            <FaPlus /> Nova Entrada
          </Button>
        </WrapperFlex>

        <WrapperCard>
          {data.map((d) => (
            <Card key={d.id}>
              <WrapperButton>
                <Button onClick={() => history.push("/register")}>
                  <FaPlus /> Adicionar Batida
                </Button>
              </WrapperButton>
              <ItemHeader>Data: {d.data}</ItemHeader>
              <ItemHeader>Horas trabalhadas: {d.horasTrabalhadas}</ItemHeader>
              <ItemHeader>
                Quantidade de Marcações: {d.quantidadeMarcacoes}
              </ItemHeader>
              <div style={{ cursor: "pointer" }}>
                <MdArrowDownward onClick={() => setCollapse(!collapse)} />
              </div>
              <Collapse isOpened={collapse}>
                <ContentWrapper>
                  {d.itens.map((item) => (
                    <Content>
                      <ItemHeader>
                        Marcação: {format(new Date(item.marcacao), "dd-MM-yyy")}
                      </ItemHeader>
                      <ItemHeader>
                        Observação: {item.observacao || "Sem observações"}
                      </ItemHeader>
                    </Content>
                  ))}
                </ContentWrapper>
              </Collapse>
            </Card>
          ))}
        </WrapperCard>
      </Wrapper>
    </ContainerMain>
  )
}
