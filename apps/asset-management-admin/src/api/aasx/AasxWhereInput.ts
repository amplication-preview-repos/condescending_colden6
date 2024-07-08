import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AssetWhereUniqueInput } from "../asset/AssetWhereUniqueInput";

export type AasxWhereInput = {
  id?: StringFilter;
  content?: JsonFilter;
  asset?: AssetWhereUniqueInput;
};
