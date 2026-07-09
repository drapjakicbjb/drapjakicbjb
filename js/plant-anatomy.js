document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('pa-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');

    let state = { time: 0 };
    let hoveredBody = null, selectedBody = null;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let parts = [];

    // Bundle coordinates
    const numBundles = 8;
    const bundleRadius = 150; // distance from center

    function buildSystem() {
        parts = [];

        // 1. Epidermis (Outer ring)
        parts.push({
            id: 'epidermis', keyTitle: 'pa-epidermis', keyDesc: 'pa-epidermis-desc',
            createPath: () => {
                const p = new Path2D();
                p.arc(cx, cy, 260, 0, Math.PI*2);
                p.arc(cx, cy, 245, 0, Math.PI*2, true);
                return p;
            },
            draw: (p, isHover) => {
                ctx.fillStyle = isHover ? '#81c784' : '#4caf50'; ctx.fill(p);
                ctx.strokeStyle = '#1b5e20'; ctx.lineWidth = 3; ctx.stroke(p);
                // Cuticle texture
                ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 4;
                ctx.beginPath(); ctx.arc(cx, cy, 262, 0, Math.PI*2); ctx.stroke();
            }
        });

        // 2. Cortex
        parts.push({
            id: 'cortex', keyTitle: 'pa-cortex', keyDesc: 'pa-cortex-desc',
            createPath: () => {
                const p = new Path2D();
                p.arc(cx, cy, 245, 0, Math.PI*2);
                p.arc(cx, cy, 180, 0, Math.PI*2, true);
                return p;
            },
            draw: (p, isHover) => {
                const grad = ctx.createRadialGradient(cx, cy, 180, cx, cy, 245);
                grad.addColorStop(0, isHover ? '#dcedc8' : '#e8f5e9');
                grad.addColorStop(1, isHover ? '#aed581' : '#c5e1a5');
                ctx.fillStyle = grad; ctx.fill(p);
                ctx.strokeStyle = '#7cb342'; ctx.lineWidth = 2; ctx.stroke(p);
            }
        });

        // 3. Pith (Center)
        parts.push({
            id: 'pith', keyTitle: 'pa-pith', keyDesc: 'pa-pith-desc',
            createPath: () => {
                const p = new Path2D();
                p.arc(cx, cy, 110, 0, Math.PI*2);
                return p;
            },
            draw: (p, isHover) => {
                const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 110);
                grad.addColorStop(0, isHover ? '#fff9c4' : '#fffde7');
                grad.addColorStop(1, isHover ? '#fff176' : '#fff59d');
                ctx.fillStyle = grad; ctx.fill(p);
                // Spongy texture
                ctx.save(); ctx.clip(p);
                ctx.strokeStyle = 'rgba(205, 220, 57, 0.3)'; ctx.lineWidth = 2;
                for(let i=0; i<30; i++) {
                    ctx.beginPath(); 
                    ctx.arc(cx + (Math.random()-0.5)*200, cy + (Math.random()-0.5)*200, Math.random()*20+10, 0, Math.PI*2); 
                    ctx.stroke();
                }
                ctx.restore();
            }
        });

        // 4. Vascular Cambium (Ring connecting bundles)
        parts.push({
            id: 'cambium', keyTitle: 'pa-cambium', keyDesc: 'pa-cambium-desc',
            isStroke: true, hitWidth: 15,
            createPath: () => {
                const p = new Path2D();
                p.arc(cx, cy, bundleRadius, 0, Math.PI*2);
                return p;
            },
            draw: (p, isHover) => {
                ctx.strokeStyle = isHover ? '#ffeb3b' : '#fbc02d';
                ctx.lineWidth = 6;
                ctx.stroke(p);
            }
        });

        // 5. Vascular Bundles
        for(let i=0; i<numBundles; i++) {
            const angle = (i / numBundles) * Math.PI * 2;
            const bx = cx + Math.cos(angle) * bundleRadius;
            const by = cy + Math.sin(angle) * bundleRadius;
            
            // Phloem (Outer half of bundle)
            parts.push({
                id: `phloem_${i}`, keyTitle: 'pa-phloem', keyDesc: 'pa-phloem-desc',
                createPath: () => {
                    const p = new Path2D();
                    p.arc(bx, by, 35, angle - Math.PI/2, angle + Math.PI/2);
                    return p;
                },
                draw: (p, isHover, t) => {
                    ctx.fillStyle = isHover ? '#81d4fa' : '#29b6f6'; ctx.fill(p);
                    ctx.strokeStyle = '#0288d1'; ctx.lineWidth = 2; ctx.stroke(p);
                    
                    // Animate nutrient flow (pulsating dots)
                    ctx.save(); ctx.clip(p);
                    ctx.fillStyle = 'rgba(255,255,255,0.8)';
                    const dotPhase = (t * 3 + i) % (Math.PI*2);
                    ctx.beginPath();
                    ctx.arc(bx + Math.cos(angle)*15, by + Math.sin(angle)*15, 3 + Math.sin(dotPhase)*2, 0, Math.PI*2);
                    ctx.arc(bx + Math.cos(angle)*25 + Math.cos(angle+Math.PI/2)*10, by + Math.sin(angle)*25 + Math.sin(angle+Math.PI/2)*10, 2 + Math.cos(dotPhase)*1.5, 0, Math.PI*2);
                    ctx.fill();
                    ctx.restore();
                }
            });

            // Xylem (Inner half of bundle)
            parts.push({
                id: `xylem_${i}`, keyTitle: 'pa-xylem', keyDesc: 'pa-xylem-desc',
                createPath: () => {
                    const p = new Path2D();
                    p.arc(bx, by, 45, angle + Math.PI/2, angle - Math.PI/2);
                    return p;
                },
                draw: (p, isHover, t) => {
                    ctx.fillStyle = isHover ? '#ef5350' : '#e53935'; ctx.fill(p);
                    ctx.strokeStyle = '#c62828'; ctx.lineWidth = 2; ctx.stroke(p);
                    
                    // Large vessels (Trachea/Vessel elements)
                    ctx.save(); ctx.clip(p);
                    ctx.fillStyle = '#ffcdd2'; ctx.strokeStyle = '#b71c1c'; ctx.lineWidth = 2;
                    
                    const drawVessel = (dist, offset, size) => {
                        const vx = bx - Math.cos(angle)*dist + Math.cos(angle+Math.PI/2)*offset;
                        const vy = by - Math.sin(angle)*dist + Math.sin(angle+Math.PI/2)*offset;
                        ctx.beginPath(); ctx.arc(vx, vy, size, 0, Math.PI*2);
                        ctx.fill(); ctx.stroke();
                        // Animate water flow (blue center)
                        const wPhase = (t * 2 + i*offset) % (Math.PI*2);
                        ctx.fillStyle = `rgba(33, 150, 243, ${0.4 + Math.sin(wPhase)*0.4})`;
                        ctx.beginPath(); ctx.arc(vx, vy, size-2, 0, Math.PI*2); ctx.fill();
                        ctx.fillStyle = '#ffcdd2'; // reset
                    };
                    
                    drawVessel(15, 0, 12);
                    drawVessel(30, 12, 8);
                    drawVessel(30, -12, 8);
                    ctx.restore();
                }
            });
        }
    }

    function animate(timestamp) {
        state.time = timestamp / 1000;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        parts.forEach(p => {
            p.currentPath = p.createPath(state.time);
            const isHovered = (hoveredBody === p.id || selectedBody === p.id || 
                              (hoveredBody && hoveredBody.startsWith(p.keyTitle) && p.id.startsWith(hoveredBody.split('_')[0])) ||
                              (selectedBody && selectedBody.startsWith(p.keyTitle) && p.id.startsWith(selectedBody.split('_')[0])) );
            // Wait, logic above is complex, let's keep it simple. We want to highlight all xylem if one is hovered.
            
            const groupName = p.id.split('_')[0];
            const hoverGroupName = hoveredBody ? hoveredBody.split('_')[0] : null;
            const selectGroupName = selectedBody ? selectedBody.split('_')[0] : null;
            
            const isGroupHovered = (groupName === hoverGroupName || groupName === selectGroupName);

            if (isGroupHovered && !p.isStroke) {
                ctx.shadowColor = 'rgba(0,0,0,0.5)';
                ctx.shadowBlur = 15;
            }
            p.draw(p.currentPath, isGroupHovered, state.time);
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
        });

        requestAnimationFrame(animate);
    }

    function getBodyAtPoint(x, y) {
        for (let i = parts.length - 1; i >= 0; i--) {
            const p = parts[i];
            if (p.currentPath) {
                if (p.isStroke) {
                    ctx.lineWidth = p.hitWidth || 15;
                    if (ctx.isPointInStroke(p.currentPath, x, y)) return p;
                } else {
                    if (ctx.isPointInPath(p.currentPath, x, y)) return p;
                }
            }
        }
        return null;
    }

    function updateInfo(body) {
        if (body) {
            infoTitle.setAttribute('data-i18n', body.keyTitle);
            infoDesc.setAttribute('data-i18n', body.keyDesc);
            infoTitle.textContent = body.id; // temporary fallback
            infoDesc.textContent = "...";
        } else {
            infoTitle.setAttribute('data-i18n', 'pa-select');
            infoDesc.setAttribute('data-i18n', 'pa-select-desc');
            const lTitle = document.querySelector(`[data-i18n="pa-select"]`);
            const lDesc = document.querySelector(`[data-i18n="pa-select-desc"]`);
            if (lTitle && lTitle.dataset.lasttext) infoTitle.textContent = lTitle.dataset.lasttext;
            if (lDesc && lDesc.dataset.lasttext) infoDesc.textContent = lDesc.dataset.lasttext;
        }
        if (typeof window.updatePageTranslations === 'function') {
            window.updatePageTranslations();
        }
    }

    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;
        const body = getBodyAtPoint(mx, my);
        if (body) {
            canvas.style.cursor = 'pointer';
            hoveredBody = body.id;
        } else {
            canvas.style.cursor = 'crosshair';
            hoveredBody = null;
        }
    });

    canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const mx = (e.clientX - rect.left) * scaleX;
        const my = (e.clientY - rect.top) * scaleY;
        const body = getBodyAtPoint(mx, my);
        if (body) {
            selectedBody = body.id;
            updateInfo(body);
        } else {
            selectedBody = null;
            updateInfo(null);
        }
    });

    setTimeout(() => {
        buildSystem();
        requestAnimationFrame(animate);
    }, 100);
});
