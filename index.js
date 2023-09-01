const allCategories = async () => {
  const btnContainer = document.getElementById("btn-container");
  fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json(res))
    .then((data) => handleBtn(data.data));
};
allCategories();

const handleBtn = (data) => {
  const btnContainer = document.getElementById("btn-container");
  data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `<button class="btn btn-active">${category.category}</button>`;
    btnContainer.appendChild(div);
  });
};

const loadData = () => {
  fetch("https://openapi.programming-hero.com/api/videos/category/1000")
    .then((res) => res.json())
    .then((data) => setCard(data.data));
};

const setCard = (data) => {
  console.log(data);
  
};

loadData();
