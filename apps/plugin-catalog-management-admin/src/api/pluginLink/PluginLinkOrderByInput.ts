import { SortOrder } from "../../util/SortOrder";

export type PluginLinkOrderByInput = {
  createdAt?: SortOrder;
  githubLink?: SortOrder;
  id?: SortOrder;
  npmLink?: SortOrder;
  updatedAt?: SortOrder;
};
