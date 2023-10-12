const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingrList = document.querySelector("#ingredients");

const arrayList = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.classList.add("item");
  item.textContent = ingredient;
  return item;
});

// console.log(ingrList);
ingrList.append(...arrayList);

