console.log("hello")
const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 525,
        colors: [
            {
                code: "black",
                img: "image.png",
            },
            {
                code: "blue",
                img: "image copy.png",
            },
        ],
    },
    {
        id: 1,
        title: "Air Force 2",
        price: 580,
        colors: [
            {
                code: "black",
                img: "image copy.png",
            },
            {
                code: "blue",
                img: "image copy.png",
            },
        ],
    },
    {
        id: 3,
        title: "Air Force 3",
        price: 590,
        colors: [
            {
                code: "black",
                img: "image copy 2.png",
            },
            {
                code: "blue",
                img: "image copy.png",
            },
        ],
    },

];
let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductprice = document.querySelector(".productprice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //change the choosen product
        choosenProduct = products[index]
        //change text of current product
        currentProductTitle.textContent = choosenProduct.title
        currentProductprice.textContent = "Rs" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img;
        //assigning new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        })
    });
});
currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});
currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => { //resetting color of the size box
            size.style.backgroundColor = "white"
            size.style.color = "beige"
        });
        size.style.backgroundColor = "black" //changing the size colos
        size.style.color = "white"
    });
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
 productButton.addEventListener("click",()=>{
    payment.style.display = "flex"
 })
 close.addEventListener("click",()=>{
    payment.style.display = "none"
 })

