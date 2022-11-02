import styled from "styled-components";
import Car from "./Car";
import { ICar } from "@/lib/interfaces/interface";
import { useRecoilValue } from "recoil";
import { carState } from "@/lib/recoil/RecoilState";

const CarLists = () => {
  const cars = useRecoilValue(carState);

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
