// ==========================================
// CONFIGURACIÓN DE DATOS BASE (CHECKLIST PAGOS)
// ==========================================
const DEFAULT_CHECKLIST = [
    {
        day: 1,
        dayLabel: "Día 1: Martes 4 de Agosto",
        items: [
            { id: "t1_llegada", text: "🚕 Traslado 1 (Llegada): Uber Comfort/Black Aeropuerto ➔ Av. Benavides 1130", cost: 85.00, category: "Traslados" },
            { id: "u_casa_barranco", text: "📱 Uber: Apto ➔ Barranco", cost: 15.00, category: "Ubers" },
            { id: "u_barranco_larcomar", text: "📱 Uber: Barranco ➔ Larcomar", cost: 12.00, category: "Ubers" },
            { id: "u_larcomar_casa", text: "📱 Uber: Larcomar ➔ Apto", cost: 10.00, category: "Ubers" },
            { id: "c_larcomar", text: "🍽️ Cena de Bienvenida en Larcomar (Popular o Mangos)", cost: 160.00, category: "Restaurantes" },
            { id: "a_bogota_escala", text: "🍔 Almuerzo/Snacks en Aeropuerto El Dorado (escala BOG)", cost: 50.00, category: "Restaurantes" },
            { id: "f_emergencia_mira", text: "🎟️ Reserva/Fondo de Emergencia Local (Miraflores)", cost: 5.00, category: "Ocio" }
        ]
    },
    {
        day: 2,
        dayLabel: "Día 2: Miércoles 5 de Agosto",
        items: [
            { id: "t_paracas_ica", text: "🌊 Tour Full-Day Paracas/Ica: Opción Grupal Premium Todo Incluido (Recogida en la puerta)", cost: 280.00, category: "Tours" },
            { id: "u_jose_oficina", text: "📱 Uber: Traslado de José a la oficina ida/vuelta", cost: 20.00, category: "Ubers" }
        ]
    },
    {
        day: 3,
        dayLabel: "Día 3: Jueves 6 de Agosto",
        items: [
            { id: "u_casa_centro", text: "📱 Uber: Apto ➔ Centro Histórico", cost: 25.00, category: "Ubers" },
            { id: "u_centro_circuito", text: "📱 Uber: Centro ➔ Circuito Mágico del Agua", cost: 12.00, category: "Ubers" },
            { id: "u_circuito_maketto", text: "📱 Uber: Circuito Mágico ➔ Maketto (Miraflores)", cost: 18.00, category: "Ubers" },
            { id: "u_maketto_casa", text: "📱 Uber: Maketto ➔ Apto", cost: 10.00, category: "Ubers" },
            { id: "e_circuito_agua", text: "🎟️ Entradas: Circuito Mágico del Agua (S/ 4.00 por persona)", cost: 8.00, category: "Ocio" },
            { id: "c_maketto", text: "🍽️ Cena Asiática: Maketto (Ramen/Baos)", cost: 160.00, category: "Restaurantes" }
        ]
    },
    {
        day: 4,
        dayLabel: "Día 4: Viernes 7 de Agosto",
        items: [
            { id: "a_punto_azul", text: "🍽️ Almuerzo Marino: Punto Azul (Miraflores)", cost: 120.00, category: "Restaurantes" },
            { id: "t2_cusco", text: "🚕 Traslado 2 (Partida Cusco): Uber Apto ➔ Aeropuerto Jorge Chávez", cost: 85.00, category: "Traslados" },
            { id: "c_cusco_llegada", text: "🍽️ Cena ligera en Cusco (Día de llegada)", cost: 100.00, category: "Restaurantes" },
            { id: "u_locales_rapidos", text: "📱 Ubers rápidos locales", cost: 10.00, category: "Ubers" }
        ]
    },
    {
        day: 5,
        dayLabel: "Día 5: Sábado 8 de Agosto",
        items: [
            { id: "p_apu_andino", text: "🏔️ Pago 50% Restante Apu Andino (Pago directo en Cusco)", cost: 2335.00, category: "Tours" },
            { id: "c_aguas_calientes", text: "🍽️ Cena libre en Aguas Calientes (Bolsillo Cusco)", cost: 140.00, category: "Restaurantes" }
        ]
    },
    {
        day: 6,
        dayLabel: "Día 6: Domingo 9 de Agosto",
        items: [
            { id: "a_aguas_calientes", text: "🍽️ Almuerzo libre en Aguas Calientes (Bolsillo Cusco)", cost: 180.00, category: "Restaurantes" },
            { id: "c_cusco", text: "🍽️ Cena ligera en Cusco (Bolsillo Cusco)", cost: 100.00, category: "Restaurantes" },
            { id: "p_propinas_guia", text: "🪙 Propinas de Guía / Gastos menores en ruta (Cusco)", cost: 100.00, category: "Ocio" },
            { id: "f_snacks_recuerdos", text: "🏔️ Fondo general para Snacks / Recuerdos (Cusco)", cost: 240.00, category: "Ocio" }
        ]
    },
    {
        day: 7,
        dayLabel: "Día 7: Lunes 10 de Agosto",
        items: [
            { id: "t_cusco_aero", text: "🚕 Taxi: Apto Cusco ➔ Aeropuerto Cusco", cost: 20.00, category: "Traslados" },
            { id: "a_cusco_rapido", text: "🍽️ Almuerzo rápido en Cusco o Aeropuerto", cost: 60.00, category: "Restaurantes" },
            { id: "t3_retorno", text: "🚕 Traslado 3 (Retorno Cusco): Uber Aeropuerto Jorge Chávez ➔ Apto", cost: 85.00, category: "Traslados" },
            { id: "u_casa_7sopas", text: "📱 Uber: Apto ➔ 7 Sopas (Miraflores) ida/vuelta", cost: 18.00, category: "Ubers" },
            { id: "c_7sopas", text: "🍽️ Cena de Despedida: 7 Sopas (Parque Kennedy)", cost: 80.00, category: "Restaurantes" }
        ]
    },
    {
        day: 8,
        dayLabel: "Día 8: Martes 11 de Agosto",
        items: [
            { id: "d_apto_groceries", text: "🛒 Desayuno en el Apto (Ingredientes / Compras)", cost: 20.00, category: "Restaurantes" },
            { id: "t4_cali", text: "🚕 Traslado 4 (Regreso Cali): Uber Apto ➔ Aeropuerto Jorge Chávez", cost: 85.00, category: "Traslados" },
            { id: "m_variacion_rest", text: "🎟️ Margen de Variación final de Restaurantes (Lima)", cost: 47.00, category: "Restaurantes" }
        ]
    }
];

