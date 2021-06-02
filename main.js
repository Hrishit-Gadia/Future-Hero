var Canvas = new fabric.Canvas('The-Canvas');
var Height = 150;
var Width = 50;
var PlayerObject;
var ObjectImage;
var PlayerX;
var PlayerY;

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
        BlockObject.scaleToWidth(Width);
        BlockObject.scaleToHeight(Height);
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
