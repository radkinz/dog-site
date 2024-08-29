var filenames = {
    'rawr.wav': 'River', 
    'Antoniyabark.wav' : 'Antoniya'
}
var master_bark_list = []

function setup() {
    names = Object.keys(filenames);
    for (let i = 0; i < names.length; i++) {
        master_bark_list.push(new Audio('recordings/' + names[i]));
    }
}

var bark_index = change_bark()
setup()


function change_bark() {
    return getRandomInt(2)
}

function Bark() {
    //grab bark from index
    console.log(master_bark_list, bark_index)
    master_bark_list[bark_index].play()
}

function checkAnswer(this) {
    console.log(this.id)
}

function Dog() {
    $.get( "https://dog.ceo/api/breed/spaniel/cocker/images/random", function( data ) {
        $("#img").attr('src',data.message);
        console.log(data)
        audio.play();
        console.log(audio)
      });
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
  