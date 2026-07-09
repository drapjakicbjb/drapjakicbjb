/**
 * Human Heart Cross-Section Simulator
 * High-Fidelity Anatomical Proportions with Advanced Textures and conduction system
 */
(function () {
'use strict';

const canvas = document.getElementById('heart-canvas');
const ctx    = canvas.getContext('2d');
const ecgEl  = document.getElementById('ecg-mini');
const ecgCtx = ecgEl ? ecgEl.getContext('2d') : null;

// ── Logical Canvas Size ──────────────────────────────────────────────────
const W = 900, H = 680;
canvas.width  = W;
canvas.height = H;
canvas.style.aspectRatio = '900/680';

// ── Anatomical Anchors & Geometry ─────────────────────────────────────────
const FIBROUS_CENTER_X = 400; 
const FIBROUS_CENTER_Y = 320; 

// Tricuspid Valve Plane (RA -> RV)
const TV_OUTER = {x: 140, y: 260};
const TV_INNER = {x: 360, y: 310};

// Mitral Valve Plane (LA -> LV)
const MV_INNER = {x: 440, y: 310};
const MV_OUTER = {x: 720, y: 260};

// Cardiac Apex
const APEX = {x: 580, y: 640};

// Interventricular Septum
const SEPTUM_TOP = {x: FIBROUS_CENTER_X, y: 320};
const SEPTUM_CP1 = {x: 340, y: 450};
const SEPTUM_CP2 = {x: 420, y: 550};
const SEPTUM_BOT = APEX;

const state = { bpm: 72, targetBpm: 72, phase: 0, running: true,
    showBlood: true, showLabels: true, showValves: true, mode: 'rest' };
const V = { tri: 0, pul: 0, mit: 0, aor: 0 };

const LABELS = [
    { text: 'Aorta', x: 520, y: 35, px: 680, py: 35 },
    { text: 'Superior Vena Cava', x: 220, y: 60, px: 140, py: 60 },
    { text: 'Pulmonary Artery', x: 330, y: 70, px: 180, py: 25 },
    { text: 'Right Atrium', x: 280, y: 180, px: 100, py: 180 },
    { text: 'Tricuspid Valve', x: 270, y: 290, px: 100, py: 290 },
    { text: 'Right Ventricle', x: 300, y: 480, px: 110, py: 480 },
    { text: 'Inferior Vena Cava', x: 180, y: 620, px: 120, py: 620 },
    { text: 'Interventricular Septum', x: 400, y: 470, px: 400, py: 660 },
    { text: 'Left Ventricle', x: 580, y: 480, px: 760, py: 480 },
    { text: 'Mitral Valve', x: 560, y: 290, px: 750, py: 290 },
    { text: 'Left Atrium', x: 580, y: 180, px: 750, py: 210 },
    { text: 'Pulmonary Veins', x: 730, y: 160, px: 780, py: 70 },
    { text: 'Myocardium (LV Wall)', x: 710, y: 430, px: 760, py: 430 }
];

// ── Helpers ──────────────────────────────────────────────────────────────
const clamp  = (v,lo,hi) => Math.max(lo,Math.min(hi,v));
const lerp   = (a,b,t) => a+(b-a)*t;
const easeOut = t => 1-(1-t)*(1-t);
const easeIn  = t => t*t;
const inv     = (a,b,v) => clamp((v-a)/(b-a), 0, 1);

function phaseInfo(p) {
    if (p<0.09) return{name:'Atrial Systole',    desc:'Atria contract – AV valves open',            color:'#f59e0b'};
    if (p<0.15) return{name:'Isovolumetric Contraction',desc:'All valves momentarily closed',        color:'#ef4444'};
    if (p<0.40) return{name:'Ventricular Systole',desc:'Ventricles eject – semilunar valves open',  color:'#ef4444'};
    if (p<0.50) return{name:'Isovolumetric Relaxation',desc:'Ventricles relax, valves closing',     color:'#8b5cf6'};
    return             {name:'Diastole',          desc:'All chambers fill — heart at rest',          color:'#22c55e'};
}
function rg(x,y,r0,r1,stops){const g=ctx.createRadialGradient(x,y,r0,x,y,r1);stops.forEach(([o,c])=>g.addColorStop(o,c));return g;}
function lg(x0,y0,x1,y1,stops){const g=ctx.createLinearGradient(x0,y0,x1,y1);stops.forEach(([o,c])=>g.addColorStop(o,c));return g;}

// ═══════════════════════════════════════════════════════════════════════════
//  DRAW FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════

function drawBackground(){
    ctx.fillStyle=rg(W/2,H/2,40,W*.75,[[0,'#050a12'],[1,'#020408']]);
    ctx.fillRect(0,0,W,H);
}

// ── Great Vessels ─────────────────────────────────────
function drawVesselsBack(){
    const glow = 'rgba(100,140,255,0.2)';
    // SVC (enters RA)
    drawTube(220,-10, 205,150, 22, '#1428a0','#2244cc', glow);
    // IVC (enters RA)
    drawTube(185,280, 185,H+10, 20, '#1428a0','#2244cc', glow);
    // Pulmonary Artery (exits RV)
    drawTube(320,30, 340,110, 22, '#0e1e80','#1a38bb', glow);
    // Aorta (exits LV)
    drawTube(500,20, 480,100, 28, '#880808','#cc1515', 'rgba(255,80,80,0.2)');
    // Pulmonary Veins
    drawTube(820,130, 700,150, 15, '#880808','#aa1212', glow);
    drawTube(820,180, 700,190, 15, '#770808','#991010', glow);
}

function drawTube(x0,y0,x1,y1,r,ca,cb,glow){
    const a=Math.atan2(y1-y0,x1-x0), px=Math.sin(a)*r, py=-Math.cos(a)*r;
    ctx.beginPath();
    ctx.moveTo(x0+px,y0+py);
    ctx.lineTo(x1+px,y1+py);
    ctx.lineTo(x1-px,y1-py);
    ctx.lineTo(x0-px,y0-py);
    ctx.closePath();
    ctx.fillStyle=lg(x0-px,y0,x0+px,y0,[[0,'rgba(0,0,0,0.85)'],[.3,ca],[.5,'rgba(255,255,255,0.2)'],[.7,cb],[1,'rgba(0,0,0,0.75)']]);
    ctx.fill();
    ctx.lineWidth=2;ctx.strokeStyle='rgba(0,0,0,0.5)';ctx.stroke();

    // 3D Highlight tube lines
    ctx.beginPath();
    ctx.moveTo(x0 - px*0.1, y0 - py*0.1);
    ctx.lineTo(x1 - px*0.1, y1 - py*0.1);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = r * 0.25;
    ctx.stroke();
}

// ── Muscle Texture Striations ───────────────────────────────────────────
function drawMyocardiumStriations() {
    ctx.save();
    // Clip to general myocardium boundaries so textures stay inside walls
    ctx.beginPath();
    ctx.moveTo(400, 100);
    ctx.bezierCurveTo(200,80, 60,200, TV_OUTER.x, TV_OUTER.y);
    ctx.bezierCurveTo(30,450, 150,580, APEX.x, APEX.y+25);
    ctx.bezierCurveTo(780,620, 800,350, MV_OUTER.x, MV_OUTER.y);
    ctx.bezierCurveTo(750,150, 550,80, 400, 100);
    ctx.clip();

    // Concentric muscle layers/fibers
    ctx.strokeStyle = 'rgba(255, 80, 80, 0.14)';
    ctx.lineWidth = 1.5;
    for (let r = 70; r < 460; r += 12) {
        ctx.beginPath();
        ctx.arc(400, 320, r, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Cross-muscle fiber details (wavy lines)
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
    ctx.lineWidth = 1;
    for (let y = 80; y < 660; y += 18) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(250, y - 25, 550, y + 25, W, y);
        ctx.stroke();
    }

    // Tiny micro-vessels (coronary cuts)
    ctx.fillStyle = 'rgba(230, 40, 40, 0.7)';
    for(let i=0; i<15; i++) {
        const cx = 150 + Math.sin(i * 3.4) * 50 + (i*30);
        const cy = 350 + Math.cos(i * 2.1) * 150;
        ctx.beginPath();
        ctx.arc(cx, cy, 3, 0, Math.PI*2);
        ctx.fill();
    }
    ctx.fillStyle = 'rgba(40, 100, 230, 0.7)';
    for(let i=0; i<12; i++) {
        const cx = 170 + Math.sin(i * 1.4) * 60 + (i*35);
        const cy = 370 + Math.cos(i * 3.7) * 120;
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI*2);
        ctx.fill();
    }
    ctx.restore();
}

// ── CHAMBERS (Organic, Beautifully Textured) ───────────────────────────
function drawChambers(ph){
    const aS = (ph<0.09) ? lerp(1.0,0.95, easeOut(ph/0.09)) : 1.0;
    const vS = (ph>=0.15&&ph<0.40) ? lerp(1.0,0.92, easeOut(inv(0.15,0.40,ph))) : 1.0;

    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    // ── Myocardium Outer Shell ──
    ctx.beginPath();
    ctx.moveTo(400, 100);
    ctx.bezierCurveTo(200,80, 60,200, TV_OUTER.x, TV_OUTER.y);
    ctx.bezierCurveTo(30,450, 150,580, APEX.x, APEX.y+25);
    ctx.bezierCurveTo(780,620, 800,350, MV_OUTER.x, MV_OUTER.y);
    ctx.bezierCurveTo(750,150, 550,80, 400, 100);
    ctx.fillStyle = '#650c0c'; 
    ctx.fill();

    // Draw striking muscle textures inside walls
    drawMyocardiumStriations();

    // ── Right Atrium (Thin wall, top left) ──
    ctx.save();
    ctx.translate(250,180);ctx.scale(aS,aS);ctx.translate(-250,-180);
    ctx.beginPath();
    ctx.moveTo(TV_OUTER.x, TV_OUTER.y);
    ctx.bezierCurveTo(120, 180, 200, 90, 300, 100);
    ctx.bezierCurveTo(360, 110, 420, 220, TV_INNER.x, TV_INNER.y);
    ctx.lineTo(TV_OUTER.x, TV_OUTER.y);
    ctx.fillStyle=rg(240,170,10,160,[[0,'#1a32a6'],[.6,'#12247b'],[1,'#060c2d']]);
    ctx.fill();
    ctx.lineWidth=5; ctx.strokeStyle='#8f1212'; ctx.stroke(); 
    ctx.restore();

    // ── Left Atrium (Thin wall, top right) ──
    ctx.save();
    ctx.translate(580,180);ctx.scale(aS,aS);ctx.translate(-580,-180);
    ctx.beginPath();
    ctx.moveTo(MV_INNER.x, MV_INNER.y);
    ctx.bezierCurveTo(450, 200, 480, 100, 580, 110);
    ctx.bezierCurveTo(680, 120, 750, 180, MV_OUTER.x, MV_OUTER.y);
    ctx.lineTo(MV_INNER.x, MV_INNER.y);
    ctx.fillStyle=rg(580,180,10,150,[[0,'#a81414'],[.6,'#740b0b'],[1,'#2c0202']]);
    ctx.fill();
    ctx.lineWidth=5; ctx.strokeStyle='#8f1212'; ctx.stroke(); 
    ctx.restore();

    // ── Right Ventricle (Thin walls) ──
    ctx.save();
    ctx.translate(350,450);ctx.scale(1,vS);ctx.translate(-350,-450);
    ctx.beginPath();
    ctx.moveTo(TV_OUTER.x, TV_OUTER.y);
    ctx.bezierCurveTo(100, 360, 160, 520, 300, 580);
    ctx.bezierCurveTo(380, 610, 480, 580, APEX.x, APEX.y);
    ctx.bezierCurveTo(SEPTUM_CP2.x, SEPTUM_CP2.y, SEPTUM_CP1.x, SEPTUM_CP1.y, TV_INNER.x, TV_INNER.y);
    ctx.lineTo(TV_OUTER.x, TV_OUTER.y);
    ctx.fillStyle=rg(300,450,10,180,[[0,'#162a98'],[.5,'#0d1a63'],[1,'#030925']]);
    ctx.fill();
    
    // Trabeculae Carneae (ventricle muscle ridges)
    ctx.strokeStyle = 'rgba(150, 40, 40, 0.4)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(170, 390); ctx.quadraticCurveTo(190, 460, 210, 510);
    ctx.moveTo(240, 470); ctx.quadraticCurveTo(260, 510, 280, 550);
    ctx.stroke();

    ctx.lineWidth=8; ctx.strokeStyle='#9c1b1b'; ctx.stroke(); 
    ctx.restore();

    // ── Interventricular Septum Core ──
    ctx.beginPath();
    ctx.moveTo(TV_INNER.x, TV_INNER.y);
    ctx.lineTo(MV_INNER.x, MV_INNER.y);
    ctx.bezierCurveTo(380, 450, 480, 550, APEX.x, APEX.y);
    ctx.bezierCurveTo(SEPTUM_CP2.x, SEPTUM_CP2.y, SEPTUM_CP1.x, SEPTUM_CP1.y, TV_INNER.x, TV_INNER.y);
    ctx.fillStyle = lg(350,450,450,450,[[0,'#720e0e'],[.5,'#941616'],[1,'#720e0e']]);
    ctx.fill();

    // ── Left Ventricle (Massive LV Wall) ──
    ctx.save();
    ctx.translate(560,450);ctx.scale(1,vS);ctx.translate(-560,-450);
    ctx.beginPath();
    ctx.moveTo(MV_INNER.x, MV_INNER.y);
    ctx.bezierCurveTo(390, 450, 490, 550, APEX.x-10, APEX.y-15);
    ctx.bezierCurveTo(750, 560, 780, 380, MV_OUTER.x, MV_OUTER.y);
    ctx.lineTo(MV_INNER.x, MV_INNER.y);
    ctx.fillStyle=rg(580,430,20,200,[[0,'#b21818'],[.5,'#760e0e'],[1,'#200101']]);
    ctx.fill();

    // LV Muscle Ridges
    ctx.strokeStyle = 'rgba(160, 30, 30, 0.45)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(680, 380); ctx.quadraticCurveTo(690, 450, 670, 520);
    ctx.moveTo(630, 460); ctx.quadraticCurveTo(640, 520, 610, 570);
    ctx.stroke();

    ctx.lineWidth=24; ctx.strokeStyle='#821212'; ctx.stroke(); 
    ctx.restore();
}

// ── Valves ────────────────────────────────────────────────────────
function drawAValve(x1, y1, x2, y2, openness, leaflets, color, papMuscles) {
    const cx = (x1+x2)/2, cy = (y1+y2)/2;
    const dx = x2-x1, dy = y2-y1;
    const len = Math.hypot(dx, dy);
    // Normal vector pointing down into ventricles
    const nx = -dy/len, ny = dx/len; 

    // Draw fibrous ring
    ctx.beginPath();
    ctx.moveTo(x1, y1); ctx.lineTo(x2, y2);
    ctx.lineWidth = 5; ctx.strokeStyle = '#8f680a'; ctx.stroke(); 

    // Leaflets open downwards
    const drop = 40 * openness + 5; 
    ctx.fillStyle = color;
    ctx.strokeStyle = '#3b2505';
    ctx.lineWidth = 1.8;

    const leafletTips = [];

    for (let i=0; i<leaflets; i++) {
        const t1 = i/leaflets, t2 = (i+1)/leaflets;
        const px1 = x1 + dx*t1, py1 = y1 + dy*t1;
        const px2 = x1 + dx*t2, py2 = y1 + dy*t2;
        const midX = (px1+px2)/2, midY = (py1+py2)/2;

        ctx.beginPath();
        ctx.moveTo(px1, py1);
        ctx.quadraticCurveTo(midX + nx*drop*1.5, midY + ny*drop*1.5, midX + nx*drop, midY + ny*drop);
        ctx.quadraticCurveTo(midX + nx*drop*.5, midY + ny*drop*.5, px2, py2);
        ctx.fill(); ctx.stroke();

        leafletTips.push({ x: midX + nx*drop, y: midY + ny*drop });
    }

    // Draw Chordae Tendineae (Fibers) & Papillary muscles
    if (state.showValves && papMuscles) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
        ctx.lineWidth = 1.1;
        papMuscles.forEach(pm => {
            // Draw papillary muscle base
            ctx.beginPath();
            ctx.arc(pm.x, pm.y, 6, 0, Math.PI*2);
            ctx.fillStyle = '#650c0c';
            ctx.fill();
            ctx.strokeStyle = '#400606';
            ctx.stroke();

            // Strings extending to tips
            leafletTips.forEach(tip => {
                ctx.beginPath();
                ctx.moveTo(pm.x, pm.y);
                ctx.lineTo(tip.x, tip.y);
                ctx.stroke();
            });
        });
    }
}

function drawSemilunar(cx, cy, openness, color) {
    const R = 18;
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI*2);
    ctx.lineWidth = 4; ctx.strokeStyle = '#8f680a'; ctx.stroke();
    
    ctx.fillStyle = openness > 0.5 ? `rgba(200, 160, 20, ${0.4*(1-openness)})` : color;
    
    // Draw 3 cusps
    [30, 150, 270].forEach(deg => {
        const rad = deg * Math.PI / 180;
        const gap = R * lerp(0.8, 0.1, openness);
        const tx = cx + Math.cos(rad) * gap;
        const ty = cy + Math.sin(rad) * gap;
        
        ctx.beginPath();
        ctx.moveTo(cx + Math.cos(rad - 1.05)*R, cy + Math.sin(rad - 1.05)*R);
        ctx.quadraticCurveTo(tx, ty, cx + Math.cos(rad + 1.05)*R, cy + Math.sin(rad + 1.05)*R);
        ctx.fill(); ctx.stroke();
    });
}

