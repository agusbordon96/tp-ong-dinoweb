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
                    musica.play();
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

            // Campos obligatorios del formulario
                const nombre = document.getElementById('nombre').value.trim();
                const nick = document.getElementById('nick').value.trim();
                const programa = document.getElementById('programa').value;
                const telefono = document.getElementById('telefono').value.trim();
                const mail = document.getElementById('mail').value.trim();

                const expresionMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // Condicional por si falta algún campo crítico
            if (!nombre || !nick || !programa || !telefono || !mail) {
                mostrarCartelRetro(
                    "⚠️ ERROR DE SISTEMA",
                    "Falta completar datos en la Central de Mando.\nTodos los campos obligatorios deben ser procesados."
                );
                return;
            }
            if (!expresionMail.test(mail)) {
                mostrarCartelRetro(
                    "📡 FALLA DE SEÑAL",
                    "El correo electrónico ingresado no tiene un\nformato válido de coordenadas de red."
                );
                return;
            }

            // Cartel si el formulario es correcto
            mostrarCartelRetro(
                "🧬 ¡SOLICITUD RECIBIDA!",
                "Gracias por sumarte a Titanes del Sur.\nCada nueva persona ayuda a proteger un poco más\nel mundo jurásico y el patrimonio paleontológico."
            );
            formulario.reset(); 
        });
    }
});

// *- Función extra para el Pop-Up -*
function mostrarCartelRetro(titulo, mensaje) {
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

    // Diseño para el Pop-Up
    caja.innerHTML = `
        <pre style="font-family: inherit; color: inherit; margin: 0; white-space: pre-wrap;">
🦖══════════════════════════════🦖

      ${titulo}
${mensaje}

══════════════════════════════════
        </pre>
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