// ==========================================
// CONFIGURACIÓN DE LISTA DE VIAJE (JOSÉ)
// ==========================================
const PACKING_LIST = [
    {
        category: "📄 Documentos Importantes",
        items: [
            { id: "pack_dni", text: "DNI vigente (físico)" },
            { id: "pack_entradas", text: "Entradas impresas / digitales para Machu Picchu y boletos de tren" },
            { id: "pack_vuelos_cusco", text: "Boletos aéreos de LATAM Lima-Cusco" },
            { id: "pack_cargador", text: "Cargador de celular y dispositivos" },
            { id: "pack_powerbank", text: "🔋 Batería portátil cargada (indispensable para las excursiones)" }
        ]
    },
    {
        category: "❄️ Ropa para Cusco (Invierno Andino - Frío Extremo)",
        items: [
            { id: "pack_cusco_abrigo", text: "Chaqueta de plumas (gruesa y abrigadora)" },
            { id: "pack_cusco_buzos", text: "Sacos / buzos abrigados para el frío de la noche" },
            { id: "pack_cusco_lana", text: "Gorro de lana, guantes abrigados y medias de lana gruesa" }
        ]
    },
    {
        category: "🦟 Ropa para Machu Picchu (Selva Alta)",
        items: [
            { id: "pack_mp_repelente", text: "🧴 Repelente de insectos fuerte con DEET (indispensable)" },
            { id: "pack_mp_camisetas", text: "Camisetas delgadas de manga larga (protección de mosquitos y sol)" },
            { id: "pack_mp_trekking", text: "Pantalones de trekking cómodos" },
            { id: "pack_mp_impermeable", text: "Chaqueta impermeable o poncho de lluvia" }
        ]
    },
    {
        category: "💊 Salud y Cuidado Personal",
        items: [
            { id: "pack_bloqueador", text: "☀️ Bloqueador solar SPF 50+ (la radiación andina es alta)" },
            { id: "pack_balsamo", text: "Bálsamo labial protector (el aire seco corta los labios)" },
            { id: "pack_soroche", text: "Pastillas para el soroche (mal de altura)" }
        ]
    }
];

// Coordenadas de Referencia para los Destinos (Miraflores base por defecto)
const LIMA_BASE_COORDS = { lat: -12.1287, lon: -77.0223 }; // Av. Benavides 1130

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let state = {
    checkedItems: {},
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
    renderChecklist();
    renderPackingList();
    updateCalculations();
    setupNavigation();
    initItineraryViewFilter();
    setupCountdown();
    setupNotes();
    setupResetButton();
    initGeolocation();
    startLocalClock();
});

