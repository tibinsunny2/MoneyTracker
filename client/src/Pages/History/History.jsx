import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useEffect } from "react";

function History() {
  const Container = styled.div`
    width: 100%;
    display: flex;
 background-image: url('https://c0.wallpaperflare.com/preview/1017/538/491/money-finance-bank-cash.jpg');
    height: 100%;
    border-radius: 5%;
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  `;
  const ButtonContainer = styled.div`
    width: max-content;
    padding: 20px;
    display: flex;
    flex-direction: row;
    text-align: end;
    align-items: center;
    justify-content: space-between ;
    align-content: end;
  `;
  const EditButton = styled.button`
    padding: 20px;
    color: white;
    border-radius: 21px;
    display: flex;

    background-color: var(--color-red);
    cursor: pointer;
    margin-top: 21px;
  `;
  const Td = styled.td`
    border: 2px solid gray;
    text-align: center;
  `;
  const Tr = styled.tr`
 text-align: center;
  `;
  const Table = styled.table`
    background-color: #ced683;
    border: 2px solid gray;
    height: 50vh;
  `;
  const Th = styled.th`
    border: 2px solid gray;
    background-color: #ced683;
  `;
  const Thead = styled.thead`
    border: 2px solid gray;
  padding-left: 20px;
    text-align: end;
    font-size: 1rem;
    background-color: #ced683;
  `;
  const TBoady = styled.tbody`
  background-color: #ced683;
  overflow-y: scroll;
  `;
  const Head = styled.h2`
  background-color: transparent;
  font-size: 4rem;
  color: white;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding: 20px;
  text-decoration: 10px dotted underline var(--color-green);
  `;
  const HeadContainer=styled.div`
    
  `
  const TableContainer = styled.div`
  max-height: 100vh;
  overflow-y:scroll ;
  `;
  const [Key,setKey]=useState('')
  const Navigate=useNavigate()
  const handlClick=(e)=>{
    setKey(Data.id)
    localStorage.setItem("DrivingKey",Key) 
    Navigate('/edit')
  }
  const [Data, setData] = useState([]);
  useEffect(() => {
    const Token = localStorage.getItem("accessToken");

 console.log(Token);
    fetch("list/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        AuThorization: `Bearer ${Token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
     console.log(Data.id);
      });
  }, []);

  return (
    <Container>
      <Wrapper>
        <HeadContainer>
          <Head>Expense history</Head>
        </HeadContainer>
        <TableContainer>
          <Table>
            <Thead>
              <Th>si no</Th>
              <Th>Date of transher</Th>
              <Th>Description</Th>
              <Th>Amount</Th>
              <Th>Category</Th>
              <Th>Edit</Th>
            </Thead>
            <TBoady>
              {Data.map((item) => {
                // setKey(item.id)
                return (
                  <Tr key={item.id}>
                    <Td>{item.id}</Td>
                    <Td>{item.date_of_transaction}</Td>
                    <Td>{item.expense_name}</Td>
                    <Td>{item.amount_spent}</Td>
                    <Td>{item.category}</Td>
                    <Td>
                      <ButtonContainer>
                        <EditButton onClick={handlClick}>Edit<EditNoteIcon style={{color:"red"}}/></EditButton>
                      </ButtonContainer>
                    </Td>
                  </Tr>
                );
              })}
            </TBoady>
          </Table>
        </TableContainer>
      </Wrapper>
    </Container>
  );
}
export default History;
