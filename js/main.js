// Música Pausa/reproducir //
 const musica = document.getElementById('musicaFondo');
        const btnControl = document.getElementById('btnControl');
        const icono = document.getElementById('icono');
        const textoBoton = document.getElementById('textoBoton');

        btnControl.addEventListener('click', () => {
            if (musica.paused) {
                musica.play();
                icono.className = 'bi bi-pause-fill'; // Pausa
                textoBoton.textContent = 'Pausar Música';
            } else {
                musica.pause();
                icono.className = 'bi bi-play-fill'; // Play
                textoBoton.textContent = 'Reproducir Música';
            }
        });

// Mostrar/ocultar contenido "ver más" index//
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const content = document.getElementById(targetId);

            if (!content) return;

            
            document.querySelectorAll('.collapse-content').forEach(el => {
                if (el !== content) el.style.display = 'none';
            });

            
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});
