import styled from "styled-components";
import Car from "./Car";
import { useGetCars } from "@/lib";
import { ICar } from "@/lib/interfaces/interface";

const CarLists = () => {
  const { cars } = useGetCars();

  return (
    <Container>
      {cars?.map((car: ICar) => (
        <Car key={car.id} car={car} />
      ))}
    </Container>
  );
};

export default CarLists;

const Container = styled.ul``;
