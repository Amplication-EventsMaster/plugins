import { PluginIconWhereInput } from "./PluginIconWhereInput";
import { PluginIconOrderByInput } from "./PluginIconOrderByInput";

export type PluginIconFindManyArgs = {
  where?: PluginIconWhereInput;
  orderBy?: Array<PluginIconOrderByInput>;
  skip?: number;
  take?: number;
};
