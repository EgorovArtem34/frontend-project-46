import _ from 'lodash';

const getKeys = (obj) => _.keys(obj);

const genTree = (object1, object2) => {
  const object1Keys = getKeys(object1);
  const object2Keys = getKeys(object2);
  const commonKeys = _.sortBy(_.union(object1Keys, object2Keys));
  const result = commonKeys.map((key) => {
    if (!_.includes(object1Keys, key)) {
      return {
        key,
        type: 'added',
        value1: object2[key],
      };
    }

    if (!_.includes(object2Keys, key)) {
      return {
        key,
        type: 'deleted',
        value1: object1[key],
      };
    }

    if (_.isPlainObject(object1[key]) && _.isPlainObject(object2[key])) {
      return {
        key,
        type: 'nested',
        value1: genTree(object1[key], object2[key]),
      };
    }

    if (object1[key] !== object2[key]) {
      return {
        key,
        value1: object1[key],
        value2: object2[key],
        type: 'changed',
      };
    }

    return {
      key,
      value1: object1[key],
      type: 'unchanged',
    };
  });
  return result;
};
export default genTree;
