const getElement = (selection) => {
    const element = document.querySelector(selection);
    if (!element){ 
        throw new Error(`${selection} not found`);
    };
    return element;
}

const productName = getElement(".name").textContent;
const productPrice = getElement(".price").textContent;
// Cart items
const cartAmount = getElement("#cart-amount");
const cartContainer = getElement("#cart-container");
const cartBtn = getElement(".cart-btn");
// =============> Add to cart <=================
const addtoCart = getElement(".add-to-cart");
const innerCart = getElement(".cart-container");
const numberOfItemsInCart = getElement("#cart-amount");

// Sidebar
const openSidebar = getElement(".open-sidebar");
const sidebar = getElement("#sidebar");
const closeSidebar = getElement(".close-sidebar");
// images 
const btns = [...document.querySelectorAll(".btn")];
const images = [...document.querySelectorAll(".images")];
const imageContainer = getElement(".image-container");
const imageArray = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg",
];

// Add product items
let numberOfProducts = 0;
const increaseAmount = getElement(".increase-product-amount");
const decreaseAmount = getElement(".decrease-product-amount");
const numberOfProductsDom = getElement(".inner-amount");


let counter = 0;


// open cart
const showCart = () => {
    cartContainer.classList.toggle("hidden");
};

// open sidebar
const showSidebar = () => {
    sidebar.style.transform = `translateX(${0.01}%)`;
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    sidebar.style.zIndex = "1000";
};

const removeSidebar = () => {
    sidebar.style.transform = `translateX(-${100}%)`;
    document.body.style.backgroundColor = "#fff";
    sidebar.style.zIndex = "-1000";

}

// Load image
let img = new Image();
imageContainer.appendChild(img);
img.src = `${imageArray[counter]}`;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.classList.contains("next-btn")){
            counter ++;
            if (counter > imageArray.length - 1) counter = 0;
        }
        else{
            counter --;
            if (counter < 0) counter = imageArray.length - 1;
        };
        img.src = `${imageArray[counter]}`;
        imageContainer.appendChild(img);
    });
});

// Increase and Decrease products
const increaseProducts = (e) => {
    const btn = e.currentTarget;
    if (btn) numberOfProducts ++; 
    numberOfProductsDom.textContent = numberOfProducts;
}

const decreaseProducts = (e) => {
    const btn = e.currentTarget;
    if (btn) numberOfProducts --; 
    if (numberOfProducts <= 0) numberOfProducts = 0; 
    numberOfProductsDom.textContent = numberOfProducts;
};

cartBtn.addEventListener ("click", showCart);
openSidebar.addEventListener("click", showSidebar);
closeSidebar.addEventListener("click", removeSidebar);
increaseAmount.addEventListener("click", (e) => increaseProducts(e));
decreaseAmount.addEventListener("click", (e) => decreaseProducts(e));

let localStorageItems = [];

addtoCart.addEventListener('click', (e) => {
    const id = new Date().getTime();
    const totalPrice = (parseFloat(productPrice) * numberOfProducts).toFixed(2);
    const btn = e.currentTarget;
    
    if (numberOfProducts !== 0) {
        localStorageItems.push({
            id,
            productName,
            productPrice,
            totalPrice,
            numberOfProducts
        });
    };
    localStorage.setItem("product", JSON.stringify(localStorageItems));
    let data = JSON.parse(localStorage.getItem("product")) || [];
    numberOfItemsInCart.innerHTML = data.length;
    console.log(data);
    if (data.length === 0) {
        return [];
    }
    else{
        innerCart.nextElementSibling.classList.remove("hidden");
        const dataDom = data.map((datum) => {
            return `
                <div class="flex justify-center items-center w-full gap-4 cart-item">
                    <img src="./images/image-product-1.jpg" alt="cart item image" class="size-[50px] rounded-[4px]">
            
                    <div>
                        <h2 class="capitalize">   
                            ${datum.productName}
                        </h2>
                        <p>
                            $${datum.productPrice} x ${datum.numberOfProducts} &nbsp; 
                            <span class="text-custom-very-dark-blue font-bold">
                                $${datum.totalPrice}
                            </span>
                        </p>
                    </div>
                    <button class="text-custom-very-dark-blue font-bold delete-btn">
                        <img src="./images/icon-delete.svg" alt="remove item from cart">
                    </button>
                </div>
            `;
        });
        innerCart.innerHTML = dataDom.join("");

        const deleteBTN = [...document.querySelectorAll('.delete-btn')];
        deleteBTN.forEach((btn) => {
            btn.addEventListener("click", () => {
                const data = JSON.parse(localStorage.getItem("product"));
                localStorageItems = data.filter((datum) =>{
                    return datum.id !== id;
                });
                localStorage.setItem("product", JSON.stringify(localStorageItems));
                const parent = btn.parentElement;
                innerCart.removeChild(parent);

                if (data.length - 1 === 0){ 
                    innerCart.textContent = "Your cart is empty";
                    cartContainer.querySelector(".checkout").classList.add("hidden")
                };
                numberOfItemsInCart.textContent = data.length - 1;
            });
        });

    };
});
const checkout = getElement(".checkout");
const cartContainertoRemove = cartContainer.querySelector("#cart-container div");
checkout.addEventListener("click", () => {
    data = [];
    innerCart.textContent = "Your cart is empty";  
    checkout.classList.add("hidden");
    localStorage.clear();
    localStorageItems = [];
    numberOfItemsInCart.textContent = 0;
});

const innerImages = [...document.querySelectorAll(".image-btn")];
const biggerImage = getElement(".larger-image img");
const previewImage = getElement(".preview-image");
innerImages.forEach((image) => {
    image.addEventListener("click", () => {
        innerImages.forEach((image) => image.classList.remove("current"));
        image.classList.add("current");

        const currentImage = image.querySelector("img").getAttribute("src");
        biggerImage.setAttribute("src", currentImage);      
    });
});


biggerImage.addEventListener("click", () => {
    previewImage.classList.remove("hidden");
    const nextBtn = previewImage.querySelector(".next-btn");
    const prevBtn = previewImage.querySelector(".prev-btn");

    let index = 0;
    const allImages = [...document.querySelectorAll(".thumbnail-image")];
    const biggerThumbnailImage = getElement("#big-thumbnail");

    nextBtn.addEventListener("click", ()=> {
        index ++;
        if (index >= allImages.length) index = allImages.length - 1;
        const newImage = allImages[index].getAttribute("src").replace("-thumbnail", "");
        biggerThumbnailImage.setAttribute("src", newImage);
        allImages.forEach((image) => image.classList.remove("current"));
        allImages[index].classList.add("current");
    });
    prevBtn.addEventListener("click", ()=> {
        index --;
        if (index <= 0) index = 0;
        const newImage = allImages[index].getAttribute("src").replace("-thumbnail", "");
        biggerThumbnailImage.setAttribute("src", newImage);
        allImages.forEach((image) => image.classList.remove("current"));
        allImages[index].classList.add("current");
    });

    
});

const closeBtnForPreviewImage = getElement('.close-preview-image');
closeBtnForPreviewImage.addEventListener("click", () => {
    previewImage.classList.add("hidden"); 
});

