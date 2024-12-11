async function fetchProductTagsData() {
    try {
        const response = await fetch("./data/product-tags.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const productTagsData = await response.json();
        populateProductTags(productTagsData);

    } catch (error) {
        console.error("Error fetching the product tags data:", error);
    }
}

function populateProductTags(productTagsData) {
    const productTagsList = document.getElementById("tags-container");
    productTagsList.innerHTML = "";
    productTagsData.forEach((tag) => {
        productTagsList.innerHTML += createProductTagCard(tag);
    });
}

function createProductTagCard(tag) {
    return `
        <div class="product-tag">
            <p>${tag.name}</p>
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", fetchProductTagsData);