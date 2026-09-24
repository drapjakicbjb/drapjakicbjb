document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('optics-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Controls
    const btnConvex = document.getElementById('btn-convex');
    const btnConcave = document.getElementById('btn-concave');
    
    const rangeFocal = document.getElementById('range-focal');
    const inputFocal = document.getElementById('input-focal');
    const rangeDist = document.getElementById('range-dist');
    const inputDist = document.getElementById('input-dist');
    const rangeHeight = document.getElementById('range-height');
    const inputHeight = document.getElementById('input-height');

    // Ray Selection Controls
    const btnRayAll = document.getElementById('btn-ray-all');
    const btnRay1 = document.getElementById('btn-ray-1');
    const btnRay2 = document.getElementById('btn-ray-2');

    // Display Values
    const resV = document.getElementById('res-v');
    const resM = document.getElementById('res-m');
    const resH = document.getElementById('res-h');
    const resNature = document.getElementById('res-nature');

    let state = {
        isConvex: true,  // true: Convex (+f lens), false: Concave (-f lens)
        fMagnitude: parseFloat(rangeFocal.value) || 1.0,
        uMagnitude: parseFloat(rangeDist.value) || 1.5,
        h: parseFloat(rangeHeight.value) || 0.5,
        rayOption: 'all' // 'all', '1', '2'
    };

    function updateState() {
        state.fMagnitude = parseFloat(rangeFocal.value) || 1.0;
        state.uMagnitude = parseFloat(rangeDist.value) || 1.5;
        state.h = parseFloat(rangeHeight.value) || 0.5;

        draw();
    }

    function setupInputSync(rangeEl, inputEl) {
        if (!rangeEl || !inputEl) return;
        rangeEl.addEventListener('input', () => {
            inputEl.value = parseFloat(rangeEl.value).toFixed(2);
            updateState();
        });
        inputEl.addEventListener('input', () => {
            const val = parseFloat(inputEl.value);
            if (!isNaN(val)) {
                rangeEl.value = val;
                updateState();
            }
        });
        inputEl.addEventListener('change', () => {
            let val = parseFloat(inputEl.value);
            const min = parseFloat(inputEl.min);
            const max = parseFloat(inputEl.max);
            if (isNaN(val)) val = parseFloat(rangeEl.value);
            val = Math.max(min, Math.min(max, val));
            inputEl.value = val.toFixed(2);
            rangeEl.value = val;
            updateState();
        });
    }

    setupInputSync(rangeFocal, inputFocal);
    setupInputSync(rangeDist, inputDist);
    setupInputSync(rangeHeight, inputHeight);

    function setRayOption(opt) {
        state.rayOption = opt;
        [btnRayAll, btnRay1, btnRay2].forEach(btn => {
            if (btn) {
                if (btn.dataset.ray === opt) btn.classList.add('active');
                else btn.classList.remove('active');
            }
        });
        draw();
    }

    if (btnRayAll && btnRay1 && btnRay2) {
        btnRayAll.addEventListener('click', () => setRayOption('all'));
        btnRay1.addEventListener('click', () => setRayOption('1'));
        btnRay2.addEventListener('click', () => setRayOption('2'));
    }

    btnConvex.addEventListener('click', () => {
        state.isConvex = true;
        btnConvex.classList.add('active');
        btnConcave.classList.remove('active');
        draw();
    });

    btnConcave.addEventListener('click', () => {
        state.isConvex = false;
        btnConcave.classList.add('active');
        btnConvex.classList.remove('active');
        draw();
    });

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    function toCanvas(x, y) {
        return { cx: cx + x, cy: cy - y };
    }

    function getLensSurfaceX(y) {
        const H = 150;
        const clampedY = Math.max(cy - H, Math.min(cy + H, y));
        const t = (clampedY - (cy - H)) / (2 * H);
        
        if (state.isConvex) {
            // Convex lens front surface curves from (cx, cy-150) with control point (cx-40, cy) to (cx, cy+150)
            const x0 = cx, x1 = cx - 40, x2 = cx;
            return (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * x1 + t * t * x2;
        } else {
            // Concave lens front surface curves from (cx-20, cy-150) with control point (cx, cy) to (cx-20, cy+150)
            const x0 = cx - 20, x1 = cx, x2 = cx - 20;
            return (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * x1 + t * t * x2;
        }
    }

    function drawArrow(ctx, fromX, fromY, toX, toY, color = '#333') {
        const headlen = 10; 
        const dx = toX - fromX;
        const dy = toY - fromY;
        const angle = Math.atan2(dy, dx);
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2.5;
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        
        ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6));
        ctx.moveTo(toX, toY);
        ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6));
        ctx.stroke();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Grid & Principal Axis
        ctx.beginPath();
        ctx.strokeStyle = '#e0e6ed';
        ctx.lineWidth = 1;
        for(let i=0; i<canvas.width; i+=40) {
            ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height);
        }
        for(let i=0; i<canvas.height; i+=40) {
            ctx.moveTo(0, i); ctx.lineTo(canvas.width, i);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = '#0d1b2a';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.moveTo(0, cy);
        ctx.lineTo(canvas.width, cy);
        ctx.moveTo(cx, 0);
        ctx.lineTo(cx, canvas.height);
        ctx.stroke();
        ctx.setLineDash([]);

        // Real Physics Values (in meters)
        const f = state.isConvex ? state.fMagnitude : -state.fMagnitude;
        const u = -state.uMagnitude; // Object is always on the left
        
        // Thin Lens Formula: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u => v = (f*u)/(u+f)
        let v, m, h_prime;
        v = (f * u) / (u + f);
        m = v / u;
        h_prime = m * state.h;

        const showImage = isFinite(v) && Math.abs(v) < 1000 && Math.abs(u + f) > 0.0001;
        const isReal = (v > 0);

        // Dynamic Auto-Scaling Factor (pixels per meter) so all inputs fit on canvas
        const maxX = Math.max(
            Math.abs(2 * f),
            Math.abs(u),
            showImage ? Math.abs(v) : 0,
            1.5
        );
        const maxY = Math.max(
            Math.abs(state.h),
            showImage ? Math.abs(h_prime) : 0,
            0.8
        );

        const scaleX = 350 / maxX;
        const scaleY = 210 / maxY;
        const SCALE = Math.min(scaleX, scaleY, 150);

        // Draw Scale Badge in top corner
        ctx.fillStyle = '#475569';
        ctx.font = '600 12px Poppins';
        ctx.fillText(`Scale: 1 m = ${SCALE.toFixed(1)} px`, 15, 25);

        // Draw Focal Points & 2F Points
        const fC = toCanvas(f * SCALE, 0);
        const fC2 = toCanvas(-f * SCALE, 0);
        const center2F1 = toCanvas(2 * f * SCALE, 0);
        const center2F2 = toCanvas(-2 * f * SCALE, 0);
        
        ctx.fillStyle = '#ff6b00';
        ctx.beginPath(); ctx.arc(fC.cx, fC.cy, 4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(fC2.cx, fC2.cy, 4, 0, Math.PI*2); ctx.fill();
        ctx.font = "bold 14px Poppins";
        ctx.fillText(state.isConvex ? "F₂" : "F₁", fC.cx - 8, fC.cy + 20);
        ctx.fillText(state.isConvex ? "F₁" : "F₂", fC2.cx - 8, fC2.cy + 20);

        ctx.fillStyle = '#1e293b';
        ctx.beginPath(); ctx.arc(center2F1.cx, center2F1.cy, 4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(center2F2.cx, center2F2.cy, 4, 0, Math.PI*2); ctx.fill();
        ctx.fillText(state.isConvex ? "2F₂" : "2F₁", center2F1.cx - 12, center2F1.cy + 20);
        ctx.fillText(state.isConvex ? "2F₁" : "2F₂", center2F2.cx - 12, center2F2.cy + 20);

        // Optical Center O
        ctx.fillStyle = '#0d1b2a';
        ctx.fillText("O", cx + 8, cy + 20);

        // Draw Lens
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(13, 27, 42, 0.4)';
        ctx.fillStyle = 'rgba(74, 144, 226, 0.2)';
        if (state.isConvex) {
            ctx.moveTo(cx, cy - 150);
            ctx.quadraticCurveTo(cx + 40, cy, cx, cy + 150);
            ctx.quadraticCurveTo(cx - 40, cy, cx, cy - 150);
        } else {
            ctx.moveTo(cx - 20, cy - 150);
            ctx.lineTo(cx + 20, cy - 150);
            ctx.quadraticCurveTo(cx, cy, cx + 20, cy + 150);
            ctx.lineTo(cx - 20, cy + 150);
            ctx.quadraticCurveTo(cx, cy, cx - 20, cy - 150);
        }
        ctx.fill();
        ctx.stroke();

        // Draw Object
        const objBase = toCanvas(u * SCALE, 0);
        const objTop = toCanvas(u * SCALE, state.h * SCALE);
        drawArrow(ctx, objBase.cx, objBase.cy, objTop.cx, objTop.cy, '#16a34a');
        ctx.fillStyle = '#16a34a';
        ctx.font = 'bold 13px Poppins';
        ctx.fillText('Object', objTop.cx - 20, objTop.cy - 10);

        let imgTop = null;
        if (showImage) {
            const imgBase = toCanvas(v * SCALE, 0);
            imgTop = toCanvas(v * SCALE, h_prime * SCALE);
            
            const imgColor = isReal ? '#dc2626' : '#ea580c';
            ctx.setLineDash(isReal ? [] : [4, 4]);
            drawArrow(ctx, imgBase.cx, imgBase.cy, imgTop.cx, imgTop.cy, imgColor);
            ctx.setLineDash([]);
            
            ctx.fillStyle = imgColor;
            ctx.font = 'bold 13px Poppins';
            const labelY = h_prime >= 0 ? imgTop.cy - 10 : imgTop.cy + 20;
            ctx.fillText(isReal ? 'Real Image' : 'Virtual Image', imgTop.cx - 35, labelY);
        }

        // Draw Rays
        ctx.lineWidth = 1.8;
        const showRay1 = (state.rayOption === 'all' || state.rayOption === '1');
        const showRay2 = (state.rayOption === 'all' || state.rayOption === '2');
        
        // LENS RAYS
        // 1. Ray 1 (Parallel to principal axis -> Refracts from curved lens panel surface)
        if (showRay1) {
            const hitX = getLensSurfaceX(objTop.cy);
            drawArrow(ctx, objTop.cx, objTop.cy, hitX, objTop.cy, '#2563eb');
            
            if (showImage && imgTop) {
                if (isReal) {
                    // Real image: Refracted ray goes right through imgTop
                    const rayAngle = Math.atan2(imgTop.cy - objTop.cy, imgTop.cx - hitX);
                    const endX = hitX + 1500 * Math.cos(rayAngle);
                    const endY = objTop.cy + 1500 * Math.sin(rayAngle);
                    ctx.beginPath(); ctx.strokeStyle = '#2563eb'; ctx.moveTo(hitX, objTop.cy); ctx.lineTo(endX, endY); ctx.stroke();
                } else {
                    // Virtual image: Refracted ray goes right away from lens; Virtual extension goes left to imgTop
                    const dx = imgTop.cx - hitX;
                    const dy = imgTop.cy - objTop.cy;
                    const backAngle = Math.atan2(-dy, -dx);
                    const realX = hitX + 1500 * Math.cos(backAngle);
                    const realY = objTop.cy + 1500 * Math.sin(backAngle);

                    ctx.beginPath(); ctx.strokeStyle = '#2563eb'; ctx.moveTo(hitX, objTop.cy); ctx.lineTo(realX, realY); ctx.stroke();
                    
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath(); ctx.strokeStyle = '#2563eb'; ctx.moveTo(hitX, objTop.cy); ctx.lineTo(imgTop.cx, imgTop.cy); ctx.stroke();
                    ctx.setLineDash([]);
                }
            } else {
                // Object at F: Refracts parallel to focus
                const rayAngle = Math.atan2(fC.cy - objTop.cy, fC.cx - hitX);
                const endX = hitX + 1500 * Math.cos(rayAngle);
                const endY = objTop.cy + 1500 * Math.sin(rayAngle);
                ctx.beginPath(); ctx.strokeStyle = '#2563eb'; ctx.moveTo(hitX, objTop.cy); ctx.lineTo(endX, endY); ctx.stroke();
            }
        }

        // 2. Ray 2 (Ray through optical center O -> Passes unbent)
        if (showRay2) {
            drawArrow(ctx, objTop.cx, objTop.cy, cx, cy, '#9333ea');
            
            if (showImage && imgTop) {
                const centerAngle = Math.atan2(imgTop.cy - cy, imgTop.cx - cx);
                const cex = cx + 1500 * Math.cos(centerAngle);
                const cey = cy + 1500 * Math.sin(centerAngle);
                
                if (isReal) {
                    ctx.beginPath(); ctx.strokeStyle = '#9333ea'; ctx.moveTo(cx, cy); ctx.lineTo(cex, cey); ctx.stroke();
                } else {
                    ctx.beginPath(); ctx.strokeStyle = '#9333ea'; ctx.moveTo(cx, cy); ctx.lineTo(cex, cey); ctx.stroke();
                    ctx.setLineDash([4, 4]);
                    ctx.beginPath(); ctx.strokeStyle = '#9333ea'; ctx.moveTo(cx, cy); ctx.lineTo(imgTop.cx, imgTop.cy); ctx.stroke();
                    ctx.setLineDash([]);
                }
            } else {
                const centerAngle = Math.atan2(cy - objTop.cy, cx - objTop.cx);
                const cex = cx + 1500 * Math.cos(centerAngle);
                const cey = cy + 1500 * Math.sin(centerAngle);
                ctx.beginPath(); ctx.strokeStyle = '#9333ea'; ctx.moveTo(cx, cy); ctx.lineTo(cex, cey); ctx.stroke();
            }
        }

        // Update Text Readouts (High Precision in meters)
        if (showImage) {
            resV.textContent = (v >= 0 ? '+' : '') + v.toFixed(2);
            resM.textContent = (m >= 0 ? '+' : '') + m.toFixed(3);
            resH.textContent = (h_prime >= 0 ? '+' : '') + h_prime.toFixed(2);
            
            let natText = isReal ? "Real & Inverted" : "Virtual & Erect";
            if (h_prime > 0 && isReal) natText = "Real & Erect"; 
            if (h_prime < 0 && !isReal) natText = "Virtual & Inverted";
            
            let sizeText = Math.abs(m) > 1.02 ? "Magnified" : (Math.abs(m) > 0.98 ? "Same Size" : "Diminished");
            
            resNature.textContent = `${natText}, ${sizeText}`;
        } else {
            resV.textContent = "Infinity";
            resM.textContent = "Infinity";
            resH.textContent = "Infinity";
            resNature.textContent = "Image formed at Infinity";
        }
    }

    // Initial draw
    setTimeout(draw, 100);
});
