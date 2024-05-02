
    var clutter="";
for(var i=1;i<=15;i++)
{
    var discount = Math.floor(Math.random()*50)
    var price= Math.floor(Math.random()*2760)
    var image_array=[
        
        'download (1).jpeg',
        'download.jpeg',
        'download (6).jpg',
        'download (7).jpg',        
    ]
   var random_index= Math.floor(Math.random()*image_array.length)
   selected_image= image_array[random_index]

var name_list=[
    'nike blue',
    'nike white',
    'nike office',
    'nike sport'
]
var random_name= Math.floor(Math.random()*name_list.length)
   shoe_name= name_list[random_index]

    clutter +=`<div id="card1"><center><img id="card-img1"src="${selected_image}"><h3 id="shoe-category">${shoe_name}</h3>
    <h3 id="discount-txt">${discount}% OFF<span id="price-txt">price ${price}</span></h3></center>
    <center><button id='addcardbtn'onclick='added()'>add to cart</button></center></div>`;
}
document.querySelector('#card-section').innerHTML=clutter;
var search;

function search(){
    document.getElementById('src-btn');
    {alert("hii")}
}
function scrolldown(){
    document.getElementById('scrolldown')
    alert("scroll down plz")
}

// gsap 
gsap.from("#name,#categry-txt",{
    y:-100,
    delay:2,
    rotate:30,
    duration:3
})
gsap.from("#r-shoe-i",{
    x:500,
    delay:2,
    duration:5
})
gsap.to("#main",{
    y:"-100vh",
    delay:1,
    duration:2.5,
})

var addmsg=document.querySelector('#addednotify');
var addcard=document.querySelector('#addcardbtn');
var addcart=document.querySelector('#add-cartt');
var themsg=document.querySelector('#addednote');

function added(){
    alert("item added to cart")
    addcart.style.visibility='visible';
    themsg.style.visibility='visible';
}

var cardsection=document.getElementById("card-section");
var searchbar=document.getElementById("search-me");
searchbar.addEventListener("focus",function(){
   cardsection.style.opacity=0.1;
})
searchbar.addEventListener("blur",function(){
    cardsection.style.opacity=1;
 })
 
var addtocart=document.getElementById("add-cart");
var cartsection=document.getElementById("cartsection");
let flag=0;
function showcart(){
 if(flag==0){
cartsection.style.left="65vw";
flag=1;
console.log("show the fucking cart")
    }
    else{
        cartsection.style.left="100vw";
flag=0;
console.log("hide the fucking cart")
    }
}


// addtocart.addEventListener("click",function(){
//     if(flag==0){
// cartsection.style.left="70vw";
// flag=1;
// console.log("show the fucking cart")
//     }
//     else{
//         cartsection.style.left="100vw";
// flag=0;
//     }
// })


