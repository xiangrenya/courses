# mysql_v8.0.13 安装教程

# 启动mysql服务
systemctl start mysqld
# 关闭mysql服务
systemctl stop mysqld
# 查看mysql服务状态
systemctl status mysqld

# 登录mysql
mysql -u root -p;

# 先创建账号，再授权
create user 'sa'@'%' identified by 'Allen@123';
grant all privileges on *.* to 'sa'@'%' with grant option;
flush privileges;

# msyql_v8.0.13中密码的加密规则升级后，为了兼容低版本客户端连接，需要配置一下my.cnf
vi /etc/my.cnf
# Remove leading # to revert to previous value for default_authentication_plugin,
# this will increase compatibility with older clients. For background, see:
# https://dev.mysql.com/doc/refman/8.0/en/server-system-variables.html#sysvar_default_authentication_plugin
# default-authentication-plugin=mysql_native_password

# 如果服务器是 CentOS7，将 MySQL 服务加入防火墙，不然会报错：Can't connect to MySQL server on '10.211.55.4' (61)
firewall-cmd --zone=public --permanent --add-service=mysql
systemctl restart firewalld
# 查看防火墙的配置
firewall-cmd --list-all

# 导入官方提供的示例数据库：Employees Sample Database
git clone https://github.com/datacharmer/test_db.git
cd test_db
# 执行导入sql脚本
mysql -u root -p -t < employees.sql
# 测试数据库的数据的完整性
mysql -u root -p -t < test_employees_md5.sql
# 参考资料：https://dev.mysql.com/doc/employee/en/

# 客户端连接工具
# Navicat_For_MySQL_11.1.13 链接: https://pan.baidu.com/s/1u55DPtNBGOnnvzQ7hWSUsw 提取码: dpd5