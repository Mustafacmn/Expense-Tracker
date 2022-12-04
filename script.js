const nameEl = document.getElementById("name");
const dateEl = document.getElementById("date");
const amountEl = document.getElementById("amount");
const addBtnEl = document.getElementById("add-btn");
const warningEl = document.getElementById("warning-msg")
const notYetEl = document.getElementById("zone")
const table = document.querySelector("tbody")

addBtnEl.addEventListener("click", () => {
  const name = nameEl.value;
  const date = dateEl.value;
  const amount = amountEl.value;

  if (table.querySelector("#zone") !== null) { // Check if Element has Child with specific ID
    table.removeChild(zone) // Remove no expanse added yet section
  }
  
  if(name,date,amount){ // Check for empty inputs
    warningEl.innerHTML = "" // Remove warning message 
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const dlt = document.createElement("td");

    table.appendChild(tr);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(dlt);

    td1.innerHTML = `${name}`
    td2.innerHTML = `${date}`
    td3.innerHTML = `$${amount}`
    dlt.innerHTML = `<button class="dlt-btn">X</button>`

    dlt.addEventListener("click", () => { // Delete btn 
      table.removeChild(tr)
    })

  } else{
    warningEl.innerHTML = ` 
    <p class="warning-msg"w>Please enter inputs!</p 
    `
  }
})

