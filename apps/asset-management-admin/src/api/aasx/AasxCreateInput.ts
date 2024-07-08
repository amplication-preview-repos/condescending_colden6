import { InputJsonValue } from "../../types";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type AasxCreateInput = {
  content?: InputJsonValue;
  asset?: AssetWhereUniqueInput | null;
};
