#! /usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const shell = require('shelljs');
const version = require('../package.json').version;

program.version(version, '-v, --version');

program
  .command('init')
  .description('初始化 React 前端项目')
  .action(() => {
    inquirer
      .prompt([
        {
          type: 'input',
          message: '请输入项目名称',
          name: 'name'
        },

        {
          type: 'input',
          message: '请输入项目git地址',
          name: 'remote'
        }
      ])
      .then(answers => {
        console.log(`项目名为：${answers.name}`);
        console.log(`正在拷贝项目，请稍等`);
        const remote = answers.remote;
        const curName = /\w+\/([\w-]+).git/.exec(remote)[1];
        const tarName = answers.name;
        shell.exec(
          `
        git clone ${remote}
        mv ${curName} ${tarName}
        cd ${tarName}
        rm -rf .git
        npm i
        npm start
      `,
          (err, stdout, stderr) => {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
            console.log(stdout);
            console.log(stderr);
          }
        );
      });
  });

program
  .command('*')
  .description('please input command')
  .action(rest => {
    console.log('invalid command:', rest);
  });

program.parse(process.argv);
