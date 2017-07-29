'use strict';

const crypto=require('crypto');
const hash=crypto.createHash('md5');

/*
//可任意多次调用update():
hash.update('Hello,world!');
hash.update('Hello,nodejs!');
console.log('这是利用hash加密的hash值：'hash.digest());
*/

//crypto模块提供了AES支持，但是需要自己封装好函数，便于使用：
function aesEncrypt(data,key){
    const cipher=crypto.createCipher('aes192',key);
    var crypted=cipher.update(data,'utf8','hex');
    crypted+=cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrypted,key){
    const decipher=crypto.createDecipher('aes192',key);
    var decrypted=decipher.update(encrypted,'hex','utf8');
    decrypted+=decipher.final('utf-8');
    return decrypted;
}

var data='Hello,this is a secret message!';
var key='Password!';
var encrypted=aesEncrypt(data,key);
var decrypted=aesDecrypt(encrypted,key);

console.log('Plain text:'+data);
console.log('Encrypted text:'+encrypted);
console.log('Decrypted text:'+decrypted);