function drawAorticArch(){
    // Arch
    ctx.beginPath();
    ctx.moveTo(480, 100);
    ctx.bezierCurveTo(460, 20, 520, -10, 560, 40);
    ctx.bezierCurveTo(580, 60, 580, 100, 540, 100);
    ctx.bezierCurveTo(560, 30, 480, 30, 480, 100);
    ctx.fillStyle=lg(460,0,580,0,[[0,'#800808'],[.5,'#e02828'],[1,'#961010']]);
    ctx.fill();

    // 3 upper branching vessels
    const branches = [
        {x: 485, y: 35, rx: -10, ry: -30},
        {x: 510, y: 20, rx: 0, ry: -35},
        {x: 535, y: 22, rx: 10, ry: -30}
    ];

    branches.forEach(b => {
        ctx.beginPath();
        ctx.moveTo(b.x - 6, b.y);
        ctx.lineTo(b.x - 6 + b.rx, b.y + b.ry);
        ctx.lineTo(b.x + 6 + b.rx, b.y + b.ry);
        ctx.lineTo(b.x + 6, b.y);
        ctx.closePath();
        ctx.fillStyle = lg(b.x-6, b.y, b.x+6, b.y, [[0, '#880808'], [0.5, '#cc1515'], [1, '#aa0c0c']]);
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(0,0,0,0.5)';
        ctx.stroke();
    });
}

