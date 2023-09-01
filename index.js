const allCategories = async () => {
  const btnContainer = document.getElementById("btn-container");
  fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json(res))
    .then((data) => handleBtn(data.data));
};
allCategories();

const handleBtn = (data) => {
  const btnContainer = document.getElementById("btn-container");
  console.log(data);
  data.forEach((category) => {
    console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `<button class="btn btn-error">${category.category}</button>`;
    btnContainer.appendChild(div);
  });
};
