///////////////// responsive showMenu////////////////

const $ = document;
const menuIcon = $.querySelector('.nav__btn');
const showMenu = $.querySelector('.new-nav');

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle("nav__btn--open");
    // console.log(menuIcon.className);
    if(menuIcon.className === "nav__btn" ){
        showMenu.style.display = 'none';
    }else {
        showMenu.style.display = 'flex';
    }
})


////////////////Resize do not show new menu//////////

window.addEventListener('resize',()=>{
    if(window.innerWidth>768){
      showMenu.style.display = "none";
    }
  })


////////////////see more for products/////////////////

const more_span = $.querySelectorAll(".more");
const close_span_infos = $.querySelectorAll(".close-more");

more_span.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "block";
    e.target.nextElementSibling.nextElementSibling.style.display = "block";
  });
});
close_span_infos.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.style.display = "none";
    e.target.previousElementSibling.style.display = "none";
    e.target.previousElementSibling.previousElementSibling.style.display =
      "block";
  });
});


/////////////////toggle for like///////////////////


const likeBtn = $.querySelector('.popular-links__like');
const likeLogo = $.querySelector('.popular-links__like-logo');
// console.log(likeLogo.getAttribute('class'));
const path = likeLogo.querySelector('path');
// console.log(path.setAttribute('fill','rgb(255, 0, 128)'));

likeBtn.addEventListener('click',()=>{
  
  likeLogo.classList.toggle('pink');
  if(likeLogo.getAttribute('class').includes('pink')){
    path.setAttribute('fill','rgb(255, 0, 128)');
    localStorage.setItem('Theme','pink');
  }else{
    path.setAttribute('fill','#f6b1b8b2');
    localStorage.setItem('Theme','white');
  }
});
window.addEventListener('load',()=>{
  let localTheme = localStorage.getItem('Theme');
  if(localTheme ==='pink'){
    likeLogo.classList.add('pink');
    path.setAttribute('fill','rgb(255, 0, 128)');
  }
})




/////////////   scroll to top    ////////////////

const scrollBtn = $.querySelector('.scroll-btn');

scrollBtn.addEventListener('click', ()=>{
  document.documentElement.scrollTop = 0;
})



/////////////////star color to score ////////////////

const stars = $.querySelectorAll('.star-btn');
const firstStar = $.querySelector('.one');
const secondStar = $.querySelector('.two');
const thirdStar = $.querySelector('.three');
const fourthStar = $.querySelector('.four');
const fivesStar = $.querySelector('.five');
let btnScore;
stars.forEach((btn)=>{
  
  btn.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML);
    btnScore = e.target.innerHTML;

    if(btnScore==1){
      firstStar.style.fill = 'gold';
      secondStar.style.fill = 'black';
      thirdStar.style.fill= 'black';
      fourthStar.style.fill = 'black';
      fivesStar.style.fill = 'black';
    }
    if(btnScore==2){
      firstStar.style.fill = 'gold';
      secondStar.style.fill = 'gold';
      thirdStar.style.fill = 'black';
      fourthStar.style.fill = 'black';
      fivesStar.style.fill = 'black';
    }
    if(btnScore==3){
      firstStar.style.fill = 'gold';
      secondStar.style.fill = 'gold';
      thirdStar.style.fill = 'gold';
      fourthStar.style.fill = 'black';
      fivesStar.style.fill = 'black';
    }
    if(btnScore==4){
      firstStar.style.fill = 'gold';
      secondStar.style.fill = 'gold';
      thirdStar.style.fill = 'gold';
      fourthStar.style.fill = 'gold';
      fivesStar.style.fill = 'black';
    }
    if(btnScore==5){
      firstStar.style.fill = 'gold';
      secondStar.style.fill = 'gold';
      thirdStar.style.fill = 'gold';
      fourthStar.style.fill = 'gold';
      fivesStar.style.fill = 'gold';
    }
  });

});







///////////////add product to basket ////////////////////////

const addButtons = $.querySelectorAll(".add-btn");

