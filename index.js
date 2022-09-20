let card = document.querySelector('.container');
let input = document.querySelector('.input');
let image = document.createElement('img');
image.classList.add('image');
card.appendChild(image);

let links = ['https://media.istockphoto.com/photos/portrait-of-french-bulldog-sitting-in-front-of-white-background-shot-picture-id981531750?k=20&m=981531750&s=612x612&w=0&h=rI94_Fhb5YDZpeSXV1zXm3fAwQjBNFw2LwpOyIOyLJs='];
let i = 0;

function getImage(i, links) {
    image.src = links[i];
}

input.addEventListener('change', function(e) {
    let link = e.target.value;
    links.push(link);
    e.target.value = '';
})

setInterval(function(){
    getImage(i, links);
    i++;
    if(i >= links.length) {
        i = 0;
    }
}, 2000);