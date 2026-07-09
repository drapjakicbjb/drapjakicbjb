document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('bio-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const infoTitle = document.getElementById('info-title');
    const infoDesc = document.getElementById('info-desc');
    const btnAnimal = document.getElementById('btn-animal');
    const btnPlant = document.getElementById('btn-plant');

    let state = { isPlant: false, time: 0 };
    let hoveredBody = null, selectedBody = null;

    if (btnAnimal && btnPlant) {
        btnAnimal.addEventListener('click', () => {
            state.isPlant = false;
            btnAnimal.classList.add('active'); btnPlant.classList.remove('active');
            hoveredBody = null; selectedBody = null; updateInfo(null);
            buildSystem();
        });
        btnPlant.addEventListener('click', () => {
            state.isPlant = true;
            btnPlant.classList.add('active'); btnAnimal.classList.remove('active');
            hoveredBody = null; selectedBody = null; updateInfo(null);
            buildSystem();
        });
    }

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    let parts = [];

    // Math helpers for generating dynamic coordinate paths directly
    function createNoisyBlob(x, y, radius, noiseAmplitude, pointsCount, seedOffset, time) {
        const path = new Path2D();
        const pts = [];
        for (let i = 0; i < pointsCount; i++) {
            const angle = (i / pointsCount) * Math.PI * 2;
            const wave = Math.sin(angle * 4 + time * 2 + seedOffset) + Math.cos(angle * 3 - time * 1.5);
            const r = radius + (wave * noiseAmplitude);
            pts.push({ x: x + Math.cos(angle)*r, y: y + Math.sin(angle)*r });
        }
        path.moveTo(pts[0].x, pts[0].y);
        for (let i = 0; i < pts.length; i++) {
            const current = pts[i];
            const next = pts[(i + 1) % pts.length];
            path.quadraticCurveTo(current.x, current.y, (current.x + next.x)/2, (current.y + next.y)/2);
        }
        path.closePath();
        return path;
    }

    function createHexagon(x, y, radiusX, radiusY) {
        const path = new Path2D();
        for (let i = 0; i <= 6; i++) {
            const angle = i * Math.PI / 3;
            const px = x + radiusX * Math.cos(angle);
            const py = y + radiusY * Math.sin(angle);
            if (i === 0) path.moveTo(px, py); else path.lineTo(px, py);
        }
        return path;
    }

    function drawRibosomeStuds(ctx, path, time) {
        ctx.save();
        ctx.strokeStyle = '#b71c1c';
        ctx.lineWidth = 4;
        ctx.setLineDash([2, 8]);
        ctx.lineDashOffset = time * 5;
        ctx.stroke(path);
        ctx.restore();
    }

    function buildSystem() {
        parts = [];

        // 1. Outer Boundaries & Cytoplasm
        if (state.isPlant) {
            parts.push({
                id: 'cell-wall', keyTitle: 'bio-wall', keyDesc: 'bio-wall-desc',
                createPath: () => createHexagon(cx, cy, 290, 270),
                draw: (p, isHover) => {
                    ctx.fillStyle = isHover ? '#81c784' : '#4caf50';
                    ctx.fill(p);
                    ctx.strokeStyle = '#1b5e20'; ctx.lineWidth = 15; ctx.stroke(p);
                    // Inner stroke for texture
                    ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 3; ctx.stroke(p);
                }
            });
            parts.push({
                id: 'cell-membrane', keyTitle: 'bio-membrane', keyDesc: 'bio-membrane-desc',
                createPath: () => createHexagon(cx, cy, 275, 255),
                draw: (p, isHover) => {
                    ctx.fillStyle = isHover ? '#dcedc8' : '#e8f5e9'; ctx.fill(p);
                    ctx.strokeStyle = '#fbc02d'; ctx.lineWidth = 4; ctx.stroke(p);
                }
            });
            parts.push({
                id: 'cytoplasm', keyTitle: 'bio-cyto', keyDesc: 'bio-cyto-desc',
                createPath: () => createHexagon(cx, cy, 273, 253),
                draw: (p, isHover, t) => {
                    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 300);
                    grad.addColorStop(0, '#f1f8e9'); grad.addColorStop(1, '#c8e6c9');
                    ctx.fillStyle = grad; ctx.fill(p);
                }
            });
        } else {
            parts.push({
                id: 'cytoskeleton', keyTitle: 'bio-cyto-skel', keyDesc: 'bio-cyto-skel-desc',
                isStroke: true, hitWidth: 20,
                createPath: (t) => {
                    const p = new Path2D();
                    for(let i=-200; i<=200; i+=40) {
                        p.moveTo(cx + i, 0); p.lineTo(cx + i + Math.sin(t*2 + i)*50, canvas.height);
                        p.moveTo(0, cy + i); p.lineTo(canvas.width, cy + i + Math.cos(t*2 + i)*50);
                    }
                    return p;
                },
                draw: (p, isHover, t) => {
                    ctx.save();
                    const bg = createNoisyBlob(cx, cy, 260, 10, 14, 100, t*0.5);
                    ctx.fillStyle = '#e8f5e9'; ctx.fill(bg);
                    ctx.clip(bg);
                    ctx.strokeStyle = isHover ? 'rgba(76, 175, 80, 0.5)' : 'rgba(76, 175, 80, 0.15)';
                    ctx.lineWidth = isHover ? 3 : 1.5;
                    ctx.stroke(p);
                    ctx.restore();
                }
            });
            parts.push({
                id: 'cell-membrane', keyTitle: 'bio-membrane', keyDesc: 'bio-membrane-desc',
                createPath: (t) => createNoisyBlob(cx, cy, 260, 10, 14, 100, t*0.5),
                draw: (p, isHover) => {
                    // Membrane texture
                    ctx.strokeStyle = '#ffa000'; ctx.lineWidth = 6; ctx.stroke(p);
                    ctx.strokeStyle = isHover ? '#fff59d' : '#ffe082'; ctx.lineWidth = 2; ctx.stroke(p);
                }
            });
            parts.push({
                id: 'cytoplasm', keyTitle: 'bio-cyto', keyDesc: 'bio-cyto-desc',
                createPath: (t) => createNoisyBlob(cx, cy, 257, 10, 14, 100, t*0.5),
                draw: (p, isHover, t) => {
                    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 260);
                    grad.addColorStop(0, 'rgba(250,253,247,0.8)'); grad.addColorStop(1, 'rgba(220,237,200,0.8)');
                    ctx.fillStyle = grad; ctx.fill(p);
                    
                    // Granular cytoplasm texture
                    ctx.save(); ctx.clip(p);
                    ctx.fillStyle = 'rgba(76, 175, 80, 0.1)';
                    for(let i=0; i<100; i++) {
                        ctx.beginPath();
                        ctx.arc(cx + Math.sin(i*7)*260, cy + Math.cos(i*13)*260, Math.random()*3, 0, Math.PI*2);
                        ctx.fill();
                    }
                    ctx.restore();
                }
            });
        }

        // 1.5. Plant Specific: Central Vacuole (Background Sac)
        if (state.isPlant) {
            parts.push({
                id: 'central-vacuole', keyTitle: 'bio-vacuole-plant', keyDesc: 'bio-vacuole-plant-desc',
                createPath: (t) => createNoisyBlob(cx - 50, cy, 140 + Math.sin(t)*3, 8, 12, 5, t*0.5),
                draw: (p, isHover) => {
                    const grad = ctx.createLinearGradient(cx-150, cy-150, cx+50, cy+150);
                    grad.addColorStop(0, isHover ? '#e1f5fe' : '#b3e5fc');
                    grad.addColorStop(1, isHover ? '#4fc3f7' : '#0288d1');
                    ctx.fillStyle = grad; ctx.fill(p);
                    ctx.strokeStyle = '#0277bd'; ctx.lineWidth = 4; ctx.stroke(p);
                    ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 2; ctx.stroke(p);
                }
            });
        }

        const ncx = state.isPlant ? cx + 75 : cx;
        const ncy = state.isPlant ? cy + 45 : cy;
        
        // 2. Nucleus Complex
        parts.push({
            id: 'nucleus', keyTitle: 'bio-nucleus', keyDesc: 'bio-nucleus-desc',
            createPath: (t) => createNoisyBlob(ncx, ncy, 60, 3, 10, 0, t*0.3),
            draw: (p, isHover, t) => {
                const grad = ctx.createRadialGradient(ncx-20, ncy-20, 10, ncx, ncy, 60);
                grad.addColorStop(0, isHover ? '#f3e5f5' : '#e1bee7');
                grad.addColorStop(1, isHover ? '#ce93d8' : '#ab47bc');
                ctx.fillStyle = grad; ctx.fill(p);
            }
        });
        
        parts.push({
            id: 'chromatin', keyTitle: 'bio-chromatin', keyDesc: 'bio-chromatin-desc',
            createPath: (t) => {
                const p = new Path2D();
                for(let i=0; i<16; i++) {
                    p.arc(ncx + Math.sin(i*2.5)*40, ncy + Math.cos(i*1.8)*40, 10, 0, Math.PI*2);
                }
                return p;
            },
            draw: (p, isHover, t) => {
                ctx.save();
                const np = createNoisyBlob(ncx, ncy, 60, 3, 10, 0, t*0.3);
                ctx.clip(np);
                ctx.strokeStyle = isHover ? '#fff' : 'rgba(74, 20, 140, 0.4)'; 
                ctx.lineWidth = isHover ? 3 : 1.5;
                for(let i=0; i<20; i++) {
                    ctx.beginPath();
                    ctx.moveTo(ncx + Math.sin(i)*60, ncy + Math.cos(i)*60);
                    ctx.quadraticCurveTo(ncx, ncy, ncx + Math.cos(i+2.5)*60, ncy + Math.sin(i+2.5)*60);
                    ctx.stroke();
                }
                ctx.restore();
            }
        });

        parts.push({
            id: 'nuclear-envelope', keyTitle: 'bio-envelope', keyDesc: 'bio-envelope-desc',
            isStroke: true, hitWidth: 15,
            createPath: (t) => createNoisyBlob(ncx, ncy, 62, 3, 10, 0, t*0.3),
            draw: (p, isHover, t) => {
                // Nuclear pores & envelope
                ctx.strokeStyle = isHover ? '#7b1fa2' : '#4a148c'; ctx.lineWidth = 5; ctx.stroke(p);
                ctx.setLineDash([2, 10]);
                ctx.strokeStyle = '#f3e5f5'; ctx.lineWidth = 3; ctx.stroke(p);
                ctx.setLineDash([]);
            }
        });

        parts.push({
            id: 'nucleolus', keyTitle: 'bio-nucleolus', keyDesc: 'bio-nucleolus-desc',
            createPath: (t) => {
                const p = new Path2D();
                p.arc(ncx - 15 + Math.sin(t*2)*2, ncy - 10 + Math.cos(t*2)*2, 18, 0, Math.PI*2);
                return p;
            },
            draw: (p, isHover) => {
                const grad = ctx.createRadialGradient(ncx-20, ncy-15, 2, ncx-15, ncy-10, 18);
                grad.addColorStop(0, isHover ? '#d1c4e9' : '#7b1fa2'); 
                grad.addColorStop(1, '#4a148c');
                ctx.fillStyle = grad; ctx.fill(p);
            }
        });

        // 3. Rough ER
        parts.push({
            id: 'rough-er', keyTitle: 'bio-rough-er', keyDesc: 'bio-rough-er-desc',
            isStroke: true, hitWidth: 20,
            createPath: (t) => {
                const rp = new Path2D();
                for(let r=72; r<=105; r+=15) {
                    // Start arc manually so they don't connect across the nucleus
                    rp.moveTo(ncx + Math.cos(-Math.PI*0.8)*r, ncy + Math.sin(-Math.PI*0.8)*r);
                    rp.arc(ncx, ncy, r, -Math.PI*0.8, Math.PI*0.8);
                }
                return rp;
            },
            draw: (p, isHover, t) => {
                ctx.strokeStyle = isHover ? '#b3e5fc' : '#29b6f6';
                ctx.lineWidth = 10; ctx.lineCap = 'round';
                ctx.stroke(p);
                
                // Draw folds for visual rendering
                for(let r=72; r<=105; r+=15) {
                    const fold = new Path2D();
                    fold.arc(ncx, ncy, r + Math.sin(t*2 + r)*2, -Math.PI*0.8, Math.PI*0.8);
                    drawRibosomeStuds(ctx, fold, t);
                }
            }
        });

        // 4. Smooth ER
        parts.push({
            id: 'smooth-er', keyTitle: 'bio-smooth-er', keyDesc: 'bio-smooth-er-desc',
            isStroke: true, hitWidth: 20,
            createPath: (t) => {
                const sp = new Path2D();
                const sx = ncx + 85; const sy = ncy + 20; // curve upwards
                sp.moveTo(sx, sy); sp.quadraticCurveTo(sx+20, sy-20, sx+40, sy-40);
                sp.moveTo(sx+10, sy-10); sp.quadraticCurveTo(sx+30, sy+10, sx+50, sy-10);
                sp.moveTo(sx+25, sy-25); sp.quadraticCurveTo(sx+40, sy-5, sx+30, sy+20);
                return sp;
            },
            draw: (p, isHover, t) => {
                ctx.strokeStyle = isHover ? '#81d4fa' : '#0288d1';
                ctx.lineWidth = 9; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
                ctx.stroke(p);
                ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 3; ctx.stroke(p);
            }
        });

        // 5. Golgi
        const gx = state.isPlant ? cx + 40 : cx - 130;
        const gy = state.isPlant ? cy - 110 : cy + 110;
        parts.push({
            id: 'golgi', keyTitle: 'bio-golgi', keyDesc: 'bio-golgi-desc',
            createPath: (t) => {
                const p = new Path2D();
                for(let i=0; i<4; i++) {
                    const r = 40 + i*14;
                    p.arc(gx, gy, r, -Math.PI*0.35, Math.PI*0.65);
                }
                // Vesicles
                p.moveTo(gx+60, gy-10); p.arc(gx+50, gy-10, 8, 0, Math.PI*2);
                p.moveTo(gx+20, gy+60); p.arc(gx+15, gy+55, 10, 0, Math.PI*2);
                p.moveTo(gx-10, gy+40); p.arc(gx-15, gy+40, 6, 0, Math.PI*2);
                return p;
            },
            draw: (p, isHover, t) => {
                ctx.strokeStyle = isHover ? '#f48fb1' : '#d81b60';
                ctx.lineWidth = 11; ctx.lineCap = 'round'; ctx.stroke(p);
                ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 4; ctx.stroke(p);
            }
        });

        // 6. Mitochondria
        const mitos = [
            { x: state.isPlant ? cx - 90 : cx + 130, y: state.isPlant ? cy + 120 : cy - 110, rot: 45, sp: 1 },
            { x: state.isPlant ? cx + 130 : cx - 100, y: state.isPlant ? cy - 40 : cy + 40, rot: -20, sp: 1.5 }
        ];
        mitos.forEach((mito, i) => {
            parts.push({
                id: `mitochondria_${i}`, keyTitle: 'bio-mito', keyDesc: 'bio-mito-desc',
                createPath: (t) => {
                    const m = new Path2D();
                    if(m.ellipse) m.ellipse(mito.x, mito.y, 45, 22, mito.rot * Math.PI/180, 0, Math.PI*2);
                    else m.arc(mito.x, mito.y, 30, 0, Math.PI*2);
                    return m;
                },
                draw: (p, isHover, t) => {
                    // Outer membrane
                    ctx.fillStyle = isHover ? '#ffecb3' : '#ffca28'; ctx.fill(p);
                    ctx.strokeStyle = '#e65100'; ctx.lineWidth = 4; ctx.stroke(p);
                    // Cristae (inner folded membrane)
                    ctx.save();
                    ctx.translate(mito.x, mito.y); ctx.rotate(mito.rot * Math.PI/180);
                    ctx.beginPath();
                    ctx.moveTo(-35, 0);
                    ctx.quadraticCurveTo(-20, 20, -10, 0);
                    ctx.quadraticCurveTo(0, -20, 10, 0);
                    ctx.quadraticCurveTo(20, 20, 35, 0);
                    ctx.strokeStyle = '#ef6c00'; ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.stroke();
                    ctx.restore();
                }
            });
        });

        // 7. Lysosomes (Animal) & Peroxisomes (Both)
        if (!state.isPlant) {
            parts.push({
                id: 'lysosomes', keyTitle: 'bio-lysosome', keyDesc: 'bio-lysosome-desc',
                createPath: (t) => {
                    const p = new Path2D();
                    p.moveTo(cx + 170, cy - 10); p.arc(cx + 150, cy - 20 + Math.sin(t)*5, 18, 0, Math.PI*2);
                    p.moveTo(cx - 50, cy + 180); p.arc(cx - 70, cy + 160 + Math.cos(t)*5, 16, 0, Math.PI*2);
                    return p;
                },
                draw: (p, isHover) => {
                    const grad = ctx.createRadialGradient(cx+145, cy-25, 2, cx+150, cy-20, 18);
                    grad.addColorStop(0, isHover ? '#ffccbc' : '#ffab91'); grad.addColorStop(1, '#d84315');
                    ctx.fillStyle = grad; ctx.fill(p);
                    ctx.strokeStyle = '#bf360c'; ctx.lineWidth = 3; ctx.stroke(p);
                }
            });
        }

        parts.push({
            id: 'peroxisomes', keyTitle: 'bio-peroxi', keyDesc: 'bio-peroxi-desc',
            createPath: (t) => {
                const px = new Path2D();
                px.moveTo(cx+60, cy-150); px.arc(cx+50, cy-150 + Math.sin(t*1.5)*5, 14, 0, Math.PI*2);
                px.moveTo(cx-140, cy+50); px.arc(cx-150, cy+50 + Math.cos(t*1.2)*5, 12, 0, Math.PI*2);
                return px;
            },
            draw: (p, isHover) => {
                const grad = ctx.createRadialGradient(cx+45, cy-155, 2, cx+50, cy-150, 14);
                grad.addColorStop(0, isHover ? '#d7ccc8' : '#bcaaa4'); grad.addColorStop(1, '#5d4037');
                ctx.fillStyle = grad; ctx.fill(p);
                ctx.strokeStyle = '#3e2723'; ctx.lineWidth = 3; ctx.stroke(p);
                // Crystalline core
                ctx.fillStyle = 'rgba(62, 39, 35, 0.8)';
                ctx.fill(p);
            }
        });

        // 8. Free Ribosomes
        parts.push({
            id: 'ribosomes', keyTitle: 'bio-ribosome', keyDesc: 'bio-ribosome-desc',
            createPath: (t) => {
                const rp = new Path2D();
                for(let i=0; i<25; i++) {
                    const fx = cx + Math.sin(i*13 + t)*150;
                    const fy = cy + Math.cos(i*7 - t)*150;
                    rp.moveTo(fx+4, fy); rp.arc(fx, fy, 4, 0, Math.PI*2);
                }
                return rp;
            },
            draw: (p, isHover) => {
                ctx.fillStyle = isHover ? '#ef5350' : '#b71c1c';
                ctx.fill(p);
            }
        });

        // 9. Plant Specific: Chloroplasts (Vacuole moved to layer 1.5)
        if (state.isPlant) {
            const chloros = [
                { x: cx - 120, y: cy - 90, rot: 15 },
                { x: cx + 20, y: cy + 160, rot: -45 },
                { x: cx - 90, y: cy + 170, rot: 70 },
                { x: cx + 140, y: cy - 20, rot: -10 }
            ];
            chloros.forEach((c, i) => {
                parts.push({
                    id: `chloroplast_${i}`, keyTitle: 'bio-chloro', keyDesc: 'bio-chloro-desc',
                    createPath: (t) => {
                        const cP = new Path2D();
                        if(cP.ellipse) cP.ellipse(c.x, c.y, 40, 22, c.rot * Math.PI/180, 0, Math.PI*2);
                        else cP.arc(c.x, c.y, 30, 0, Math.PI*2);
                        return cP;
                    },
                    draw: (p, isHover, t) => {
                        ctx.fillStyle = isHover ? '#a5d6a7' : '#4caf50'; ctx.fill(p);
                        ctx.strokeStyle = '#1b5e20'; ctx.lineWidth = 4; ctx.stroke(p);
                        // Thylakoid stacks (Granum)
                        ctx.save();
                        ctx.translate(c.x, c.y); ctx.rotate(c.rot * Math.PI/180);
                        ctx.fillStyle = '#1b5e20';
                        for(let st=-15; st<=15; st+=15) {
                            ctx.beginPath(); ctx.rect(st-5, -12, 10, 24); ctx.fill();
                            // Lines across
                            ctx.strokeStyle = '#a5d6a7'; ctx.lineWidth = 1.5;
                            ctx.beginPath(); ctx.moveTo(st-5, -4); ctx.lineTo(st+5, -4); ctx.stroke();
                            ctx.beginPath(); ctx.moveTo(st-5, 4); ctx.lineTo(st+5, 4); ctx.stroke();
                        }
                        ctx.restore();
                    }
                });
            });
        } else {
            // Animal Specific: Small Vacuoles & Centrioles
            parts.push({
                id: 'animal-vacuoles', keyTitle: 'bio-vacuole', keyDesc: 'bio-vacuole-desc',
                createPath: (t) => {
                    const p = new Path2D();
                    p.moveTo(cx-110, cy-110); p.arc(cx-130, cy-110 + Math.cos(t*2)*5, 22, 0, Math.PI*2);
                    p.moveTo(cx+90, cy+130); p.arc(cx+80, cy+130 + Math.sin(t*1.5)*5, 28, 0, Math.PI*2);
                    return p;
                },
                draw: (p, isHover) => {
                    ctx.fillStyle = isHover ? '#e1f5fe' : '#b3e5fc'; ctx.fill(p);
                    ctx.strokeStyle = '#0288d1'; ctx.lineWidth = 3; ctx.stroke(p);
                }
            });

            parts.push({
                id: 'centrioles', keyTitle: 'bio-centriole', keyDesc: 'bio-centriole-desc',
                createPath: (t) => {
                    const ctX = cx - 110; const ctY = cy - 40;
                    const cP = new Path2D();
                    // Draw perpendicular barrels
                    const drawBarrel = (x, y, rot) => {
                        const rad = rot * Math.PI/180;
                        const cr = Math.cos(rad), sr = Math.sin(rad);
                        const pts = [[-10,-18], [10,-18], [10,18], [-10,18]].map(pt => [x + pt[0]*cr - pt[1]*sr, y + pt[0]*sr + pt[1]*cr]);
                        cP.moveTo(pts[0][0], pts[0][1]);
                        cP.lineTo(pts[1][0], pts[1][1]);
                        cP.lineTo(pts[2][0], pts[2][1]);
                        cP.lineTo(pts[3][0], pts[3][1]);
                        cP.closePath();
                    };
                    drawBarrel(ctX, ctY, t*15);
                    drawBarrel(ctX + 22, ctY + 8, t*15 + 90);
                    return cP;
                },
                draw: (p, isHover, t) => {
                    ctx.fillStyle = isHover ? '#ffcc80' : '#ff9800'; ctx.fill(p);
                    ctx.strokeStyle = '#e65100'; ctx.lineWidth = 3; ctx.stroke(p);
                    // Microtubule lines inner texture
                    ctx.strokeStyle = '#fff3e0'; ctx.lineWidth = 1; ctx.stroke(p);
                }
            });
        }
    }

    function animate(timestamp) {
        state.time = timestamp / 1000;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        parts.forEach(p => {
            p.currentPath = p.createPath(state.time);
            const isHovered = (hoveredBody === p.id || selectedBody === p.id);
            
            // Draw drop shadow if hovered for realism
            if (isHovered) {
                ctx.shadowColor = 'rgba(0,0,0,0.5)';
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 10;
            }
            p.draw(p.currentPath, isHovered, state.time);
            ctx.shadowColor = 'transparent'; // reset
            ctx.shadowBlur = 0;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
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

    const organelleTranslations = {
        'bio-wall': { title: 'Cell Wall', desc: 'A rigid outer layer present in plant cells that provides structural support and protection.' },
        'bio-membrane': { title: 'Cell Membrane', desc: 'A semi-permeable lipid bilayer that surrounds the cell and regulates what enters and exits.' },
        'bio-cyto': { title: 'Cytoplasm & Membrane', desc: 'The cytoplasm is a jelly-like substance filling the cell. The cell membrane is the outer boundary controlling what enters and exits.' },
        'bio-cyto-skel': { title: 'Cytoskeleton', desc: 'A network of protein filaments and tubules that gives the cell its shape and organizes its parts.' },
        'bio-vacuole-plant': { title: 'Central Vacuole', desc: 'A massive sac taking up most of the plant cell volume, maintaining turgor pressure and storing water.' },
        'bio-nucleus': { title: 'Nucleus', desc: 'The "brain" or control center of the cell, which contains the genetic material (DNA).' },
        'bio-chromatin': { title: 'Chromatin', desc: 'A mass of genetic material composed of DNA and proteins that condense to form chromosomes.' },
        'bio-envelope': { title: 'Nuclear Envelope', desc: 'A double membrane that encloses the nucleus, featuring pores that regulate the passage of molecules.' },
        'bio-nucleolus': { title: 'Nucleolus', desc: 'A dense structure inside the nucleus responsible for producing and assembling ribosomes.' },
        'bio-rough-er': { title: 'Rough ER', desc: 'Studded with ribosomes, it is involved in the synthesis and folding of proteins.' },
        'bio-smooth-er': { title: 'Smooth ER', desc: 'Lacks ribosomes and is involved in lipid synthesis, metabolism, and detoxification.' },
        'bio-golgi': { title: 'Golgi Apparatus', desc: 'Modifies, sorts, and packages proteins and lipids for transport within or outside the cell.' },
        'bio-mito': { title: 'Mitochondria', desc: 'The "powerhouse" of the cell. It generates most of the chemical energy needed to power the cell\'s biochemical reactions.' },
        'bio-lysosome': { title: 'Lysosome', desc: 'Contains digestive enzymes to break down waste materials and cellular debris.' },
        'bio-peroxi': { title: 'Peroxisomes', desc: 'Small organelles that contain enzymes to oxidize fatty acids and neutralize hydrogen peroxide.' },
        'bio-ribosome': { title: 'Ribosomes', desc: 'Tiny complexes freely floating or attached to the ER that synthesize proteins.' },
        'bio-chloro': { title: 'Chloroplast', desc: 'The site of photosynthesis in plant cells, converting light energy into chemical energy.' },
        'bio-vacuole': { title: 'Vacuole', desc: 'Storage bubbles found in cells. They are much larger in plant cells but help store waste and nutrients in animal cells.' },
        'bio-centriole': { title: 'Centrioles', desc: 'Paired barrel-shaped structures in animal cells that organize microtubules during cell division.' }
    };

    function updateInfo(body) {
        if (body && organelleTranslations[body.keyTitle]) {
            infoTitle.textContent = organelleTranslations[body.keyTitle].title;
            infoDesc.textContent = organelleTranslations[body.keyDesc] ? organelleTranslations[body.keyDesc].desc : organelleTranslations[body.keyTitle].desc;
        } else {
            infoTitle.textContent = 'Select an Organelle';
            infoDesc.textContent = 'Click on parts of the cell diagram to view details here.';
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
