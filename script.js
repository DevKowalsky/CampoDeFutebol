window.onload = function() {
    var canvas = document.querySelector('#meuCanva');
    var contexto = canvas.getContext('2d');

    contexto.fillStyle = 'white';
    contexto.strokeStyle = 'white'
    contexto.fillRect(0, 0, 800, 2);
    contexto.fillRect(0, 0, 2, 800);
    contexto.fillRect(0, 498, 800, 2);
    contexto.fillRect(798, 0, 2, 500);
    contexto.fillRect(400, 0, 2, 500);
    
    contexto.fillRect(0, 200, 25, 2);
    contexto.fillRect(0, 300, 25, 2);
    contexto.fillRect(25, 200, 2, 102);

    contexto.fillRect(0, 150, 80, 2);
    contexto.fillRect(0, 350, 80, 2);
    contexto.fillRect(80, 150, 2, 202);

    contexto.fillRect(773, 200, 25, 2);
    contexto.fillRect(773, 300, 25, 2);
    contexto.fillRect(773, 200, 2, 102);

    contexto.beginPath();
    contexto.arc(73 , 250, 30, 5, (2*Math.PI) / 5);
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(733, 250, 30, 2, (-2*Math.PI) / 3);
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(745, 250, 3, 0, 2*Math.PI);
    contexto.fill();

    contexto.beginPath();
    contexto.arc(55, 250, 3, 0, 2*Math.PI);
    contexto.fill();

    contexto.fillRect(718, 150, 80, 2);
    contexto.fillRect(718, 350, 80, 2);
    contexto.fillRect(718, 150, 2, 202);

    contexto.beginPath();
    contexto.lineWidth = 2;
    contexto.arc(400, 250, 50, 0, 2*Math.PI);
    contexto.stroke();

    contexto.beginPath();
    contexto.lineWidth = 2;
    contexto.arc(0, 0, 20, 0, 2*Math.PI);
    contexto.stroke();

    contexto.beginPath();
    contexto.lineWidth = 2;
    contexto.arc(0, 500, 20, 0, 2*Math.PI);
    contexto.stroke();

    contexto.beginPath();
    contexto.lineWidth = 2;
    contexto.arc(800, 0, 20, 0, 2*Math.PI);
    contexto.stroke();

    contexto.beginPath();
    contexto.lineWidth = 2;
    contexto.arc(800, 500, 20, 0, 2*Math.PI);
    contexto.stroke();

    contexto.beginPath();
    contexto.arc(401, 250, 5, 0, 2*Math.PI);
    contexto.fill();
}