let array_products = [
  {
    id: 1,
    name: "Coffee",
    price: 1100,
    img: "images/coffee-brain-caffeine-neuroscincces.webp",
    count: 1,
  },
  {
    id: 2,
    name: "Cofte Tabrizi",
    price: 1500,
    img: "images/Kufteh-Tabrizi.jpg",
    count: 1,
  },
  { id: 3, name: "Berger", price: 1400, img: "images/berger.jpg", count: 1 },
  {
    id: 4,
    name: "Gheime",
    price: 1900,
    img: "images/Gheimeh-bademjan2.jpg",
    count: 1,
  },
  {
    id: 5,
    name: "Kabab koobideh",
    price: 2400,
    img: "images/kebab.jpg",
    count: 1,
  },
  {
    id: 6,
    name: "Jujeh Kebab",
    price: 2200,
    img: "images/jooje.jpg",
    count: 1,
  },
  {
    id: 7,
    name: "Ghormeh sabzi",
    price: 2500,
    img: "images/ghormeh-sabzi.jpg",
    count: 1,
  },
  {
    id: 8,
    name: "Ice cream",
    price: 1200,
    img: "images/icecream.jpg",
    count: 1,
  },
  {
    id: 9,
    name: "Fried Chicken",
    price: 1350,
    img: "images/ch2.jpg",
    count: 1,
  },
];

let product_id;
let product_obj;
const Basket_number = $.querySelector(".basket-count");


addButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    


    /////solution2/////
    // let arrayPrice,priceValue,productName,product_img;
    //   arrayPrice = e.target.previousElementSibling.children;
    //   priceValue = arrayPrice[1].innerText;
    //   productName = e.target.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
    //   product_img = e.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.getAttribute('src');


    /////solution1(main)/////

    product_id = e.target.dataset.id;
    console.log(e.target);

    product_obj = array_products.find((product) => {
      return product.id == product_id;
    });

    console.log(product_obj);
    getProducts();

    
  });
});



//////////////     fetch api      /////////////



///method get///

let getResult;
let resultId;
let new_product_obj;

const notificationElem = $.querySelector('.notif');
const errorText = 'Error :(';
const errorColor = 'rgb(242, 72, 72)';
const successText = 'Successfully :)';
const successColor = 'rgb(14, 179, 75)';



function notificationHandler(text,color){
  notificationElem.innerHTML = text;
  notificationElem.classList.add('add-notif');
  notificationElem.style.backgroundColor = color;
  setTimeout(() => {
    notificationElem.classList.remove('add-notif');
    notificationElem.innerHTML = '';
  }, 2000); 
  
}


async function getProducts() {
  try {
    let result = await fetch("http://localhost:3000/posts");
    let posts = await result.json();
    console.log(posts);
    getResult = posts.find((get) => {
      return get.id === product_obj.id;
    });
    console.log(getResult);

    if (getResult) {

      resultId = getResult.id;
      new_product_obj = {
        id: getResult.id,
        name: getResult.name,
        price: getResult.price,
        img: getResult.img,
        count: getResult.count + 1,
      };
      updateArray_basket(resultId,new_product_obj);

    } else {
      postArray_basket();
    }

  } catch (err) {
    console.log("There is a Error to GET : ", err);
    notificationHandler(errorText,errorColor);
  }
}


///method put///

