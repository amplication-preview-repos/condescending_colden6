import { JsonValue } from "type-fest";
import { Asset } from "../asset/Asset";

export type Aasx = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: JsonValue;
  asset?: Asset | null;
};
