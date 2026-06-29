document.addEventListener('DOMContentLoaded', () => {
    // *- Control para la música de fondo -*
    const musica = document.getElementById('musicaFondo');
    const btnControl = document.getElementById('btnControl');
    const icono = document.getElementById('icono');
    const textoBoton = document.getElementById('textoBoton');
        // Condicional para evitar errores en cada página
        if (btnControl && musica) {
            btnControl.addEventListener('click', () => {
                if (musica.paused) {
                    musica.play().catch(err => console.log("Reproducción retenida."));
                    icono.className = 'bi bi-pause-fill';
                    textoBoton.textContent = 'Pausar Música';
                } else {
                    musica.pause();
                    icono.className = 'bi bi-play-fill';
                    textoBoton.textContent = 'Reproducir Música';
                }
            });
        }

    // *- Validación del formulario y cartel retro -*
    const formulario = document.querySelector('form');
        if (formulario) {
            formulario.addEventListener('submit', function(evento) {
                evento.preventDefault(); // Frenamos el envío automático

            // Campos obligatorios del formulario reales de Contacto.html
                const telefono = document.getElementById('telefono').value.trim();
                const mail = document.getElementById('mail').value.trim();
                const mensaje = document.getElementById('mensaje').value.trim();

                const expresionMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Condicional por si falta algún campo crítico
            if (!telefono || !mail || !mensaje) {
                mostrarCartelRetro(
                    "⚠️ ERROR DE SISTEMA",
                    "Falta completar datos en la Central de Mando.\nTodos los campos obligatorios deben ser procesados.",
                    null
                );
                return;
            }
            if (!expresionMail.test(mail)) {
                mostrarCartelRetro(
                    "📡 FALLA DE SEÑAL",
                    "El correo electrónico ingresado no tiene un\nformato válido de coordenadas de red.",
                    null
                );
                return;
            }

            // Cartel si el formulario es correcto
            mostrarCartelRetro(
                "🧬 ¡SOLICITUD RECIBIDA!",
                "Gracias por sumarte a Titanes del Sur.\nCada nueva persona ayuda a proteger un poco más\nel mundo jurásico y el patrimonio paleontológico.",
                null
            );
            formulario.reset(); 
        });
    }

    // *- Easter Egg #1: Expedición completada (4 páginas visitadas) -*
    let paginaActual = window.location.pathname.split("/").pop() || "index.html";
    let paginasVisitadas = JSON.parse(localStorage.getItem('paginasVisitadas')) || [];

        if (!paginasVisitadas.includes(paginaActual)) {
            paginasVisitadas.push(paginaActual);
            localStorage.setItem('paginasVisitadas', JSON.stringify(paginasVisitadas));
        }

        if (paginasVisitadas.length >= 4 && !localStorage.getItem('easterEggPaginasMostrado')) {
            localStorage.setItem('easterEggPaginasMostrado', 'true');
            setTimeout(() => {
                mostrarCartelRetro(
                    "🌿 ¡EXPEDICIÓN COMPLETADA! 🌿",
                    "Gracias por recorrer DinoWeb.",
                    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3V5N3NidmR4ZW9pZHBsNWhvNmU4NXp6bW9jcHdjdXg1Ymszb3B3ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o7TKwBiawZyo4p904/giphy.gif"
                );
            }, 2000);
        }

    // *- Easter Egg #2: Contador de 10 clics en el sitio -*
    let clicksTotales = parseInt(localStorage.getItem('clicksGlobales')) || 0;
    let eggClicksMostrado = localStorage.getItem('easterEggClicksMostrado') === 'true';

        document.body.addEventListener('click', (e) => {
            if (e.target.id === 'btnCerrarCartel') return;

            if (!eggClicksMostrado) {
                clicksTotales++;
                localStorage.setItem('clicksGlobales', clicksTotales);

                if (clicksTotales >= 10) {
                    eggClicksMostrado = true;
                    localStorage.setItem('easterEggClicksMostrado', 'true');
                    mostrarCartelRetro(
                        "🦕 ¡ENCONTRASTE UN DINOSAURIO BAILARÍN! 🦕",
                        "Seguí explorando...",
                        "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWR1ZHh3MDVpMnJrdnE5cm9idGpxcnVwZXUxd3RndXNoNnJ6eTJidyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/V9Xpfm74mbe0f9vNKo/giphy.gif"
                    );
                }
            }
        });
});

// *- Función extra para el Pop-Up con soporte de GIFs animados -*
function mostrarCartelRetro(titulo, mensaje, urlGif) {
    // Contenedor del Pop-Up
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    // Caja del Pop-Up
    const caja = document.createElement('div');
    caja.style.backgroundColor = '#1a1a2e';
    caja.style.border = '4px solid #ff00ff'; // Tu rosa de acento
    caja.style.padding = '25px';
    caja.style.fontFamily = '"Jaro", monospace';
    caja.style.color = '#00fa15'; // Tu verde flúor
    caja.style.textAlign = 'center';
    caja.style.borderRadius = '8px';
    caja.style.boxShadow = '0 0 20px rgba(255, 0, 255, 0.6)';
    caja.style.maxWidth = '500px';

    // Condicional para inyectar la etiqueta de la animación si corresponde
    let bloqueGif = "";
    if (urlGif) {
        bloqueGif = `<img src="${urlGif}" alt="Dino Danza" class="img-fluid my-2" style="max-height: 140px; image-rendering: pixelated;">`;
    }

    // Diseño para el Pop-Up
    caja.innerHTML = `
        <pre style="font-family: inherit; color: inherit; margin: 0; white-space: pre-wrap;">
🦖══════════════════════════════🦖

      ${titulo}
${mensaje}

══════════════════════════════════
        </pre>
        ${bloqueGif}
        <br>
        <button id="btnCerrarCartel" class="btn btn-outline-danger btn-sm mt-3 font-jaro" style="text-transform: uppercase;">
            [ Cerrar Transmisión ]
        </button>
    `;

    overlay.appendChild(caja);
    document.body.appendChild(overlay);

    // Lógica para cerrar el Pop-Up
    document.getElementById('btnCerrarCartel').addEventListener('click', () => {
        overlay.remove();
    });
}

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
