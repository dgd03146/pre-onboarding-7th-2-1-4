import { useError } from "@/lib/hooks/useError";
import { carApi } from "./../../api/api";
import { queryKeys } from "../keys/keys";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ICar } from "@/lib/interfaces/interface";

const fetchCars = async () => {
  try {
    const res = await carApi.getCars();
    const cars: ICar[] = res.data.payload;
    return cars;
  } catch (error: unknown) {
    console.log(error);
  }
};

export const useGetCars = () => {
  const [seg, setSeg] = useState("A");
  const { data: cars } = useQuery([queryKeys.cars, seg], () => fetchCars());
  return { seg, setSeg, cars };
};
