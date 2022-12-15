import makeStylish from './stylish.js';
import makePlain from './plain.js';

const makeFormatTree = (tree, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(tree);
    case 'plain':
      return makePlain(tree);
    default:
      throw new Error(`Unknown format: '${format}'`);
  }
};
export default makeFormatTree;
