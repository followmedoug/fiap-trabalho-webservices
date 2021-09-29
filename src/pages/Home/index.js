import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { FaRegEdit, FaRegTrashAlt, FaPlus } from "react-icons/fa";
import Modal from "react-modal";
import { Form } from "@unform/web";
import ContainerMain from "../../components/ContainerMain";
import Wrapper from "../../components/Wrapper";
import ContainerCard from "../../components/ContainerCard";
import WrapperFlex from "../../components/WrapperFlex";
import { Creators as UserActions } from "../../store/ducks/user";
import Input from "./Input";

const TableHeader = styled(WrapperFlex)`
  background: #d6d6b1;
  border: inherit;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding: 15px 30px;
  justify-content: space-between;
`;

const TableItem = styled.p`
  flex: 1;
  justify-content: flex-start;

  p {
    width: inherit;
  }

  ${({ flex }) =>
    flex
      ? css`
      flex: ${flex}
  `
      : ""}
`;

const TableLine = styled(WrapperFlex)`
  background: #fff;
  justify-content: space-between;
  padding: 15px 30px;
  transition: all 0.3s ease;
  width: calc(100% - 60px);

  :hover {
    background: rgba(214, 214, 177, 0.6);
  }
`;

const Button = styled.button`
    border: none;
    border-radius: 20px;
    background-color: #de541e;
    color: #fff;
    padding: 5px 15px;
    transition: all 0.3s ease;

    :hover {
      background: #af4217;
    }
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(64, 59, 56, 0.7)",
    backdropFilter: "blur(3px)",
    zIndex: 2,
  },
  content: {
    background: "#e7e7e7",
    borderRadius: "15px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "500px",
    width: "100%",
  },
};

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UserActions.getAppointmentsRequest());
  }, []);

  return (
    <ContainerMain>
      <Wrapper>
        <WrapperFlex
          style={{ justifyContent: "flex-end", padding: "15px 30px" }}
        >
          <Button>
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
          <TableLine>
            <TableItem flex={0.2}>1</TableItem>
            <TableItem flex={1}>2021-09-24T23:06:11.892Z</TableItem>
            <TableItem flex={1}>2021-09-24T23:06:11.892Z</TableItem>
            <TableItem flex={1}>2021-09-24T23:06:11.892Z</TableItem>
            <TableItem flex={0.3}>
              <div style={{ cursor: "pointer" }}>
                <FaRegEdit />
              </div>
            </TableItem>
            <TableItem flex={0.3}>
              <div style={{ cursor: "pointer" }}>
                <FaRegTrashAlt />
              </div>
            </TableItem>
          </TableLine>
        </ContainerCard>
      </Wrapper>

      <Modal isOpen style={customStyles}>
        <Form onSubmit={console.log("teste")}>
          <Input name="teste" />
        </Form>
      </Modal>
    </ContainerMain>
  );
}