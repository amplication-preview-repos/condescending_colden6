import { InputJsonValue } from "../../types";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type AasxUpdateInput = {
  content?: InputJsonValue;
  asset?: AssetWhereUniqueInput | null;
};
