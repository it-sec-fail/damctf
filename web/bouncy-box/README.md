# Task: web/bouncy-box

Description: This game is extremely fun. So fun that some people have been playing it for over 3 years!

Webaddress: bouncy-box.chals.damctf.xyz

## Tasks for solving

 - started a nmap scan `nmap -sV -sC -oN nmap/initial bouncy-box.chals.damctf.xyz`
 - started gobuster `gobuster dir -u https://bouncy-box.chals.damctf.xyz/ -w ~/Documents/Tools/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt | tee gobuster.out`

Found three directories:
 - /login
 - /flag
 - /scoreboard
 - /static

Downloaded /static/game.js

It seems to be a rabithole!

You can login with SQL Injection

Username: `' or 1=1--`
Password: `' or 1=1--`

After that, you get a new page, but for the flag you have to login with a second verification.

