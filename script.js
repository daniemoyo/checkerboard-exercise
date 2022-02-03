// Your JS goes here

function rgbColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    return bgColor;
}

function createTile(){

    const tile = document.createElement('div');
  
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom = '11.1%';
    tile.style.backgroundColor = rgbColor()
    //tile.style.background = "linear-gradient(green, blue)"
    
    return tile;
  }
  
  for (let i = 0; i < 63; i++) {
    let addTileColor = createTile()
    const tiles = document.body.appendChild(addTileColor);
  }
        