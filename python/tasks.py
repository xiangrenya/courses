# 字符串按单子反转，如；'a b c' 转换成'c b a'
def reverse_char(str):
    arr = str.split(' ')
    arr.reverse()
    return (' ').join(arr)


print(reverse_char('a b c'))

# 打印100000以内的所有素数

# 自己实现一个函数支持可变参数


def my_args(a, b, *args, **kvs):
    print(args)  # Tupe
    print(kvs)  # Dict


my_args(1, 2, *(3, 4), **{'china': 'BJ', 'uk': 'LD'})

# 用递归实现1+2+3+...+100求和
# 思路：用子问题的解，得出当前问题的解


def my_sum(n):
    if n < 0:
        raise ValueError
    elif n <= 1:
        return n
    else:
        return n + my_sum(n-1)


print('sum:', my_sum(100))

# 斐波那序列 # f(n) = f(n-1) + f(n-2)


# 冒泡排序

# 实现函数解决hanoi塔问题

# 实现一个sort函数 ，通过参数指定排序函数用来实现按不同顺序进行排序
def my_sort()
