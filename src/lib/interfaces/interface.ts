interface Attribute {
  name?: string;
  amount?: number;
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
