function processSearch() {
    const link = document.getElementById('urlInput').value;
    const resultsArea = document.getElementById('results');

    // Trigger Glass Animation
    triggerShatter();

    if (!link) {
        alert("Please paste a link first!");
        return;
    }

    // Show Cinematic Loading
    resultsArea.innerHTML = `<p style="letter-spacing:5px; animation: pulse 1s infinite;">TRACKING ALTERNATIVES...</p>`;

    // Mocking the AI Data (Free, Fast, Responsive)
    setTimeout(() => {
        const data = [
            { 
                name: "Elite Edition Alternative", 
                price: "140", 
                old: "210", 
                desc: "High-performance build with similar specs to your target.",
                exact: true 
            },
            { 
                name: "Budget Streamline Pro", 
                price: "85", 
                old: "210", 
                desc: "Optimized for value. Slightly different materials.",
                exact: false 
            }
        ];
        
        displayResults(data);
    }, 1200);
}

function displayResults(items) {
    const resultsArea = document.getElementById('results');
    resultsArea.innerHTML = items.map(item => `
        <div class="product-card">
            <div class="product-img"></div>
            <div class="product-info">
                <h3>${item.name} ${item.exact ? '' : '<span title="Similar Alternative">ⓘ</span>'}</h3>
                <p style="color:#aaa;">${item.desc}</p>
                <div>
                    <span class="price-tag">$${item.price}</span>
                    <span class="original-price">Was $${item.old}</span>
                </div>
            </div>
            <button onclick="window.open('https://affiliate.link/wyre?id=${item.name}')">GET DEAL</button>
        </div>
    `).join('');
}

function triggerShatter() {
    for (let i = 0; i < 12; i++) {
        const shard = document.createElement('div');
        shard.style.position = 'fixed';
        shard.style.width = '20px';
        shard.style.height = '2px';
        shard.style.background = 'white';
        shard.style.left = '50%';
        shard.style.top = '50%';
        shard.style.zIndex = '1000';
        shard.style.pointerEvents = 'none';
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 200 + Math.random() * 300;
        
        const animation = shard.animate([
            { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${Math.cos(angle) * velocity}px, ${Math.sin(angle) * velocity}px) rotate(360deg)`, opacity: 0 }
        ], { duration: 800, easing: 'ease-out' });

        document.body.appendChild(shard);
        animation.onfinish = () => shard.remove();
    }
}