function drawPATrunk(){
    ctx.beginPath();
    ctx.moveTo(340, 110);
    ctx.bezierCurveTo(320, 30, 380, -10, 420, 20);
    ctx.bezierCurveTo(450, 40, 450, 80, 400, 100);
    ctx.bezierCurveTo(420, 40, 360, 40, 340, 110);
    ctx.fillStyle=lg(320,0,450,0,[[0,'#0a1660'],[.5,'#2040b8'],[1,'#0e1e72']]);
    ctx.fill();
}

function drawValves(){
    // Compute dynamic scaled coordinates for ventricular papillary muscles
    const vS = (state.phase>=0.15&&state.phase<0.40) ? lerp(1.0,0.92, easeOut(inv(0.15,0.40,state.phase))) : 1.0;
    
    // RV Papillary muscles (y-scaled in sync with RV)
    const rvPaps = [
        { x: 220, y: 450 + (510 - 450)*vS },
        { x: 310, y: 450 + (490 - 450)*vS }
    ];

    // LV Papillary muscles (y-scaled in sync with LV)
    const lvPaps = [
        { x: 550, y: 450 + (520 - 450)*vS },
        { x: 640, y: 450 + (490 - 450)*vS }
    ];

    // Tricuspid
    drawAValve(TV_OUTER.x, TV_OUTER.y, TV_INNER.x, TV_INNER.y, V.tri, 3, '#c29c15', rvPaps);
    // Mitral
    drawAValve(MV_INNER.x, MV_INNER.y, MV_OUTER.x, MV_OUTER.y, V.mit, 2, '#c29c15', lvPaps);
    
    // Pulmonary (at RV exit)
    drawSemilunar(370, 130, V.pul, '#c29c15');
    // Aortic (at LV exit)
    drawSemilunar(480, 120, V.aor, '#c29c15');
}

