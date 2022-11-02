enum FuelType {
  gasoline = "가솔린",
  ev = "전기",
  hybrid = "하이브리드"
}
enum Segment {
  C = "소형",
  D = "중형",
  E = "대형",
  SUV = "SUV"
}

interface Attribute {
  brand: string;
  name: string;
  segment: Segment;
  fuelType: FuelType;
  imageUrl: string;
}

interface Insurance {
  name: string;
  description: string;
}

interface AdditionalProducts {
  name: string;
  amount: number;
}

export interface ICar {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: Date;
  createdAt: Date;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}
