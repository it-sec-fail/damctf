# Task: web/bouncy-box

Description: This game is extremely fun. So fun that some people have been playing it for over 3 years!

Webaddress: bouncy-box.chals.damctf.xyz

## Tasks for solving

 - started a nmap scan `nmap -sV -sC -oN nmap/initial bouncy-box.chals.damctf.xyz`
 - started gobuster `gobuster dir -u https://bouncy-box.chals.damctf.xyz/ -w ~/Documents/Tools/SecLists/Discovery/Web-Content/directory-list-2.3-medium.txt | tee gobuster.out`

Found two directories:
 - /login
 - /flag

 