// ── Electrical Conduction System (Glowing yellow paths) ──────────────────
function drawElectricalConduction(ph) {
    const activeColor = '#ffd000';
    const inactiveColor = 'rgba(230, 200, 50, 0.12)';
    
    const isAtrial = (ph < 0.12);
    const isAV = (ph >= 0.12 && ph < 0.18);
    const isVentricular = (ph >= 0.18 && ph < 0.40);
    
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const drawPath = (pts, active) => {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for(let i=1; i<pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
        
        if (active) {
            ctx.strokeStyle = activeColor;
            ctx.lineWidth = 3.5;
            ctx.shadowColor = '#ffd000';
            ctx.shadowBlur = 10;
        } else {
            ctx.strokeStyle = inactiveColor;
            ctx.lineWidth = 2.0;
        }
        ctx.stroke();
        ctx.shadowBlur = 0; 
    };

    const drawNode = (x, y, active, size = 6) => {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2);
        if (active) {
            ctx.fillStyle = '#ffffff';
            ctx.strokeStyle = activeColor;
            ctx.lineWidth = 3;
            ctx.shadowColor = '#ffd000';
            ctx.shadowBlur = 14;
            ctx.fill();
            ctx.stroke();
        } else {
            ctx.fillStyle = 'rgba(230, 200, 50, 0.35)';
            ctx.strokeStyle = 'rgba(230, 200, 50, 0.15)';
            ctx.lineWidth = 1.5;
            ctx.fill();
            ctx.stroke();
        }
        ctx.shadowBlur = 0;
    };

    // SA Node
    drawNode(230, 130, isAtrial, 7);

    // AV Node
    drawNode(385, 305, isAV || isAtrial, 6);

    // Internodal Pathways (SA -> AV)
    ctx.beginPath();
    ctx.moveTo(230, 130);
    ctx.bezierCurveTo(270, 150, 310, 220, 385, 305);
    ctx.moveTo(230, 130);
    ctx.bezierCurveTo(250, 180, 290, 260, 385, 305);
    ctx.moveTo(230, 130);
    ctx.bezierCurveTo(300, 130, 350, 200, 385, 305);
    if (isAtrial) {
        ctx.strokeStyle = activeColor;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#ffd000';
        ctx.shadowBlur = 8;
    } else {
        ctx.strokeStyle = inactiveColor;
        ctx.lineWidth = 1.5;
    }
    ctx.stroke();
    ctx.shadowBlur = 0;

    // Bundle of His
    const bundlePts = [
        { x: 385, y: 305 },
        { x: 395, y: 360 },
        { x: 410, y: 440 }
    ];
    drawPath(bundlePts, isAV || isVentricular);

    // Bundle Branches
    const rightBranch = [
        { x: 410, y: 440 },
        { x: 360, y: 490 },
        { x: 310, y: 530 },
        { x: 260, y: 550 }
    ];
    const leftBranch = [
        { x: 410, y: 440 },
        { x: 460, y: 500 },
        { x: 520, y: 550 },
        { x: 570, y: 580 }
    ];
    drawPath(rightBranch, isVentricular);
    drawPath(leftBranch, isVentricular);

    // Purkinje Fibers
    ctx.strokeStyle = isVentricular ? activeColor : inactiveColor;
    ctx.lineWidth = isVentricular ? 2 : 1;
    if (isVentricular) {
        ctx.shadowColor = '#ffd000';
        ctx.shadowBlur = 5;
    }
    
    const purkinjes = [
        { from: { x: 310, y: 530 }, to: { x: 270, y: 500 } },
        { from: { x: 260, y: 550 }, to: { x: 220, y: 520 } },
        { from: { x: 520, y: 550 }, to: { x: 580, y: 510 } },
        { from: { x: 570, y: 580 }, to: { x: 630, y: 540 } }
    ];
    purkinjes.forEach(f => {
        ctx.beginPath();
        ctx.moveTo(f.from.x, f.from.y);
        ctx.lineTo(f.to.x, f.to.y);
        ctx.stroke();
    });

    ctx.restore();
}

