import { JsonValue } from "type-fest";

export type Plugin = {
  createdAt: Date;
  description: string | null;
  id: string;
  pluginId: string | null;
  settings: JsonValue;
  updatedAt: Date;
};
