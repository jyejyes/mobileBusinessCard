import { proxy } from "valtio";

type ColorChoiceType = {
  colorIndex: number;
};
export const colorChoice = proxy<ColorChoiceType>({
  colorIndex: 0,
});
