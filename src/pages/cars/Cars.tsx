import { Category } from "@/components";
import CarLists from "@/components/cars/CarLists";
import { useGetCars, MetaTag, carState } from "@/lib";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import styled from "styled-components";

const Cars = () => {
  const setCars = useSetRecoilState(carState);
  const { data } = useGetCars();

  useEffect(() => {
    setCars(data);
  }, [data]);

  return (
    <>
      <MetaTag
        title={"BC2"}
        description={"차량 대여 서비스"}
        imgsrc={
          "https://grepp-programmers.s3.amazonaws.com/production/company/logo/7347/%EC%95%8C%ED%8B%B0%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EB%A1%9C%EA%B3%A0-%ED%9D%91%EB%B0%B1.jpg"
        }
      />
      <Container>
        <Category />
        <CarLists />
      </Container>
    </>
  );
};

export default Cars;

const Container = styled.div``;
