// ==========================================
// CONFIGURACIÓN DE LISTA DE VIAJE (ANGELICA)
// ==========================================
const PACKING_LIST = [
    {
        category: "📄 Documentos Importantes",
        items: [
            { id: "pack_pasaporte", text: "Cédula de Ciudadanía Colombiana (física y vigente)" },
            { id: "pack_vuelos", text: "Boletos aéreos de LATAM Cali-Lima impresos / digitales" },
            { id: "pack_vuelos_cusco", text: "Boletos aéreos de LATAM Lima-Cusco" },
            { id: "pack_seguro", text: "Tarjeta de Seguro Médico Internacional" }
        ]
    },
    {
        category: "🧥 Ropa para Lima (Frío/Humedad)",
        items: [
            { id: "pack_lima_abrigo", text: "Chaqueta ligera o buzo abrigado intermedio (1-2)" },
            { id: "pack_lima_pantalon", text: "Pantalones largos abrigados (jeans o leggings)" },
            { id: "pack_lima_polos", text: "Camisetas manga larga" }
        ]
    },
    {
        category: "desierto 🏜️ Ropa para Ica/Paracas (Sol/Viento)",
        items: [
            { id: "pack_cortavientos", text: "🧥 Chaqueta Cortavientos Gruesa (¡Crucial para la lancha en Paracas!)" },
            { id: "pack_lentes", text: "🕶️ Lentes de sol (areneros de Huacachina y sandboarding)" },
            { id: "pack_zapatillas", text: "👟 Zapatillas deportivas cerradas (para caminar en arena)" },
            { id: "pack_gorro", text: "🧢 Gorro o sombrero con cordón / sujetador" }
        ]
    },
    {
        category: "❄️ Ropa para Cusco (Invierno Andino - Frío Extremo)",
        items: [
            { id: "pack_cusco_abrigo", text: "Chaqueta térmica gruesa de invierno (plumas o acolchada)" },
            { id: "pack_cusco_termicos", text: "Camiseta y calzas térmicas (para usar debajo de la ropa de noche)" },
            { id: "pack_cusco_lana", text: "Gorro de lana, guantes abrigados y medias de lana gruesa" }
        ]
    },
    {
        category: "🦟 Ropa para Machu Picchu (Selva Alta)",
        items: [
            { id: "pack_mp_repelente", text: "🧴 Repelente de insectos fuerte con DEET (¡Muy importante!)" },
            { id: "pack_mp_camisas", text: "Camisetas manga larga delgadas (colores claros para mosquitos)" },
            { id: "pack_mp_trekking", text: "Pantalones de senderismo cómodos y ligeros" },
            { id: "pack_mp_lluvia", text: "Poncho o impermeable ligero para lluvias sorpresivas" }
        ]
    },
    {
        category: "💊 Salud y Cuidado Personal",
        items: [
            { id: "pack_bloqueador", text: "☀️ Bloqueador solar SPF 50+ (altitud quema sumamente rápido)" },
            { id: "pack_balsamo", text: "Bálsamo labial protector (el aire andino reseca mucho)" },
            { id: "pack_soroche", text: "Pastillas para el soroche o mareos (se compran también en Perú)" },
            { id: "pack_cremas", text: "Crema hidratante corporal y facial" }
        ]
    },
    {
        category: "🔌 Tecnología",
        items: [
            { id: "pack_cargador", text: "Cargadores de celular y dispositivos" },
            { id: "pack_powerbank", text: "🔋 Batería portátil cargada (indispensable para días largos)" }
        ]
    }
];

// Coordenadas de Referencia para los Destinos (Miraflores base por defecto)
const LIMA_BASE_COORDS = { lat: -12.1287, lon: -77.0223 }; // Av. Benavides 1130

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let state = {
    packingItems: {},
    notes: ""
};

// Day index state
let activeDay = "1";
let userLocation = null;

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    renderPackingList();
    setupNavigation();
    setupCountdown();
    setupNotes();
    setupResetButton();
    initGeolocation();
});

// ==========================================
// CARGAR Y GUARDAR ESTADO
// ==========================================
function loadState() {
    const savedState = localStorage.getItem("viaje_lima_cusco_state_angelica");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            if (!state.packingItems) state.packingItems = {};
            if (!state.notes) state.notes = "";
        } catch (e) {
            console.error("Error cargando estado de Angelica:", e);
        }
    }
}

