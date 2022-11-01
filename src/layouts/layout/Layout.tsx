import styled from "styled-components";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "../header/Header";

const Layout = () => {
  const { car_number: page } = useParams();

  return (
    <Container>
      <Header page={!!page} />
      <Outlet />
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  margin: 0 auto;
  border: 1px solid #ececec;
  max-width: 450px;
  min-width: 360px;
`;
