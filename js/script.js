let addBtn = document.getElementById("add-btn");
let prodCount = document.getElementById("prod-count");
let rate = document.getElementById("rate-fare");
let cost = document.getElementById("net-price");
let perKg = 0.30;
let tax = (18 / 100) * perKg;
let count = 0;
addBtn.addEventListener('click', function() {
    count++;
    prodCount.innerHTML = count;
    let net = perKg * count + tax;
    let netRate = parseFloat(net).toFixed(2);
    cost.innerHTML = netRate;

});