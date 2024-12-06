// GitHub Stats Integration
async function fetchGitHubStats(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposData = await reposResponse.json();

        updateGitHubStats(userData, reposData);
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
    }
}

function updateGitHubStats(user, repos) {
    const statsContainer = document.getElementById('github-stats');
    if (!statsContainer) return;

    const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
    const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

    statsContainer.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <h3>Repositories</h3>
                <p>${user.public_repos}</p>
            </div>
            <div class="stat-card">
                <h3>Stars</h3>
                <p>${totalStars}</p>
            </div>
            <div class="stat-card">
                <h3>Followers</h3>
                <p>${user.followers}</p>
            </div>
            <div class="stat-card">
                <h3>Forks</h3>
                <p>${totalForks}</p>
            </div>
        </div>
    `;
}

// Page Load Animations
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to main content
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('fade-in');
    }

    // Initialize GitHub stats if on projects page
    const githubStats = document.getElementById('github-stats');
    if (githubStats) {
        fetchGitHubStats('netique');
    }

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Add cursor trail effect
document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.className = 'cursor-particle';
    particle.style.left = e.pageX + 'px';
    particle.style.top = e.pageY + 'px';
    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Add necessary CSS for cursor trail
const style = document.createElement('style');
style.textContent = `
.cursor-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.8;
    animation: particle-fade 1s ease-out forwards;
}

@keyframes particle-fade {
    0% { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(0); opacity: 0; }
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.stat-card {
    background: var(--bg-secondary);
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    transition: transform 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
}

.stat-card h3 {
    color: var(--accent);
    margin-bottom: 10px;
}

.stat-card p {
    font-size: 1.5rem;
    font-weight: bold;
}
`;
document.head.appendChild(style);
