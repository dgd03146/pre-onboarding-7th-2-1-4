import styled from "styled-components";

const NoCar = () => {
  return (
    <Container>
      <h2>차량이 없습니다.</h2>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  height: 100vh;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

export default NoCar;
