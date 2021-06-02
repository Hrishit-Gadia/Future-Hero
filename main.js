var Canvas = new fabric.Canvas('The-Canvas');
var Size = 50;
var PlayerObject;
var ObjectImage;
var PlayerX = 200;
var PlayerY = 200;
var Key;

function Player_Update() {
    fabric.Image.fromURL("player.png", function (Img) {
        PlayerObject = Img;
        PlayerObject.scaleToWidth(150);
        PlayerObject.scaleToHeight(150);
        PlayerObject.set(
            {
                top: PlayerY,
                left: PlayerX
            }
        );
        Canvas.add(PlayerObject);
    }
    )
}


function Part_Update(GetImage) {
    fabric.Image.fromURL(GetImage, function (Img) {
        BlockObject = Img;
        BlockObject.scaleToWidth(Size);
        BlockObject.scaleToHeight(Size);
        BlockObject.set(
            {
                top: PlayerY,
                left: PlayerX
            }
        );
        Canvas.add(BlockObject);
    }
    )
}

window.addEventListener("keydown" , KeyCheck);

function KeyCheck(e) {
Key = e.keyCode;

if (e.shiftKey == true && Key == 84) {
    console.log("Shift + T");
    Size = Size + 10;
    document.getElementById("Size").innerHTML = Size;
}
if (e.shiftKey == true && Key == 85) {
    console.log("Shift + U");
    Size = Size - 10;
    document.getElementById("Size").innerHTML = Size;
}
if ( e.shiftKey == true && Key == 65) {
    console.log("Iron Face");
    Part_Update("ironman_face.png");
}
if ( e.shiftKey == true && Key == 66) {
    console.log("Thor Face");
    Part_Update("thor_face.png");
}
if ( e.shiftKey == true && Key == 67) {
    console.log("Hulk face");
    Part_Update("hulk_face.png");
}
if ( e.shiftKey == true && Key == 68) {
    console.log("spider face");
    Part_Update("spiderman_face.png");
}
if ( e.shiftKey == true && Key == 69) {
    console.log("Iron face");
    Part_Update("ironman_body.png");
}
if ( e.shiftKey == true && Key == 70) {
    console.log("hulk face");
    Part_Update("hulkd_body.png");
}
if ( e.shiftKey == true && Key == 71) {
    console.log("Spider face");
    Part_Update("spiderman_body.png");
}
if ( e.shiftKey == true && Key == 72) {
    console.log("Iron Right Hand");
    Part_Update("ironman_right_hand.png");
}
if ( e.shiftKey == true && Key == 73) {
    console.log("Thor Right Hand");
    Part_Update("thor_right_hand.png");
}
if ( e.shiftKey == true && Key == 74) {
    console.log("Hulk Right Hand");
    Part_Update("hulk_right_hand.png");
}
if ( e.shiftKey == true && Key == 75) {
    console.log("Spider Right Hand");
    Part_Update("spiderman_right_hand.png");
}
if ( e.shiftKey == true && Key == 76) {
    console.log("Spider Left Hand");
    Part_Update("spiderman_left_hand.png");
}
if ( e.shiftKey == true && Key == 77) {
    console.log("Thor Left Hand");
    Part_Update("thor_left_hand.png");
}
if ( e.shiftKey == true && Key == 78) {
    console.log("Iron Left Hand");
    Part_Update("ironman_left_hand.png");
}
if ( e.shiftKey == true && Key == 79) {
    console.log("Hulk Left Hand");
    Part_Update("hulk_left_hand .png");
}
if ( e.shiftKey == true && Key == 80) {
    console.log("Captain Left Hand");
    Part_Update("captain_america_left_hand.png");
}
if ( e.shiftKey == true && Key == 81) {
    console.log("Hulk Legs");
    Part_Update("hulk_legs.png");
}
if ( e.shiftKey == true && Key == 82) {
    console.log("Iron Legs");
    Part_Update("ironman_legs.png");
}
if ( e.shiftKey == true && Key == 83) {
    console.log("Spider Legs");
    Part_Update("spiderman_legs.png");
}
if ( Key == 38){
    console.log("Up")
    Up();
}
if ( Key == 39){
    console.log("Right")
    Right();
}
if ( Key == 40){
    console.log("Down")
    Down();
}
if ( Key == 37){
    console.log("Left")
    Left();
}
}