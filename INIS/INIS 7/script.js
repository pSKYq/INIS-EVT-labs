document.addEventListener('DOMContentLoaded', (event) => {
    let svgns = "http://www.w3.org/2000/svg";
    let svg = document.getElementById('mySVG');

    let selectedElement = false;
    let currentX, currentY;

    svg.addEventListener('mousedown', startDraw);
    svg.addEventListener('mousemove', draw);
    svg.addEventListener('mouseup', endDraw);

    function startDraw(evt) {
        currentX = evt.offsetX;
        currentY = evt.offsetY;
        if (document.getElementById('circle').checked) {
            selectedElement = document.createElementNS(svgns, 'circle');
            selectedElement.setAttributeNS(null, 'cx', currentX);
            selectedElement.setAttributeNS(null, 'cy', currentY);
            selectedElement.setAttributeNS(null, 'r', 1);
        } else {
            selectedElement = document.createElementNS(svgns, 'rect');
            selectedElement.setAttributeNS(null, 'x', currentX);
            selectedElement.setAttributeNS(null, 'y', currentY);
            selectedElement.setAttributeNS(null, 'height', 1);
            selectedElement.setAttributeNS(null, 'width', 1);
        }
        selectedElement.setAttributeNS(null, 'stroke', 'black');
        selectedElement.setAttributeNS(null, 'fill', 'transparent');
        svg.appendChild(selectedElement);
    }

    function draw(evt) {
        if (selectedElement) {
            if (document.getElementById('circle').checked) {
                let r = Math.sqrt((evt.offsetX - currentX) ** 2 + (evt.offsetY - currentY) ** 2);
                selectedElement.setAttributeNS(null, 'r', r);
            } else {
                selectedElement.setAttributeNS(null, 'width', Math.abs(evt.clientX - currentX));
                selectedElement.setAttributeNS(null, 'height', Math.abs(evt.clientY - currentY));
                selectedElement.setAttributeNS(null, 'x', Math.min(currentX, evt.clientX));
                selectedElement.setAttributeNS(null, 'y', Math.min(currentY, evt.clientY));
            }
        }
    }

    function endDraw(evt) {
        selectedElement = false;
    }

   
    document.getElementById('clearButton').addEventListener('click', clearDrawing);

    function clearDrawing() {
        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }
    }
});
