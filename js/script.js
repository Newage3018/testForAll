let check = document.querySelector(".check-text");
let text = check.textContent;
 console.log (text.length);
 let firstBlock, secondBlock, thirdBlock;
 let textBlock1 = null;
 let textBlock2 = null;
 let textBlock3 = null;

 const splitText = function (I,G,K) {
 let i = I;
 while (text[i] != "\n")
 {i++};
 textBlock1 = text.slice(0,i);
 
 let  g = (i+G);
 while (text[g] != "\n")
 {g++};
textBlock2 = text.slice(i,g);

let  k = (g+K);
while (text[k] != "\n")
 {k++};
 textBlock3 = text.slice(g,k);

 

 return textBlock1, textBlock2, textBlock3;
 }

 splitText( 2200, 800,700);
 
 console.log (textBlock1);
 console.log (textBlock2);
 console.log (textBlock3);

<<<<<<< HEAD


=======
>>>>>>> 23cd317abef8bf10548dac8204bdd28fd626e343
//  let newDiv = document.createElement("div");
//  newDiv.innerText = textBlock1;
//  newDiv.classList.add('first');

//  console.log (i);
 


//  let i = 300;
//  while (text[i] !== "\n")
//  {i++};
//  textBlock1 = text.slice(0,i);
 
//  let  g = (i+500);
//  while (text[g] !== "\n")
//  {g++};
// textBlock2 = text.slice(i,g);

// let  k = (g+500);
// while (text[k] !== "\n")
//  {k++};
//  textBlock3 = text.slice(g,k);

//  console.log (textBlock1);
//  console.log (textBlock2);
//  console.log (textBlock3);
