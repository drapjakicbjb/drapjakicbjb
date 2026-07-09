document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('frac-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const rangeNum = document.getElementById('range-num');
    const rangeDen = document.getElementById('range-den');
    const valNum = document.getElementById('val-num');
    const valDen = document.getElementById('val-den');
    
    const resDec = document.getElementById('res-dec');
    const resPer = document.getElementById('res-per');
    
    const btnPie = document.getElementById('btn-pie');
    const btnBar = document.getElementById('btn-bar');

    let state = {
        num: parseInt(rangeNum.value),
        den: parseInt(rangeDen.value),
        isPie: true
    };

    function updateState() {
        state.num = parseInt(rangeNum.value);
        state.den = parseInt(rangeDen.value);
        
        // Numerator cannot exceed Denominator for simple visualizer
        if (state.num > state.den) {
            state.num = state.den;
            rangeNum.value = state.num;
        }

        valNum.textContent = state.num;
        valDen.textContent = state.den;

        const val = state.num / state.den;
        resDec.textContent = val.toFixed(3).replace(/\.?0+$/, ''); // Remove trailing zeros
        if (resDec.textContent === "") resDec.textContent = "0"; // Fallback
        resPer.textContent = (val * 100).toFixed(1).replace(/\.0$/, '') + '%';

        draw();
    }

    rangeNum.addEventListener('input', updateState);
    rangeDen.addEventListener('input', updateState);

    btnPie.addEventListener('click', () => {
        state.isPie = true;
        btnPie.classList.add('active');
        btnBar.classList.remove('active');
        draw();
    });

    btnBar.addEventListener('click', () => {
        state.isPie = false;
        btnBar.classList.add('active');
        btnPie.classList.remove('active');
        draw();
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const cx = canvas.width / 2;
        const cy = canvas.height / 2;
        const r = 180;

        if (state.isPie) {
            // Draw Pie
            const sliceAngle = (Math.PI * 2) / state.den;
            
            for (let i = 0; i < state.den; i++) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.arc(cx, cy, r, i * sliceAngle - Math.PI/2, (i + 1) * sliceAngle - Math.PI/2);
                ctx.closePath();
                
                if (i < state.num) {
                    ctx.fillStyle = '#ff9800'; // Saffron filled
                    ctx.fill();
                } else {
                    ctx.fillStyle = '#f1f5fa'; // Empty
                    ctx.fill();
                }
                
                ctx.strokeStyle = '#0d1b2a';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
            
            // Draw Center Label
            ctx.fillStyle = '#0d1b2a';
            ctx.font = 'bold 32px Poppins';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            // ctx.fillText(`${state.num} / ${state.den}`, cx, cy + r + 40);

        } else {
            // Draw Bar
            const barW = 400;
            const barH = 100;
            const startX = cx - barW / 2;
            const startY = cy - barH / 2;
            const pieceW = barW / state.den;

            for (let i = 0; i < state.den; i++) {
                ctx.beginPath();
                ctx.rect(startX + i * pieceW, startY, pieceW, barH);
                
                if (i < state.num) {
                    ctx.fillStyle = '#ff9800'; // Saffron filled
                    ctx.fill();
                } else {
                    ctx.fillStyle = '#f1f5fa'; // Empty
                    ctx.fill();
                }
                
                ctx.strokeStyle = '#0d1b2a';
                ctx.lineWidth = 2;
                ctx.stroke();
            }
        }
        
        // Top text
        ctx.fillStyle = '#0d1b2a';
        ctx.font = '600 48px Poppins';
        ctx.textAlign = 'center';
        ctx.fillText(`${state.num}`, cx, 60);
        ctx.fillRect(cx - 30, 75, 60, 4);
        ctx.fillText(`${state.den}`, cx, 120);
    }

    // Init
    setTimeout(updateState, 100);
});
