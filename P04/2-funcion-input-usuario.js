function insertInputInP() {
  document.getElementById("output-txt").innerText = `El texto que has introducido es: ${document.getElementById("input-txt").value}`
}
document.getElementById("input-btn").addEventListener("click", insertInputInP)
