const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: 525,
        colors: [
            {
                code: "white",
                img: "https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Transparent-Image.png",
            },
            {
                code: "blue",
                img: "https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Pic.png",
            },
        ],
    },
    {
        id: 1,
        title: "Air Force 2",
        price: 580,
        colors: [
            {
                code: "red",
                img: "https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Free-Download.png",
            },
            {
                code: "blue",
                img: "https://www.pngarts.com/files/8/Air-Force-One-White-Nike-Shoes-Transparent-Images.png",
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
                img: "https://www.pngarts.com/files/8/Nike-Air-Force-One-PNG-Download-Image.png",
            },
            {
                code: "blue",
                img: "https://static.sneakerjagers.com/p/mkbLuayvAWrKnn1HL54WU9PcuxLgeEqxaHnokOOg.png",
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

