import styled from "styled-components";

interface HeaderProps {
  type?: "" | "big" | "mideum" | "small";
}

export const Header = ({ type }: HeaderProps) => {
  return <Container>{type}</Container>;
};

const Container = styled.header`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
`;
