
function getYesOrNo() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Return "Yes" 80% of the time and "No" 20% of the time
    return randomNumber < 0.8 ? `<h2 class="yes">Ja.</h2> <p>Och refresha <em>inte</em> sidan för att försöka komma undan!</p>` : `<h2 class="no">Nej.</h2> <p>Lyllo dig!</p>`;
}

// Display the answer on the page
document.getElementById('answer').innerHTML = getYesOrNo();