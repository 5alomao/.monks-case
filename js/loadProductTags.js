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
  console.log(tagItems.length);

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observerOptions = {
    threshold: 0.2,
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  tagItems.forEach((tag) => {
    setInterval(() => {
      observer.observe(tag);
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", fetchProductTagsData);
