import styled from "styled-components";
import React from "react";
import NavController from "../context/nav-controller";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Page = ({children}:{children:React.ReactNode}) =>{
    return (
      <NavController>
          <Container>
              {children}
          </Container>
      </NavController>
    )


}

export default Page