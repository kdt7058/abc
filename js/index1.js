function update() {
    if (localStorage.getItem('itmesJson') == null) {
        itmesJsonArray = [];                                                //Array declare
        localStorage.setItem('itmesJson', JSON.stringify(itmesJsonArray));
    }
    else {
        itmesJsonArrayStr = localStorage.getItem('itmesJson');
        itmesJsonArray = JSON.parse(itmesJsonArrayStr);
    }
    let tableBody = document.getElementById("tableBody");
    let str = "";
    //populate
    itmesJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn-sm btn btn-primary " onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
}

function addAndUpdate() {
    console.log("updating List");
    let tit = document.getElementById("Title").value;
    let desc = document.getElementById("Description").value;
    if (localStorage.getItem('itmesJson') == null) {
        itmesJsonArray = [];                                                //Array declare
        itmesJsonArray.push([tit, desc]);                                    //push array in 0th position
        localStorage.setItem('itmesJson', JSON.stringify(itmesJsonArray));  //In localStorage='itmesJson' set and JSON.stringify()=
        // converts a JavaScript object or value to a JSON string, 
    }
    else {
        itmesJsonArrayStr = localStorage.getItem('itmesJson');
        itmesJsonArray = JSON.parse(itmesJsonArrayStr);                     //JSON.parse() = to convert text into a JavaScript object: 
        itmesJsonArray.push([tit, desc]);
        localStorage.setItem('itmesJson', JSON.stringify(itmesJsonArray));
    }
    update();
}

function deleted(itemIndex) {
    console.log("Delete", itemIndex);
    itmesJsonArrayStr = localStorage.getItem('itmesJson');
    itmesJsonArray = JSON.parse(itmesJsonArrayStr);
    //delete itemIndex from array
    itmesJsonArray.splice(itemIndex, 1);
    // update array
    localStorage.setItem('itmesJson', JSON.stringify(itmesJsonArray));
    update();
}

function clearStorage() {
    if (confirm("Do you really want to confirm? ")) {
        localStorage.clear();
        update();
    }
}

let add = document.getElementById("add");
add.addEventListener("click", addAndUpdate);
update();

