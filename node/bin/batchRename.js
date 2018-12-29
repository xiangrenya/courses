const fs = require('fs');

const dir = '/Users/gaiaworks/Downloads/3.0 图标第三波';

fs.readdir(dir, (err, files) => {
    files
        .filter(item => item.includes('svg'))
        .forEach(name => {
            const oldPath = `${dir}/${name}`;
            const newPath = `${dir}/${name
                .toLocaleLowerCase()
                .replace(/\s/g, '-')}`;
            fs.rename(oldPath, newPath, err => {
                console.log(err);
            });
        });
});
