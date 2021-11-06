# crypto/xorpalsi
One of the 60-character strings in the provided file has been encrypted by single-character XOR. The challenge is to find it, as that is the flag.

Hint: Always operate on raw bytes, never on encoded strings. Flag must be submitted as UTF8 string.

## Steps to solve...

We created a script for going each line.

```python
import binascii

def XORBreak(h):
    en = binascii.unhexlify(h)
    for key in range(256):
        de = ''.join(chr(b ^ key) for b in en)
        if de.isprintable():
            print(de)

with open("flags.txt") as f:
    for line in f:
        XORBreak(line.strip())
```

dam{antman_EXPANDS_inside_tHaNoS_never_sinGLE_cHaR_xOr_yeet}
