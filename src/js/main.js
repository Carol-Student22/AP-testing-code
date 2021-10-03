const array = [];

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", inputStuffFunction);

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", checkArrayGenerate);

/// Adding Numbers
function inputStuffFunction() {
  while (true) {
    let randomInput = prompt(
      "Random Element Insert Sequence. Type `quit`, leave it blank, or press `cancel` to stop adding additional info"
    );
    if (randomInput === "quit" || randomInput === null || randomInput === ``) {
      break;
    }
    array.push(randomInput);
    console.log(array);
  }
}

function checkArrayGenerate() {
  if (array.length === 0) {
    console.log(
      "Unable to Generate a Random Item from the Storage System. [AKA. The Storage is Empty]"
    );
    const arrayElement = document.createElement("p");
    arrayElement.className = "textbox";
    arrayElement.innerHTML =
      "Unable to Complete Task. It Seems the Storage is Empty.";
    document.body.appendChild(arrayElement);
  } else {
    grabRandom();
  }
}

function grabRandom() {
  let randomNum = array[Math.floor(Math.random() * array.length)];
  console.log(randomNum);

  const newElement = document.createElement("p");
  newElement.innerHTML = randomNum;
  newElement.className = "textbox";
  document.body.appendChild(newElement);
}

const generatelistBtn = document.getElementById("generate-list");
generatelistBtn.addEventListener("click", generateList);

function generateList() {
  console.log("Generating Full List of Items");
  const listTitle = document.createElement("p");
  listTitle.innerHTML = "Storage List";
  listTitle.className = "generated-list-title";
  listTitle.className = "textbox";
  document.body.appendChild(listTitle);

  for (i = 0; i < array.length; i++) {
    let sub;
    sub = document.createElement("li");
    sub.className = "generated-list-item";
    sub.innerHTML = array[i];
    sub.className = "textbox";
    document.getElementsByTagName("body")[0].appendChild(sub);

    console.log("Full List Generation Complete");
  }

  if (array.length === 0) {
    const arrayElement = document.createElement("p");
    arrayElement.className = "list-empty";
    arrayElement.className = "textbox";
    arrayElement.innerHTML = "System Storage is Empty";
    document.body.appendChild(arrayElement);

    console.log("The Array/Storage is Currently Empty");
  }
}