// ==========================================
// CARGAR Y GUARDAR ESTADO
// ==========================================
function loadState() {
    try {
        const savedState = localStorage.getItem("viaje_lima_cusco_state");
        if (savedState) {
            state = JSON.parse(savedState);
            if (!state.checkedItems) state.checkedItems = {};
            if (!state.packingItems) state.packingItems = {};
            if (!state.notes) state.notes = "";
        }
    } catch (e) {
        console.error("Error cargando estado de localStorage:", e);
    }
}

function saveState() {
    try {
        localStorage.setItem("viaje_lima_cusco_state", JSON.stringify(state));
    } catch (e) {
        console.error("Error guardando estado en localStorage:", e);
    }
}

// ==========================================
// RENDERIZAR LISTAS
// ==========================================
function renderChecklist() {
    const container = document.getElementById("checklist-render");
    if (!container) return;
    container.innerHTML = "";
    
    DEFAULT_CHECKLIST.forEach(group => {
        const groupEl = document.createElement("div");
        groupEl.className = "checklist-day-group";
        
        const titleEl = document.createElement("h3");
        titleEl.textContent = group.dayLabel;
        groupEl.appendChild(titleEl);
        
        group.items.forEach(item => {
            const isChecked = !!state.checkedItems[item.id];
            const itemEl = document.createElement("div");
            itemEl.className = `checklist-item ${isChecked ? 'checked' : ''}`;
            
            itemEl.innerHTML = `
                <div class="checkbox-container">
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="item-info">
                    <h4>${item.text}</h4>
                    <p>${item.category}</p>
                </div>
                <div class="item-cost">S/ ${item.cost.toFixed(2)}</div>
            `;
            
            itemEl.addEventListener("click", () => {
                state.checkedItems[item.id] = !state.checkedItems[item.id];
                itemEl.className = `checklist-item ${state.checkedItems[item.id] ? 'checked' : ''}`;
                saveState();
                updateCalculations();
            });
            
            groupEl.appendChild(itemEl);
        });
        container.appendChild(groupEl);
    });
}

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
// CÁLCULOS FINANCIEROS
// ==========================================
function updateCalculations() {
    let totalBudget = 0;
    let totalPaid = 0;
    
    DEFAULT_CHECKLIST.forEach(group => {
        group.items.forEach(item => {
            totalBudget += item.cost;
            if (state.checkedItems[item.id]) {
                totalPaid += item.cost;
            }
        });
    });
    
    const totalPending = totalBudget - totalPaid;
    const progressPercent = totalBudget > 0 ? Math.round((totalPaid / totalBudget) * 100) : 0;
    
    document.getElementById("val-total").textContent = `S/ ${totalBudget.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
    document.getElementById("val-paid").textContent = `S/ ${totalPaid.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
    document.getElementById("val-pending").textContent = `S/ ${totalPending.toLocaleString('es-PE', { minimumFractionDigits: 2 })}`;
    
    const progressBar = document.getElementById("main-progress-bar");
    const progressText = document.getElementById("progress-percentage");
    
    if (progressBar && progressText) {
        progressBar.style.width = `${progressPercent}%`;
        progressText.textContent = `${progressPercent}%`;
    }
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

function calculateRouteFromBase() {
    // Usar la base de Miraflores como origen
    calculateAndDisplayRoute(LIMA_BASE_COORDS, true);
}

function calculateAndDisplayRoute(origin, isBase = false) {
    const resultsContainer = document.getElementById("loc-results");
    if (!resultsContainer) return;
    
    // Obtener la siguiente actividad con coordenadas para el Día Activo (que esté visible)
    const activeCard = document.getElementById(`day-card-${activeDay}`);
    if (!activeCard) return;
    
    const activities = Array.from(activeCard.querySelectorAll("li[data-lat]"));
    const nextActivityEl = activities.find(el => el.style.display !== "none");
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
            
            // Actualizar ubicación del reloj de inmediato
            updateClockLocation();
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
        if (confirm("¿Estás seguro de que deseas restablecer todos tus pagos, listas de equipaje y notas?")) {
            state.checkedItems = {};
            state.packingItems = {};
            state.notes = "";
            saveState();
            
            const notesTextarea = document.getElementById("personal-notes");
            if (notesTextarea) notesTextarea.value = "";
            
            renderChecklist();
            renderPackingList();
            updateCalculations();
            
            const statusText = document.getElementById("notes-status");
            if (statusText) statusText.textContent = "Datos restablecidos con éxito";
            
            setTimeout(() => {
                if (statusText) statusText.textContent = "Guardado automáticamente";
            }, 3000);
        }
    });
}

