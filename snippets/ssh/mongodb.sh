# mongodb_v4.0.4 安装教程

# 开启远程ip访问权限，帮bindIp地址改成0.0.0.0
vi /etc/mongod.conf
# network interfaces
# net:
  # port: 27017
  # bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.

# 开放端口27017
firewall-cmd --zone=public --add-port=27017/tcp
# 查看防火墙的配置
firewall-cmd --list-all

# centos7 bug: "SELinux is preventing /usr/bin/mongod from read access on the file netstat."
cat /var/log/messages # 这个文件越来越大，要注意
# fix bug
ausearch -c 'ftdc' --raw | audit2allow -M my-ftdc
semodule -i my-ftdc.pp