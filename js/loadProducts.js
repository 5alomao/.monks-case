async function fetchProductsData() {
    try {
        const response = await fetch("./data/products.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const productsData = await response.json();
        populateProducts(productsData);

    } catch (error) {
        console.error("Error fetching the products data:", error);
    }
}

function populateProducts(productsData) {
    const productList = document.getElementById("products-container");
    productList.innerHTML = "";
    productsData.forEach((product) => {
        productList.innerHTML += createProductCard(product);
    });
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.imageUrl}" alt="${product.imageAlt}" />
            <h3>${product.title}</h3>
            <p>${product.description}</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", fetchProductsData);