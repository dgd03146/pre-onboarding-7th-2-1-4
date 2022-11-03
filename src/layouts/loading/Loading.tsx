import { Category } from "@/components";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";
import { Header } from "../header/Header";

export const Loading = () => {
  return (
    <Container>
      <Header />
      <Category />
      <LoadingContainer>
        <h2>불러오는 중</h2>
        <ClipLoader color="gray" size={20} speedMultiplier={0.7} />
      </LoadingContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  border: 1px solid #ececec;

  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: 100vh;

  max-width: 450px;
  min-width: 360px;
`;

const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;
