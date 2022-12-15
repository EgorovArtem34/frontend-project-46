import { readFileSync } from 'fs';
import * as path from 'path';
import parser from './parsers.js';
import genTree from './genTree.js';
import makeFormatTree from './formatters/index.js';

const getFileFormat = (filepath) => path.extname(filepath);
const getContentFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  return readFileSync(absolutePath, 'utf8');
};

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const object1 = parser(getContentFile(filepath1), getFileFormat(filepath1));
  const object2 = parser(getContentFile(filepath2), getFileFormat(filepath2));
  const tree = genTree(object1, object2);
  const formattedTree = makeFormatTree(tree, format);
  return formattedTree;
};

export default genDiff;
