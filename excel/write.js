const XLSX = require('xlsx');

const data = [
  { id: '1', name: 'test1', age: 30, country: 'China', remark: 'agree' },
  { id: '2', name: 'test2', age: 20, country: 'America', remark: 'refuse' },
  { id: '3', name: 'test3', age: 18, country: 'English', remark: 'ok' }
];

function covertJsonToSheet(data) {
  const headers = Object.keys(data[0]);

  const sheetHeaders = headers
    .map((field, i) => {
      return {
        [`${String.fromCharCode(65 + i)}1`]: {
          v: field
        }
      };
    })
    .reduce((prev, cur) => {
      return {
        ...prev,
        ...cur
      };
    }, {});

  const sheetData = data
    .map((o, i) => {
      let rowObj = {};
      Object.keys(o).forEach((k, j) => {
        rowObj[`${String.fromCharCode(65 + j)}${i + 2}`] = {
          v: o[k]
        };
      });
      return rowObj;
    })
    .reduce((prev, cur) => {
      return {
        ...prev,
        ...cur
      };
    }, {});

  const ref = {
    '!ref': `A1:${String.fromCharCode(65 + headers.length - 1)}${data.length +
      1}`
  };

  const sheet = {
    ...ref,
    ...sheetHeaders,
    ...sheetData
  };

  return sheet;
}

const worksheet = covertJsonToSheet(data);

console.log(worksheet);

const workbook = {
  SheetNames: ['mySheet'],
  Sheets: {
    mySheet: worksheet
  }
};

XLSX.writeFile(workbook, 'out.xlsx');

// 学习笔记

// 静态 String.fromCharCode() 方法返回使用指定的Unicode值序列创建的字符串
// String.fromCharCode(65,66,67) 返回'ABC'

// 将上面的 data 转换成 下面的workbook数据格式
const example = {
  SheetNames: ['mySheet'],
  Sheets: {
    mySheet: {
      '!ref': 'A0:E4',
      A1: { v: 'id' },
      B1: { v: 'name' },
      C1: { v: 'age' },
      D1: { v: 'country' },
      E1: { v: 'remark' },
      A2: { v: '1' },
      B2: { v: 'test1' },
      C2: { v: 30 },
      D2: { v: 'China' },
      E2: { v: 'agree' },
      A3: { v: '2' },
      B3: { v: 'test2' },
      C3: { v: 20 },
      D3: { v: 'America' },
      E3: { v: 'refuse' },
      A4: { v: '3' },
      B4: { v: 'test3' },
      C4: { v: 18 },
      D4: { v: 'English' },
      E4: { v: 'ok' }
    }
  }
};
