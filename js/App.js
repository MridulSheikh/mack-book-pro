//Memory price function
function PricingFilter(price, variant) {
    const ProductPrice = document.getElementById(variant + '-price');
    const priceDisplay = ProductPrice;
    priceDisplay.innerText = price;
    ToatalPrice();
}
// toatal pricing
function GetValue(variant) {
    const product = document.getElementById(variant + '-price');
    const productAmount = product.innerText;
    const filter = parseInt(productAmount);
    return filter;
}

function ToatalPrice() {
    const DeafultPrice = GetValue('deafult');
    const memoryPrice = GetValue('Memory');
    const storagePrice = GetValue('storage');
    const deliveryPrice = GetValue('delivery');
    const ToatalPrice = memoryPrice + storagePrice + deliveryPrice + DeafultPrice;
    const DisplayTotalprice = document.getElementById('Total-price').innerText = ToatalPrice;
    document.getElementById('Discount-price').innerText = DisplayTotalprice;
    return DisplayTotalprice;
}

//memory btn set
document.getElementById('Deafult-memory').addEventListener('click', function () {
    PricingFilter(0, 'Memory');
})
document.getElementById('16Gb-memory').addEventListener('click', function () {
    PricingFilter(180, 'Memory');
})
//storage button set
document.getElementById('deafult-storage').addEventListener('click', function () {
    PricingFilter(0, 'storage');
})
document.getElementById('512gb-storage').addEventListener('click', function () {
    PricingFilter(100, 'storage');
})
document.getElementById('1tb-storage').addEventListener('click', function () {
    PricingFilter(180, 'storage');
})
// delivery charge
document.getElementById('free-delevery').addEventListener('click', function () {
    PricingFilter(0, 'delivery');
})
document.getElementById('prime-delivery').addEventListener('click', function () {
    PricingFilter(20, 'delivery');
})

//dicount price copun bonus part
document.getElementById('promo-input').addEventListener('change', function (event) {
    if (event.target.value == 'stevekaku') {
        document.getElementById('button-addon2').removeAttribute('disabled');
    } else {
        document.getElementById('button-addon2').setAttribute('disabled', true);
    }
})
document.getElementById('button-addon2').addEventListener('click', function () {
    let DiscountTotal = GetValue('Discount');
    const DiscontPrice = DiscountTotal / 100;
    const Discount = DiscontPrice * 20; //20% discount offer
    const priceDisplay = DiscountTotal - Discount;
    document.getElementById('Discount-price').innerText = parseInt(priceDisplay);
    document.getElementById('promo-input').value = '';
    document.getElementById('button-addon2').setAttribute('disabled', true);
})