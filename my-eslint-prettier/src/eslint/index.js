const createBrowserLint = require('./browser');
const createNodeLint = require('./node');

module.exports = function createESLint(options = {}) {
  const { projectType } = options;
  
  if (projectType === 'browser') {
    return createBrowserLint(options);
  } else if (projectType === 'node') {
    return createNodeLint(options);
  }

  console.log('No matched projectType: ' + projectType);

  return [];
};