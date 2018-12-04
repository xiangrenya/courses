#! /usr/bin/env python3
import requests
r = requests.get('https://www.douban.com/')
print(r.status_code)