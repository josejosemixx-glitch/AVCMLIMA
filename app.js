// ==========================================
// CONFIGURACIÓN DE DATOS BASE (CHECKLIST)
// ==========================================
const DEFAULT_CHECKLIST = [
    {
        day: 1,
        dayLabel: "Día 1: Martes 4 de Agosto",
        items: [
            { id: "t1_llegada", text: "🚕 Traslado 1 (Llegada): Uber Comfort/Black Aeropuerto ➔ Av. Benavides 1130", cost: 85.00, category: "Traslados" },
            { id: "u_casa_barranco", text: "📱 Uber: Casa ➔ Barranco", cost: 15.00, category: "Ubers" },
            { id: "u_barranco_larcomar", text: "📱 Uber: Barranco ➔ Larcomar", cost: 12.00, category: "Ubers" },
            { id: "u_larcomar_casa", text: "📱 Uber: Larcomar ➔ Casa", cost: 10.00, category: "Ubers" },
            { id: "c_larcomar", text: "🍽️ Cena de Bienvenida en Larcomar (Popular o Mangos)", cost: 160.00, category: "Restaurantes" },
            { id: "f_emergencia_mira", text: "🎟️ Reserva/Fondo de Emergencia Local (Miraflores)", cost: 5.00, category: "Ocio" }
        ]
    },
    {
        day: 2,
        dayLabel: "Día 2: Miércoles 5 de Agosto",
        items: [
            { id: "t_paracas_ica", text: "🌊 Tour Full-Day Paracas/Ica: Opción Grupal Premium Todo Incluido (Recojo en puerta)", cost: 280.00, category: "Tours" },
            { id: "u_jose_oficina", text: "📱 Uber: Traslado de José a la oficina ida/vuelta", cost: 20.00, category: "Ubers" }
        ]
    },
    {
        day: 3,
        dayLabel: "Día 3: Jueves 6 de Agosto",
        items: [
            { id: "u_casa_centro", text: "📱 Uber: Casa ➔ Centro Histórico", cost: 25.00, category: "Ubers" },
            { id: "u_centro_circuito", text: "📱 Uber: Centro ➔ Circuito Mágico del Agua", cost: 12.00, category: "Ubers" },
            { id: "u_circuito_maketto", text: "📱 Uber: Circuito Mágico ➔ Maketto (Miraflores)", cost: 18.00, category: "Ubers" },
            { id: "u_maketto_casa", text: "📱 Uber: Maketto ➔ Casa", cost: 10.00, category: "Ubers" },
            { id: "e_circuito_agua", text: "🎟️ Entradas: Circuito Mágico del Agua (S/ 4.00 por persona)", cost: 8.00, category: "Ocio" },
            { id: "c_maketto", text: "🍽️ Cena Asiática: Maketto (Ramen/Baos)", cost: 160.00, category: "Restaurantes" }
        ]
    },
    {
        day: 4,
        dayLabel: "Día 4: Viernes 7 de Agosto",
        items: [
            { id: "a_punto_azul", text: "🍽️ Almuerzo Marino: Punto Azul (Miraflores)", cost: 120.00, category: "Restaurantes" },
            { id: "t2_cusco", text: "🚕 Traslado 2 (Partida Cusco): Uber Casa ➔ Aeropuerto Jorge Chávez", cost: 85.00, category: "Traslados" },
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
            { id: "t3_retorno", text: "🚕 Traslado 3 (Retorno Cusco): Uber Aeropuerto Jorge Chávez ➔ Casa", cost: 85.00, category: "Traslados" },
            { id: "u_casa_7sopas", text: "📱 Uber: Casa ➔ 7 Sopas (Miraflores) ida/vuelta", cost: 18.00, category: "Ubers" },
            { id: "c_7sopas", text: "🍽️ Cena de Despedida: 7 Sopas (Parque Kennedy)", cost: 80.00, category: "Restaurantes" }
        ]
    },
    {
        day: 8,
        dayLabel: "Día 8: Martes 11 de Agosto",
        items: [
            { id: "d_pan_chola", text: "🍽️ Desayuno de Despedida: El Pan de la Chola", cost: 70.00, category: "Restaurantes" },
            { id: "t4_cali", text: "🚕 Traslado 4 (Regreso Cali): Uber Casa ➔ Aeropuerto Jorge Chávez", cost: 85.00, category: "Traslados" },
            { id: "u_pan_chola_idavuelta", text: "📱 Uber: Casa ➔ El Pan de la Chola ida/vuelta", cost: 25.00, category: "Ubers" },
            { id: "m_variacion_rest", text: "🎟️ Margen de Variación final de Restaurantes (Lima)", cost: 47.00, category: "Restaurantes" }
        ]
    }
];

