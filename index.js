let array = [];

const allCategories = async () => {
  fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json(res))
    .then((data) => handleBtn(data.data));
};
allCategories();

const handleBtn = (data) => {
  const btnContainer = document.getElementById("btn-container");
  data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `<button onclick="loadData(${category.category_id})" class="btn btn-active">${category.category}</button>`;
    btnContainer.appendChild(div);
  });
};

const loadData = (id) => {
  fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then((res) => res.json())
    .then((data) => setCard(data.data));
};

const setCard = (data) => {

  if (data.length == 0) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.classList.remove("grid");
    cardContainer.innerHTML = "";
    cardContainer.innerHTML = `
      <div class="h-[70vh] text-center flex flex-col items-center justify-center">
      <img src="./image/Icon.png" />
      <h1 class="text-[32px]">Oops!! Sorry, There is no content here</h1>  
      </div>
      `;
  } else {
    const cardContainer = document.getElementById("card-container");
    cardContainer.classList.add("grid");
    cardContainer.innerHTML = "";
    data.forEach((singleData) => {
      const sec = singleData.others.posted_date;
      const min = sec / 60;
      const hour = parseInt(min / 60);
      const time = (min / 60).toFixed(2);
      const card = document.createElement("div");
      card.innerHTML = `
    <div class="card w-96 bg-base-100">
    <figure class="relative"><img class="rounded-2xl w-[100%] h-[216px]" src=${
      singleData.thumbnail
    } alt="Shoes" />
    <p class="px-[6px] bg-[#171717] text-[#fff] bottom-[12px] right-[12px] rounded absolute">${
      hour ? hour + "hrs " + time.slice(2, 4) + "min ago" : []
    }</p>
    </figure>
    <div class="card-body">
    <div class="flex gap-[12px]">
    <img class="w-[40px] h-[40px] rounded-3xl" src=${
      singleData.authors[0].profile_picture
    }/>
    <h2 class="card-title">
    ${singleData.title}
    </h2>
    </div> 
    <div class="flex gap-2">
    <h2 class="text-[#5d5d5d] text-[14px]">${
      singleData.authors[0].profile_name
    }</h2><span>${
        singleData.authors[0].verified
          ? '<img src="./image/fi_10629607.svg">'
          : "<img/>"
      } </span>
    </div>
      <p class="text-[#5d5d5d] text-[14px]">${singleData.others.views} views</p>
    </div>
    </div>
    `;
      cardContainer.appendChild(card);
    });
    array = data;
  }
};

loadData(1000);

document.getElementById("btn-blog").addEventListener("click", function () {
  window.location = "./blog.html";
});
const sortBtn = document
  .getElementById("sort-btn")
  .addEventListener("click", function () {
    const sorted = array.sort(
      (a, b) => parseInt(b.others.views) - parseInt(a.others.views)
    );
    console.log(sorted);
    setCard(sorted);
  });