// ── Interactive Labels ──────────────────────────────────────────────────
function drawLabels() {
    if (!state.showLabels) return;
    
    ctx.save();
    ctx.font = '500 12px Poppins, sans-serif';
    
    LABELS.forEach(l => {
        // Dot at target
        ctx.beginPath();
        ctx.arc(l.x, l.y, 4, 0, Math.PI*2);
        ctx.fillStyle = '#ff6060';
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.shadowColor = '#ff6060';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.stroke();
        ctx.shadowBlur = 0; 
        
        // Leader line
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        const midX = l.px + (l.x < l.px ? -15 : 15);
        ctx.lineTo(midX, l.py);
        ctx.lineTo(l.px, l.py);
        ctx.strokeStyle = 'rgba(200, 220, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Text Box measurements
        const textWidth = ctx.measureText(l.text).width;
        const padX = 8, padY = 5;
        const boxW = textWidth + padX * 2;
        const boxH = 18 + padY * 2;
        
        const bx = l.x < l.px ? l.px - 15 : l.px + 15 - boxW;
        const by = l.py - boxH / 2;
        
        // Card Box drawing
        ctx.fillStyle = 'rgba(8, 13, 26, 0.85)';
        ctx.strokeStyle = 'rgba(100, 140, 255, 0.3)';
        ctx.lineWidth = 1;
        
        ctx.beginPath();
        ctx.roundRect(bx, by, boxW, boxH, 6);
        ctx.fill();
        ctx.stroke();
        
        ctx.fillStyle = '#ffffff';
        ctx.textBaseline = 'middle';
        ctx.fillText(l.text, bx + padX, by + boxH/2);
    });
    
    ctx.restore();
}

