const categories = document.querySelector("#categories");

const list = categories.children;

const numberOfList = list.length;
console.log(`Number of categories: ${numberOfList}`);

const arrayList = [...list];
arrayList.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}`);
});


