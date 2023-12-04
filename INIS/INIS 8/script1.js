document.addEventListener('DOMContentLoaded', (event) => {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');

    let shapes = [];
    let currentShape = null;
    let drawing = false;

    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', endDraw);

    let clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', clearCanvas);

    function startDraw(evt) {
        drawing = true;

        let startX = evt.offsetX;
        let startY = evt.offsetY;

        if (document.getElementById('circle').checked) {
            currentShape = {
                type: 'circle',
                startX: startX,
                startY: startY,
                endX: startX,
                endY: startY
            };
        } else {
            currentShape = {
                type: 'rectangle',
                startX: startX,
                startY: startY,
                endX: startX,
                endY: startY
            };
        }
    }

    function draw(evt) {
        if (!drawing || !currentShape) {
            return;
        }

        currentShape.endX = evt.offsetX;
        currentShape.endY = evt.offsetY;

        drawShapes();
        drawCurrentShape();
    }

    function endDraw() {
        if (currentShape) {
            shapes.push(currentShape);
            currentShape = null;
        }

        drawing = false;
    }

    function drawShapes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let shape of shapes) {
            drawShape(shape);
        }
    }

    function drawCurrentShape() {
        if (currentShape) {
            drawShape(currentShape);
        }
    }

    function drawShape(shape) {
        ctx.beginPath();
        if (shape.type === 'circle') {
            let radius = Math.sqrt((shape.endX - shape.startX) ** 2 + (shape.endY - shape.startY) ** 2);
            ctx.arc(shape.startX, shape.startY, radius, 0, 2 * Math.PI);
        } else {
            ctx.rect(
                Math.min(shape.startX, shape.endX),
                Math.min(shape.startY, shape.endY),
                Math.abs(shape.endX - shape.startX),
                Math.abs(shape.endY - shape.startY)
            );
        }
        ctx.stroke();
    }

    function clearCanvas() {
        shapes = [];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});
