const XLSX = require('xlsx');

const workbook = XLSX.readFile('./in.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

function convertSheetToJson(worksheet) {
  let chars = {};
  let data = [];
  Object.keys(worksheet)
    .filter(k => !k.includes('!'))
    .forEach(k => {
      const col = k.substring(0, 1);
      const row = Number(k.substring(1));
      const value = worksheet[k].v;
      if (row === 1) {
        chars[col] = value;
        return;
      }
      if (!data[row - 2]) {
        data[row - 2] = {};
      }
      data[row - 2][chars[col]] = value;
    });
  return data;
}

const data = convertSheetToJson(worksheet);

console.log(`worksheet: ${JSON.stringify(worksheet)}`);
console.log(`data: ${JSON.stringify(data)}`);

// 学习笔记

// 将下面的 demoWorkbook 转换成 demoData 数据
const demoWorkbook = {
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

const demoData = [
  { id: '1', name: 'test1', age: 30, country: 'China', remark: 'agree' },
  { id: '2', name: 'test2', age: 20, country: 'America', remark: 'refuse' },
  { id: '3', name: 'test3', age: 18, country: 'English', remark: 'ok' }
];
