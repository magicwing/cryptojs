# cryptojs

JavaScript library of crypto standards.

## Node.js (Install)

Requirements:

- Node.js
- npm (Node.js package manager)

```bash
npm install github:magicwing/cryptojs
```

### Usage

Modular include:

```es6
import CryptoJS from 'cryptojs';
import md5 from 'cryptojs/md5';

```

## API

参照: https://code.google.com/p/cryptojs

### MD5 Encryption

```es6
import md5 from 'cryptojs/md5';
const hash = md5('message');
// print: 78e731027d8fd50ed642340b7c9a63b3

```


### Base64 Encryption

```es6
import enc_utf8 from 'cryptojs/enc-utf8';
import enc_base64 from 'cryptojs/enc-base64';
import CryptoJS from 'cryptojs';

// Encrypt
const utf8Str = enc_utf8.parse('你好');
const base64Str = utf8Str.toString(CryptoJS.enc.base64);
// print: 5L2g5aW9

// Decrypt
const _utf8WordArray = enc_base64.parse('5L2g5aW9');
const _str = enc_utf8.stringify(_utf8WordArray);
// print: 你好

```

### 模块列表


- ```cryptojs/core```
- ```cryptojs/x64-core```
- ```cryptojs/lib-typedarrays```

---

- ```cryptojs/md5```
- ```cryptojs/sha1```
- ```cryptojs/sha256```
- ```cryptojs/sha224```
- ```cryptojs/sha512```
- ```cryptojs/sha384```
- ```cryptojs/sha3```
- ```cryptojs/ripemd160```

---

- ```cryptojs/hmac-md5```
- ```cryptojs/hmac-sha1```
- ```cryptojs/hmac-sha256```
- ```cryptojs/hmac-sha224```
- ```cryptojs/hmac-sha512```
- ```cryptojs/hmac-sha384```
- ```cryptojs/hmac-sha3```
- ```cryptojs/hmac-ripemd160```

---

- ```cryptojs/pbkdf2```

---

- ```cryptojs/aes```
- ```cryptojs/tripledes```
- ```cryptojs/rc4```
- ```cryptojs/rabbit```
- ```cryptojs/rabbit-legacy```
- ```cryptojs/evpkdf```

---

- ```cryptojs/format-openssl```
- ```cryptojs/format-hex```

---

- ```cryptojs/enc-latin1```
- ```cryptojs/enc-utf8```
- ```cryptojs/enc-hex```
- ```cryptojs/enc-utf16```
- ```cryptojs/enc-base64```

---

- ```cryptojs/mode-cfb```
- ```cryptojs/mode-ctr```
- ```cryptojs/mode-ctr-gladman```
- ```cryptojs/mode-ofb```
- ```cryptojs/mode-ecb```

---

- ```cryptojs/pad-pkcs7```
- ```cryptojs/pad-ansix923```
- ```cryptojs/pad-iso10126```
- ```cryptojs/pad-iso97971```
- ```cryptojs/pad-zeropadding```
- ```cryptojs/pad-nopadding```