// ── Blood particles ───────────────────────────────────────────────────────
const PATHS = {
    svc:   { col:'#2244cc', gl:'rgba(60,110,255,0.7)', wpts:[[210,20],[210,60],[210,100],[210,140],[220,170]] },
    ivc:   { col:'#2244cc', gl:'rgba(60,110,255,0.7)', wpts:[[180,680],[180,600],[180,500],[190,400],[220,250],[240,190]] },
    ra2rv: { col:'#1a35bb', gl:'rgba(40,90,220,0.7)',  wpts:[[250,190],[260,280],[250,380],[200,480],[230,550]] },
    rv2pa: { col:'#1a35bb', gl:'rgba(40,90,220,0.7)',  wpts:[[240,550],[300,560],[380,500],[360,400],[350,300],[370,170],[370,100]] },
    pv2la: { col:'#cc1414', gl:'rgba(220,55,55,0.7)',  wpts:[[820,140],[740,140],[660,140],[600,160]] },
    la2lv: { col:'#cc1414', gl:'rgba(220,55,55,0.7)',  wpts:[[600,160],[580,220],[580,280],[620,400],[680,520],[600,600]] },
    lv2ao: { col:'#dd1515', gl:'rgba(230,55,55,0.7)',  wpts:[[600,600],[520,580],[500,450],[480,350],[480,250],[480,120],[500,40]] }
};

