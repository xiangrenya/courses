/**
 * 目标：
 * 通过bigpipe技术，实现分块加载数据
 */
const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

const fetch = res => (selector, temp) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      res.write(`<script>BigPipe.view('${selector}', '${temp}');</script>`);
      resolve();
    }, 1000 * Math.random() * 3);
  });

const modulesMap = {
  'a': 'A',
  'b': 'B',
  'c': 'C'
};

app.get('/', (req, res, next) => {
  const layoutHtml = fs.readFileSync(__dirname + '/layout.html').toString();
  res.write(layoutHtml);
  const promises = [];
  const fetchPromise = fetch(res);
  for (let [key, val] of Object.entries(modulesMap)) {
    promises.push(fetchPromise(`#${key}`, val));
  }
  Promise.all(promises).then(datas => {
    res.end();
  });
});

app.get('/users', (req, res, next) => {
  res.send([
    {
      name: 'a',
      gender: 1,
      age: 12
    },
    {
      name: 'b',
      gender: 0,
      age: 18
    }
  ]);
});

app.listen(port, () => {
  console.log('server started at : ', port);
});
