var a = document.createElement('a');
var b = document.createElement("a");
var c =document.createTextNode("home")
var d = document.createTextNode(" about");
a.appendChild(c);
b.appendChild(d);
a.href = "index.html";
b.href = "index2.html"
document.body.appendChild(a);
document.body.appendChild(b);

var h1 = document.createElement("h1");
var text = document.createTextNode("I Figured It Out!");
h1.appendChild(text);
document.body.appendChild(h1);

var p = document.createElement("p");
var text = document.createTextNode("Learning to code has been a great adventure so far. I have meet alot of new people who want to help me succeed.");
p.appendChild(text);
document.body.appendChild(p)

var a = document.createElement("ul");
var b = document.createElement("li");
var c = document.createElement("li");
var d = document.createElement("li");
document.body.append(a);
a.appendChild(b);
a.appendChild(c);
a.appendChild(d);
var e = document.createTextNode("HTML");
var f = document.createTextNode("CSS");
var g = document.createTextNode("Javascript");
b.appendChild(e);
c.appendChild(f);
d.appendChild(g);

var foot = document.createElement("footer");
var text = document.createTextNode("Thank You To Everyone Who Has Helped Me Along The Way. ");
foot.appendChild(text);
document.body.append(foot);