# 《SSH远程登录服务器》
# 在本地创建公私密钥
ssh-keygen -t rsa
cat ~/.ssh/id_rsa.pub
# 启用密码和ssh公钥登录
vi /etc/ssh/sshd_config
# 通过配置以下属性，允许SSH登录
# RSAAuthentication yes
# PubkeyAuthentication yes
# AuthorizedKeysFile .ssh/authorized_keys
# 把本地的公钥粘贴到authorized_keys中
vi ~/.ssh/authorized_keys
# 重启SSH服服务
# centos 6
service sshd restart
# centos 7
systemctl restart sshd
# ssh登录远程主机
ssh root@66.42.52.110
ssh -i ~/.ssh/id_rsa root@66.42.52.110

# 《修改Linux系统默认启动方式》
# 首先删除已经存在的符号链接
rm /etc/systemd/system/default.target 
# 默认级别转换为3 (文本模式) 
ln -sf /lib/systemd/system/multi-user.target /etc/systemd/system/default.target 
# 默认级别转换为5 (图形模式)
ln -sf /lib/systemd/system/graphical.target /etc/systemd/system/default.target 
# 重启
reboot

# 《其他》

# 启用root账号
sudo passwd