import { ClipLoader } from "react-spinners";
import styled from "styled-components";

export const Loading = () => {
  return (
    <Container>
      <ClipLoader color="gray" size={20} speedMultiplier={0.7} />
      <h2>불러오는 중</h2>
    </Container>
  );
};

const Container = styled.div`
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
