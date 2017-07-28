'use strict';
var fs=require('fs');

//异步读取：读取文本文件，加字符集utf-8，返回的data为字符串
/*fs.readFile('readme.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});*/

//异步读取：读取二进制文件，返回的data为Buffer对象
/*fs.readFile('pic1.png',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);//读取二进制文件时，不传入编码，回调的data返回的是一个Buffer对象
        //let text=data.toString('utf-8');//不知道为什么加了这两行代码会出bug，并且电脑会一直嘀嘀嘀的叫
        //console.log(text);
        console.log(data.length+'bytes');
    }
});*/

//同步读取：
/*try{
    var data=fs.readFileSync('readme.txt','utf-8');
    console.log(data);
}catch(err){
    console.log("这个同步读取抛出了异常！")
}*/


//异步写入：写入字符串
/*var writeData='Hello,Node.js!';
fs.writeFile('output.txt',writeData,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok');
    }
});*/

//同步写入：写入字符串
/*try{
    var writeData2='talk is cheap,show me the code';
    fs.writeFileSync('output2.txt',writeData2);
    //throw new Error('不好意思，我故意在这里抛了个异常');
}catch(err){
    console.log("这个同步写入抛出了异常")
    //console.log(err);
}*/

//stat：获取文件大小，创建时间等信息
fs.stat('readme.txt',function(err,stat){
    if(err){
        console.log(err);
    }else{
        //是否是文件
        console.log('isFile:'+stat.isFile());
        //是否是目录
        console.log('isDirectory:'+stat.isDirectory());
        if(stat.isFile()){
            //文件大小
            console.log('size:'+stat.size);
            //创建时间，Date对象
            console.log('birth time:'+stat.birthtime);
            //修改时间，Date对象
            console.log('modified time:'+stat.mtime);
        }
    }
})