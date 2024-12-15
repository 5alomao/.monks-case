async function fetchCardsData() {
  try {
    const response = await fetch("./data/cards.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const cardsData = await response.json();
    populateCards(cardsData);
  } catch (error) {
    console.error("Error fetching the cards data:", error);
  }
}

function populateCards(cardsData) {
  const cardList = document.getElementById("card-section");
  cardList.innerHTML = "";
  cardsData.forEach((card) => {
    cardList.innerHTML += createCard(card);
  });

  initCardsObserver();
}

function createCard(card) {
  return `
        <div class="card-item">
            <h3>${card.title}</h3>
            <p>${card.description}</p>
            <span class="card-btn">${card.buttonText}</span>
        </div>
    `;
}

function initCardsObserver() {
  cards = document.querySelectorAll(".card-item");

  const cardObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = Array.from(cards).indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("fade-top");
          observer.unobserve(entry.target);
        }, index * 200);
      }
    });
  };

  const cardObserverOptions = {
    threshold: 0.2,
  };

  const cardObserver = new IntersectionObserver(
    cardObserverCallback,
    cardObserverOptions
  );

  cards.forEach((card) => {
    cardObserver.observe(card);
  });
}

document.addEventListener("DOMContentLoaded", fetchCardsData);
