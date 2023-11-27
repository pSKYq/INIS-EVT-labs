let selectedElement = null;
let initialPosition = { x: 0, y: 0 }; 
let followFinger = false; 
let touchCount = 0;
let sticky = false; 

document.querySelectorAll('.target').forEach((div) => { 
  div.addEventListener('mousedown', (event) => { 
    selectedElement = event.target; 
    initialPosition = { x: event.clientX, y: event.clientY };
    followFinger = true; 
  });

  window.addEventListener('mousemove', (event) => { 
    if (selectedElement &&  followFinger || sticky) {  
      const rect = selectedElement.getBoundingClientRect(); // сохраняем
      selectedElement.style.left = `${event.clientX - rect.width / 2}px`;
      selectedElement.style.top = `${event.clientY - rect.height / 2}px`; // обновляем 
    }
  });

  window.addEventListener('mouseup', () => { 
    if(sticky){
      sticky = false;
      selectedElement.style.backgroundColor = 'red';
    }
    selectedElement = null;
    followFinger = false;
    
  });

  div.addEventListener('dblclick', (event) => {  
    selectedElement = event.target; 
    initialPosition = { x: parseInt(event.target.style.left), y: parseInt(event.target.style.top) }; 
    
      selectedElement.style.backgroundColor = 'green';
    
    sticky = true;
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && selectedElement) { 
      selectedElement.style.left = initialPosition.x + 'px';
      selectedElement.style.top = initialPosition.y + 'px'; // возвращаем 
      selectedElement.style.backgroundColor = 'red'; 
      selectedElement = null; // неактивен
      initialPosition = { x: 0, y: 0 }; 
    }
  });

  div.addEventListener('touchstart', (event) => {
    if (event.touches.length === 1) {
      event.preventDefault(); 
      selectedElement = event.target; 
      initialPosition = { x: parseInt(event.target.style.left), y: parseInt(event.target.style.top) }; 
      followFinger = true; 
    } else if (event.touches.length === 2) {
    }
  });

  window.addEventListener('touchmove', (event) => {
    if (selectedElement && followFinger  && event.touches.length === 1) {
      const touchLocation = event.changedTouches[0];
      selectedElement.style.left = `${touchLocation.pageX}px`;
      selectedElement.style.top = `${touchLocation.pageY}px`;
    } else if (selectedElement && followFinger && event.touches.length === 2) {
      selectedElement.style.left = initialPosition.x + 'px';
      selectedElement.style.top = initialPosition.y + 'px';
    }
  });

  window.addEventListener('touchend', (event) => {
    if (event.touches.length === 0) {
      followFinger = false;
    }
  });
});