// ==========================================
// RELOJ LOCAL EN TIEMPO REAL
// ==========================================
function startLocalClock() {
    updateClock();
    setInterval(updateClock, 1000);
}

function updateClock() {
    const clockEl = document.getElementById("clock-hms");
    if (!clockEl) return;
    try {
        const timeString = new Date().toLocaleTimeString('en-US', {
            timeZone: 'America/Bogota', // UTC-5 (Bogotá/Lima/Cali timezone)
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });
        const parts = timeString.split(' ');
        const time = parts[0];
        const ampm = parts[1] || '';
        clockEl.innerHTML = `${time} <small style="font-size: 0.75rem; color: var(--text-secondary); margin-left: 2px;">${ampm}</small>`;
    } catch (e) {
        // Fallback for environment/browser compatibility
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        clockEl.innerHTML = `${hours}:${minutes}:${seconds} <small style="font-size: 0.75rem; color: var(--text-secondary); margin-left: 2px;">${ampm}</small>`;
    }
    updateClockLocation();
}

function updateClockLocation() {
    const cityEl = document.getElementById("clock-city");
    if (!cityEl) return;
    if (userLocation) {
        const lat = userLocation.lat;
        const lon = userLocation.lon;
        // Check ranges for Cali, Lima, Cusco
        if (lat >= 3.0 && lat <= 4.0 && lon >= -77.0 && lon <= -76.0) {
            cityEl.innerHTML = "📍 Cali, Colombia";
        } else if (lat >= -12.5 && lat <= -11.8 && lon >= -77.3 && lon <= -76.8) {
            cityEl.innerHTML = "📍 Lima, Perú";
        } else if (lat >= -13.7 && lat <= -13.3 && lon >= -72.2 && lon <= -71.7) {
            cityEl.innerHTML = "📍 Cusco, Perú";
        } else {
            cityEl.innerHTML = "📍 Ubicación GPS activa";
        }
    } else {
        // Fallback predefinido según el día activo de viaje
        if (activeDay === "1" || activeDay === "8") {
            cityEl.innerHTML = "📍 Cali (Predefinido)";
        } else if (["4", "5", "6", "7"].includes(activeDay)) {
            cityEl.innerHTML = "📍 Cusco (Predefinido)";
        } else {
            cityEl.innerHTML = "📍 Lima (Predefinido)";
        }
    }
}

// ==========================================
// FILTRADO DE VISTA DE ITINERARIO (JOSÉ & ANGELICA)
// ==========================================
function initItineraryViewFilter() {
    const viewSelector = document.querySelector(".itinerary-view-selector");
    if (!viewSelector) return;

    const viewBtns = viewSelector.querySelectorAll(".view-btn");
    
    // Leer preferencia de localStorage, por defecto "jose"
    let activeView = "jose";
    try {
        activeView = localStorage.getItem("jose_dashboard_itinerary_view") || "jose";
    } catch (e) {
        console.warn("localStorage no está disponible para leer vista:", e);
    }
    
    // Aplicar vista activa
    applyItineraryView(activeView);
    
    viewBtns.forEach(btn => {
        // Establecer clase activa inicial
        if (btn.dataset.view === activeView) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
        
        btn.addEventListener("click", () => {
            const selectedView = btn.dataset.view;
            activeView = selectedView;
            try {
                localStorage.setItem("jose_dashboard_itinerary_view", selectedView);
            } catch (e) {
                console.warn("No se pudo guardar la preferencia en localStorage:", e);
            }
            
            viewBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            applyItineraryView(selectedView);
        });
    });
}

function applyItineraryView(view) {
    const timelineItems = document.querySelectorAll(".timeline li[data-owner]");
    
    timelineItems.forEach(item => {
        const owner = item.dataset.owner;
        if (view === "jose") {
            // Mostrar solo los de jose y compartidos (shared)
            if (owner === "angelica") {
                item.style.display = "none";
            } else {
                item.style.display = ""; // Restablecer display por defecto
            }
        } else {
            // Mostrar todo (vista completa de Angelica)
            item.style.display = ""; // Restablecer display por defecto
        }
    });
    
    // Recalcular ruta de GPS con los elementos visibles
    if (userLocation) {
        calculateAndDisplayRoute(userLocation);
    } else {
        calculateRouteFromBase();
    }
}
