console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

const inputName = document.querySelector("#nameFilter");

//Filter by product name
inputName.addEventListener("keyup", () => {
    showedProduts = products.filter(listing => listing.name.toLowerCase().includes(inputName.value.toLowerCase()));
    list.innerHTML = "";
    renderProducts(showedProduts);
})