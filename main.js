import option from "./options.js"

let joke = document.getElementsByClassName('joke')[0]
let punchline = document.getElementsByClassName('punchline')[0]
const lol = document.getElementById('lol')

document.getElementsByClassName('button')[0].addEventListener('click', (e) => {

    console.log(option)
    joke.innerText = ""
    punchline.innerText = ""
    lol.innerHTML = ""

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': option.KEY,
            'X-RapidAPI-Host': option.HOST
        }
    };
    
    fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const content = data.body[0]
            console.log(content)
            joke.innerText = content.setup

            setTimeout(() => {
                punchline.innerText = content.punchline
            }, 2000);

            setTimeout(() => {
                // emoji.innerText = '🤣'
                const img = document.createElement('img')
                img.classList.add('pic')
                img.setAttribute('src', './lologuy.jpeg')
                lol.appendChild(img)
            }, 3000);
        })
        .catch(err => console.error(err));
})