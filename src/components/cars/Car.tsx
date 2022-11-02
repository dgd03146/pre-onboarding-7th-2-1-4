import styled from "styled-components";
import { ICar } from "@/lib/interfaces/interface";
import { useMemo } from "react";

interface CarProps {
  car: ICar;
}

function priceToString(price: number) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Car = ({ car }: CarProps) => {
  const price = useMemo(() => priceToString(car.amount), []);
  const { attribute: at } = car;

  return (
    <Container>
      <CarInfo>
        <h2>{at.brand}</h2>
        <h2>{at.name}</h2>
        <p>{`${at.segment} / ${at.fuelType}`}</p>
        <p>{`월 ${price}원 부터`}</p>
      </CarInfo>
      <CarImage src={at.imageUrl} />
    </Container>
  );
};

export default Car;

const Container = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

const CarInfo = styled.div`
  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
  }
`;

const CarImage = styled.img`
  width: 152px;
  right: 20px;
`;
