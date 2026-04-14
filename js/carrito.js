// js/carrito.js - Código completo del carrito
(function() {
    // 1. INICIALIZAR CARRITO
    let carrito = JSON.parse(localStorage.getItem('carritoPozoSanto')) || [];
    actualizarContador();

    // 2. FUNCIÓN PARA AGREGAR AL CARRITO (disponible globalmente)
    window.agregarAlCarrito = function(producto) {
        let existente = carrito.find(item => item.id == producto.id);
        
        if (existente) {
            existente.cantidad += 1;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1,
                imagen: producto.imagen
            });
        }
        
        localStorage.setItem('carritoPozoSanto', JSON.stringify(carrito));
        actualizarContador();
        return true;
    };

    // 3. ACTUALIZAR CONTADOR
    function actualizarContador() {
        let totalItems = carrito.reduce((sum, item) => sum + (item.cantidad || 1), 0);
        let contador = document.querySelector('.cart-count');
        if (contador) {
            contador.textContent = totalItems;
            contador.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // 4. CREAR MODAL DE CARRITO
    function crearModalCarrito() {
        if (document.getElementById('cartModalSimple')) return;
        
        const modal = document.createElement('div');
        modal.id = 'cartModalSimple';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.95);
            backdrop-filter: blur(10px);
            z-index: 4000;
            display: none;
            align-items: center;
            justify-content: center;
        `;
        
        modal.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%);
                border: 2px solid #FFD700;
                border-radius: 30px;
                padding: 40px;
                width: 90%;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
            ">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 1px solid rgba(255,215,0,0.2); padding-bottom: 15px;">
                    <h3 style="color: #FFD700; font-size: 24px;">🛒 CARRITO</h3>
                    <i class="fas fa-times" id="closeCartModal" style="color: #FFF8E7; font-size: 24px; cursor: pointer;"></i>
                </div>
                <div id="cartItemsList"></div>
                <div id="cartTotal" style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(255,215,0,0.2); font-size: 20px; display: flex; justify-content: space-between;">
                    <span>TOTAL:</span>
                    <span style="color: #FFD700;" id="cartTotalAmount">$0 MXN</span>
                </div>
                <button id="checkoutBtn" style="
                    width: 100%;
                    padding: 15px;
                    background: #FFD700;
                    border: none;
                    color: #0A0A0A;
                    font-weight: 600;
                    letter-spacing: 2px;
                    cursor: pointer;
                    margin-top: 20px;
                    border-radius: 50px;
                ">FINALIZAR COMPRA</button>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Cerrar modal
        document.getElementById('closeCartModal').addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Click fuera para cerrar
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // 5. ACTUALIZAR VISTA DEL CARRITO
    window.actualizarVistaCarrito = function() {
        const lista = document.getElementById('cartItemsList');
        const totalSpan = document.getElementById('cartTotalAmount');
        if (!lista) return;
        
        if (carrito.length === 0) {
            lista.innerHTML = '<div style="text-align: center; padding: 40px; color: #999;"><i class="fas fa-shopping-cart" style="font-size: 48px; margin-bottom: 15px; opacity: 0.3;"></i><p>Tu carrito está vacío</p></div>';
            if (totalSpan) totalSpan.innerText = '$0 MXN';
            return;
        }
        
        let html = '';
        let totalGeneral = 0;
        
        carrito.forEach((item, index) => {
            let subtotal = item.precio * item.cantidad;
            totalGeneral += subtotal;
            
            html += `
                <div style="display: flex; gap: 15px; margin-bottom: 15px; padding: 15px; border: 1px solid rgba(255,215,0,0.2); border-radius: 10px;">
                    <div style="width: 60px; height: 60px; border-radius: 10px; background-image: url('${item.imagen}'); background-size: cover; background-position: center;"></div>
                    <div style="flex: 1;">
                        <div style="font-size: 14px; margin-bottom: 5px;">${item.nombre}</div>
                        <div style="color: #FFD700;">$${item.precio} MXN</div>
                        <div style="display: flex; align-items: center; gap: 10px; margin-top: 5px;">
                            <button class="qty-btn" data-index="${index}" data-change="-1" style="background: transparent; border: 1px solid #FFD700; color: #FFF8E7; width: 25px; height: 25px; cursor: pointer;">-</button>
                            <span>${item.cantidad}</span>
                            <button class="qty-btn" data-index="${index}" data-change="1" style="background: transparent; border: 1px solid #FFD700; color: #FFF8E7; width: 25px; height: 25px; cursor: pointer;">+</button>
                        </div>
                    </div>
                    <i class="fas fa-trash remove-item" data-index="${index}" style="color: #FFD700; cursor: pointer; align-self: center;"></i>
                </div>
            `;
        });
        
        lista.innerHTML = html;
        if (totalSpan) totalSpan.innerText = `$${totalGeneral} MXN`;
        
        // Eventos para botones de cantidad
        document.querySelectorAll('.qty-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                let index = this.dataset.index;
                let change = parseInt(this.dataset.change);
                carrito[index].cantidad += change;
                
                if (carrito[index].cantidad <= 0) {
                    carrito.splice(index, 1);
                }
                
                localStorage.setItem('carritoPozoSanto', JSON.stringify(carrito));
                actualizarContador();
                window.actualizarVistaCarrito();
            });
        });
        
        // Eventos para eliminar
        document.querySelectorAll('.remove-item').forEach(icon => {
            icon.addEventListener('click', function() {
                let index = this.dataset.index;
                carrito.splice(index, 1);
                localStorage.setItem('carritoPozoSanto', JSON.stringify(carrito));
                actualizarContador();
                window.actualizarVistaCarrito();
            });
        });
    };

    // 6. INICIALIZAR EN TODAS LAS PÁGINAS
    document.addEventListener('DOMContentLoaded', function() {
        crearModalCarrito();
        
        // Abrir carrito al hacer clic en el ícono (en TODAS las páginas)
        const cartIcon = document.querySelector('.fa-shopping-cart');
        if (cartIcon) {
            cartIcon.addEventListener('click', function() {
                window.actualizarVistaCarrito();
                document.getElementById('cartModalSimple').style.display = 'flex';
            });
        }
        
        // Checkout
        document.addEventListener('click', function(e) {
            if (e.target.id === 'checkoutBtn') {
                if (carrito.length === 0) {
                    alert('Tu carrito está vacío');
                } else {
                    alert('¡Gracias por tu compra! Te contactaremos pronto.');
                    carrito = [];
                    localStorage.setItem('carritoPozoSanto', JSON.stringify(carrito));
                    actualizarContador();
                    window.actualizarVistaCarrito();
                    document.getElementById('cartModalSimple').style.display = 'none';
                }
            }
        });
    });

    // Exponer funciones necesarias
    window.carrito = carrito;
    window.actualizarContador = actualizarContador;
})();