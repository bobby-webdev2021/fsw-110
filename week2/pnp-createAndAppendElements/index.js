var h=document.createElement("h1");
var t=document.createTextNode("Welcome to my JS site.");
h.appendChild(t);
document.body.appendChild(h);

var p=document.createElement("p");
var t=document.createTextNode("All of this was created with Javascript.");
p.appendChild(t);
document.body.appendChild(p);

var a = document.createElement("ol");
var b = document.createElement("li");
var c = document.createElement("li");
var d = document.createElement("li");
document.body.append(a);
a.appendChild(b);
a.appendChild(c);
a.appendChild(d);
var e = document.createTextNode("apple");
var f = document.createTextNode("orange");
var g = document.createTextNode("lemon");
b.appendChild(e);
c.appendChild(f);
d.appendChild(g);