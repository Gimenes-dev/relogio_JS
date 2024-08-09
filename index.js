const relogio = document.querySelector('.relogio');

document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.backgroundColor = '#282c34';

function mostrarHoraAtual(){
    const date = new Date();

    const horas = date.getHours().toString().padStart(2, '0');
    const minutos = date.getMinutes().toString().padStart(2, '0');
    const segundos = date.getSeconds().toString().padStart(2, '0');

    relogio.innerHTML = horas + ':' + minutos + ':' + segundos;
}

relogio.style.fontSize = '4em';
relogio.style.fontWeight = 'bold';
relogio.style.backgroundColor = '#000000';
relogio.style.color = '#00ff00';
relogio.style.padding = '20px';
relogio.style.borderRadius = '10px';
relogio.style.textAlign = 'center';
relogio.style.textShadow = '2px 2px 4px rgba(0, 255, 0, 0.7)';
relogio.style.boxShadow = '0px 0px 20px rgba(0, 255, 0, 0.5)';
relogio.style.border = '2px solid #00ff00';
relogio.style.textShadow = '0 0 10px rgba(0, 255, 0, 0.7), 0 0 20px rgba(0, 255, 0, 0.5)';
relogio.style.cursor = 'move';
relogio.style.position = 'absolute';
relogio.style.userSelect = 'none';

mostrarHoraAtual();

setInterval(mostrarHoraAtual,1000);

const dragme = document.getElementById('dragme');

let offsetX, offsetY, isDragging = false;

dragme.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - dragme.getBoundingClientRect().left;
    offsetY = e.clientY - dragme.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Calcula a nova posição
        const x = e.clientX - offsetX;
        const y = e.clientY - offsetY;

        // Move a div
        dragme.style.left = `${x}px`;
        dragme.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});