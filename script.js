var filenames = {'rawr.wav': 'river'}
var master_bark_list = []

function setup() {
    names = filenames.keys();
    for (let i = 0; i < names.keys().length; i++) {
        master_bark_list.push(new Audio('recording/' + names[i]));
    }
}

var audio = new Audio('recordings/rawr.wav');

function Bark() {
    //grab random bark
    index = getRandomInt(master_bark_list.length - 1)

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
  