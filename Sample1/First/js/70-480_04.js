/* Adding new elements */
function createArticle() {
    var newArticle = document.createElement("article");
    var newHeader = document.createElement("header");
    var newH1 = document.createElement("h1");
    var newP = document.createElement("p");
    var newFooter = document.createElement("footer");

    newH1.appendChild(document.createTextNode("New Article!"));
    newP.appendChild(document.createTextNode("More tips on the way, currently under review."));
    newFooter.appendChild(document.createTextNode("Written by: A giant robot."));

    newHeader.appendChild(newH1);
    newArticle.appendChild(newHeader);
    newArticle.appendChild(newP);
    newArticle.appendChild(newFooter);

    document.getElementById("stories").appendChild(newArticle);
}

/* Video element interaction */
function playVideo() {

    //Alter DOM via ID
    var video = document.getElementById("video_player");
    if (video.paused) {
        video.play();
        document.getElementById("playpause_img").src = "img/video/pause.png";
    } else {
        video.pause();
        document.getElementById("playpause_img").src = "img/video/play.png";
    }

}

/* Audio element interaction */
function playAudio() {

    //Alter DOM via ID
    var audio = document.getElementById("audio_player");
    if (audio.paused) {
        audio.play();
        document.getElementById("sound_img").src = "img/audio/sound_off.png";
    } else {
        audio.pause();
        document.getElementById("sound_img").src = "img/audio/sound_on.png";
    }

}


var colors = ["#ff7200", "#ffab47", "#ffbc66", "#fff845", "black"];
var curColor = 0;

//Modify SVG element
function changeGGColor() {

    //Alter DOM via class
    var circles = document.getElementsByClassName("gg-logo");
    for (var i = 0; i < circles.length; i++) {
        circles[i].setAttribute("fill", colors[curColor]);
    }
    curColor = (curColor + 1) % colors.length;

}