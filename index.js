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
  const cardContainer = document.getElementById("card-container");
  data.forEach((singleData) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img class="w-[100%] h-[216px]" src=${
      singleData.thumbnail
    } alt="Shoes" /></figure>
    <div class="card-body">
      <div class="flex gap-[12px]">
      <img class="w-[40px] h-[40px] rounded-3xl" src=${
        singleData.authors[0].profile_picture
      }/>
      <h2 class="card-title">
        ${singleData.title}<span>${
      singleData.authors[0].verified
        ? '<img src="./fi_10629607.svg">'
        : "<img/>"
    } </span>
      </h2>
      </div> 
      <p class="text-[#5d5d5d] text-[14px]">${
        singleData.authors[0].profile_name
      }</p>
      <p class="text-[#5d5d5d] text-[14px]">${singleData.others.views}</p>
    </div>
  </div>
    `;
    cardContainer.appendChild(card);
  });
};

loadData();
