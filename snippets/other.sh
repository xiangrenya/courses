# 启用root账号
sudo passwd

# 修改Linux系统默认启动方式

# 默认级别转换为3 (文本模式) 
systemctl set-default multi-user.target
# 默认级别转换为5 (图形模式)
systemctl set-default graphical.target
# 重启
reboot


