const gallery = document.querySelector('.gallery');
gallery.setAttribute('style', 'display: flex;');

const galleryWrapper = document.querySelector('.container-gallery');
const galleryFilter = document.createElement('div');
galleryFilter.setAttribute('class', 'gallery-filter');

const filterAll = document.createElement('button');
filterAll.textContent = 'Tous';
filterAll.setAttribute('class', 'filter-button active-type');
filterAll.setAttribute('data-gallery-tag', 'all');

const filterConcert = document.createElement('button');
filterConcert.textContent = 'Concert';
filterConcert.setAttribute('class', 'filter-button');
filterConcert.setAttribute('data-gallery-tag', 'Concert');

const filterEntreprises = document.createElement('button');
filterEntreprises.textContent = 'Entreprises';
filterEntreprises.setAttribute('class', 'filter-button');
filterEntreprises.setAttribute('data-gallery-tag', 'Entreprises');

const filterWedding = document.createElement('button');
filterWedding.textContent = 'Mariages';
filterWedding.setAttribute('class', 'filter-button');
filterWedding.setAttribute('data-gallery-tag', 'Mariages');

const filterPortrait = document.createElement('button');
filterPortrait.textContent = 'Portrait';
filterPortrait.setAttribute('class', 'filter-button');
filterPortrait.setAttribute('data-gallery-tag', 'Portrait');

galleryWrapper.appendChild(galleryFilter);
galleryFilter.appendChild(filterAll);
galleryFilter.appendChild(filterConcert);
galleryFilter.appendChild(filterEntreprises);
galleryFilter.appendChild(filterWedding);
galleryFilter.appendChild(filterPortrait);
galleryWrapper.appendChild(gallery);

const filterButtons = document.querySelectorAll('.filter-button');
const galleryContent = document.querySelectorAll('.gallery-item');
let galleryFiltered = [];

function displayAll() {
    if (galleryFiltered.length === 0) {
        galleryFiltered = Array.from(galleryContent);
    }}
displayAll();
function displayButtonFilter(e) {
    for (let i = 0; i < galleryContent.length; i++) {
        const item = galleryContent[i];
        const tag = item.getAttribute('data-gallery-tag');
        
        item.style.display = (tag === e.target.dataset.galleryTag || e.target.dataset.galleryTag === 'all') ? 'flex' : 'none';}
        filteredGalleryContent();
    }
function filteredGalleryContent() {
    galleryFiltered = Array.from(galleryContent).filter(item => item.style.display !== 'none');
    }   



const filterButtonCard = (e) => {
    document.querySelector('.filter-button.active-type').classList.remove('active-type');
    e.target.classList.add('active-type');
    displayButtonFilter(e);};

filterButtons.forEach(button => button.addEventListener('click', filterButtonCard));

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.img-modal-content img');
const imgModal = document.querySelector('.img-modal');



galleryContent.forEach((item) => {
    item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('src'); 
    imgModal.setAttribute('src',imgSrc);  
    modal.style.display = 'flex'; 

});});

modal.addEventListener('click', (e) => {
    if (!e.target.closest('.img-modal-content')) {
        modal.style.display = 'none';
    }
});

const rigthBtn = document.querySelector('#button-right');
const leftBtn = document.querySelector('#button-left');



function changeImageModal(e) {
    let currentSrc = modalContent.getAttribute('src');
    let currentIndex = Array.from(galleryFiltered).findIndex(item => item.getAttribute('src') === currentSrc);
    let nextIndex;
  
    

    if (e === rigthBtn) {
        nextIndex = (currentIndex + 1) % galleryFiltered.length;
    } else if (e === leftBtn) {
        nextIndex = (currentIndex - 1 + galleryFiltered.length) % galleryFiltered.length;
    }

    let nextImg = galleryFiltered[nextIndex].getAttribute('src');
    modalContent.setAttribute('src', nextImg);
   
}


rigthBtn.addEventListener('click', (e) => {
    e.stopPropagation();
  changeImageModal(rigthBtn);});


leftBtn.addEventListener('click', (e) => {
    e.stopPropagation();
changeImageModal(leftBtn);});