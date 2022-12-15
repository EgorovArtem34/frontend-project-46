import stylish from './stylish.js';

const makeFormatTree = (tree, format) => {
  if (format === 'stylish') {
    return stylish(tree);
  }
  return `Unknown format: '${format}'`;
};
export default makeFormatTree;
