import styled from "styled-components";
import { ICar } from "@/lib/interfaces/interface";

interface CarProps {
  car: ICar;
}

const Car = ({ car }: CarProps) => {
  return <Container>{car.id}</Container>;
};

export default Car;

const Container = styled.li`
  padding: 20px;
`;
