import _ from 'lodash';
import { readFileSync } from 'fs';
import * as path from 'path';

const getValueFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  const contentPath = readFileSync(absolutePath, 'utf8');
  return JSON.parse(contentPath);
}
const getKeys = (obj) => _.keys(obj);

const genDiff = (filepath1, filepath2) => {
  const object1 = getValueFile(filepath1);
  const object2 = getValueFile(filepath2);
  const object1Keys = getKeys(object1);
  const object2Keys = getKeys(object2);
  const commonKeys = _.sortBy(_.union(object1Keys, object2Keys));
  const result = commonKeys.reduce((acc, key) => {
    if (!_.includes(object1Keys, key)) {
      acc[`+ ${key}`] = object2[key];
    } else if (!_.includes(object2Keys, key)) {
      acc[`- ${key}`] = object1[key];
    } else if (object1[key] !== object2[key]) {
      acc[`- ${key}`] = object1[key];
      acc[`+ ${key}`] = object2[key];
    } else if (object1[key] === object2[key]) {
      const indent = '  ';
      acc[`${indent}${key}`] = object1[key];
    }
    return acc;
  }, {});
  const entries = Object.entries(result);
  const entriesToString = `{\n ${entries.map((entry) => entry.join(': ')).join('\n ')}\n}`;
  return entriesToString;
};

export default genDiff;