// ==========================================
// ESTADO DE LA APLICACIÓN
// ==========================================
let state = {
    checkedItems: {}, // ID del item -> boolean
    notes: ""
};

// ==========================================
// INICIALIZACIÓN
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    loadState();
    renderChecklist();
    updateCalculations();
    setupNavigation();
    setupCountdown();
    setupNotes();
    setupResetButton();
});

// ==========================================
// CARGAR Y GUARDAR ESTADO (LocalStorage)
// ==========================================
function loadState() {
    const savedState = localStorage.getItem("viaje_lima_cusco_state");
    if (savedState) {
        try {
            state = JSON.parse(savedState);
        } catch (e) {
            console.error("Error cargando estado:", e);
        }
    } else {
        // Inicializar estado vacío
        state.checkedItems = {};
        state.notes = "";
    }
}

function saveState() {
    localStorage.setItem("viaje_lima_cusco_state", JSON.stringify(state));
}

// ==========================================
// RENDERIZAR LISTA DE VERIFICACIÓN
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
            itemEl.dataset.id = item.id;
            itemEl.dataset.cost = item.cost;
            
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
            
            // Evento Click para cambiar el estado
            itemEl.addEventListener("click", () => toggleItem(item.id, itemEl));
            
            groupEl.appendChild(itemEl);
        });
        
        container.appendChild(groupEl);
    });
}

// Cambiar estado de un item
function toggleItem(id, element) {
    const isChecked = !state.checkedItems[id];
    state.checkedItems[id] = isChecked;
    
    if (isChecked) {
        element.classList.add("checked");
    } else {
        element.classList.remove("checked");
    }
    
    saveState();
    updateCalculations();
}

// ==========================================
// CÁLCULOS EN TIEMPO REAL
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
    
    // Actualizar elementos DOM
    document.getElementById("val-total").textContent = `S/ ${totalBudget.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("val-paid").textContent = `S/ ${totalPaid.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    document.getElementById("val-pending").textContent = `S/ ${totalPending.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    
    const progressBar = document.getElementById("main-progress-bar");
    const progressText = document.getElementById("progress-percentage");
    
    if (progressBar && progressText) {
        progressBar.style.width = `${progressPercent}%`;
        progressText.textContent = `${progressPercent}%`;
    }
}

// ==========================================
// NAVEGACIÓN Y EVENTOS DE PESTAÑAS
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
            
            // Scroll to top of content when tab changes
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Day Selector in Itinerary tab
    const dayBtns = document.querySelectorAll(".day-btn");
    const dayCards = document.querySelectorAll(".day-card");
    
    dayBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedDay = btn.dataset.day;
            
            dayBtns.forEach(b => b.classList.remove("active"));
            dayCards.forEach(c => c.classList.remove("active"));
            
            btn.classList.add("active");
            document.getElementById(`day-card-${selectedDay}`).classList.add("active");
        });
    });
}

// ==========================================
// TEMPORIZADOR DE CUENTA REGRESIVA
// ==========================================
function setupCountdown() {
    // Fecha del viaje: 4 de Agosto de 2026, 3:00 PM (15:00:00)
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
// SECCIÓN DE NOTAS PERSONALES
// ==========================================
function setupNotes() {
    const notesTextarea = document.getElementById("personal-notes");
    const statusText = document.getElementById("notes-status");
    if (!notesTextarea) return;
    
    // Cargar nota inicial
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
        }, 1000); // Guardado automático 1 segundo después de dejar de escribir
    });
}

// ==========================================
// BOTÓN RESTABLECER TODO
// ==========================================
function setupResetButton() {
    const resetBtn = document.getElementById("clear-data-btn");
    if (!resetBtn) return;
    
    resetBtn.addEventListener("click", () => {
        if (confirm("¿Estás seguro de que deseas restablecer todos tus pagos y notas? Esto borrará tu historial de guardado.")) {
            state.checkedItems = {};
            state.notes = "";
            saveState();
            
            // Recargar notas y render de checklist
            const notesTextarea = document.getElementById("personal-notes");
            if (notesTextarea) notesTextarea.value = "";
            
            renderChecklist();
            updateCalculations();
            
            const statusText = document.getElementById("notes-status");
            if (statusText) statusText.textContent = "Datos restablecidos con éxito";
            
            setTimeout(() => {
                if (statusText) statusText.textContent = "Guardado automáticamente";
            }, 3000);
        }
    });
}
