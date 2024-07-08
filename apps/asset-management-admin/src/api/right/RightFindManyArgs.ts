import { RightWhereInput } from "./RightWhereInput";
import { RightOrderByInput } from "./RightOrderByInput";

export type RightFindManyArgs = {
  where?: RightWhereInput;
  orderBy?: Array<RightOrderByInput>;
  skip?: number;
  take?: number;
};
