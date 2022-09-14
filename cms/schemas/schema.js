// https://www.sanity.io/guides/sanity-nextjs-tailwindcss
import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import screenshot from "./screenshot";

import project from "./project";
import resume from "./resume";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    project,
    screenshot,
    resume,
    category,
    blockContent,
  ]),
});
