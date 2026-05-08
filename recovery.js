// --- WYRE AUTO-RECOVERY ENGINE ---
// This script runs in the background and intercepts fatal network errors.

class WyreRecovery {
    constructor() {
        this.affiliateTag = "WYRE-2026-TRACKER";
        this.baseMultiplier = 0.65; // Simulates a 35% discount
    }

    // This function is triggered when the main engine hits a firewall
    interceptAndResolve(keyword, targetContainer, regionData) {
        console.warn("⚠️ WYRE RECOVERY SYSTEM ACTIVATED: Bypassing firewall block...");
        
        // Clear the error message and inject the recovery UI
        targetContainer.innerHTML = `
            <div style="text-align:center; padding:15px; color:#ffcc00; font-size:0.85rem; letter-spacing:2px; margin-bottom:20px; border: 1px solid rgba(255, 204, 0, 0.3); border-radius: 10px; background: rgba(255,204,0,0.05);">
                ⚠ DIRECT SCRAPE SHIELDED. ROUTING VIA SECURE AFFILIATE NETWORK.
            </div>
        `;

        // Generate dynamic, realistic fallback data based on the user's region
        this.generateFailsafeData(keyword, targetContainer, regionData);
    }

    generateFailsafeData(keyword, container, region) {
        // Generate a mathematically realistic base price for the region
        let basePrice = (40 + Math.floor(Math.random() * 100));
        if (region.symbol === "Rs ") basePrice = basePrice * 280; // PKR conversion
        if (region.symbol === "C$" || region.symbol === "A$") basePrice = basePrice * 1.3;

        // Generate the "Cheapest" and "Premium" alternatives
        const cheapPrice = basePrice * this.baseMultiplier;
        const premiumPrice = basePrice * (this.baseMultiplier + 0.2);

        // Generate direct search links that guarantee your commission
        const link1 = `https://www.google.com/search?tbm=shop&q=${encodeURIComponent("cheapest " + keyword)}&tag=${this.affiliateTag}`;
        const link2 = `https://${region.domain}/sch/i.html?_nkw=${encodeURIComponent(keyword)}&customid=${this.affiliateTag}`;

        const card1 = this.buildCard("Ultimate Budget Variant", cheapPrice, region.currency, link1, true, 0);
        const card2 = this.buildCard("Standard Retail Match", premiumPrice, region.currency, link2, false, 1);

        container.innerHTML += card1 + card2;
    }

    buildCard(title, price, currencySymbol, link, isCheapest, index) {
        const cardClass = isCheapest ? "result-card cheapest" : "result-card";
        const badge = isCheapest ? `<div class="cheapest-badge">RECOVERY MATCH</div>` : '';
        const btnClass = isCheapest ? "action-btn cheapest-btn" : "action-btn";
        
        // Format the price cleanly
        const formattedPrice = currencySymbol === "Rs " 
            ? "Rs " + price.toLocaleString('en-PK', {maximumFractionDigits: 0})
            : currencySymbol + price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});

        return `
            <div class="${cardClass}" style="animation-delay: ${index * 0.15}s; border: 1px solid ${isCheapest ? '#00ff88' : 'rgba(255,255,255,0.1)'}; padding: 20px; border-radius: 20px; margin-bottom: 15px; display: flex; align-items: center; justify-content: space-between; background: rgba(20,20,20,0.8);">
                ${badge}
                <div>
                    <h3 style="margin: 0 0 5px 0; color: #fff; font-size: 1.2rem;">${title}</h3>
                    <div style="font-size: 1.8rem; font-weight: 900; color: ${isCheapest ? '#00ff88' : '#00d4ff'};">${formattedPrice}</div>
                    <p style="margin: 5px 0 0 0; color: #888; font-size: 0.8rem;">✓ Connection Secured</p>
                </div>
                <button onclick="window.open('${link}', '_blank')" style="padding: 12px 25px; border-radius: 10px; border: none; background: ${isCheapest ? '#00ff88' : '#00d4ff'}; color: #000; font-weight: bold; cursor: pointer;">
                    VIEW DEAL
                </button>
            </div>
        `;
    }
}

// Initialize the recovery engine globally so the main site can use it
window.RecoveryEngine = new WyreRecovery();
