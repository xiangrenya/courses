# 修改Linux系统默认启动方

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