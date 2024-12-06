// Konami Code Handler
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

// Theme Management
const themes = {
    dark: 'dark-theme',
    pastel: 'pastel-theme',
    matrix: 'matrix-theme',
    glitch: 'glitch-theme'
};

let currentTheme = 'dark';

// Secret Commands
const secretCommands = {
    'matrix': () => activateTheme('matrix'),
    'hack': () => activateMatrixEffect(),
    'party': () => activatePartyMode(),
    'corrupt': () => activateGlitchEffect(),
    'thanos': () => thanosSnap(),
    'reset': () => resetEffects()
};

let typedCommand = '';
let commandTimeout;

// Easter Egg Console Message
console.log(`
%c👋 Hey there, curious developer! 
%cTry some secret commands:
- Type 'matrix' for a surprise
- Use the Konami code (↑↑↓↓←→←→BA)
- Type 'party' for celebration
- Type 'hack' to feel like a pro
- Type 'corrupt' for glitch effects
- Type 'thanos' to snap
`, 
'color: #ff1493; font-size: 20px; font-weight: bold;',
'color: #ff1493; font-size: 16px;'
);

// Konami Code Listener
document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateTheme('pastel');
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

// Secret Command Listener
document.addEventListener('keypress', (e) => {
    clearTimeout(commandTimeout);
    typedCommand += e.key.toLowerCase();
    
    commandTimeout = setTimeout(() => {
        typedCommand = '';
    }, 1000);

    Object.keys(secretCommands).forEach(command => {
        if (typedCommand.includes(command)) {
            secretCommands[command]();
            typedCommand = '';
        }
    });
});

// Theme Switching
function activateTheme(themeName) {
    Object.values(themes).forEach(theme => {
        document.body.classList.remove(theme);
    });
    document.body.classList.add(themes[themeName]);
    currentTheme = themeName;
    
    // Add celebration effect for theme change
    createParticleExplosion();
}

// Particle Effect
function createParticleExplosion() {
    const particles = 30;
    const colors = ['#ff1493', '#00ff00', '#ff00ff', '#00ffff'];

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = '50%';
        particle.style.top = '50%';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.borderRadius = '50%';
        document.body.appendChild(particle);

        const angle = (i / particles) * 360;
        const velocity = 5;
        const rad = angle * Math.PI / 180;
        const dx = Math.cos(rad) * velocity;
        const dy = Math.sin(rad) * velocity;

        let x = 0;
        let y = 0;
        let opacity = 1;

        const animate = () => {
            x += dx;
            y += dy;
            opacity -= 0.02;
            particle.style.transform = `translate(${x}px, ${y}px)`;
            particle.style.opacity = opacity;

            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };

        requestAnimationFrame(animate);
    }
}

// Matrix Effect
function activateMatrixEffect() {
    const canvas = document.createElement('canvas');
    canvas.id = 'matrix-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.3';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = '0123456789ABCDEF';
    const drops = [];
    const fontSize = 10;
    const columns = canvas.width / fontSize;

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random() * matrix.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    let matrixInterval = setInterval(draw, 33);
    setTimeout(() => {
        clearInterval(matrixInterval);
        canvas.remove();
    }, 5000);
}

// Glitch Effect
function activateGlitchEffect() {
    document.body.style.animation = 'glitch 0.3s infinite';
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

// Thanos Snap Effect
function thanosSnap() {
    const elements = document.querySelectorAll('*');
    elements.forEach(element => {
        if (Math.random() > 0.5) {
            element.style.animation = 'dissolve 2s forwards';
        }
    });
    setTimeout(() => {
        location.reload();
    }, 2500);
}

// Party Mode
function activatePartyMode() {
    document.body.style.animation = 'rainbow-bg 2s infinite';
    createParticleExplosion();
    setTimeout(() => {
        document.body.style.animation = '';
    }, 3000);
}

// Reset Effects
function resetEffects() {
    activateTheme('dark');
    document.body.style.animation = '';
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) canvas.remove();
}
