import { atom } from "recoil";
import { recoilKeys } from "./keys/Keys";
import { ICar } from "../interfaces/interface";

export const carState = atom<ICar[] | undefined>({
  key: recoilKeys.cars,
  default: []
});

export const segState = atom<string>({
  key: recoilKeys.seg,
  default: ""
});

export const typeState = atom<string>({
  key: recoilKeys.type,
  default: ""
});
