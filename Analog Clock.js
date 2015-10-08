function sec(){
d=new Date();
h=30*d.getHours();
m=6*d.getMinutes();
s=6*d.getSeconds();
var x='rotate(' + s + ',75,75)';
var y='rotate(' + m + ',75,75)';
var z='rotate(' + h + ',75,75)';
document.getElementById("second").setAttribute("transform",x);
document.getElementById("minute").setAttribute("transform",y);
document.getElementById("hour").setAttribute("transform",z);
}

function load(){
setInterval(sec,1000);
}

window.onload=load;