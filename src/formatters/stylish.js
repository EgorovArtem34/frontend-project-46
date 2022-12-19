import _ from 'lodash';

const makeIndention = (depth, spaceCount = 4) => ' '.repeat(depth * spaceCount - 2);

const stringify = (data, depth) => {
  if (!_.isObject(data)) {
    return data;
  }
  const entries = Object.entries(data);
  const lines = entries.map(([key, value]) => `${makeIndention(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`);
  return ['{', ...lines, `  ${makeIndention(depth)}}`].join('\n');
};

const makeStringStylish = (node, depth, iter) => {
  switch (node.type) {
    case 'added':
      return `${makeIndention(depth)}+ ${node.key}: ${stringify(node.value1, depth)}`;
    case 'deleted':
      return `${makeIndention(depth)}- ${node.key}: ${stringify(node.value1, depth)}`;
    case 'unchanged':
      return `${makeIndention(depth)}  ${node.key}: ${stringify(node.value1, depth)}`;
    case 'changed':
      return [
        `${makeIndention(depth)}- ${node.key}: ${stringify(node.value1, depth)}`,
        `${makeIndention(depth)}+ ${node.key}: ${stringify(node.value2, depth)}`,
      ].join('\n');
    case 'nested':
      return `${makeIndention(depth)}  ${node.key}: {\n${iter(node.value1, depth + 1)}\n  ${makeIndention(depth)}}`;
    default:
      throw new Error(`Unknown type: '${node.type}'`);
  }
};

const makeStylish = (tree) => {
  const iter = (nodes, depth = 1) => {
    const nodesMap = nodes.map((node) => makeStringStylish(node, depth, iter));
    return nodesMap.join('\n');
  };
  return `{\n${iter(tree)}\n}`;
};
export default makeStylish;
