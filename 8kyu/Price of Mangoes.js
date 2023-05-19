// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.

// my solution
function mango(q, p){
    return (q - Math.floor(q/3))*p;
  }

// best solution
function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }