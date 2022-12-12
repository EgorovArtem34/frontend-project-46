import path from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';
import { expect, test } from '@jest/globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf8');

const expected = readFile('resultCompareFlat.txt', 'utf8');
const object1 = getFixturePath('file1.json');
const object2 = getFixturePath('file2.json');

test('compare flat JSON files', () => {
  const actual = genDiff(object1, object2);
  expect(actual).toEqual(expected);
});
