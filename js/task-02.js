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
  return `<li class="item">${ingredient}</li>`;
});
ingrList.innerHTML = arrayList.join("");
