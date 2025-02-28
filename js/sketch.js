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
        let forceX = (targetX - this.x) * 0.005;
        let forceY = (targetY - this.y) * 0.005;
        this.vx += forceX;
        this.vy += forceY;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.95; // 摩擦をシミュレート
        this.vy *= 0.95; // 摩擦をシミュレート
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