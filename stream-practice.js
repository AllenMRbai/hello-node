'use strict';
var fs=require('fs');

/*
//打开一个流
var rs=fs.createReadStream('readme.txt','utf-8');

//数据已经可以读取
rs.on('data',function(chunk){
    console.log('DATA');
    console.log(chunk);
});

//流到达末尾，没有数据可以读取了
rs.on('end',function(){
    console.log('END');
});

//表示出错了
rs.on('error',function(){
    console.log('ERROR'+err);
});
*/

/*
//写入
var ws1=fs.createWriteStream('output3.txt','utf-8');
ws1.write('使用Steam写入文本数据...\n');
ws1.write('END');
ws1.end();

var ws2=fs.createWriteStream('output4.txt','utf-8');
ws2.write(new Buffer('使用Steam写入二进制数据...\n','utf-8'));
ws2.write(new Buffer('END','utf-8'));
ws2.end();
*/

/*
//pipe练习,将readme.txt内的文本写入output5.txt
var rs=fs.createReadStream('readme.txt','utf-8');
var ws=fs.createWriteStream('output5.txt','utf-8');

rs.pipe(ws);
*/


//pipe练习，拷贝pic1.png到pic2.png
var rs=fs.createReadStream('pic1.png');
var ws=fs.createWriteStream('pic2.png');

rs.pipe(ws);
