// Function to show movie details dynamically
function showMovieDetails() {
    // Create a new div for dynamic content
    const dynamicDiv = document.createElement('div');
    dynamicDiv.classList.add('section');

    // Add title
    const title = document.createElement('h2');
    title.textContent = "Story & Highlights";
    dynamicDiv.appendChild(title);

    // Add content
    const para = document.createElement('p');
    para.innerHTML = `
    <strong>Story:</strong> Salaar is a high-octane action thriller featuring Deva, a violent and fearless man who takes on powerful crime syndicates to bring justice.<br><br>
    <strong>Highlights:</strong> Prabhas's mass action sequences, stylish direction by Prashanth Neel, background score by Ravi Basrur, and stunning cinematography.<br><br>
    <strong>Fun Fact:</strong> The movie was shot in multiple languages and has one of the largest action sequences in Telugu cinema.
    `;
    dynamicDiv.appendChild(para);

    // Append dynamic content to main content
    const contentDiv = document.querySelector('.content');
    contentDiv.appendChild(dynamicDiv);
}

// Call the function on page load
window.onload = showMovieDetails;
