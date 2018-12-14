# 在国外服务器上安装shadowsocks服务

# 购买海外的云服务器（如：https://www.vultr.com/?ref=7364552）
# 选择centos6系统，因为centos7默认的防火墙可能会干扰ssr的正常连接
yum -y install wget
wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubi/doubi/master/ssr.sh
chmod +x ssr.sh
bash ssr.sh
# 安装过程配置：加密方式：aes-256-cfb，协议插件：auth_sha1_v4，设置协议插件兼容原版，混淆插件：plain
# 谷歌BBR加速
wget -N --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh
chmod +x bbr.sh
bash bbr.sh
# 安装完成后重启电脑
# 检查bbr是否已安装并启动成功
lsmod | grep bbr