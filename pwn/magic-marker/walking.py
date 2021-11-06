#!/usr/bin/python3

from pwn import *

io = remote('chals.damctf.xyz','31313')

print(io.recvline().strip().decode('utf-8'))
print(io.recvline().strip().decode('utf-8'))
print(io.recvline().strip().decode('utf-8'))
print(io.recvline().strip().decode('utf-8'))
print(io.recvline().strip().decode('utf-8'))

io.sendline(str('jump up and down'))
print(io.recvuntil("This room has exits to the").strip().decode('utf-8'))
direction = []
direction = io.recvline().strip().decode('utf-8')
direction.append(io.recvline().strip().decode('utf-8'))
direction.append(io.recvline().strip().decode('utf-8'))
direction.append(io.recvline().strip().decode('utf-8'))

print (direction)

if "Nord" in direction:
    io.sendline(str('w'))
elif "South" in direction:
    io.sendline(str('s'))
elif "West" in direction:
    io.sendline(str('a'))
elif "East" in direction:
    io.sendline(str('d'))

