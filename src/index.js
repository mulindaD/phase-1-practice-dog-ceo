console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function fetchDogs() {
    return fetch(imgUrl)
            .then(res => res.json())
            .then(imgs => {
                console.log(imgs)
                imgs.message.forEach(img => {
                    const allDogs = document.getElementById('dog-image-container')
                    const dogElement = document.createElement('img')
                    dogElement.src = img
                    allDogs.appendChild(dogElement)
                })
            .catch(err => console.error('Error Message: ',err.message))
            })
}


document.addEventListener('DOMContentLoaded', fetchDogs)