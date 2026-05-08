function processSearch() {
    const input = document.querySelector('input').value;
    const container = document.getElementById('results');
    
    // 1. Broken Glass Effect
    shatterEffect();

    if(!input) return;

    // 2. Clear and Load
    container.innerHTML = `<div style="padding:40px; opacity:0.5">ESTABLISHING REAL-TIME UPLINK...</div>`;

    // 3. Generate Results
    setTimeout(() => {
        container.innerHTML = `
            <div class="result-card">
                <div class="product-img"></div>
                <div style="flex:1">
                    <h2 style="margin:0">Premium Alternative Alpha <span style="font-size:0.8rem; color:var(--accent)">ⓘ</span></h2>
                    <p style="color:#888; margin:10px 0;">Sourced via Real-time AI Tracking. 98.4% Spec Match.</p>
                    <div>
                        <span class="price-main">$42.99</span>
                        <span class="price-compare">was $89.00</span>
                    </div>
                </div>
                <button class="track-btn" style="height:50px;" onclick="window.open('https://affiliate.com')">BUY</button>
            </div>
        `;
    }, 1500);
}

function shatterEffect() {
    for(let i=0; i<15; i++) {
        const s = document.createElement('div');
        s.style.cssText = `
            position: fixed; left: 50%; top: 50%;
            width: 20px; height: 1px; background: #fff;
            z-index: 1000; pointer-events: none;
        `;
        document.body.appendChild(s);
        const angle = Math.random() * Math.PI * 2;
        const dist = 300 + Math.random() * 200;
        s.animate([
            { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
            { transform: `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist}px) rotate(450deg)`, opacity: 0 }
        ], { duration: 800, easing: 'ease-out' }).onfinish = () => s.remove();
    }
}
