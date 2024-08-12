var audio = new Audio('recordings/rawr.wav');

function Dog() {
    $.get( "https://dog.ceo/api/breed/spaniel/cocker/images/random", function( data ) {
        $("#img").attr('src',data.message);
        console.log(data)
        audio.play();
      });
}