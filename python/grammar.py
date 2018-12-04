#! /usr/bin/env python3
from sys import argv, path
import sys

# 导入模块
for i in sys.argv:
    print('arg:', i)
print('path:', path)

# 注释
# 单行注释
'''
多行注释
'''

# 多行语句
item_one = 'a'
item_two = 'b'
item_three = 'c'
word = item_one + \
    item_two + \
    item_three
print('multiLine:', word)

# 多个变量赋值
v1, v2, v3 = 1, 2.3, 'hello'

# 基本数据类型
# 数字(Number)类型
i = 1
b = True
f = 3E-2
c = 1 + 2j
# 判断数字类型
print('type:', type(i))
isinstance(i, int)
# 数值运算
print('5/2:', 5 / 2)
print('5//2:', 5 // 2)
print('5%2:', 5 % 2)
print('5**2:', 5 ** 2)

# 字符串String
s = 'hello'
print('spliceStr:', s[0:-1] + ' world')
print('rawstr:', r'Ru\noob')

# 列表(List)
ls1 = ['a', 'b', 'c', 'd']
ls2 = ['e', 'f']
print('spliceList:', ls1[0:-1] + ls2)
ls1[1:3] = []
print('updateList:', ls1)

# 元组(Tuple) 用法如List，只是成员不能修改
tu = ('a', 'b', 'c', 'd')
tu1 = (1, )

# 集合(Set) 用于成员关系的测试和删除重复元素
chars = {'a', 'b', 'c', 'd', 'a'}
print('chars:', chars)
set1 = set('abcdef')
set2 = set('defghi')
print('set1:', set1)
print('set2:', set2)
print('set1-set2:', set1 - set2)
print('set1|set2:', set1 | set2)
print('set1&set2:', set1 & set2)
print('set1^set2:', set1 ^ set2)

# 字典(Dictionary) 字典是无序的对象集合
dic = {'a': 1, 'b': True, 'c': [1, 2, 3]}
dic['d'] = 'hello'
print('dict:', dic)
print('dict keys:', dic.keys())
print('dict values:', dic.values())

# 运算符
# 算术运算符 | 比较运算符 | 赋值运算符 | 位运算符 | 逻辑运算符 | 成员运算符 | 身份运算符
# 运算符优先级


# 条件控制
num = 8
if num > 0:
    ret = 1
elif num == 0:
    ret = 0
else:
    ret = -1
print('ret:', ret)

# 循环语句
max = 5
counter = 1
while counter <= max:
    counter += 1
else:
    print('counter:', counter)
for x in [1,2,3,4]:
    print('each:', x)
for x in range(0, 10, 3):
    print('range:', x)
