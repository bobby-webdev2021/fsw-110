for (let i = 0; i < 10; i ++) {
    const ele = document.createElement("h1");
    ele.innerHTML = "Hello world!";
    document.body.appendChild(ele).style.color ="blue";
    }

var unorderList = document.createElement("ul")
const names = ['steve', 'larry', 'joe', 'shirley', 'steph', 'nate', 'rick', 'emily']
var array = "";
    for (i =0; i < names.length; i++) {
    array += "<li>" + names[i]+ "</li>" ;} 
    document.body.appendChild(unorderList).innerHTML = (array);
       