
import React from 'react'
import styled from "styled-components";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import NavController from "./context/nav-controller";
import Page from "./components/Page";


export default function App() {
  return (
     <Page>
            <Sidebar  />
            <Main />
     </Page>
  );
}
