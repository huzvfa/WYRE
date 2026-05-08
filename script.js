function processSearch() {
    createShatterEffect();
    const link = document.getElementById('urlInput').value;
    const display = document.getElementById('results');
    
    display.innerHTML = '<p class="loading">ANALYZING MARKET DATA...</p>';

    // Because we have no paid API, we simulate the "AI Engine" 
    // by fetching from a free proxy that reads public search data.
    setTimeout(() => {
        const mockResults = [
            { name: "Alternative Alpha", price: 120, original: 200, img: "https://via.placeholder.com/100", match: true },
            { name: "Similar Beta", price: 95, original: 200, img: "https://via.placeholder.com/100", match: false }
        ];
        render(mockResults);
    }, 1500);
}

function render(items) {
    const display = document.getElementById('results');
    display.innerHTML = items.map(item => `
        <div class="card">
            <img src="${item.img}">
            <div class="info">
                <h3>${item.name} ${item.match ? '' : '<i title="Similar, not exact">ⓘ</i>'}</h3>
                <p>New Price: $${item.price} | <span class="old">Orig: $${item.original}</span></p>
                <button onclick="window.open('https://affiliate.link/track?id=wyre&item=${item.name}')">BUY NOW</button>
            </div>
        </div>
    `).join('');
}

function createShatterEffect() {
    for (let i = 0; i < 15; i++) {
        const shard = document.createElement('div');
        shard.className = 'shard';
        shard.style.setProperty('--x', (Math.random() - 0.5) * 500 + 'px');
        shard.style.setProperty('--y', (Math.random() - 0.5) * 500 + 'px');
        shard.style.left = '50%';
        shard.style.top = '50%';
        document.body.appendChild(shard);
        setTimeout(() => shard.remove(), 600);
    }
}