function samplePath(wpts,t){
    const n=wpts.length-1,idx=t*n,i=Math.floor(Math.min(idx,n-1)),f=idx-i;
    const a=wpts[i],b=wpts[Math.min(i+1,n)];
    return{x:a[0]+(b[0]-a[0])*f, y:a[1]+(b[1]-a[1])*f};
}

class Particle{
    constructor(key){this.key=key;this.t=Math.random();this.spd=0.003+Math.random()*0.006;this.r=3.5+Math.random()*2;this.alpha=0.6+Math.random()*0.4;}
    update(m){this.t=(this.t+this.spd*m)%1;}
    pos(){return samplePath(PATHS[this.key].wpts,this.t);}
}

const particles={};
for(const k of Object.keys(PATHS)) particles[k]=Array.from({length:18},()=>new Particle(k));

function activePaths(p){
    const s=new Set();
    if(p>=0.50||p<0.09) s.add('svc'),s.add('ivc'),s.add('pv2la');
    if(p<0.09)           s.add('ra2rv'),s.add('la2lv');
    if(p>=0.15&&p<0.40) s.add('rv2pa'),s.add('lv2ao');
    return s;
}

function drawParticles(ph){
    if(!state.showBlood) return;
    const act=activePaths(ph), spd=state.bpm/72*(state.running?1:0);
    for(const[k,arr] of Object.entries(particles)){
        const pd=PATHS[k],isAct=act.has(k);
        for(const p of arr){
            if(isAct) p.update(spd);
            const pos=p.pos();
            
            // Draw particle as a glowing biconcave cell
            ctx.save();
            ctx.globalAlpha = isAct ? p.alpha : p.alpha * 0.1;
            
            // Cell outline glow
            const gr=ctx.createRadialGradient(pos.x,pos.y,0,pos.x,pos.y,p.r+4);
            gr.addColorStop(0, pd.gl.replace('0.7', String(p.alpha)));
            gr.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, p.r + 2, 0, Math.PI*2);
            ctx.fillStyle = gr;
            ctx.fill();
            
            // Cell Body
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, p.r, 0, Math.PI*2);
            ctx.fillStyle = pd.col;
            ctx.fill();
            
            // Highlight Shine
            ctx.beginPath();
            ctx.arc(pos.x - p.r/3, pos.y - p.r/3, p.r/3, 0, Math.PI*2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
            ctx.fill();
            
            ctx.restore();
        }
    }
}

// ── ECG ──────────────────────────────────────────────────────────────────
const ecgBuf=new Array(160).fill(0);let ecgAcc=0;
function drawECG(){
    if(!ecgCtx)return;
    const ew=ecgEl.width,eh=ecgEl.height,mid=eh/2;
    ecgCtx.clearRect(0,0,ew,eh);
    ecgCtx.save();ecgCtx.shadowBlur=6;ecgCtx.shadowColor='#00ee55';
    ecgCtx.strokeStyle='#00dd44';ecgCtx.lineWidth=1.8;ecgCtx.beginPath();
    ecgCtx.moveTo(0,mid-ecgBuf[0]);
    for(let i=1;i<ecgBuf.length;i++) ecgCtx.lineTo(i/ecgBuf.length*ew,mid-ecgBuf[i]);
    ecgCtx.stroke();ecgCtx.restore();
    const ty=mid-ecgBuf[ecgBuf.length-1];
    ecgCtx.save();ecgCtx.shadowBlur=10;ecgCtx.shadowColor='#fff';
    ecgCtx.beginPath();ecgCtx.arc(ew-2,ty,2.5,0,Math.PI*2);
    ecgCtx.fillStyle='#fff';ecgCtx.fill();ecgCtx.restore();
}

