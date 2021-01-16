function print(callback) {
    callback();
}

/*
const message = function (){
    console.log("This message will display after 3 sec");
}
setTimeout(message, 3000)
*/


setTimeout(()=>{console.log("This message will display after 3 sec")},3000)