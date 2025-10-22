const fs = require('fs');
const path = require('path');

function defaultIndexTemplate(filePaths) {
  const firstFilePath = filePaths[0].path;
  const componentsDir = path.dirname(firstFilePath);
  const parentDir = path.resolve(componentsDir, '..');

  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    return `export * from './components/${basename}';`;
  });

  const indexContent = exportEntries.join('\n') + '\n';

  fs.mkdirSync(parentDir, { recursive: true });
  const parentIndexPath = path.join(parentDir, 'index.ts');
  fs.writeFileSync(parentIndexPath, indexContent);

  return indexContent;
}

module.exports = defaultIndexTemplate;
