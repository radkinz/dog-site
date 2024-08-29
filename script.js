var filenames = {
    'rawr.wav': 'River', 
    'Antoniyabark.wav' : 'Antoniya',
    'Antoniya barkhowl.wav': 'Antoniya',
    'Cookie bark.wav': 'Dog',
    'EdisonBarking.wav':'Dog',
    'Riverbark1.wav':'River',
    'Riverhowl1.wav': 'River'
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
    return getRandomInt(7)
}

function Bark() {
    //grab bark from index
    console.log(master_bark_list, bark_index)
    master_bark_list[bark_index].play()
}

function checkAnswer(id) {
    console.log(id)
    keys = Object.values(filenames)
    console.log(keys, bark_index)
    if (keys[bark_index] == id) {
        alert("You got it right!")
         bark_index = change_bark(master_bark_list.length -1)
    } else {
        alert("You got it wrong. Try again:(")
    }
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
  