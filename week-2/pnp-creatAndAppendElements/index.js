var h=document.createElement("h1");
var t=document.createTextNode("Welcome to my JS site.");
h.appendChild(t);
document.body.appendChild(h);

var p=document.createElement("p");
var t=document.createTextNode("All of this was created with Javascript.");
p.appendChild(t);
document.body.appendChild(p);

var newol=document.createElement("ol");
var newli=document.createElement("li");
newol.appendChild(newli);
newli.textContent="javascript";
document.append("li");