async function updateArray_basket(resultId,new_product_obj) {
  try {
    let res = await fetch(`http://localhost:3000/posts/${resultId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(new_product_obj),
    }).then((response) => {
      console.log(response);
    });
    console.log(res);
    notificationHandler(successText,successColor);
  } catch (err) {
    console.log("There is a Error to pUT : ", err);
    notificationHandler(errorText,errorColor);
  }
}


///method post///

async function postArray_basket() {
  try {
    let res = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product_obj),
    });
    console.log(res);
    notificationHandler(successText,successColor);
  } catch (err) {
    console.log("There is a Error to post : ", err);
    notificationHandler(errorText,errorColor);
  }
}


// function loadHandler(){
//   window.addEventListener('load',()=>{
//     notificationHandler(successText,successColor);
//     console.log('hiiiiiiiiiiiiii');
//   });
// }



///method get for count products///

let counter;
async function getProducts_for_count() {
  try {
    let result = await fetch("http://localhost:3000/posts");
    let posts = await result.json();
    console.log(posts);

    counter =  posts.length;
    console.log(counter);
    Basket_number.innerHTML = counter;


  }catch(err){
    console.log('getProducts_for_count'+ err);
  }

}
getProducts_for_count();
  









//////////////////input validation////////////////////

const btnSubmit = $.querySelector('.login-form__submit-btn');

const inputSpan1 = $.querySelector('.sp1');
const inputSpan2 = $.querySelector('.sp2');
const inputSpan3 = $.querySelector('.sp3');
const inputSpan4 = $.querySelector('.sp4');
const inputSpan5 = $.querySelector('.sp5');
const inputSpan6 = $.querySelector('.sp6');
const inputSpan7 = $.querySelector('.sp7');

const inputElem8 = $.querySelector('.check-input');

let sp_array = [inputSpan1,inputSpan2,inputSpan3,inputSpan4,inputSpan5,inputSpan6,inputSpan7];
let inp_array = $.querySelectorAll('.login-form__input');

console.log(sp_array);
console.log(inp_array);

let input_index;
const emailPattern = /^\w+([\.-]?\w)*@\w+([\.-]?\w)*(\.\w{2,3})+$/;
const phonePattern = /09(1[0-9]|3[0-9]|2[012]|9[012])-?[0-9]{3}-?[0-9]{4}/;
const postCodePattern = /\d{10}/;

let postcodeResult;
let emailResult;
let phoneResult;
let infos_obj;
let sp_Value_Array=[];
let result_sp_val;

btnSubmit.addEventListener('click',(e) =>{
  e.preventDefault();
  
  inputElem8.nextElementSibling.style.color = '#737B7D';
 
  console.log('submitd');
  if(inputElem8.checked){
    console.log('checked true');

  }else{

    inputElem8.nextElementSibling.style.color = '#FF8B13';
  }
  formValidation()

})

function formValidation(){
  inp_array.forEach((input)=>{

    if(input.value ===''){
      input_index=input.className.charAt(5)-1;
      console.log(input_index);
      sp_array[input_index].innerHTML = 'Fill the input';

    }
    else{

      input_index=input.className.charAt(5)-1;
      sp_array[input_index].innerHTML = '';

      if(input_index == 3){
        
        postcodeResult=postCodePattern.test(input.value);
        if(!postcodeResult){
          sp_array[3].innerHTML='All must be number(10 digits)'
        }

      }
      if(input_index == 5){
        
        phoneResult=phonePattern.test(input.value);
        if(!phoneResult){
          sp_array[5].innerHTML='example: 09303408998'
        }
      }
      if(input_index == 6){
        
        emailResult=emailPattern.test(input.value);
        if(!emailResult){
          sp_array[6].innerHTML='example: mohammad@gmail.com'
        }
      }
      
      sp_Value_Array.push(sp_array[input_index].innerHTML );
      console.log(sp_Value_Array);

      if(sp_Value_Array.length===7){

        result_sp_val = sp_Value_Array.every((val)=>{
          return val==''
        })
        console.log(result_sp_val);

        if(result_sp_val && inputElem8.checked){
          infos_obj={
            CompanyName:inp_array[0].value,
            Nature_Of_Business:inp_array[1].value,
            Address:inp_array[2].value,
            Postcode:inp_array[3].value,
            Contact_Name:inp_array[4].value,
            Phone:inp_array[5].value,
            Email:inp_array[6].value,
        
           }
          postInputs_infos(infos_obj);
        }
        sp_Value_Array=[];
      }

    }

  })

}

async function postInputs_infos(infos_obj) {
  try {
    let res = await fetch("http://localhost:3000/inputs_infos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(infos_obj),
    });
    console.log(res);
    notificationHandler(successText,successColor);
  } catch (err) {
    console.log("There is a Error to post : ", err);
    notificationHandler(errorText,errorColor);
  }
}








/////////footer email//////////

const emailBtn = $.querySelector('.newsletter__input-btn');
const emailInput = $.querySelector('.newsletter__input');
const emailSpan = $.querySelector('.newsletter__span');


let emailNewsResult;

emailBtn.addEventListener('click', (e)=>{
  e.preventDefault();

  if(emailInput.value === ''){
    emailSpan.innerHTML = 'Fill the input';
  }else {
    emailNewsResult = emailPattern.test(emailInput.value);
    if(!emailNewsResult){
      emailSpan.innerHTML='example: zanjani@gmail.com';
    }else{
      emailSpan.innerHTML='';
      news_obj={
        Email:emailInput.value,
      }
      postNewsEmail(news_obj);




    }
  }

  
})

async function postNewsEmail(news_obj) {
  try {
    let res = await fetch("http://localhost:3000/news", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(news_obj),
    });
    console.log(res);
    notificationHandler(successText,successColor);
  } catch (err) {
    console.log("There is a Error to post : ", err);
    notificationHandler(errorText,errorColor);
  }
}



//////////////////////////        END         //////////////////////////////////