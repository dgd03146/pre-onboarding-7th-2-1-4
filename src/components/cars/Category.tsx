import { Button, Divider } from "@/layouts";
import { categories } from "@/lib/constants/Sizes";
import { useState } from "react";
import styled from "styled-components";

const Category = () => {
  const [clicked, setClicked] = useState("전체");
  return (
    <Container>
      <Divider />
      <ButtonWrapper>
        {categories.map((it) => (
          <Button
            key={it.value}
            active={it.seg === clicked}
            onClick={() => {
              setClicked(it.seg);
            }}
          >
            {it.seg}
          </Button>
        ))}
      </ButtonWrapper>
      <Divider />
    </Container>
  );
};

export default Category;

const Container = styled.div``;
const ButtonWrapper = styled.div`
  padding: 6px 12px;
  button {
    margin-right: 8px;
  }
`;
