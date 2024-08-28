// ./src/sanity/schemaTypes/index.ts
import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { blockContentType } from "./blockContent";
import { tagType } from "./tag";
import { postType } from "./post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, blockContentType, tagType, postType],
};
