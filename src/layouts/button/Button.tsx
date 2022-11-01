import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: "gray" | "blue";
  size?: "medium" | "small";
}

export const Button = ({ children, onClick, color, size }: ButtonProps) => {
  return (
    <Container onClick={onClick} color={color} size={size}>
      {children}
    </Container>
  );
};

const Container = styled.button<{
  size: string | undefined;
}>`
  padding: 5px 18px;
  gap: 10px;
  width: 62px;
  height: 27px;
  left: 20px;
  top: 20px;
  border-radius: 62px;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  background-color: ${(props) => props.theme.color.gray};
  color: ${(props) => props.theme.color.black};

  ${(props) =>
    props.color === "blue" &&
    css`
      background-color: ${props.theme.color.blue};
      color: ${props.theme.color.white};
    `}

  &:hover {
    ${(props) =>
      props.color === "gray" &&
      css`
        background-color: ${props.theme.color.black};
        color: ${props.theme.color.white};
      `}
  }
`;

Button.defaultProps = {
  color: "gray",
  size: "medium"
};
