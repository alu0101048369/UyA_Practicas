function insertInputInP() {
  document.getElementById("output-txt").innerText = `El texto que has introducido es: ${document.getElementById("input-txt").value}`
}
document.getElementById("input-btn").addEventListener("click", insertInputInP)

function count() {
  document.getElementById("num-p").innerText += " " + document.getElementsByTagName("p").length
  document.getElementById("num-li").innerText += " " + document.getElementsByTagName("li").length
  document.getElementById("num-div").innerText += " " + document.getElementsByTagName("div").length
}
count()
