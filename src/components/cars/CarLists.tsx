import styled from "styled-components";
import Car from "./Car";
import { ICar } from "@/lib/interfaces/interface";
import { useRecoilValue } from "recoil";
import { carState } from "@/lib/recoil/RecoilState";
import NoCar from "./NoCar";

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
