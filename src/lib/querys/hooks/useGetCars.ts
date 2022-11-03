import { typeState, segState, useError, carApi, queryKeys } from "@/lib";

import { ICar } from "@/lib/interfaces/interface";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";

const fetchCars = async (seg: string, type: string) => {
  try {
    const res = await carApi.getCars(seg, type);
    const cars: ICar[] = res.data.payload;
    return cars;
  } catch (error: unknown) {
    const title =
      error instanceof Error ? error.message : "error connecting to error ";
    useError(title);
  }
};

export const useGetCars = () => {
  const seg = useRecoilValue(segState);
  const type = useRecoilValue(typeState);

  const { data } = useQuery([queryKeys.cars, seg, type], () =>
    fetchCars(seg, type)
  );

  return { data };
};
