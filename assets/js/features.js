class EasterEggSystem {
    constructor() {
        this.discoveredEggs = new Set(JSON.parse(localStorage.getItem('discoveredEggs') || '[]'));
        this.easterEggs = {
            konami: {
                pattern: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
                currentIndex: 0,
                reward: 'pastelTheme'
            },
            portalReference: {
                pattern: 'thecake',
                currentInput: '',
                reward: 'portalMode'
            },
            devTools: {
                found: false,
                reward: 'matrixMode'
            }
        };
        
        this.init();
        this.initConsoleEasterEggs();
    }

    init() {
        // Reset theme on page load
        document.body.className = '';
        document.documentElement.style.filter = '';
        
        // Keyboard sequence detection
        document.addEventListener('keydown', (e) => this.handleKeySequence(e));
        
        // DevTools detection - only on first visit
        if (!localStorage.getItem('devToolsChecked')) {
            this.detectDevTools();
            localStorage.setItem('devToolsChecked', 'true');
        }
        
        // Add hint in page source
        document.documentElement.setAttribute('data-secret', 'The cake is a lie');
        document.documentElement.setAttribute('data-hint', 'Up Up Down Down Left Right Left Right B A');
    }

    initConsoleEasterEggs() {
        // Original stats command
        window.showStats = () => {
            const statsContainer = document.getElementById('github-stats');
            if (statsContainer) {
                statsContainer.innerHTML = `
                    <div class="github-stat-card">
                        <img src="https://github-readme-stats.vercel.app/api?username=0V3RR1DE0&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=radical&locale=en&hide_border=false&order=1" alt="GitHub Stats" />
                    </div>
                    <div class="github-stat-card">
                        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=0V3RR1DE0&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=radical&hide_border=false&order=2" alt="Top Languages" />
                    </div>
                `;
                this.showDiscoveryAnimation('GitHub stats revealed!');
            }
        };

        // Theme toggle commands
        window.matrix = () => {
            const isMatrixMode = document.body.classList.contains('matrix-mode');
            if (isMatrixMode) {
                document.body.classList.remove('matrix-mode');
                console.log('%cMatrix mode deactivated', 'color: #00ff00; font-family: monospace;');
            } else {
                document.body.classList.add('matrix-mode');
                this.showDiscoveryAnimation('Matrix mode activated! 🐰');
                console.log('%cThe white rabbit beckons... followTheRabbit()', 'color: #00ff00; font-family: monospace;');
            }
        };

        window.retro = () => {
            const isRetroMode = document.body.classList.contains('retro-mode');
            if (isRetroMode) {
                document.body.classList.remove('retro-mode');
                console.log('%cRetro mode deactivated', 'color: #00ff00; font-family: monospace;');
            } else {
                document.body.classList.add('retro-mode');
                this.showDiscoveryAnimation('Retro mode enabled! 👾');
            }
        };

        window.rainbow = () => {
            const isRainbowMode = document.body.classList.contains('rainbow-mode');
            if (isRainbowMode) {
                document.body.classList.remove('rainbow-mode');
                console.log('%cRainbow mode deactivated', 'color: #ff00ff; font-family: monospace;');
            } else {
                document.body.classList.add('rainbow-mode');
                this.showDiscoveryAnimation('Rainbow mode activated! 🌈');
            }
        };

        window.party = () => {
            const isPartyMode = document.body.classList.contains('party-mode');
            if (isPartyMode) {
                document.body.classList.remove('party-mode');
                console.log('%cParty mode deactivated', 'color: #ff00ff; font-family: monospace;');
            } else {
                document.body.classList.add('party-mode');
                this.showDiscoveryAnimation('Party mode activated! 🎉');
                console.log('%cTime to seekTheTruth()', 'color: #ff00ff; font-family: monospace;');
            }
        };

        window.invert = () => {
            const isInverted = document.documentElement.style.filter === 'invert(1)';
            if (isInverted) {
                document.documentElement.style.filter = '';
                console.log('%cInvert mode deactivated', 'color: #ffffff; font-family: monospace;');
            } else {
                document.documentElement.style.filter = 'invert(1)';
                this.showDiscoveryAnimation('Colors inverted! 🔄');
            }
        };

        // Secret console commands
        window.enterTheVoid = () => {
            window.location.href = '/secrets/terminal.html';
        };

        window.followTheRabbit = () => {
            if (document.body.classList.contains('matrix-mode')) {
                window.location.href = '/secrets/void.html';
            } else {
                console.log('%cYou must enter the matrix first...', 'color: #00ff00; font-family: monospace;');
            }
        };

        window.seekTheTruth = () => {
            if (document.body.classList.contains('party-mode')) {
                window.location.href = '/secrets/nexus.html';
            } else {
                console.log('%cThe truth reveals itself only during celebration...', 'color: #ff00ff; font-family: monospace;');
            }
        };

        // Hidden console messages
        console.log('%cCurious about what lies in the void? Try enterTheVoid()', 'color: #b15eff; font-style: italic;');
        
        // Matrix mode hint
        if (document.body.classList.contains('matrix-mode')) {
            console.log('%cThe white rabbit beckons... followTheRabbit()', 'color: #00ff00; font-family: monospace;');
        }
        
        // Party mode hint
        if (document.body.classList.contains('party-mode')) {
            console.log('%cIn moments of joy, we seekTheTruth()', 'color: #ff00ff; font-family: monospace;');
        }

        window.resetTheme = () => {
            document.body.className = '';
            document.documentElement.style.filter = '';
            this.showDiscoveryAnimation('Theme reset to default');
        };
    }

    handleKeySequence(e) {
        // Check Konami code
        if (e.key === this.easterEggs.konami.pattern[this.easterEggs.konami.currentIndex]) {
            this.easterEggs.konami.currentIndex++;
            if (this.easterEggs.konami.currentIndex === this.easterEggs.konami.pattern.length) {
                this.unlockEasterEgg('konami');
                this.easterEggs.konami.currentIndex = 0;
            }
        } else {
            this.easterEggs.konami.currentIndex = 0;
        }

        // Check Portal reference
        if (e.key.length === 1) { // Only process single characters
            this.easterEggs.portalReference.currentInput += e.key.toLowerCase();
            if (this.easterEggs.portalReference.currentInput.endsWith(this.easterEggs.portalReference.pattern)) {
                this.unlockEasterEgg('portalReference');
                this.easterEggs.portalReference.currentInput = '';
            }
            // Keep input string at reasonable length
            if (this.easterEggs.portalReference.currentInput.length > 20) {
                this.easterEggs.portalReference.currentInput = 
                    this.easterEggs.portalReference.currentInput.slice(-10);
            }
        }
    }

    detectDevTools() {
        const devtools = {
            isOpen: false,
            orientation: undefined
        };
        
        const threshold = 160;
        
        const emitEvent = (isOpen, orientation) => {
            if (isOpen && !devtools.isOpen) {
                this.unlockEasterEgg('devTools');
            }
            devtools.isOpen = isOpen;
            devtools.orientation = orientation;
        };

        setInterval(() => {
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;
            
            if (widthThreshold || heightThreshold) {
                emitEvent(true, widthThreshold ? 'vertical' : 'horizontal');
            } else {
                emitEvent(false, undefined);
            }
        }, 500);
    }

    unlockEasterEgg(eggId) {
        if (!this.discoveredEggs.has(eggId)) {
            this.discoveredEggs.add(eggId);
            localStorage.setItem('discoveredEggs', JSON.stringify([...this.discoveredEggs]));
        }
        
        // Apply effect
        this.applyEasterEggEffect(eggId);
        
        // Show discovery animation
        this.showDiscoveryAnimation(eggId);
    }

    applyEasterEggEffect(eggId) {
        // Remove all theme classes first
        document.body.classList.remove(
            'pastel-theme',
            'portal-mode',
            'matrix-mode',
            'retro-mode',
            'rainbow-mode'
        );
        document.documentElement.style.filter = '';

        // Apply new theme
        switch(eggId) {
            case 'konami':
                document.body.classList.add('pastel-theme');
                break;
            case 'portalReference':
                document.body.classList.add('portal-mode');
                break;
            case 'devTools':
                document.body.classList.add('matrix-mode');
                // Add matrix mode specific console message
                console.log('%cThe white rabbit beckons... followTheRabbit()', 'color: #00ff00; font-family: monospace;');
                break;
        }
    }

    showDiscoveryAnimation(eggId) {
        const notification = document.createElement('div');
        notification.className = 'easter-egg-notification';
        notification.innerHTML = `
            <div class="notification-content">
                <h3>🎉 Easter Egg Found!</h3>
                <p>${typeof eggId === 'string' ? this.getEasterEggMessage(eggId) : eggId}</p>
            </div>
        `;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 500);
        }, 3000);
    }

    getEasterEggMessage(eggId) {
        const messages = {
            konami: "You've unlocked the Pastel theme! Up, up, down, down...",
            portalReference: "Portal theme activated! The cake might be a lie, but this theme isn't!",
            devTools: "Matrix mode unlocked! Follow the white rabbit..."
        };
        return messages[eggId] || "You've discovered a secret! Keep exploring...";
    }
}

// Initialize features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EasterEggSystem();
});