function saveState() {
    localStorage.setItem("viaje_lima_cusco_state_angelica", JSON.stringify(state));
}

// ==========================================
// RENDERIZAR LISTAS
// ==========================================
function renderPackingList() {
    const container = document.getElementById("packing-list-render");
    if (!container) return;
    container.innerHTML = "";
    
    PACKING_LIST.forEach(group => {
        const groupEl = document.createElement("div");
        groupEl.className = "checklist-day-group";
        
        const titleEl = document.createElement("h3");
        titleEl.textContent = group.category;
        groupEl.appendChild(titleEl);
        
        group.items.forEach(item => {
            const isChecked = !!state.packingItems[item.id];
            const itemEl = document.createElement("div");
            itemEl.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            
            itemEl.innerHTML = `
                <div class="checkbox-container">
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="item-info">
                    <h4>${item.text}</h4>
                </div>
            `;
            
            itemEl.addEventListener("click", () => {
                state.packingItems[item.id] = !state.packingItems[item.id];
                itemEl.className = `checklist-item ${state.packingItems[item.id] ? 'checked' : ''}`;
                saveState();
            });
            
            groupEl.appendChild(itemEl);
        });
        container.appendChild(groupEl);
    });
}

// ==========================================
// GEOLOCALIZACIÓN Y TIEMPO DE VIAJE
// ==========================================
function initGeolocation() {
    const btnUpdate = document.getElementById("btn-update-loc");
    if (btnUpdate) {
        btnUpdate.addEventListener("click", () => {
            detectLocation();
        });
    }
    detectLocation();
}

function detectLocation() {
    const status = document.getElementById("loc-status");
    if (!navigator.geolocation) {
        status.textContent = "Geolocalización no soportada por el navegador. Usando coordenadas base.";
        calculateRouteFromBase();
        return;
    }
    
    status.textContent = "Obteniendo ubicación del dispositivo...";
    navigator.geolocation.getCurrentPosition(
        (position) => {
            userLocation = {
                lat: position.coords.latitude,
                lon: position.coords.longitude
            };
            status.textContent = "📍 Ubicación del GPS activada con éxito.";
            calculateAndDisplayRoute(userLocation);
        },
        (error) => {
            console.warn("Error Geolocation:", error);
            status.textContent = "⚠️ Ubicación desactivada. Usando base en Miraflores.";
            calculateRouteFromBase();
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
}

// Haversine formula
function haversineDistance(coords1, coords2) {
    const R = 6371; // km
    const dLat = toRad(coords2.lat - coords1.lat);
    const dLon = toRad(coords2.lon - coords1.lon);
    const lat1 = toRad(coords1.lat);
    const lat2 = toRad(coords2.lat);

    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return R * c;
}

function toRad(value) {
    return value * Math.PI / 180;
}

function calculateRouteFromBase() {
    calculateAndDisplayRoute(LIMA_BASE_COORDS, true);
}

function calculateAndDisplayRoute(origin, isBase = false) {
    const resultsContainer = document.getElementById("loc-results");
    if (!resultsContainer) return;
    
    // Obtener la siguiente actividad con coordenadas para el Día Activo
    const activeCard = document.getElementById(`day-card-${activeDay}`);
    if (!activeCard) return;
    
    const nextActivityEl = activeCard.querySelector("li[data-lat]");
    if (!nextActivityEl) {
        resultsContainer.style.display = "none";
        return;
    }
    
    const destLat = parseFloat(nextActivityEl.dataset.lat);
    const destLon = parseFloat(nextActivityEl.dataset.lon);
    const destName = nextActivityEl.dataset.name;
    
    // Calcular distancia Haversine
    const distanceKm = haversineDistance(origin, { lat: destLat, lon: destLon });
    
    // Estimar velocidad promedio según distancia (tránsito de ciudad vs carretera)
    let speedKmh = 22; // 22 km/h velocidad promedio en Lima/Cusco por tráfico
    if (distanceKm > 100) {
        speedKmh = 70; // 70 km/h en carretera (Lima a Paracas)
    }
    
    const timeHours = distanceKm / speedKmh;
    const timeMinutes = Math.round(timeHours * 60);
    
    let timeString = "";
    if (timeMinutes >= 60) {
        const h = Math.floor(timeMinutes / 60);
        const m = timeMinutes % 60;
        timeString = `${h}h ${m}m`;
    } else {
        timeString = `${timeMinutes} min`;
    }
    
    resultsContainer.innerHTML = `
        <div class="loc-destination-info">
            Hacia: <strong>${destName}</strong>
        </div>
        <div class="loc-data-grid">
            <div class="loc-data-item">
                <small>Distancia aprox.</small>
                <span>${distanceKm.toFixed(1)} km</span>
            </div>
            <div class="loc-data-item">
                <small>Tiempo estimado</small>
                <span>${timeString}</span>
            </div>
        </div>
        <a href="https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lon}&destination=${destLat},${destLon}" 
           target="_blank" class="btn btn-sm btn-primary btn-route-maps">
            <i class="fa-solid fa-map-location-dot"></i> Navegar en Tiempo Real (Google Maps)
        </a>
    `;
    resultsContainer.style.display = "flex";
}

// ==========================================
// NAVEGACIÓN Y TABS
// ==========================================
function setupNavigation() {
    // Bottom Nav
    const navItems = document.querySelectorAll(".nav-item");
    const tabPanes = document.querySelectorAll(".tab-pane");
    
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const target = item.dataset.target;
            
            navItems.forEach(n => n.classList.remove("active"));
            tabPanes.forEach(t => t.classList.remove("active"));
            
            item.classList.add("active");
            document.getElementById(target).classList.add("active");
            
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Day Selector
    const dayBtns = document.querySelectorAll(".day-btn");
    const dayCards = document.querySelectorAll(".day-card");
    
    dayBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            activeDay = btn.dataset.day;
            
            dayBtns.forEach(b => b.classList.remove("active"));
            dayCards.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(`day-card-${activeDay}`).classList.add("active");
            
            // Recalcular ruta según el día seleccionado
            if (userLocation) {
                calculateAndDisplayRoute(userLocation);
            } else {
                calculateRouteFromBase();
            }
        });
    });
}

