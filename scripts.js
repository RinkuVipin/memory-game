document.addEventListener('DOMContentLoaded', () => {

    const cardsArray = [
        {
            name: 'rhino',
            img: 'img/img_0.png'
        },
        {
            name: 'rhino',
            img: 'img/img_0.png'
        },
        {
            name: 'penguin',
            img: 'img/img_1.png'
        },
        {
            name: 'penguin',
            img: 'img/img_1.png'
        },
        {
            name: 'tiger',
            img: 'img/img_2.png'
        },
        {
            name: 'tiger',
            img: 'img/img_2.png'
        },
        {
            name: 'bear',
            img: 'img/img_3.png'
        },
        {
            name: 'bear',
            img: 'img/img_3.png'
        },
        {
            name: 'elephant',
            img: 'img/img_4.png'
        },
        {
            name: 'elephant',
            img: 'img/img_4.png'
        },
        {
            name: 'lion',
            img: 'img/img_5.jpg'
        },
        {
            name: 'lion',
            img: 'img/img_5.jpg'
        },
        {
            name: 'koala',
            img: 'img/img_6.png'
        },
        {
            name: 'koala',
            img: 'img/img_6.png'
        },
        {
            name: 'deer',
            img: 'img/img_7.jpg'
        },
        {
            name: 'deer',
            img: 'img/img_7.jpg'
        },
        {
            name: 'fox',
            img: 'img/img_8.png'
        },
        {
            name: 'fox',
            img: 'img/img_8.png'
        },
        {
            name: 'monkey',
            img: 'img/img_9.png'
        },
        {
            name: 'monkey',
            img: 'img/img_9.png'
        },
        {
            name: 'giraffe',
            img: 'img/img_10.png'
        },
        {
            name: 'giraffe',
            img: 'img/img_10.png'
        },
        {
            name: 'beaver',
            img: 'img/img_11.png'
        },
        {
            name: 'beaver',
            img: 'img/img_11.png'
        },
        {
            name: 'owl',
            img: 'img/img_12.png'
        },
        {
            name: 'owl',
            img: 'img/img_12.png'
        },
        {
            name: 'cobra',
            img: 'img/img_13.png'
        },
        {
            name: 'cobra',
            img: 'img/img_13.png'
        },
        {
            name: 'cow',
            img: 'img/img_14.png'
        },
        {
            name: 'cow',
            img: 'img/img_14.png'
        },
        {
            name: 'chicken',
            img: 'img/img_15.png'
        },
        {
            name: 'chicken',
            img: 'img/img_15.png'
        }
    ];

    const totalScore = cardsArray.length / 2;

    cardsArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const message = document.querySelector('.message');
    const score = document.querySelector('#score');
    score.textContent = `0 / ${totalScore}`;

    var cardsChosen = [];
    var idsChosen = [];
    var cardsWon = [];


    //Method to Check of these two cards are same or not

    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const cardOneId = idsChosen[0];
        const cardTwoId = idsChosen[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            message.textContent = `You got a match !`;
            cards[cardOneId].setAttribute('src', 'img/blank.jpg');
            cards[cardTwoId].setAttribute('src', 'img/blank.jpg');
            cards[cardOneId].removeEventListener("click", flipCard);
            cards[cardTwoId].removeEventListener("click", flipCard);
            setTimeout(() => {
                message.textContent = ``;
            }, 500);
            cardsWon.push(cardsChosen);
        } else {
            message.textContent = `Sorry. Wrong match!`;
            cards[cardOneId].setAttribute('src', 'img/background.jpg');
            cards[cardTwoId].setAttribute('src', 'img/background.jpg');
            setTimeout(() => {
                message.textContent = ``;
            }, 500);
        }
        cardsChosen.splice(0, cardsChosen.length);
        idsChosen.splice(0, idsChosen.length);

        score.textContent = `${cardsWon.length} / ${totalScore}`;
        if (cardsWon.length === totalScore) {
            alert('You won the Game !');
        }

    }


    //Method to Flip a Card

    function flipCard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        idsChosen.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img)
        if (idsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }


    //Creating Game Board

    for (let i = 0; i < cardsArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'img/background.jpg');
        card.setAttribute('data-id', i);
        card.style.marginRight = "4px";
        card.addEventListener('click', flipCard);
        grid.appendChild(card);

    }

});