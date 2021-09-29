let a;
let date;
let time;
func= () =>{
    a= new Date();
    time =a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    date =a.toLocaleDateString();
    document.getElementById("time").innerHTML = time+" on "+date;
};
a1= setInterval(func,1000);