// ── Lifecycle ─────────────────────────────────────────────────────────────
function updateCycle(dt){
    if(!state.running)return;
    if(state.mode==='exercise') state.targetBpm=Math.min(170,state.targetBpm+dt*2.5);
    if(state.mode==='stress'&&Math.random()<0.008) state.targetBpm=95+Math.random()*75;
    state.bpm+=(state.targetBpm-state.bpm)*0.055;

    state.phase=(state.phase+dt*(state.bpm/60))%1;
    const p=state.phase;

    if(p<0.09){const t=p/0.09;V.tri=easeOut(t);V.mit=easeOut(t);V.pul=0;V.aor=0;}
    else if(p<0.15){V.tri=easeIn(1-(p-0.09)/0.06);V.mit=V.tri;V.pul=0;V.aor=0;}
    else if(p<0.40){const t=(p-0.15)/0.25;V.pul=easeOut(Math.min(t*3,1));V.aor=V.pul;V.tri=0;V.mit=0;}
    else if(p<0.50){V.pul=easeIn(1-(p-0.40)/0.10);V.aor=V.pul;V.tri=0;V.mit=0;}
    else{const t=(p-0.50)/0.50;V.tri=clamp(t*2,0,0.8);V.mit=V.tri;V.pul=0;V.aor=0;}

    let ev=(Math.random()-0.5)*1.1;
    if(p<0.09)              ev=Math.sin(p/0.09*Math.PI)*11;
    else if(p>=0.13&&p<0.22){const t=(p-0.13)/0.09;ev=t<.15?-12:t<.55?44:- 16;}
    else if(p>=0.36&&p<0.50) ev=Math.sin((p-0.36)/0.14*Math.PI)*16;

    ecgAcc+=dt*52;while(ecgAcc>1){ecgBuf.shift();ecgBuf.push(ev);ecgAcc--;}

    // UI Updates
    document.getElementById('bpm-display').textContent=Math.round(state.bpm);
    document.getElementById('bpm-slider').value=state.targetBpm;
    const pi=phaseInfo(p);
    document.getElementById('phase-name').textContent=pi.name;
    document.getElementById('phase-desc').textContent=pi.desc;
    document.getElementById('phase-dot').style.background=pi.color;
    ['tri','pul','mit','aor'].forEach(v=>{
        const op=V[v]>0.35, el1 = document.getElementById('vs-'+v), el2 = document.getElementById('vd-'+v);
        if(el1){ el1.textContent = op?'OPEN':'CLOSED'; el1.style.color = op?'#22c55e':'#ef4444'; }
        if(el2){ el2.style.background = op?'#22c55e':'#ef4444'; }
    });
}

function render(){
    drawBackground();
    drawVesselsBack();
    drawAorticArch();
    drawPATrunk();
    drawChambers(state.phase);
    drawValves();
    drawParticles(state.phase);
    drawElectricalConduction(state.phase);
    drawLabels();
    drawECG();
}

let lastTs=0;
function tick(ts){
    const dt=Math.min((ts-lastTs)/1000, 0.05); lastTs=ts;
    updateCycle(dt); render(); requestAnimationFrame(tick);
}
requestAnimationFrame(ts=>{lastTs=ts;requestAnimationFrame(tick);});

// UI Event Listeners
document.getElementById('bpm-slider').addEventListener('input',e=>{
    state.targetBpm=+e.target.value; state.mode='custom';
    document.querySelectorAll('.mbtn').forEach(b=>b.classList.remove('active'));
});
document.querySelectorAll('.mbtn').forEach(btn=>{
    btn.addEventListener('click',()=>{
        const m=btn.dataset.mode;
        if(m==='pause'){state.running=!state.running;btn.innerHTML=`<i class="fas fa-${state.running?'pause':'play'}"></i>${state.running?'Pause':'Resume'}`;return;}
        document.querySelectorAll('.mbtn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
        state.mode=m; state.running=true;
        if(m==='rest') state.targetBpm=72;
        if(m==='exercise') state.targetBpm=120;
        if(m==='stress') state.targetBpm=140;
    });
});
['blood','labels','valves'].forEach(k=>{
    const el = document.getElementById('tog-'+k);
    if(el) el.addEventListener('click', ()=>{ 
        state['show'+k.charAt(0).toUpperCase()+k.slice(1)] ^= true; 
        el.classList.toggle('on'); 
    });
});

})();
