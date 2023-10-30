const product = [
   {
       id: 0,
       image: 'image/aa-1.jpg',
       title: 'Veggie Pizza',
       price: 120,
   },
   {
       id: 1,
       image: 'image/d.png',
       title: ' Cheese Pizza',
       price: 150,
   },
   {
       id: 2,
       image: 'image/e.png',
       title: 'Special Mix Pizza ',
       price: 200,
   },
   {
       id: 3,
       image: 'image/s.png',
       title: 'Veg Grilled Sandwich',
       price: 80,
   },
   {
    id: 4,
    image: 'image/c.png',
    title: 'Veg Club Sandwich',
    price: 100,
    },
    {
        id: 5,
        image: 'image/w.png',
        title: 'Cheese Corn Sandwich',
        price: 150,
    },
    {
        id: 6,
        image: 'image/b.png',
        title: 'Veg Burger',
        price: 50,
    },
    {
        id: 7,
        image: 'image/p.png',
        title: 'Onion Crispy Burger',
        price: 100,
    },
    {
        id: 8,
        image: 'image/q.png',
        title: 'Double Tikki Burger',
        price: 130,
    },
    {
        id: 9,
        image: 'image/t.png',
        title: 'Oreo Shake ',
        price: 80,
    },
    {
        id: 10,
        image: 'image/y.png',
        title: 'Fruit Punch Shake',
        price: 90,
    },
    {
        id: 11,
        image: 'image/o.png',
        title: 'Butterscotch Shake ',
        price: 110,
    },
    {
        id: 12,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 599,
    },
    {
        id: 13,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 599,
    },
    {
        id: 14,
        image: 'image/aa-1.jpg',
        title: 'Head Phones',
        price: 599,
    },
];
const categories = [...new Set(product.map((item)=>
   {return item}))]
   let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{

   var {image, title, price} = item;
   return(
       `<div class='box'>                
           <div class='img-box'>
               <img class='images' src=${image}></img>
           </div>
       <div class='bottom'>
       <p>${title}</p>
       <h2>${price}.00</h2>`+
       "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
       `</div>
       </div>`
   )
}).join('')

var cart =[];

function addtocart(a){
   cart.push({...categories[a]});
   displaycart();
}
function delElement(a){
   cart.splice(a, 1);
   displaycart();
}

function displaycart(){
   let j = 0, total=0;
   document.getElementById("count").innerHTML=cart.length;
   if(cart.length==0){
       document.getElementById('cartItem').innerHTML = "Your cart is empty";
       document.getElementById("total").innerHTML = " "+0+".00";
   }
   else{
       document.getElementById("cartItem").innerHTML = cart.map((items)=>
       {
           var {image, title, price} = items;
           total=total+price;
           document.getElementById("total").innerHTML = " "+total+".00";
           return(
               `<div class='cart-item'>
               <div class='row-img'>
                   <img class='rowimg' src=${image}>
               </div>
               <p style='font-size:12px;'>${title}</p>
               <h2 style='font-size: 15px;'>${price}.00</h2>`+
               "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
           );
       }).join('');
   }   
}
document.addEventListener("click", (e) =>
 {
    // Complete Btn
    if(cart.length==0)
    {
        document.getElementById('cartItem').innerHTML = "Please add some item";

    }
    else if (e.target.id == "order-button" ) 
    {
      document.querySelector(".model").style.display = "block";
    }
}
)
document.addEventListener("click", (e) =>
 {
    // Complete Btn
    if (e.target.id == "close") 
    {
        e.preventDefault();
        document.querySelector(".model").style.display = "none";
     
    }
}
)

function myfunction1()
{
        

}
