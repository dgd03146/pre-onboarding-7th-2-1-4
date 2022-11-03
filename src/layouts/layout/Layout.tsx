import styled from "styled-components";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "../header/Header";

interface TitleProps {
  title: string;
}
interface InfoProps {
  subTitle: string;
  description: string;
}

const Layout = () => {
  const { car_number: page } = useParams();

  return (
    <Container>
      <Header page={!!page} />
      <Outlet />
    </Container>
  );
};

export const Title = ({ title }: TitleProps) => {
  return <TitleWrapper>{title}</TitleWrapper>;
};

export const Info = ({ subTitle, description }: InfoProps) => {
  return (
    <InfoWrapper>
      <p className="name">{subTitle}</p>
      <p>{description}</p>
    </InfoWrapper>
  );
};

const Container = styled.div`
  margin: 0 auto;
  border: 1px solid #ececec;

  height: 100%;
  min-height: 100vh;

  max-width: 450px;
  min-width: 360px;
`;

const TitleWrapper = styled.div`
  background-color: ${(props) => props.theme.color.blue};
  color: ${(props) => props.theme.color.white};
  padding: 13px 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px;

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
  }
`;

export default Layout;
