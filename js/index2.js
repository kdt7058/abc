var a = document.getElementById("firstId");
a.addEventListener("click", clickf);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log();

// function clickf() {
//     var r = getRandomInt(255);
      
//     var g = getRandomInt(255);
      
//     var b = getRandomInt(255);
    
//     document.body.style.background = "rgb("+r+","+g+","+b+")";
// }

const hex = [1,2,3,4,5,6,"A","B","C","D"];

function getRandomStr(max){
  
  return Math.floor(Math.random()*max);
}
function clickf(){
  let hexColor = "#"
  console.log(getRandomStr(6));
  document.body.style.background = "Red";
}