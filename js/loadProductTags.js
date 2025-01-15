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

  initTagObservers();
}

function createProductTagCard(tag) {
  return `
        <div class="product-tag">
            <p>${tag.name}</p>
        </div>
    `;
}

function initTagObservers() {
  const tagItems = document.querySelectorAll("#tags-container > .product-tag");
  const tagsObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-top");
        observer.unobserve(entry.target);
      }
    });
  };

  const tagsObserverOptions = {
    threshold: 0.2,
  };

  const tagsObeserver = new IntersectionObserver(
    tagsObserverCallback,
    tagsObserverOptions
  );

  tagItems.forEach((tag) => {
    tagsObeserver.observe(tag);
  });
}

document.addEventListener("DOMContentLoaded", fetchProductTagsData);
