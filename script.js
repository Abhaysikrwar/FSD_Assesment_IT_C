function updateTotal() {
    const quantity = document.getElementById("quantity").value;
    console.log(quantity);
    
    const price = 249; // Assuming price is Rs. 249
    const total = price * quantity;
    document.getElementById("total").innerText = total;
  }