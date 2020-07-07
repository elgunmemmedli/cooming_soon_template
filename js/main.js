
$(document).ready(function(){
    let images=['img/1.jpg',
        'img/2.jpg',
        'img/3.jpg',
        'img/4.jpg',
        'img/5.jpg',
        'img/6.jpg',
        'img/7.jpeg',
        'img/8.jpg'
    ];

    let randomNumber = Math.floor(Math.random() * images.length);
    let bgImg = 'url(' + images[randomNumber] + ')';

    $('#background').css({'background':bgImg, 'background-size':'cover', });

});
