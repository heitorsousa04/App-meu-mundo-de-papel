import fs from 'fs';
import https from 'https';

https.get('https://i.imgur.com/16V6w7x.png', (res) => {
  const writeStream = fs.createWriteStream('public/icon.png');
  res.pipe(writeStream);
  writeStream.on('finish', () => {
    writeStream.close();
    console.log('Downloaded icon.png');
  });
}).on('error', (err) => {
  console.error(err);
});
