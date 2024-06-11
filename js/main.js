let container = document.querySelector('.container');
container.hidden = false;

confirm('Welcome To Card Builder 1.0 . Click ok to start making your card.')
let h1 = document.querySelector('.h1');
let username = document.querySelector('.userName')
let dateEl = document.querySelector('.date');
let image = document.querySelector('.img');
let mainContent = document.querySelector('.textContent');

try {
function createCard(){
    function cardHeadingAndUsername(){
        let heading = prompt('Type your card heading here :- ');
        let userNameIn = prompt('Please type only your firstname here :- ');
        h1.innerHTML = heading;
        username.innerHTML = userNameIn;
    }
    function cardIamge(){
        let imageUrl = prompt('Paste the image url here :- ');
        image.src = imageUrl;
    }
    function cardMainContent(){
        let mainContentText = prompt('Write your card description here :- ');
        mainContent.innerHTML = mainContentText;  
    }
    function bodyBackground() {
        let gradient1 = prompt('Type color 1') 
        let gradient2 = prompt('Type color 2') 
        let gradient3 = prompt('Type color 3') 
        document.body.style.background = `linear-gradient(90deg, ${gradient1} 0%, ${gradient2} 60%, ${gradient3} 100%)`
    }
    cardHeadingAndUsername();
    cardIamge();
    cardMainContent();
    bodyBackground();
}
createCard();
}

catch (err) {
    console.log(err);
}
