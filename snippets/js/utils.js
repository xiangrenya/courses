/**
 * 延时等待，可用于 async await 模拟异步等待
 * @param {Number} ms 毫秒
 * @returns {Promise}
 */
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 首字母大写
function capitalize(str) {
  return str.replace(/./, m => m[0].toUpperCase());
}

// 转义 html
function encodeHtml(text) {
  return text
    .replace(/&/g, '&amp')
    .replace(/\"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// 解析地址栏中的查询字符串
function parseQuery() {
  const ret = {};
  const arr = window.location.search.replace(/^\?/, '').split('&');
  const temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp = arr[i].split('=');
    ret[temp[0]] = temp[1];
  }
  return ret;
}

/**
 * 数值千分位：100000 -> 100,000.22
 * @param {Number | String} val 数值
 * @returns {String} 含千分位的数值
 */
function toThousands(val) {
  const str = parseFloat(val).toFixed(2);
  const re = /(\d{1,3})(?=(\d{3})+(?:\.))/g;
  const ret = str.replace(re, '$1,');
  return ret;
}

// 数组去重
function uniq(array) {
  if (!Array.isArray(array)) return [];
  return array.filter((item, index) => array.indexOf(item) == index);
}

// 验证邮箱
function checkEmail(email) {
  const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return reg.test(email);
}
// 验证手机号
function checkPhone(phone) {
  const reg = /^1\d{10}$/;
  return reg.test(phone);
}

/**
 * 解析浏览器 cookie 字符串
 * @returns {Object} 键值对的对象
 */
function parseCookie() {
  const str = document.cookie.replace(/;\s+/gim, '","').replace(/=/gim, '":"');
  return JSON.parse(str);
}

/**
 * 数值固定长度，不够时左侧填充0
 * @param {Number | String} str 数值
 * @param {Number} length 数值固定长度
 * @return {String} 固定长度的字符串
 */
function padZeros(str, length) {
  if (typeof str != 'string') {
    str = String(str);
  }
  const zeros = new Array(len - 1).fill(0).join('');
  return (zeros + str).substr(-length);
}

/**
 * 规范化编号：格式如：NO201806080001
 * @param {String} prefix 前缀
 * @param {Number} number 数值
 * @returns {String} 规范化的编号
 */
function getCode(prefix, number) {
  let date = new Date();
  let year = date.getFullYear();
  let month = padZeros(date.getMonth() + 1, 1);
  let day = padZeros(date.getDate(), 1);
  return prefix + year + month + day + padZeros(number, 4);
}

/**
 * 计算距离现在还有多长时间：年、月、天、时、分、秒
 * @param {Number} timestamp 时间戳
 * @returns {Object}
 */
function countdown(timestamp) {
  const elapse = (timestamp - Date.now()) / 1000;
  const seconds = elapse % 60;
  const minutes = Math.floor(elapse / 60) % 60;
  const hours = Math.floor(elapse / (60 * 60)) % 24;
  const days = Math.floor(elapse / (60 * 60 * 24)) % 30;
  const months = Math.floor(elapse / (60 * 60 * 24 * 30)) % 12;
  const years = Math.floor(elapse / (60 * 60 * 24 * 30 * 12));
  return { years, months, days, hours, minutes, seconds };
}

// 去除数组嵌套
function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}

/**
 * 判断变量类型：number、string、boolean、object、function 等等
 * @param {String} val 变量值
 * @returns {String} 变量类型
 */
function type(val) {
  const reg = /^\[object\s(\w+)\]$/;
  return reg.exec(Object.prototype.toString.call(val))[1].toLowerCase();
}

/**
 * 格式化时间：yyyy-MM-dd hh:mm:ss
 * @param {Date} date 日期
 * @param {String} format 格式化占位符
 * @returns {String} 格式化后的时间字符串
 */
function formatDate(date, format) {
  const o = {
    'y+': date.getFullYear(),
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      String(o['y+']).substr(-RegExp.$1.length)
    );
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(format)) {
      format = format.replace(RegExp.$1, `0${o[k]}`.substr(-RegExp.$1.length));
    }
  }
  return format;
}

// 函数节流
function throttle(fn, delay, mustRunDelay) {
  let timer = null;
  let t_start = new Date();
  return function() {
    const context = this;
    const args = arguments;
    let t_curr = new Date();
    clearTimeout(timer);
    if (t_curr - t_start >= mustRunDelay) {
      fn.apply(context, args);
      t_start = t_curr;
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args);
      }, delay);
    }
  };
}
