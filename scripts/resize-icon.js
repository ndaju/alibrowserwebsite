const sharp = require('sharp');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'logo.png');
const dist32 = path.join(root, 'public', 'favicon.png');
const dist192 = path.join(root, 'public', 'icon-192.png');

Promise.all([
  sharp(src).resize(32, 32, { fit: 'cover', position: 'center' }).toFile(dist32),
  sharp(src).resize(192, 192, { fit: 'cover', position: 'center' }).toFile(dist192),
]).then(([r32, r192]) => {
  console.log(`favicon.png: ${r32.width}x${r32.height} (${r32.size} bytes)`);
  console.log(`icon-192.png: ${r192.width}x${r192.height} (${r192.size} bytes)`);
}).catch(err => {
  console.error('Conversion failed:', err.message);
  process.exit(1);
});
