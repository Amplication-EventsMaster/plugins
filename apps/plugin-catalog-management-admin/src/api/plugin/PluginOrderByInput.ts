import { SortOrder } from "../../util/SortOrder";

export type PluginOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  pluginId?: SortOrder;
  settings?: SortOrder;
  updatedAt?: SortOrder;
};
