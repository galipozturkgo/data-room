const fs = require('fs');
const path = require('path');

const componentsIndexPath = path.resolve(
  __dirname,
  '../packages/ui/components/src/lib/icon/components/index.ts',
);

if (fs.existsSync(componentsIndexPath)) {
  fs.unlinkSync(componentsIndexPath);
}
