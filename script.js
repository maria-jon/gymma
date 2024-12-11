
function getYesOrNo() {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();
    // Return "Yes" 80% of the time and "No" 20% of the time
    return randomNumber < 0.8 ? 'Ja' : 'Nej';
}

// Display the answer on the page
document.getElementById('answer').textContent = getYesOrNo();