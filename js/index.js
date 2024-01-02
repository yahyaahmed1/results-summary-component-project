async function addSummary() {
  let res = await fetch("../data.json");
  let data = await res.json();

  const list = document.getElementById("summaryList")
  data.forEach(el => {
    // create li items
    let listItem = document.createElement("li")
    listItem.classList.add("list-group-item", "border-0")

    // create img tag
    let icon = document.createElement("img")
    icon.classList.add("icon")
    icon.setAttribute("src", el.icon)

    // create name
    let category = document.createElement("span")
    category.classList.add("category")
    category.innerText = el.category

    // create rate
    let rate = document.createElement("span")
    rate.id = "rate"

    let numBold = document.createElement("span")
    numBold.classList.add("num-bold")
    numBold.innerText = el.score
    rate.append(numBold);
    rate.append(" / 100")

    list.append(listItem)
    listItem.append(icon, category, rate)

  });
}

addSummary();