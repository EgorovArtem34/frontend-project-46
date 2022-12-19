import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return (_.isString(value)) ? `'${value}'` : value;
};

const makePropertyState = (node, correctPath, path, iter) => {
  switch (node.type) {
    case 'deleted':
      return `Property '${correctPath}' was removed`;
    case 'added':
      return `Property '${correctPath}' was added with value: ${stringify(node.value1)}`;
    case 'changed':
      return `Property '${correctPath}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
    case 'unchanged':
      return [];
    case 'nested':
      return iter(node.value1, [...path, node.key]);
    default:
      throw new Error(`Unknown type: ${node}`);
  }
};

const makePlain = (tree) => {
  const iter = (nodes, path = []) => {
    const plain = nodes.flatMap((node) => {
      const correctPath = [...path, node.key].join('.');
      return makePropertyState(node, correctPath, path, iter);
    });
    return plain;
  };
  return iter(tree).join('\n');
};
export default makePlain;
