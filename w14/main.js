const displayArea = document.getElementById("output");
const apiEndpoint = "https://jsonplaceholder.typicode.com/photos";

// Function to render images to the page
function showImages(images) {
  images.forEach((image) => {
    const imageElement = document.createElement("img");
    imageElement.src = image.thumbnailUrl;
    imageElement.alt = image.title;
    imageElement.style.margin = "8px"; // Optional styling
    displayArea.appendChild(imageElement);
  });
}

// Function to fetch images from the API and handle errors
async function fetchImages() {
  try {
    const response = await fetch(apiEndpoint);

    // Check if the response is okay (status code 200-299)
    if (!response.ok) throw new Error(`Server Error: ${response.status}`);

    const imageData = await response.json();
    showImages(imageData.slice(0, 100)); // Display first 100 images
  } catch (error) {
    displayArea.textContent = `An error occurred: ${error.message}`;
  }
}

// Initial function to start the fetch and render process
async function init() {
  await fetchImages();
}

// Call the init function to start loading data
init();
