let chessBoardTemp = document.querySelector(".chess");
let checkbox = document.querySelectorAll(".checkbox");
let startingScreen = document.querySelector(".startingscreen");
const allSquares = document.getElementsByClassName("chess");
flag = true;
let j = 0;
const filesNameArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
// function color(){
for (let i = 0; i < 64; i++) {
    if (i % 8 == 0) {
        flag = !flag;
        j++;
    }
    if (!flag && i % 2 != 0 || flag && i % 2 == 0) {
        checkbox[i].style.setProperty("background-color", "black");
    }
    checkbox[i].setAttribute("id", filesNameArray[i%8]+j)
}

// color();
// const rotateBtn = document.querySelector(".rotateBtn");
// rotateBtn.addEventListener('click', () => {
//     let arr = [];
//     for (let i = 0; i < 64; i++) {
//         arr.push(checkbox[i])
//         checkbox[i].remove();
//     }
//     arr.reverse();
//     for (let i = 0; i < 64; i++) {
//         chessBoardTemp.append(arr[i]);
//     }
//     removeScreenAndAddBoard();
// })
// const whiteBox =   document.querySelector(".whiteBtn");
// whiteBox.addEventListener("click",removeScreenAndAddBoard);
// let chessBoard = chessBoardTemp;
// chessBoardTemp.remove();
// const body = document.querySelector("body");

// function removeScreenAndAddBoard(){
//     startingScreen.style.setProperty("opacity","0");
//     startingScreen.addEventListener("transitionend", ()=>{
//         startingScreen.remove();
//         chessBoard= chessBoardTemp;
//         body.append(chessBoard);
//         chessBoardTemp.style.setProperty("opacity","1");
//     })   
// }
const clickElements = [];
for (const x of checkbox){
    
    if(x.classList.length >1 ){
        // console.log(x.classList)
      x.addEventListener("click", function () {
       if (clickElements.length > 0){
        clickElements[0]["elem"].style.setProperty("background-color", clickElements[0]["previousBg"]);

        clickElements.length = [];
        // color();
       } 
        // console.log(clickElements);
        const bgColor = x.style.backgroundColor
        const elemCLicked = {
            "elem" : x,
            "previousBg" : bgColor
        }
        x.style.setProperty("background-color", "yellow");
        // color();
        clickElements.push(elemCLicked);
    })
}     
} 

const arrayOfPawn = [];
// Push my black pawn elements
for (const i of filesNameArray) {
  arrayOfPawn.push(document.getElementById(i + 2));
//   console.log(document.getElementById(i + 2))
}
// Push my white pawn elements
for (const i of filesNameArray) {
  arrayOfPawn.push(document.getElementById(i + 7));
//   console.log(document.getElementById(i + 7))
}
for (const i of arrayOfPawn) {
    i.addEventListener("click", () => {
      // Print Clicked Pawn Element
    //    console.log("+|",i);
  
      // Store Clicked Element
      const clickedElement = i;
  
      // Find Id of Clicked Element
      const currentId = i.getAttribute("id");
  
      // Print id of Clicked Pawn Element
      // console.log(currentId);
  
      // Get the Number from ID
      let change = parseInt(currentId[1]);
      // console.log(change);
  
      // Array of elements that we want to add circles
      const addCircleToElements = [];
  
      // Push elements in array (to which we want to add circles)
      for (let i = 0; i < 2; i++) {
        change-- ;
        addCircleToElements.push(document.getElementById(currentId[0] + change));
      }
      // Add circle to each elements of passed array
      console.log("-------------",addCircleToElements);
      hightlightCircle(addCircleToElements, clickedElement);
    });
  }
  // Track in which Squares we added circles
const insertedCircle = [];

// Add circle to each elements of passed array
const hightlightCircle = function (attachCircles, clickedElement) {
  // Check the Inserted circle
  if (insertedCircle.length != 0) removeMyCircle(insertedCircle);

  // Attach the created childs to parent
  attachCircles.forEach((i) => {
    // Add class to square in which we want to add circle
    i.classList.add("flex");

    // movement here
    i.addEventListener("click", function () {
      const classFigure = clickedElement.classList[1]
      i.classList.add(classFigure);
      clickedElement.classList.remove(classFigure)
      const removeCircleFromThis = attachCircles;
      console.log("circle =====",removeCircleFromThis)
      removeMyCircle(removeCircleFromThis);
      clickedElement.classList = "";
    });
    // Add circle to square
    i.innerHTML = `<div class="circle"></div>`;

    // Add all element in Array which we have inserted circles
    insertedCircle.push(i);
  });   
};
// Remove My Circle
function removeMyCircle(removalArray){
    removalArray.forEach((i) => {
        // console.log(i)
    i.innerHTML=""
    i.classList.remove("flex");
    //  console.log("Removal Elements ", i);
    });
};

