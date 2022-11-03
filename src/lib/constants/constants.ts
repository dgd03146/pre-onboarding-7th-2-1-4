export const categories = [
  { seg: "전체", value: "A" },
  { seg: "대형", value: "E" },
  { seg: "중형", value: "D" },
  { seg: "소형", value: "C" }
];

export const priceToString = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getDay = (day: string) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(day);

  return `${date.getMonth()}월 ${date.getDay()}일 (${days[date.getDate()]})`;
};
