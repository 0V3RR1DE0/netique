document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // Tab switching functionality
    const tabs = document.querySelectorAll('.nav-tabs a');
    const contents = document.querySelectorAll('.tab-content');
    
    function switchTab(targetId) {
        contents.forEach(content => {
            content.classList.remove('active');
            content.style.opacity = '0';
        });
        
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.classList.add('active');
            setTimeout(() => {
                targetContent.style.opacity = '1';
            }, 50);
        }
        
        tabs.forEach(tab => {
            if (tab.getAttribute('href') === `#${targetId}`) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });
        
        history.pushState(null, null, `#${targetId}`);
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = tab.getAttribute('href').substring(1);
            switchTab(targetId);
        });
    });
    
    function handleHashChange() {
        const hash = window.location.hash.substring(1) || 'home';
        switchTab(hash);
    }
    
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    // Console easter egg
    console.log(`%c
    ███╗   ██╗███████╗████████╗██╗ ██████╗ ██╗   ██╗███████╗
    ████╗  ██║██╔════╝╚══██╔══╝██║██╔═══██╗██║   ██║██╔════╝
    ██╔██╗ ██║█████╗     ██║   ██║██║   ██║██║   ██║█████╗  
    ██║╚██╗██║██╔══╝     ██║   ██║██║▄▄ ██║██║   ██║██╔══╝  
    ██║ ╚████║███████╗   ██║   ██║╚██████╔╝╚██████╔╝███████╗
    ╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝
    `, 'color: #b15eff; font-family: monospace;');

    // Matrix mode activation
    const devToolsCheck = () => {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            document.body.classList.add('matrix-mode');
        }
    };

    window.addEventListener('resize', devToolsCheck);
    devToolsCheck();

    // Link handling
    document.querySelectorAll('.disabled-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // Button effects
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Card hover effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 30;
            const angleY = (centerX - x) / 30;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'none';
        });
    });

    // Link disabling
    document.querySelectorAll('a[href*="card.co"], a[href*="linkedin.com"]').forEach(link => {
        link.classList.add('disabled-link');
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // Secret page handling - obfuscated
    const _0x5f2a=['7b9a','8d3f','e2c1','4a5b','9d6e','8f7c','4b3a','2d1e'];
    const _0xf4e3=()=>{const h=window.location.hash.substring(1);
    const s=_0x5f2a.join('');if(h===s){window.location.href='/'+s+'.html';}};
    // Fake secrets to add confusion
    const fakeSecrets = {
        'void': '/secrets/void.html',
        'terminal': '/secrets/terminal.html',
        'nexus': '/secrets/nexus.html',
        'matrix': '4d5e6f7g8h9i0j',
        'debug': 'a1b2c3d4e5f6g7h'
    };
    window.addEventListener('hashchange',_0xf4e3);
    _0xf4e3();

    // Project listings enhancements
    const projectsContainer = document.querySelector('.projects-container');
    if (projectsContainer) {
        projectsContainer.style.scrollBehavior = 'smooth';
        projectsContainer.style.overflowY = 'auto';
        projectsContainer.style.maxHeight = '80vh';
        projectsContainer.style.padding = '20px';
        
        const projectItems = projectsContainer.querySelectorAll('.project-item');
        projectItems.forEach(item => {
            item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-5px)';
                item.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            });
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0)';
                item.style.boxShadow = 'none';
            });
        });
    }

    // Party mode
    window.startPartyMode = () => {
        document.body.classList.add('party-mode');
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];
        let colorIndex = 0;
        const interval = setInterval(() => {
            document.body.style.backgroundColor = colors[colorIndex];
            colorIndex = (colorIndex + 1) % colors.length;
        }, 500);
        setTimeout(() => {
            clearInterval(interval);
            document.body.classList.remove('party-mode');
            document.body.style.backgroundColor = '';
        }, 5000);
    };
});
