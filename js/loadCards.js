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

document.addEventListener("DOMContentLoaded", fetchCardsData);