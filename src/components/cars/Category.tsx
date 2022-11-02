import { Button, Divider } from "@/layouts";
import { categories } from "@/lib/constants/constants";
import { segState } from "@/lib/recoil/RecoilState";
import { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

const Category = () => {
  const [clicked, setClicked] = useState("A");
  const setSeg = useSetRecoilState(segState);

  const selectSizeHandler = (segment: string) => {
    setClicked(segment);
    setSeg(segment);
  };

  return (
    <Container>
      <Divider />
      <ButtonWrapper>
        {categories.map((it) => (
          <Button
            key={it.value}
            active={it.value === clicked}
            onClick={() => selectSizeHandler(it.value)}
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
