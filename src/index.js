console.log('%c HI', 'color: firebrick')

// Get all URLS
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"


let allBreeds = []; // Stores all breeds


function fetchDogs() {
    return fetch(imgUrl)
        .then(res => res.json())
        .then(imgs => {
            console.log(imgs)
            const allDogs = document.getElementById('dog-image-container')
            allDogs.innerHTML = ''; // Clear existing images
            imgs.message.forEach(img => {
                const dogElement = document.createElement('img')
                dogElement.src = img
                allDogs.appendChild(dogElement)
            })
        })
        .catch(err => console.error('Error Message: ', err.message))
}

function fetchBreed() {
    return fetch(breedUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            allBreeds = Object.keys(data.message); // Store all breeds
            displayBreeds(allBreeds); // Display all breeds initially
        })
        .catch(err => console.error('Error Message: ', err.message))
}


function displayBreeds(breeds) {
    const dogBreeds = document.getElementById('dog-breeds')
    dogBreeds.innerHTML = ''; // Clear existing list
    breeds.forEach(breed => {
        const breedElement = document.createElement('li')
        breedElement.textContent = breed
        breedElement.classList.add('clickable')
        dogBreeds.appendChild(breedElement)
    })
}

function filterBreeds(letter) {
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(letter));
    displayBreeds(filteredBreeds);
}



document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    fetchBreed()

    // Add event listener to dropdown
    const dropdown = document.getElementById('breed-dropdown');
    dropdown.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        filterBreeds(selectedLetter);
    });

    // Add click listener to breed list for color change
    const breedList = document.getElementById('dog-breeds');
    breedList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            event.target.style.color = 'red';
        }
    });
})