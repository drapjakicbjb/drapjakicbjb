document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pen-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const rangeG = document.getElementById('range-g');
    const rangeL = document.getElementById('range-l');
    const rangeM = document.getElementById('range-m');
    const rangeTheta = document.getElementById('range-theta');

    const valG = document.getElementById('val-g');
    const valL = document.getElementById('val-l');
    const valM = document.getElementById('val-m');
    const valTheta = document.getElementById('val-theta');
    
    const resPE = document.getElementById('res-pe');
    const resKE = document.getElementById('res-ke');
    const barPE = document.getElementById('bar-pe');
    const barKE = document.getElementById('bar-ke');

    let state = {
        g: parseFloat(rangeG.value),
        L: parseFloat(rangeL.value),
        m: parseFloat(rangeM.value),
        theta0: parseFloat(rangeTheta.value) * (Math.PI / 180),
        t: 0
    };

    let isPaused = false;
    const btnPlayPause = document.getElementById('btn-play-pause');
    const textPlayPause = document.getElementById('text-play-pause');

    if (btnPlayPause) {
        btnPlayPause.addEventListener('click', () => {
            isPaused = !isPaused;
            const icon = btnPlayPause.querySelector('i');
            if (isPaused) {
                icon.className = 'fas fa-play';
                textPlayPause.setAttribute('data-i18n', 'pen-play');
                textPlayPause.textContent = 'Play Simulation';
                btnPlayPause.style.background = '#2e7d32';
            } else {
                icon.className = 'fas fa-pause';
                textPlayPause.setAttribute('data-i18n', 'pen-pause');
                textPlayPause.textContent = 'Pause Simulation';
                btnPlayPause.style.background = '#bf360c';
            }
            if (typeof window.updatePageTranslations === 'function') {
                window.updatePageTranslations();
            }
        });
    }

    let isDragging = false;
    let currentBobX = 0;
    let currentBobY = 0;
    let currentBobRadius = 0;

    canvas.addEventListener('mousedown', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;

        if (Math.hypot(mx - currentBobX, my - currentBobY) <= currentBobRadius * 1.5) {
            isDragging = true;
            if (!isPaused && btnPlayPause) {
                btnPlayPause.click(); // Pause automatically
            }
            canvas.style.cursor = 'grabbing';
        }
    });

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;

        if (isDragging) {
            const originX = canvas.width / 2;
            const originY = 50;
            const dx = mx - originX;
            const dy = my - originY;
            let newTheta = Math.atan2(dx, dy);
            
            const maxRad = 85 * Math.PI / 180;
            if (newTheta > maxRad) newTheta = maxRad;
            if (newTheta < -maxRad) newTheta = -maxRad;
            
            state.theta0 = Math.abs(newTheta);
            const omega = Math.sqrt(state.g / state.L);
            state.t = newTheta < 0 ? Math.PI / omega : 0;
            
            rangeTheta.value = (Math.abs(newTheta) * 180 / Math.PI).toFixed(0);
            valTheta.textContent = rangeTheta.value;
        } else {
            if (Math.hypot(mx - currentBobX, my - currentBobY) <= currentBobRadius * 1.5) {
                canvas.style.cursor = isPaused ? 'grab' : 'pointer';
            } else {
                canvas.style.cursor = 'default';
            }
        }
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            canvas.style.cursor = 'default';
        }
    });

    function resetSimulation() {
        state.g = parseFloat(rangeG.value);
        state.L = parseFloat(rangeL.value);
        state.m = parseFloat(rangeM.value);
        state.theta0 = parseFloat(rangeTheta.value) * (Math.PI / 180);
        state.t = 0; // Reset time so it drops from highest point

        valG.textContent = state.g;
        valL.textContent = state.L;
        valM.textContent = state.m;
        valTheta.textContent = rangeTheta.value;
    }

    rangeG.addEventListener('input', resetSimulation);
    rangeL.addEventListener('input', resetSimulation);
    rangeM.addEventListener('input', resetSimulation);
    rangeTheta.addEventListener('input', resetSimulation);

    let lastTime = performance.now();

    function animate(currentTime) {
        const dt = (currentTime - lastTime) / 1000; // seconds
        lastTime = currentTime;

        // Update physics time
        if (!isPaused) {
            state.t += dt;
        }

        // Theta(t) = Theta0 * cos(sqrt(g/L) * t)
        const omega = Math.sqrt(state.g / state.L);
        const currentTheta = state.theta0 * Math.cos(omega * state.t);

        // Max Height: h_max = L - L*cos(theta0)
        // Current Height: h = L - L*cos(currentTheta)
        const h_max = state.L * (1 - Math.cos(state.theta0));
        const h_current = state.L * (1 - Math.cos(currentTheta));

        const max_PE = state.m * state.g * h_max;
        const current_PE = state.m * state.g * h_current;
        const current_KE = max_PE - current_PE;

        updateUI(current_PE, current_KE, max_PE);
        draw(currentTheta);

        requestAnimationFrame(animate);
    }

    function updateUI(pe, ke, maxEnergy) {
        resPE.textContent = pe.toFixed(1);
        resKE.textContent = ke.toFixed(1);
        
        let pePercent = 0;
        let kePercent = 0;
        if (maxEnergy > 0) {
            pePercent = (pe / maxEnergy) * 100;
            kePercent = (ke / maxEnergy) * 100;
        }

        barPE.style.width = `${pePercent}%`;
        barKE.style.width = `${kePercent}%`;
    }

    function draw(theta) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const originX = canvas.width / 2;
        const originY = 50;

        // Visual scalar for L so it fits nicely
        // Max L is 20. Canvas height is 500.
        const pixelScale = 350 / 20; 
        const renderL = state.L * pixelScale;

        const bobX = originX + renderL * Math.sin(theta);
        const bobY = originY + renderL * Math.cos(theta);

        // Draw Ceiling
        ctx.strokeStyle = '#4e342e';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(originX - 50, originY);
        ctx.lineTo(originX + 50, originY);
        ctx.stroke();
        // Ceiling hashing
        for(let i = -50; i <= 50; i+=10) {
            ctx.beginPath();
            ctx.moveTo(originX + i, originY);
            ctx.lineTo(originX + i + 10, originY - 10);
            ctx.stroke();
        }

        // Draw String
        ctx.strokeStyle = '#9e9e9e';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(originX, originY);
        ctx.lineTo(bobX, bobY);
        ctx.stroke();

        // Draw Bob
        // Scale visual bob size based on mass (m ranges 1 to 50)
        const bobRadius = 15 + (state.m / 50) * 20;
        currentBobX = bobX;
        currentBobY = bobY;
        currentBobRadius = bobRadius;

        // Glowing effect representing speed/temperature (KE)
        const keColor = `rgba(211, 47, 47, ${(Math.abs(Math.sin(Math.sqrt(state.g / state.L) * state.t)))})`;
        
        ctx.beginPath();
        ctx.arc(bobX, bobY, bobRadius, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(bobX-bobRadius/3, bobY-bobRadius/3, 5, bobX, bobY, bobRadius);
        grad.addColorStop(0, '#78909c');
        grad.addColorStop(1, '#37474f');
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.strokeStyle = '#263238';
        ctx.lineWidth = 3;
        ctx.stroke();

        // Overlay glowing KE tint
        ctx.beginPath();
        ctx.arc(bobX, bobY, bobRadius, 0, Math.PI * 2);
        ctx.fillStyle = keColor;
        ctx.fill();
    }

    // Init
    resetSimulation();
    requestAnimationFrame(animate);
});
