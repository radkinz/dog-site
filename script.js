var filenames = {
    'rawr.wav': 'river', 
    'Antoniyabark.wav' : 'Antoniya'
}
var master_bark_list = []

function setup() {
    names = Object.keys(filenames);
    for (let i = 0; i < names.length; i++) {
        master_bark_list.push(new Audio('recordings/' + names[i]));
    }
}

var audio = new Audio('recordings/rawr.wav');
setup()
function Bark() {
    //grab random bark
    index = getRandomInt(master_bark_list.length - 1)

    console.log(master_bark_list)

    master_bark_list[index].play()
    console.log(audio)
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
  