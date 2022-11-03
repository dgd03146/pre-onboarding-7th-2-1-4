import styled from "styled-components";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { ICar } from "@/lib/interfaces/interface";
import { Button, Divider } from "@/layouts";
import { getDayDifference, priceToString } from "@/lib";

interface CarProps {
  car: ICar;
}

const Car = ({ car }: CarProps) => {
  const navigate = useNavigate();
  const price = useMemo(() => priceToString(car.amount), []);
  const isNew = useMemo(() => getDayDifference(car.createdAt), []);
  const { attribute: at } = car;

  return (
    <>
      <Container
        onClick={() => {
          navigate(`/detail:${car.id}`, { state: car });
        }}
      >
        <CarInfo>
          <h2>{at.brand}</h2>
          <h2>{at.name}</h2>
          <p>{`${at.segment} / ${at.fuelType}`}</p>
          <p>{`월 ${price}원 부터`}</p>
        </CarInfo>
        <ImageContainer>
          <CarImage src={at.imageUrl} />
          {isNew && (
            <Button size="small" color="blue">
              신규
            </Button>
          )}
        </ImageContainer>
      </Container>
      <Divider />
    </>
  );
};

export default Car;

const Container = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;

  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
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

const ImageContainer = styled.div`
  position: relative;
  width: 152px;
`;
const CarImage = styled.img`
  width: 100%;
`;
