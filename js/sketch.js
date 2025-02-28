let particles = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('p5-background');
    for (let i = 0; i < 150; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    background(0, 50);
    for (let particle of particles) {
        particle.attractTo(mouseX, mouseY);
        particle.update();
        particle.show();
    }
    drawCursorCircle();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-1, 1);
        this.vy = random(-1, 1);
        this.size = random(2, 5);
    }

    attractTo(targetX, targetY) {
        let dx = targetX - this.x;
        let dy = targetY - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let force = constrain(1 / (distance * 0.1), 0, 0.05); // 距離に応じた力の調整
        let forceX = dx * force;
        let forceY = dy * force;
        this.vx += forceX;
        this.vy += forceY;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95; // 摩擦をシミュレート
        this.vy *= 0.95; // 摩擦をシミュレート
        this.vx += random(-0.1, 0.1); // ランダムな動きを追加
        this.vy += random(-0.1, 0.1); // ランダムな動きを追加
    }

    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.size);
    }
}

function drawCursorCircle() {
    noFill();
    stroke(255, 100);
    strokeWeight(2);
    ellipse(mouseX, mouseY, 50);
} 