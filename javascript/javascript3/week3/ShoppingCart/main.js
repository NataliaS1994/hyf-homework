const productUl = document.getElementById("ul");
const shoppingBasket = document.querySelector(".Shopping-basket");
const selectElement = document.getElementById("product-options");
const addButton = document.getElementById("add-to-cart");
const totalPrice = document.getElementById("total");
const currencyInput = document.getElementById("currency");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        console.log(currency);
        if (currency === "EUR") {
            return this.price * 0.13;
        } else if (currency === "DKK") {
            return this.price * 1;
        }
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        console.log(product);
        this.products.push(product);
    }

    removeProduct(product) {
        this.products = this.products.filter(item => item !== product);
    }

    searchProduct(productName) {
        productName = productName.trim().toLocaleLowerCase();
        return this.products.filter(product => product.name === productName);
    }

    getTotal(selectedCurrency) {
        return this.products.reduce((accumulator, product) => accumulator + product.convertToCurrency(selectedCurrency), 0);
    }

    renderProducts(selectedCurrency) {

        productUl.innerHTML = "";
        shoppingBasket.style.visibility = "visible";
        this.products.forEach(product => {
            const productLi = document.createElement("li");
            productLi.classList.add("list-item");
            productLi.innerHTML = `Product name: ${product.name}<br/>Price: ${product.convertToCurrency(selectedCurrency)}`;
            totalPrice.innerHTML = `Total price: ${this.getTotal(selectedCurrency)}`;

            const removeButton = document.createElement("button");
            removeButton.innerText = "Remove";
            productLi.appendChild(removeButton);
            productUl.appendChild(productLi);
            removeButton.addEventListener("click", () => {
                this.removeProduct(product);
                totalPrice.innerHTML = `Total price: ${this.getTotal(selectedCurrency)}`;
                this.renderProducts(selectedCurrency);
            })
        })

    }

    getUser() {
        fetch(`https://jsonplaceholder.typicode.com/users/1`)
            .then(response => response.json())
            .then((data) => {
                document.getElementById("username").innerHTML = `HI ${data.username}`;
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

const shoppingCart = new ShoppingCart();
shoppingCart.getUser();

let myProducts = [
    new Product("sweatshirt", 500),
    new Product("T-shirt", 300),
    new Product("Jeans", 250),
    new Product("Pijamas", 300),
    new Product("Robe", 600),
    new Product("Shorts", 400),
    new Product("Dress", 400),
    new Product("Gloves", 540),
    new Product("Scarf", 100),
];

function renderProductsDropDown() {
    myProducts.forEach((product) => {
        const option = document.createElement("option");
        option.innerHTML = `${product.name}`;
        option.value = `${product.name}`;
        selectElement.appendChild(option);
    });
}
renderProductsDropDown();

addButton.addEventListener("click", () => {
    if (!selectElement.value) {
        alert("You didn't select any product");
        return;
    }
    const product = myProducts.find(product => {
        return product.name === selectElement.value;
    })
    shoppingCart.addProduct(product);
    shoppingCart.renderProducts(currencyInput.value);
});

currencyInput.addEventListener("change", () => {
    shoppingCart.renderProducts(currencyInput.value);
})