// Simple Function
function ShowMsg(name) {
    console.log('Hi' + ' ' + name);
}
ShowMsg('Kumud');



// JavaScript CallBack Synchronous
function ShowMsg(name,callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function DemoCallBack() {
    console.log("I am callback function");
}
ShowMsg('Kumud',DemoCallBack);



//CallBack using SetTimeOut
console.log("Welcome")
setTimeout(() => {
    console.log('Hello callback setTimeout function')
}, 3000)
console.log("Byeee")



// JavaSript Callback Asynchronous
function dosomethingAsync(then) {
    setTimeout(then, 1000);
    console.log('call first asynchronously');
}
dosomethingAsync(function () {
    console.log('Done');
});
console.log('call second');