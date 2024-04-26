
module.exports = function handleAlias(alias) {
  return {
    map: Object.entries(alias || {}),
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  }
};