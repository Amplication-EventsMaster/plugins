import { PluginLinkWhereInput } from "./PluginLinkWhereInput";
import { PluginLinkOrderByInput } from "./PluginLinkOrderByInput";

export type PluginLinkFindManyArgs = {
  where?: PluginLinkWhereInput;
  orderBy?: Array<PluginLinkOrderByInput>;
  skip?: number;
  take?: number;
};
