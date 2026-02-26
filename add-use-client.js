const fs = require('fs');
const path = require('path');
const dir = 'src/components/animations';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));
files.forEach(f => {
  const p = path.join(dir, f);
  let content = fs.readFileSync(p, 'utf8');
  if(!content.includes('"use client"')) {
    fs.writeFileSync(p, '"use client";\n' + content);
    console.log("Updated", f);
  }
});
