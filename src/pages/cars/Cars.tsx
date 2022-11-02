import { Category } from "@/components";
import CarLists from "@/components/cars/CarLists";
import styled from "styled-components";

const Cars = () => {
  return (
    <Container>
      <Category />
      <CarLists />
    </Container>
  );
};

export default Cars;

const Container = styled.div``;
