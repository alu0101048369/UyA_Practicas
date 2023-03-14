function printCartSummaries() {
  const cartSummaries = document.getElementById("cart-summaries")
  Object.keys(db.users).forEach(dni => {
    const p = document.createElement("p")
    p.innerText = `DNI del usuario: ${dni}`
    cartSummaries.appendChild(p)


    const ul = document.createElement("ul")

    const liCost = document.createElement("li")
    liCost.innerText = `Coste total: ${calculateCartPrice(dni) / 100}€`
    ul.appendChild(liCost)
    
    const liDate = document.createElement("li")
    const d = db.users[dni].paymentMethod === "credit" ? new Date(db.users[dni].paymentDate) : new Date()
    liDate.innerText = `Fecha de efectuacion del pago: ${d.getFullYear()}-${String(d.getMonth()+1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    ul.appendChild(liDate)

    cartSummaries.appendChild(ul)
  });
}

printCartSummaries()
