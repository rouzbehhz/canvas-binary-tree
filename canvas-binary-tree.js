const drawTree = (bit,block,color) => {
  // If block pixel not provided, make it 1px
  (!block) ? block = 1 : block;

  // Create Canvas and give it a unique ID
  let canv = document.createElement('canvas');
  canv.id = 'binaryTree';
  
  // Append canvas to body
  document.body.appendChild(canv);
  
  // Grab canvas from DOM
  canv = document.getElementById('binaryTree');
  
  // Get 2D Context Object
  let ctx = canv.getContext("2d");

  // Set the width and height based on number of bits
  ctx.canvas.width = bit + 25; // Add 10px padding
  ctx.canvas.height = bit + 25;
  // If no color given, Paint It, Black - The Rolling Stones;
  (!color) ? ctx.fillStyle = "#000000" : ctx.fillStyle = color;

  // Fill em up!!!
  for (x = k = bit; x--; ) {
    for (y = k; y--; ) {
        if (!(x & y)) {
          ctx.fillRect((x+(y+1)/2),k-y, block[0], block[1]);
        }
    }
  }
}
