const categories = document.querySelector("#categories");
const list = categories.querySelectorAll("li.item");
const numberOfList = list.length;
console.log(`Number of categories: ${numberOfList}`);

list.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elements = item.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});
