console.log("Hardik")
let data = []
const cardContainer = document.getElementById("card-container")
console.log({ cardContainer })
document.addEventListener("DOMContentLoaded", () => {
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  )
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      data.forEach((resdata) => {
        console.log(resdata)
        cardContainer.innerHTML += `<div class="card">
        <div class="image">
            <img src=${resdata.image} alt=${resdata.symbol} class="img">
        </div>
        <div class="details">
            <div class="top-row">
                <span>${resdata.name}</span>
                <span>${resdata.current_price}</span>
            </div>
            <div class="bottom-row">
                <span>${resdata.symbol}</span>
                <span>${resdata.market_cap_change_percentage_24h}</span>
            </div>
        </div>
    </div>`
      })
    })
})
