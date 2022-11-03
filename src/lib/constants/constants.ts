export const categories = [
  { seg: "전체", value: "" },
  { seg: "대형", value: "E" },
  { seg: "중형", value: "D" },
  { seg: "소형", value: "C" },
  { seg: "SUV", value: "SUV" }
];

export const priceToString = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const getDay = (day: string) => {
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(day);

  return `${date.getMonth()}월 ${date.getDay()}일 (${days[date.getDate()]})`;
};

export const getDayDifference = (day: Date) => {
  const now = new Date();

  const todayDate = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate()
  );

  const createdDay = new Date(day);
  const createdDate = new Date(
    createdDay.getFullYear(),
    createdDay.getMonth() + 1,
    createdDay.getDate()
  );

  const def =
    (todayDate.getTime() - createdDate.getTime()) / (1000 * 60 * 60 * 24);

  return def < 1 ? true : false;
};
