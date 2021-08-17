const fs = require('fs');

const findManifest = (dirname) => {
  if (!fs.existsSync(dirname)) {
    console.error('Directory not found', dirname);
    return;
  }
  const files = fs.readdirSync(dirname);
  for (const file of files) {
    const regexResult = file.match(/manifest\.\w+\.json/i);
    if (regexResult && regexResult[0]) {
      return [
        JSON.parse(fs.readFileSync(`${__dirname}/public/${regexResult[0]}`)),
        regexResult[0],
      ];
    }
  }
};

const getFileName = () => {
  try {
    const fileNamesJson = JSON.parse(
      fs.readFileSync(`${__dirname}/public/file-names.json`)
    );
    const manifest = findManifest(`${__dirname}/public/`);
    const maskIcon = manifest[0].icons.find(
      (icon) => icon.sizes === '512x512' && icon.purpose === 'maskable'
    );
    fileNamesJson.manifestFileName = manifest[1];
    fileNamesJson.maskIcon = maskIcon ? `.${maskIcon.src}` : '';
    return fileNamesJson;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default getFileName;
