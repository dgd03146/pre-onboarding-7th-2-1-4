import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  margin: 0 auto;

  max-width: 450px;
  min-width: 360px;
`;
