document.querySelector('.fa-heart').addEventListener('click',()=>{
    document.querySelector('.fa-heart').classList.toggle("heart");
  })

  function image1(){
    document.getElementById('largeImage').src = 'images/img1.jpg'
  
  }
  function image2(){
    document.getElementById('largeImage').src = 'images/img3.jpeg'

  }
  function image3(){
    document.getElementById('largeImage').src = 'images/img4.jpg'
   
  }
  function image4(){
    document.getElementById('largeImage').src = 'images/img2.jpg'
   
  }
 
  // Price 1

let Sub = document.querySelector("#minus");
let Add = document.querySelector("#plus");
let quantityNumber = document.querySelector("#quantity");
let currentValue = 1;

Sub.addEventListener("click", function () {
  currentValue -= 1;

  if (currentValue <= 0) {
      Sub.style.cursor = 'no-drop'
    currentValue = 1;
    
  }else{
    Sub.style.cursor = 'pointer'
  }

  quantityNumber.value = currentValue;


});

Add.addEventListener("click", function () {
  currentValue += 1;
 if(currentValue >0){
    Sub.style.cursor = 'pointer'
 }
  quantityNumber.value = currentValue;

 
});
