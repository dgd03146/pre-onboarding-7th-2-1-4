import { Category } from "@/components";
import CarLists from "@/components/cars/CarLists";
import { useGetCars } from "@/lib";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { carState } from "@/lib/recoil/RecoilState";

import styled from "styled-components";

const Cars = () => {
  const setCars = useSetRecoilState(carState);
  const { data } = useGetCars();

  useEffect(() => {
    setCars(data);
  }, [data]);

  return (
    <Container>
      <Category />
      <CarLists />
    </Container>
  );
};

export default Cars;

const Container = styled.div``;
