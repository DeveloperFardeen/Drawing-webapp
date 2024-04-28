document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('drawingCanvas');
    const context = canvas.getContext('2d');
    let isDrawing = false;
  
    function startDrawing(e) {
      isDrawing = true;
      draw(e);
    }
  
    function stopDrawing() {
      isDrawing = false;
      context.beginPath();
    }
  
    function draw(e) {
      if (!isDrawing) return;
  
      context.lineWidth = 5;
      context.lineCap = 'round';
      context.strokeStyle = '#000';
  
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', draw);
  });
  