module.exports = function(content) {
  // FIXME: 雑
  content = content.replace(/\\/g, '\\');
  content = content.replace(/\//g, '\/');
  content = content.replace(/"/g, '\"');
  return "module.exports = " + JSON.stringify(content);
}
