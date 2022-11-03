import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Divider } from "@/layouts";
import { Info, Title } from "@/layouts/layout/Layout";
import { useMemo } from "react";
import { getDay, priceToString, MetaTag } from "@/lib";

export const CarDetail = () => {
  const { state } = useLocation();
  const { additionalProducts, attribute, insurance } = state;
  const amount = useMemo(() => priceToString(state.amount), []);
  const day = useMemo(() => getDay(state.startDate), []);

  return (
    <>
      <MetaTag
        title={attribute.brand + attribute.name}
        description={`월 ${amount} 원`}
        imgsrc={attribute.imageUrl}
      />
      <Container>
        <Divider />
        <img src={attribute.imageUrl} />
        <Brand>
          <p className="brand">{attribute.brand}</p>
          <p className="name">{attribute.name}</p>
        </Brand>
        <MonthPay>
          <p>월 {amount}</p>
        </MonthPay>
        <Title title="차량정보" />
        <Info subTitle="차종" description={attribute.segment} />
        <Info subTitle="연료" description={attribute.fuelType} />
        <Info subTitle="이용 가능일" description={`${day} 부터`} />
        <Title title="보험" />
        {insurance.map((it: { name: string; description: string }) => (
          <Info key={it.name} subTitle={it.name} description={it.description} />
        ))}
        <Title title="추가상품" />
        {additionalProducts.map((it: { name: string; amount: string }) => (
          <Info
            key={it.name}
            subTitle={it.name}
            description={`${useMemo(
              () => priceToString(Number(it.amount)),
              []
            )}원`}
          />
        ))}
      </Container>
    </>
  );
};

const Container = styled.div`
  img {
    width: 100%;
  }
  padding-bottom: 20px;
`;

const Brand = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  .brand {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
  .name {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
`;

const MonthPay = styled.div`
  padding: 20px;
  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    /* identical to box height */

    text-align: right;
  }
`;
