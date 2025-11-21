// Domain parts
const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon', 'internet', 'camiones', 'magnet'];
const domain = ['com', 'es', 'dev', 'io', 'net'];

// generate the domains
let displayObj = {
  com: [],
  es: [],
  dev: [],
  io: [],
  net: []
}

pronoun.forEach(domainPronoun => {
  adj.forEach(domainAdjective => {
    noun.forEach(domainNoun => {
      domain.forEach(domainDoamins => {
        if (domainNoun.endsWith(domainDoamins)) {
          // If the last words in the noun in the domain matches the domain,
          //  split the noun and end it with the domain directly
          let domainName = `${domainPronoun}${domainAdjective}${domainNoun
            .slice(0, -domainDoamins.length)}.${domainDoamins}`
          displayObj[domainDoamins].push(domainName)
        } else {
          let domainName = `${domainPronoun}${domainAdjective}${domainNoun}.
          ${domainDoamins}`
          displayObj[domainDoamins].push(domainName)
        };
      });
    });
  });
});


// Show on page
function showCards() {
  const container = document.getElementById("card-container");

  for (const [key, value] of Object.entries(displayObj)) {
    // Cards
    const cardHTML = `
        <div class="col-sm-12 col-md-4 mb-3 mx-auto">
            <div class="card shadow-sm">
                <div class="card-body text-center">
                  <h5 class="card-title">${key}</h5>
                  <p class="card-text">
                    ${value.map(v => `<div>${v}</div>`).join("")}
                  </p>
                </div>
            </div>
        </div>
    `;

    container.innerHTML += cardHTML;
  }
}

// Ni idea de qué es esto pero un señor de Stack overflow lo hizo y yo también y funciona
document.addEventListener("DOMContentLoaded", showCards);