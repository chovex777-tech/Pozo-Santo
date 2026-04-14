// ===== BÚSQUEDA GLOBAL - POZO SANTO =====
// Array de productos actualizado con los 21
const products = [
    // CHACOTEO (4)
    { id: 1, name: { es: "CHACOTEO BLANCO", en: "CHACOTEO WHITE" }, category: "blanco", categoryEs: "BLANCO", categoryEn: "WHITE", price: 250, image: "images/los-pozos-santos.jpg" },
    { id: 2, name: { es: "CHACOTEO REPOSADO", en: "CHACOTEO REPOSADO" }, category: "reposado", categoryEs: "REPOSADO", categoryEn: "REPOSADO", price: 300, image: "images/pozo-santa-rosa.jpg" },
    { id: 3, name: { es: "CHACOTEO AÑEJO", en: "CHACOTEO AGED" }, category: "anejo", categoryEs: "AÑEJO", categoryEn: "AGED", price: 350, image: "images/pozo-santico.jpg" },
    { id: 4, name: { es: "CHACOTEO EXTRA AÑEJO", en: "CHACOTEO EXTRA AGED" }, category: "extra-anejo", categoryEs: "EXTRA AÑEJO", categoryEn: "EXTRA AGED", price: 400, image: "images/pozo-santico.jpg" },

    // POZO SANTO REGULAR (5)
    { id: 5, name: { es: "POZO SANTO BLANCO", en: "POZO SANTO WHITE" }, category: "blanco", categoryEs: "BLANCO", categoryEn: "WHITE", price: 300, image: "images/los-pozos-santos.jpg" },
    { id: 6, name: { es: "POZO SANTO REPOSADO", en: "POZO SANTO REPOSADO" }, category: "reposado", categoryEs: "REPOSADO", categoryEn: "REPOSADO", price: 350, image: "images/pozo-santa-rosa.jpg" },
    { id: 7, name: { es: "POZO SANTO AÑEJO", en: "POZO SANTO AGED" }, category: "anejo", categoryEs: "AÑEJO", categoryEn: "AGED", price: 400, image: "images/pozo-santico.jpg" },
    { id: 8, name: { es: "POZO SANTO ROSA", en: "POZO SANTO ROSÉ" }, category: "rosa", categoryEs: "ROSA", categoryEn: "ROSÉ", price: 400, image: "images/pozo-santa-rosa.jpg" },
    { id: 9, name: { es: "POZO SANTO ROSA EDICIÓN PREMIUM", en: "POZO SANTO ROSÉ PREMIUM EDITION" }, category: "rosa", categoryEs: "ROSA", categoryEn: "ROSÉ", price: 750, image: "images/pozo-santa-rosa.jpg" },

    // POZO SANTO ARTESANAL (4)
    { id: 10, name: { es: "POZO SANTO BLANCO ARTESANAL", en: "POZO SANTO ARTISANAL WHITE" }, category: "blanco", categoryEs: "BLANCO", categoryEn: "WHITE", price: 450, image: "images/los-pozos-santos.jpg" },
    { id: 11, name: { es: "POZO SANTO REPOSADO ARTESANAL", en: "POZO SANTO ARTISANAL REPOSADO" }, category: "reposado", categoryEs: "REPOSADO", categoryEn: "REPOSADO", price: 500, image: "images/pozo-santa-rosa.jpg" },
    { id: 12, name: { es: "POZO SANTO AÑEJO ARTESANAL", en: "POZO SANTO ARTISANAL AGED" }, category: "anejo", categoryEs: "AÑEJO", categoryEn: "AGED", price: 550, image: "images/pozo-santico.jpg" },
    { id: 13, name: { es: "POZO SANTO EXTRA AÑEJO ARTESANAL", en: "POZO SANTO EXTRA AGED ARTISANAL" }, category: "extra-anejo", categoryEs: "EXTRA AÑEJO", categoryEn: "EXTRA AGED", price: 600, image: "images/pozo-santico.jpg" },

    // POZO SANTO CERÁMICA ARTESANAL (4)
    { id: 14, name: { es: "POZO SANTO BLANCO CERÁMICA", en: "POZO SANTO WHITE CERAMIC" }, category: "blanco", categoryEs: "BLANCO", categoryEn: "WHITE", price: 950, image: "images/los-pozos-santos.jpg" },
    { id: 15, name: { es: "POZO SANTO REPOSADO CERÁMICA", en: "POZO SANTO REPOSADO CERAMIC" }, category: "reposado", categoryEs: "REPOSADO", categoryEn: "REPOSADO", price: 1200, image: "images/pozo-santa-rosa.jpg" },
    { id: 16, name: { es: "POZO SANTO AÑEJO CERÁMICA", en: "POZO SANTO AGED CERAMIC" }, category: "anejo", categoryEs: "AÑEJO", categoryEn: "AGED", price: 1800, image: "images/pozo-santico.jpg" },
    { id: 17, name: { es: "POZO SANTO EXTRA AÑEJO CERÁMICA", en: "POZO SANTO EXTRA AGED CERAMIC" }, category: "extra-anejo", categoryEs: "EXTRA AÑEJO", categoryEn: "EXTRA AGED", price: 2100, image: "images/pozo-santico.jpg" },

    // GRAN BRIX (3)
    { id: 18, name: { es: "GRAN BRIX CRISTALINO", en: "GRAN BRIX CRYSTAL" }, category: "cristalino", categoryEs: "CRISTALINO", categoryEn: "CRYSTAL", price: 550, image: "images/pozo-santico.jpg" },
    { id: 19, name: { es: "GRAN BRIX SABOR WHISKY", en: "GRAN BRIX WHISKY FLAVOR" }, category: "sabor", categoryEs: "SABOR", categoryEn: "FLAVOR", price: 600, image: "images/pozo-santico.jpg" },
    { id: 20, name: { es: "GRAN BRIX BLANCO 46°", en: "GRAN BRIX WHITE 46°" }, category: "blanco", categoryEs: "BLANCO", categoryEn: "WHITE", price: 650, image: "images/los-pozos-santos.jpg" },

    // MANDO SUPREMO (1)
    { id: 21, name: { es: "MANDO SUPREMO AÑEJO EDICIÓN PREMIUM", en: "MANDO SUPREMO AGED PREMIUM EDITION" }, category: "anejo", categoryEs: "AÑEJO", categoryEn: "AGED", price: 750, image: "images/pozo-santico.jpg" }
];

