
let add = document.getElementById("add");
let tit = document.getElementById("Title");
let desc = document.getElementById("Description");

add.addEventListener("click", ()=>{
    console.log("updating List");
    let tit = document.getElementById("Title").value;
    let desc = document.getElementById("Description").value;
    if(localStorage.getItem('itmesJson') == null)
    {

        itmesJsonArray = [];
        itmesJsonArray.push([tit,desc]);
        localStorage.setItem('itmesJson', JSON.stringify(itmesJsonArray));
    }
    else{
        itmesJsonArrayStr = localStorage.getItem('itmesJson');
        itmesJsonArray = JSON.parse(itmesJsonArrayStr);
        itmesJsonArray.push([tit,desc]);
        localStorage.setItem('itmesJson', JSON.stringify(itmesJsonArray));

    }
})