const isAdult = function(age){
    return (age >=18);
};

const greeting = function(age){
    if(isAdult(age)){
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};
console.log(greeting(14));
console.log(greeting(21));


const totalVat = function(basePrice, vat){
    return (basePrice * (vat/100));
};

const priceIncVat = function(priceExVat, vat){
    return (priceExVat + totalVat(priceExVat,vat));
};

console.log(priceIncVat(1000,21));

const vatAmount = function(totalPrice, vat){
    return totalPrice/(vat/100+1);
};

const calcBasePrice = function(totalPrice, vat){
    let amounts = [vatAmount(totalPrice,vat),totalPrice-vatAmount(totalPrice,vat)];
    return amounts;
};

console.log(vatAmount(1210,21));
console.log(calcBasePrice(1210,21));