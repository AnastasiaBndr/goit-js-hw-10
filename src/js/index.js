import SlimSelect from 'slim-select';
import { fetchBreed } from './cat-api';
import Notiflix from 'notiflix';


const refs = {
  catContainer: document.querySelector(".cat-info"),
  loaderContainer: document.querySelector(".loader"),
  searchForm: document.querySelector(".breed-select"),

};

fetchBreed().then(cats => {

  cats.forEach((cat) => {
    var opt = document.createElement("option");
    opt.value = cat.id;
    opt.text = cat.name;

    refs.searchForm.appendChild(opt);
  })

  const slim = new SlimSelect({
    select: refs.searchForm,
    settings: {
    }
  });

  refs.searchForm.addEventListener('change', (event) => {
    refs.catContainer.innerHTML = "";
    const selectedOption = event.target.value;
    const selectedCat = cats.find(cat => cat.id === selectedOption);
    refs.loaderContainer.classList.remove("is-hidden");
    const timerId = setTimeout(() => renderCatCard(selectedCat), 2000);


  });
}).catch(error => {
  Notiflix.Report.info("Error!", "Cats ran away somewhere..", "Ok");
});




function renderCatCard(cat) {
  try{
  console.log(cat);
  const markup = `<div class="card">
  <img src="${cat.image.url}" alt="${cat.name}">
  <div class="description">
        <h3 class="card-title">${cat.name}</h3>
        <p class="card-text">${cat.description}</p>
        <h4 class="card-title">Temperament</h4>
        <p class="card-text">${cat.temperament}</p>
  </div>
  
</div>`;

  refs.catContainer.innerHTML = markup;

  refs.loaderContainer.classList.add("is-hidden");
}catch(err){
  Notiflix.Report.info("Oops!", "This cat ran away somewhere.. Choose another one..", "Ok"); 
  refs.loaderContainer.classList.add("is-hidden");
}

}




