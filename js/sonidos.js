// ============================================
// SONIDO PARA ICONOS Y NAVEGACIÓN - POZO SANTO
// ============================================

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔊 Inicializando sistema de sonidos...');

    // ===== CONFIGURACIÓN =====
    const RUTA_AUDIO = 'audio/click-icono.mp3';
    const VOLUMEN = 0.5;

    // ===== SONIDO PARA ICONOS Y BOTONES =====
    const sonidoClick = new Audio(RUTA_AUDIO);
    sonidoClick.volume = VOLUMEN;
    sonidoClick.preload = 'auto';

    function reproducirSonido() {
        sonidoClick.currentTime = 0;
        sonidoClick.play().catch(error => {
            console.warn('⚠️ No se pudo reproducir el sonido:', error);
        });
    }

    // Seleccionar elementos interactivos
    const elementosConSonido = document.querySelectorAll(`
        .nav-icons i, .language-selector span, .btn, .btn-primary, 
        .btn-outline, .btn-product, .btn-add-cart, .filter-btn, 
        .social-icon, .cart-close, .search-close, .quantity-btn, 
        .back-button
    `);

    console.log(`✅ Sonido asignado a ${elementosConSonido.length} elementos interactivos`);

    elementosConSonido.forEach(elemento => {
        elemento.addEventListener('click', function(e) {
            reproducirSonido();
            // Efecto visual
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 100);
        });
    });

    // ===== SONIDO PARA NAVEGACIÓN ENTRE PÁGINAS =====
    const enlacesInternos = document.querySelectorAll('a[href$=".html"]:not([href*="http"])');
    console.log(`🔗 Sonido asignado a ${enlacesInternos.length} enlaces de navegación`);

    const sonidoNavegacion = new Audio(RUTA_AUDIO);
    sonidoNavegacion.volume = 0.4;

    enlacesInternos.forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            // Solo aplicar a enlaces internos (no a los que tienen #)
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const url = this.getAttribute('href');

                sonidoNavegacion.currentTime = 0;
                sonidoNavegacion.play().catch(() => {});

                // Pequeña pausa para que se escuche el sonido
                setTimeout(() => {
                    window.location.href = url;
                }, 150);
            }
        });
    });

    // ===== VERIFICAR ARCHIVO DE AUDIO =====
    fetch(RUTA_AUDIO, { method: 'HEAD' })
        .then(response => {
            if (response.ok) {
                console.log(`✅ Archivo de audio encontrado: ${RUTA_AUDIO}`);
            } else {
                console.error(`❌ NO se encuentra el archivo: ${RUTA_AUDIO}`);
            }
        })
        .catch(error => {
            console.error(`❌ Error al verificar archivo: ${error.message}`);
        });
});

// ===== FUNCIÓN DE PRUEBA =====
window.probarSonido = function() {
    const testAudio = new Audio('audio/click-icono.mp3');
    testAudio.volume = 0.8;
    testAudio.play().then(() => {
        alert('✅ ¡Sonido funciona correctamente!');
    }).catch(error => {
        alert('❌ Error: ' + error.message);
    });
};