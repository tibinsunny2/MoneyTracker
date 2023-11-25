import React from "react";
import styled from "styled-components";
import NavBar from "../src/Components/NavBar/NavBar";
import Sidebar from "../src/Components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import LandingPage from "../src/Pages/LandingPage/LandingPage";
import Dashboard from "../src/Pages/Report/Reports";
import Add from "../src/Pages/Add/Add";
import History from "../src/Pages/History/History";
import Edit from "../src/Pages/Edit/Edit";
import Reports from "../src/Pages/Report/Reports";
import Home from "../src/Pages/Home/Home";
import "./App.css";
import GoogleBarChart3D from "./Components/PieChart/GoogleBarChart";
import AllSetPage from "./Pages/AuthenticationPages/AllSetpage";
import HelpPage from "./Pages/HelpPage/HelpPage";
import DpView from "./Components/DpView/DpView";

function App() {
  const Container = styled.div`
    width: 100%;
    overflow-x: hidden !important;
    overflow-y: hidden !important;
background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd7fIjog3bwQD4IHZ74Crc8W1END_gc1aUg&usqp=CAU');
background-repeat: no-repeat;
background-size: cover;
  `;
  const ContainerSub = styled.div`
    width: 100%;
    border: 1px solid lightgray;
  `;
  const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 11fr;
  `;
  const MainBoxContainer = styled.div`
    width: 100%;
    height: 86vh;
    background-color: var(--color-white);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd7fIjog3bwQD4IHZ74Crc8W1END_gc1aUg&usqp=CAU');
background-repeat: no-repeat;
background-size: cover;
  `;
  const MainBox = styled.div`
    width: 70vw;
    height: 80vh;
    border-radius: 5%;
    box-shadow: 5px 5px 5px 8px white;
    background-color: white;
    overflow-y: hidden;
  `;
  const SidebarConatiner = styled.aside`
    width: 20vw;
    height: 86vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-white);
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOd7fIjog3bwQD4IHZ74Crc8W1END_gc1aUg&usqp=CAU');
    background-repeat: no-repeat;
    background-size: cover;
  `;
  const Sidebars = styled.div`
    width: 80%;
    height: 80vh;
    background-color:#F875AA;
    
    padding-top: 10%;
    box-shadow: 5px 5px 5px white;
  `;

  const AccessToken = localStorage.getItem("accessToken");


  return (
    <Router>
      <Container className="App">
        <ContainerSub className="container">
          <NavBar style={{ position: "fixed" }} />
          <Wrapper>
            <SidebarConatiner>
              <Sidebars>
                <Sidebar />
              </Sidebars>
            </SidebarConatiner>
            <MainBoxContainer>
              <MainBox>
                <Outlet />
                {!AccessToken ? (
                  <LandingPage />
                ) : (
                  <Routes>
                    <Route path="/" element={<AllSetPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/dashbord" element={<Dashboard />} />
                    <Route path="/add" element={<Add />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/report" element={<Reports />} />
                    <Route path="/barchart" element={<GoogleBarChart3D />} />
                    <Route path="/helppage" element={<HelpPage />} />
                    <Route path="/edit" element={<Edit/>}/>
                    <Route path="/Dp" element={<DpView/>}/>
                  </Routes>
                )}
              </MainBox>
            </MainBoxContainer>
          </Wrapper>
        </ContainerSub>
      </Container>
    </Router>
  );
}

export default App;