// ==========================================
// TEMPORIZADOR DE CUENTA REGRESIVA
// ==========================================
function setupCountdown() {
    const tripDate = new Date("2026-08-04T15:00:00").getTime();
    
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = tripDate - now;
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById("countdown-widget").innerHTML = "<div class='countdown-time text-emerald'>¡Buen Viaje! ✈️</div>";
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        document.getElementById("countdown-days").textContent = days.toString().padStart(2, '0');
        document.getElementById("countdown-hours").textContent = hours.toString().padStart(2, '0');
        document.getElementById("countdown-mins").textContent = minutes.toString().padStart(2, '0');
        
    }, 1000);
}

// ==========================================
// AUTOSAVE NOTAS
// ==========================================
function setupNotes() {
    const notesTextarea = document.getElementById("personal-notes");
    const statusText = document.getElementById("notes-status");
    if (!notesTextarea) return;
    
    notesTextarea.value = state.notes || "";
    let saveTimeout;
    
    notesTextarea.addEventListener("input", () => {
        statusText.textContent = "Guardando...";
        statusText.style.color = "var(--primary)";
        
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            state.notes = notesTextarea.value;
            saveState();
            statusText.textContent = "Guardado automáticamente";
            statusText.style.color = "var(--text-muted)";
        }, 1000);
    });
}

// ==========================================
// RESTABLECER TODO
// ==========================================
function setupResetButton() {
    const resetBtn = document.getElementById("clear-data-btn");
    if (!resetBtn) return;
    
    resetBtn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas restablecer tu lista de equipaje y tus notas?")) {
            state.packingItems = {};
            state.notes = "";
            saveState();
            
            const notesTextarea = document.getElementById("personal-notes");
            if (notesTextarea) notesTextarea.value = "";
            
            renderPackingList();
            
            const statusText = document.getElementById("notes-status");
            if (statusText) statusText.textContent = "Datos restablecidos con éxito";
            
            setTimeout(() => {
                if (statusText) statusText.textContent = "Guardado automáticamente";
            }, 3000);
        }
    });
}
