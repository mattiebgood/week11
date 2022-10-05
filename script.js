//alert("connected");


let myinput = document.getElementById("name1");
// myinput.value = "Will";


function sayHello(){
    //console.log("hi");
    //get the name from the input box
    let inputname = myinput.value;
    console.log("name is " + inputname);
    const msg = 'Hello ${inputname}!';
    console.log("message is " + msg);
}
