import { useError } from "@/lib/hooks/useError";
import { carApi } from "./../../api/api";
import { queryKeys } from "../keys/Keys";
import { useQuery } from "@tanstack/react-query";
import { ICar } from "@/lib/interfaces/interface";
import { useRecoilValue } from "recoil";
import { segState } from "@/lib/recoil/RecoilState";

const fetchCars = async (seg: string) => {
  try {
    if (seg === "A") {
      const res = await carApi.getAllCars();
      const cars: ICar[] = res.data.payload;
      return cars;
    } else {
      const res = await carApi.getCars(seg);
      const cars: ICar[] = res.data.payload;
      return cars;
    }
  } catch (error: unknown) {
    const title =
      error instanceof Error ? error.message : "error connecting to error ";
    useError(title);
  }
};

export const useGetCars = () => {
  const seg = useRecoilValue(segState);

  const { data } = useQuery([queryKeys.cars, seg], () => fetchCars(seg));

  return { data };
};
