import styled from "styled-components";
import Car from "./Car";
import NoCar from "./NoCar";
import { ICar } from "@/lib/interfaces/interface";
import { carState } from "@/lib";
import { useRecoilValue } from "recoil";

const CarLists = () => {
  const cars = useRecoilValue(carState);

  return (
    <Container>
      {cars?.length === 0 && <NoCar />}
      {cars?.map((car: ICar) => (
        <Car key={car.id} car={car} />
      ))}
    </Container>
  );
};

export default CarLists;

const Container = styled.ul``;
