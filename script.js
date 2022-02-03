// Your JS goes here
function createTile(color){

    const tile = document.createElement('div');
  
    tile.style.width = '11.1%';
    tile.style.float = 'left';
    tile.style.paddingBottom = '11.1%';
    tile.style.backgroundColor = color
    //tile.innerHTML = 'new div';
  
    return tile;
  }
  
  for (let i = 0; i < 63; i++) {
    const color = i % 2 === 0 ? 'red' : 'black'
    let addTileColor = createTile(color)
    const tiles = document.body.appendChild(addTileColor);
  }
        