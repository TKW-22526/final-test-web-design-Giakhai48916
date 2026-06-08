const canvas = document.getElementById('galaxy-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

class Star {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.2 + 0.6;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.04 + 0.015;
    }
    update() {
        this.opacity += this.speed;
        if (this.opacity > 1 || this.opacity < 0.2) this.speed *= -1;
    }
    draw() {
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        if (this.size > 1.8) {
            ctx.shadowBlur = 12;
            ctx.shadowColor = '#a0c4ff';
            ctx.fill();
        }
    }
}

// === HÀNH TINH MỚI ===
class Planet {
    constructor() {
        this.reset();
    }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height * 0.8; // thiên về phía trên
        this.size = Math.random() * 8 + 6;           // kích thước hành tinh
        this.opacity = Math.random() * 0.6 + 0.3;    // mờ hơn sao
        this.speed = Math.random() * 0.008 + 0.003;  // di chuyển rất chậm
        this.color = this.getRandomColor();
        this.glowColor = this.color;
    }
    getRandomColor() {
        const colors = ['#6b8cff', '#ff9aee', '#a5ffdd', '#ffd58a', '#c8a0ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.opacity += this.speed;
        if (this.opacity > 0.9 || this.opacity < 0.3) this.speed *= -1;
    }
    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Glow ngoài
        ctx.shadowBlur = 25;
        ctx.shadowColor = this.glowColor;
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Lõi sáng hơn
        ctx.shadowBlur = 8;
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

let stars = [];
let planets = [];

function initStarsAndPlanets() {
    stars = [];
    planets = [];
    
    // Sao
    for (let i = 0; i < 700; i++) {
        stars.push(new Star());
    }
    
    // Hành tinh nhỏ (chỉ 6-8 hành tinh)
    for (let i = 0; i < 7; i++) {
        planets.push(new Planet());
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Vẽ sao
    for (let star of stars) {
        star.update();
        star.draw();
    }
    
    // Vẽ hành tinh
    for (let planet of planets) {
        planet.update();
        planet.draw();
    }
    
    requestAnimationFrame(animate);
}

// Khởi chạy
window.addEventListener('resize', () => {
    resizeCanvas();
    initStarsAndPlanets();
});

resizeCanvas();
initStarsAndPlanets();
animate();