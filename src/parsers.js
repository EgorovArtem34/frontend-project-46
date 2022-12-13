import yaml from 'js-yaml';

const parser = (contentFile, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(contentFile);
    case '.yml':
      return yaml.load(contentFile);
    case '.yaml':
      return yaml.load(contentFile);
    default:
      throw new Error(`Unknown format: '${format}'`);
  }
};
export default parser;
