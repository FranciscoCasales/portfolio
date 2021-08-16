const fs = require('fs');

const getFileName = () => {
  try {
    const fileNamesJson = JSON.parse(
      fs.readFileSync(`${__dirname}/public/file-names.json`)
    );
    const manifestFileName = `manifest.${new Date().getDate()}${new Date().getMonth()}${new Date().getFullYear()}.json`;
    const manifest = JSON.parse(
      fs.readFileSync(`${__dirname}/public/${manifestFileName}`)
    );
    const maskIcon = manifest.icons.find(
      (icon) => icon.sizes === '512x512' && icon.purpose === 'maskable'
    );
    fileNamesJson.manifestFileName = manifestFileName;
    fileNamesJson.maskIcon = maskIcon ? `.${maskIcon.src}` : '';
    return fileNamesJson;
  } catch (e) {
    console.error(e);
    return {};
  }
};

export default getFileName;
