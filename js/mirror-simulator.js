document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('optics-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Controls
    const btnConvex = document.getElementById('btn-convex');
    const btnConcave = document.getElementById('btn-concave');
    
    const rangeFocal = document.getElementById('range-focal');
    const rangeDist = document.getElementById('range-dist');
    const rangeHeight = document.getElementById('range-height');

    // Display Values
    const valFocal = document.getElementById('val-focal');
    const valDist = document.getElementById('val-dist');
    const valHeight = document.getElementById('val-height');
    
    const resV = document.getElementById('res-v');
    const resM = document.getElementById('res-m');
    const resH = document.getElementById('res-h');
    const resNature = document.getElementById('res-nature');

    let state = {
        isMirror: true, // false = Lens, true = Mirror
        isConvex: true,  // true: Convex (+f lens, +f mirror), false: Concave (-f lens, -f mirror)
        fMagnitude: parseInt(rangeFocal.value),
        uMagnitude: parseInt(rangeDist.value),
        h: parseInt(rangeHeight.value)
    };

    function updateState() {
        state.fMagnitude = parseInt(rangeFocal.value);
        state.uMagnitude = parseInt(rangeDist.value);
        state.h = parseInt(rangeHeight.value);
        
        valFocal.textContent = state.fMagnitude;
        valDist.textContent = state.uMagnitude;
        valHeight.textContent = state.h;

        draw();
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

    rangeFocal.addEventListener('input', updateState);
    rangeDist.addEventListener('input', updateState);
    rangeHeight.addEventListener('input', updateState);

    // Coordinate Transform helpers
    // Canvas coordinate system: 
    // Origin (0,0) is top-left. +x is right, +y is down.
    // Physics coordinate system:
    // Origin (0,0) is center of lens/mirror. +x is right, +y is UP.
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    function toCanvas(x, y) {
        return { cx: cx + x, cy: cy - y };
    }

    function drawArrow(ctx, fromX, fromY, toX, toY, color = '#333') {
        const headlen = 10; 
        const dx = toX - fromX;
        const dy = toY - fromY;
        const angle = Math.atan2(dy, dx);
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
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

        // Real Physics Values
        // Convention: f > 0 for convex lens, f < 0 for concave lens
        // Convention: f > 0 for convex mirror, f < 0 for concave mirror
        const f = state.isConvex ? state.fMagnitude : -state.fMagnitude;
        const u = -state.uMagnitude; // Object is always on the left
        
        // Lens Formula: 1/v - 1/u = 1/f => 1/v = 1/f + 1/u => v = (f*u)/(u+f)
        // Mirror Formula: 1/v + 1/u = 1/f => 1/v = 1/f - 1/u => v = (f*u)/(u-f)
        let v, m, h_prime;
        if (state.isMirror) {
            v = (f * u) / (u - f);
            m = -v / u;
        } else {
            v = (f * u) / (u + f);
            m = v / u;
        }
        h_prime = m * state.h;

        // Draw Focal Points
        const fC = toCanvas(f, 0);
        const fC2 = toCanvas(-f, 0);
        
        ctx.fillStyle = '#ff6b00';
        ctx.beginPath(); ctx.arc(fC.cx, fC.cy, 4, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(fC2.cx, fC2.cy, 4, 0, Math.PI*2); ctx.fill();
        ctx.font = "14px Poppins";
        ctx.fillText("F", fC.cx - 5, fC.cy + 20);
        ctx.fillText("F'", fC2.cx - 5, fC2.cy + 20);

        // Draw Device (Lens or Mirror)
        ctx.lineWidth = 3;
        ctx.beginPath();
        if (state.isMirror) {
            ctx.strokeStyle = '#29b6f6';
            if (state.isConvex) {
                // Convex Mirror (bulges outward to left)
                ctx.moveTo(cx + 20, cy - 150);
                ctx.quadraticCurveTo(cx - 20, cy, cx + 20, cy + 150);
            } else {
                // Concave Mirror (caves inward to left)
                ctx.moveTo(cx - 20, cy - 150);
                ctx.quadraticCurveTo(cx + 20, cy, cx - 20, cy + 150);
            }
            ctx.stroke();
            // Optional: Draw hatching lines to indicate non-reflecting side
        } else {
            // Lens
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
        }

        // Draw Object
        const objBase = toCanvas(u, 0);
        const objTop = toCanvas(u, state.h);
        drawArrow(ctx, objBase.cx, objBase.cy, objTop.cx, objTop.cy, '#2e7d32');

        // Draw Image
        if (isFinite(v) && Math.abs(v) < 10000 && Math.abs(u + (state.isMirror ? -f : f)) > 0.001) {
            const imgBase = toCanvas(v, 0);
            const imgTop = toCanvas(v, h_prime);
            
            // For lens, v>0 is real. For mirror, v<0 is real (same side as object)
            const isReal = state.isMirror ? (v < 0) : (v > 0);
            
            ctx.setLineDash(isReal ? [] : [4, 4]);
            drawArrow(ctx, imgBase.cx, imgBase.cy, imgTop.cx, imgTop.cy, isReal ? '#c62828' : '#e65100');
            ctx.setLineDash([]);

            // Draw Rays
            ctx.lineWidth = 1.5;
            
            if (state.isMirror) {
                // MIRROR RAYS
                // 1. Ray parallel to principal axis
                drawArrow(ctx, objTop.cx, objTop.cy, cx, objTop.cy, '#4a90e2');
                if (state.isConvex) {
                    // Convex mirror: reflects as if from F (f > 0, F is on right)
                    const rayAngle = Math.atan2(objTop.cy - fC.cy, cx - fC.cx);
                    const ex = cx + 1000 * Math.cos(rayAngle);
                    const ey = objTop.cy + 1000 * Math.sin(rayAngle);
                    ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(ex, ey); ctx.strokeStyle = '#4a90e2'; ctx.stroke();
                    
                    // Virtual extension
                    if (!isReal) {
                        ctx.setLineDash([3,3]);
                        ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(fC.cx, fC.cy); ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else {
                    // Concave mirror: reflects through F (f < 0, F is on left)
                    const rayAngle = Math.atan2(fC.cy - objTop.cy, fC.cx - cx);
                    const ex = cx + 1000 * Math.cos(rayAngle);
                    const ey = objTop.cy + 1000 * Math.sin(rayAngle);
                    ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(ex, ey); ctx.strokeStyle = '#4a90e2'; ctx.stroke();
                    
                    // Virtual extension for virtual object (rare) or virtual image
                    if (!isReal) {
                        ctx.setLineDash([3,3]);
                        const vex = cx - 1000 * Math.cos(rayAngle);
                        const vey = objTop.cy - 1000 * Math.sin(rayAngle);
                        ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(vex, vey); ctx.stroke();
                        ctx.setLineDash([]);
                    }
                }

                // 2. Ray incident at the pole
                drawArrow(ctx, objTop.cx, objTop.cy, cx, cy, '#9c27b0');
                const incidentAngle = Math.atan2(cy - objTop.cy, cx - objTop.cx);
                // Reflect across y-axis (mirror plane): angle becomes PI - incidentAngle
                const reflectAngle = Math.PI - incidentAngle;
                const rEx = cx + 1000 * Math.cos(reflectAngle);
                const rEy = cy + 1000 * Math.sin(reflectAngle);
                ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(rEx, rEy); ctx.strokeStyle = '#9c27b0'; ctx.stroke();

                if (!isReal) {
                    ctx.setLineDash([3,3]);
                    const vrex = cx - 1000 * Math.cos(reflectAngle);
                    const vrey = cy - 1000 * Math.sin(reflectAngle);
                    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(vrex, vrey); ctx.stroke();
                    ctx.setLineDash([]);
                }

            } else {
                // LENS RAYS
                // 1. Parallel to principal axis
                drawArrow(ctx, objTop.cx, objTop.cy, cx, objTop.cy, '#4a90e2');
                if (state.isConvex) {
                    // Refract through F2
                    const rayAngle = Math.atan2(fC.cy - objTop.cy, fC.cx - cx);
                    const ex = cx + 1000 * Math.cos(rayAngle);
                    const ey = objTop.cy + 1000 * Math.sin(rayAngle);
                    ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(ex, ey); ctx.strokeStyle = '#4a90e2'; ctx.stroke();
                    
                    if (!isReal) {
                        ctx.setLineDash([3,3]);
                        const vex = cx - 1000 * Math.cos(rayAngle);
                        const vey = objTop.cy - 1000 * Math.sin(rayAngle);
                        ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(vex, vey); ctx.stroke();
                        ctx.setLineDash([]);
                    }
                } else {
                    // Diverge as if from F1
                    const rayAngle = Math.atan2(objTop.cy - fC.cy, cx - fC.cx);
                    const ex = cx + 1000 * Math.cos(rayAngle);
                    const ey = objTop.cy + 1000 * Math.sin(rayAngle);
                    ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(ex, ey); ctx.strokeStyle = '#4a90e2'; ctx.stroke();
                    
                    ctx.setLineDash([3,3]);
                    ctx.beginPath(); ctx.moveTo(cx, objTop.cy); ctx.lineTo(fC.cx, fC.cy); ctx.stroke();
                    ctx.setLineDash([]);
                }

                // 2. Ray through optical center
                drawArrow(ctx, objTop.cx, objTop.cy, cx, cy, '#9c27b0');
                const centerAngle = Math.atan2(cy - objTop.cy, cx - objTop.cx);
                const cex = cx + 1000 * Math.cos(centerAngle);
                const cey = cy + 1000 * Math.sin(centerAngle);
                ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cex, cey); ctx.strokeStyle = '#9c27b0'; ctx.stroke();
                
                if (!isReal) {
                    ctx.setLineDash([3,3]);
                    const vcex = cx - 1000 * Math.cos(centerAngle);
                    const vcey = cy - 1000 * Math.sin(centerAngle);
                    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(vcex, vcey); ctx.stroke();
                    ctx.setLineDash([]);
                }
            }

            // Update Text Readouts
            resV.textContent = v.toFixed(1);
            resM.textContent = m.toFixed(2);
            resH.textContent = h_prime.toFixed(1);
            
            let natText = isReal ? "Real & Inverted" : "Virtual & Erect";
            if (h_prime > 0 && isReal) natText = "Real & Erect"; 
            if (h_prime < 0 && !isReal) natText = "Virtual & Inverted";
            
            let sizeText = Math.abs(m) > 1.05 ? "Magnified" : (Math.abs(m) > 0.95 ? "Same Size" : "Diminished");
            
            resNature.textContent = `${natText}, ${sizeText}`;
        } else {
            resV.textContent = "Infinity";
            resM.textContent = "Infinity";
            resH.textContent = "Infinity";
            resNature.textContent = "Image at Infinity";
        }
    }

    // Initial draw
    setTimeout(draw, 100);
});
