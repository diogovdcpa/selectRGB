window.addEventListener('load',changeColor)

function changeColor() {
    var red = document.querySelector('#red').value;
    var green = document.querySelector('#green').value;
    var blue = document.querySelector('#blue').value;
  
    var color = 'Rgb(' + red + ',' + green + ',' + blue + ')';
  
    document.querySelector('#squareResult').style.background = color;
    document.querySelector('#offRed').value = red;
    document.querySelector('#offGreen').value = green;
    document.querySelector('#offBlue').value = blue;
  }
  
  document.querySelector('#red').addEventListener('input', changeColor);
  document.querySelector('#green').addEventListener('input', changeColor);
  document.querySelector('#blue').addEventListener('input', changeColor);