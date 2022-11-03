import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState, useRecoilState } from "recoil";
import { Button, Divider } from "@/layouts";
import { categories, segState, typeState } from "@/lib";

const Category = () => {
  const [clicked, setClicked] = useState("");
  const setSeg = useSetRecoilState(segState);
  const [type, setType] = useRecoilState(typeState);

  const selectSizeHandler = (segment: string) => {
    setClicked(segment);
    setSeg(segment);
  };

  return (
    <Container>
      <Divider />
      <ButtonWrapper>
        <div>
          {categories.map((it) => (
            <Button
              key={it.value}
              active={it.value === clicked}
              onClick={() => selectSizeHandler(it.value)}
            >
              {it.seg}
            </Button>
          ))}
        </div>
        <select onChange={(e) => setType(e.target.value)} value={type}>
          <option value="">전체</option>
          <option value="gasoline">가솔린</option>
          <option value="hybrid">하이브리드</option>
          <option value="ev">EV</option>
        </select>
      </ButtonWrapper>

      <Divider />
    </Container>
  );
};

export default Category;

const Container = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 6px 12px;
  button {
    margin: 4px;
  }

  select {
    height: 100%;
    outline: none;
    padding: 6px 0;
    font-size: 12px;
    border-radius: 4px;
  }
`;
