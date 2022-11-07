import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import animal from './animal' // import the file you just made
import product from './product' // import constructor for product item

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
		animal, product// add the document type to this array
  ]),
});
