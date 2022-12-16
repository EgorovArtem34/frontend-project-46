import makeStylish from './stylish.js';
import makePlain from './plain.js';
import makeJson from './json.js';

const makeFormatTree = (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    case 'json':
      return makeJson(tree);
    default:
      throw new Error(`Unknown format: '${format}'`);
  }
};
export default makeFormatTree;