(function() {
    // Crear modal de búsqueda si no existe
    function crearModalBusqueda() {
        if (document.getElementById('globalSearchModal')) return;

        const modal = document.createElement('div');
        modal.id = 'globalSearchModal';
        modal.className = 'search-modal';
        modal.innerHTML = `
            <div class="search-modal-content">
                <div class="search-header">
                    <h3 class="lang-es">BUSCAR PRODUCTOS</h3>
                    <h3 class="lang-en">SEARCH PRODUCTS</h3>
                    <i class="fas fa-times search-close" id="globalCloseSearch"></i>
                </div>
                <div class="search-input-container">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" id="globalSearchInput" placeholder="Escribe para buscar..." class="search-input">
                </div>
                <div class="search-results" id="globalSearchResults">
                    <div class="search-empty">
                        <i class="fas fa-search"></i>
                        <p class="lang-es">Comienza a escribir para buscar productos</p>
                        <p class="lang-en">Start typing to search products</p>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // Estilos (si no están ya en el CSS)
        const styles = document.createElement('style');
        styles.textContent = `
            .search-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.95);
                backdrop-filter: blur(10px);
                z-index: 3000;
                display: none;
                align-items: center;
                justify-content: center;
            }
            .search-modal.active { display: flex; }
            .search-modal-content {
                background: linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%);
                border: 2px solid #FFD700;
                border-radius: 30px;
                padding: 40px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
            }
            .search-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 30px;
                padding-bottom: 15px;
                border-bottom: 1px solid rgba(255,215,0,0.2);
            }
            .search-header h3 { color: #FFD700; }
            .search-close { color: #FFF8E7; font-size: 24px; cursor: pointer; }
            .search-input-container { position: relative; margin-bottom: 30px; }
            .search-icon {
                position: absolute;
                left: 15px;
                top: 50%;
                transform: translateY(-50%);
                color: #FFD700;
            }
            .search-input {
                width: 100%;
                padding: 15px 15px 15px 45px;
                background: transparent;
                border: 1px solid rgba(255,215,0,0.3);
                border-radius: 50px;
                color: #FFF8E7;
            }
            .search-input:focus { outline: none; border-color: #FFD700; }
            .search-results { max-height: 400px; overflow-y: auto; }
            .search-empty { text-align: center; padding: 40px; color: #999; }
            .search-result-item {
                display: flex;
                align-items: center;
                gap: 15px;
                padding: 15px;
                border: 1px solid rgba(255,215,0,0.2);
                border-radius: 10px;
                margin-bottom: 10px;
                cursor: pointer;
                text-decoration: none;
                color: #FFF8E7;
            }
            .search-result-item:hover {
                border-color: #FFD700;
                background: rgba(255,215,0,0.05);
            }
            .search-result-image {
                width: 60px;
                height: 60px;
                border-radius: 10px;
                background-size: cover;
                background-position: center;
            }
            .search-result-info { flex: 1; }
            .search-result-name { font-size: 16px; margin-bottom: 5px; }
            .search-result-category { color: #FFD700; font-size: 12px; }
            .search-result-price { color: #FFF8E7; font-weight: bold; }
        `;
        document.head.appendChild(styles);

        return modal;
    }

    // Inicializar
    document.addEventListener('DOMContentLoaded', function() {
        const modal = crearModalBusqueda();
        const searchInput = document.getElementById('globalSearchInput');
        const searchResults = document.getElementById('globalSearchResults');
        const closeBtn = document.getElementById('globalCloseSearch');

        // Abrir búsqueda desde cualquier ícono de lupa
        document.querySelectorAll('.fa-search').forEach(icon => {
            icon.addEventListener('click', function() {
                modal.classList.add('active');
                setTimeout(() => searchInput.focus(), 100);
            });
        });

        // Cerrar
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
            searchInput.value = '';
            searchResults.innerHTML = `
                <div class="search-empty">
                    <i class="fas fa-search"></i>
                    <p class="lang-es">Comienza a escribir para buscar productos</p>
                    <p class="lang-en">Start typing to search products</p>
                </div>
            `;
        });

        // Cerrar con ESC
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                modal.classList.remove('active');
            }
        });

        // Búsqueda en tiempo real
        searchInput.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const lang = document.body.classList.contains('en') ? 'en' : 'es';

            if (query === '') {
                searchResults.innerHTML = `
                    <div class="search-empty">
                        <i class="fas fa-search"></i>
                        <p class="lang-es">Comienza a escribir para buscar productos</p>
                        <p class="lang-en">Start typing to search products</p>
                    </div>
                `;
                return;
            }

            // Filtrar productos
            const results = products.filter(product => {
                const name = product.name[lang].toLowerCase();
                const category = lang === 'es' ? product.categoryEs.toLowerCase() : product.categoryEn.toLowerCase();
                return name.includes(query) || category.includes(query);
            });

            if (results.length === 0) {
                searchResults.innerHTML = `
                    <div class="search-empty">
                        <i class="fas fa-search"></i>
                        <p class="lang-es">No se encontraron productos para "${query}"</p>
                        <p class="lang-en">No products found for "${query}"</p>
                    </div>
                `;
                return;
            }

            // Mostrar resultados
            let html = '';
            results.forEach(product => {
                html += `
                    <a href="producto.html?id=${product.id}" class="search-result-item">
                        <div class="search-result-image" style="background-image: url('${product.image}')"></div>
                        <div class="search-result-info">
                            <div class="search-result-name">${product.name[lang]}</div>
                            <div class="search-result-category">${lang === 'es' ? product.categoryEs : product.categoryEn}</div>
                            <div class="search-result-price">$${product.price} MXN</div>
                        </div>
                    </a>
                `;
            });

            searchResults.innerHTML = html;
        });
    });
})();