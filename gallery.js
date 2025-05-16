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



const filterButtonCard = (e) => {
    document.querySelector('.filter-button.active-type').classList.remove('active-type');
    e.target.classList.add('active-type');
    
    galleryContent.forEach((item) => {
        if (item.dataset.galleryTag === e.target.dataset.galleryTag || e.target.dataset.galleryTag === 'all') {
            item.style.display = 'flex';
            
            }
        else {
            item.style.display = 'none';
            
}
})};
filterButtons.forEach(button => button.addEventListener('click', filterButtonCard));

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.img-modal-content img');
const imgModal = document.querySelector('.img-modal');

let ImageSrc = document.querySelectorAll('.gallery-item img');
ImageSrc = Array.from(galleryContent).map((img) => img.getAttribute('src'));


galleryContent.forEach((item) => {
    item.addEventListener('click', () => {
    const imgSrc = item.getAttribute('src'); 
    imgModal.setAttribute('src',imgSrc);  
    modal.style.display = 'flex'; })}
        
        
);

modal.addEventListener('click', (e) => {
    if (!e.target.closest('.img-modal-content')) {
        modal.style.display = 'none';
    }
});

const rigthBtn = document.querySelector('#button-right');
const leftBtn = document.querySelector('#button-left');

rigthBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const currentSrc = modalContent.getAttribute('src');
    const currentIndex = Array.from(galleryContent).findIndex(item => item.getAttribute('src') === currentSrc);
    const nextIndex = (currentIndex + 1) % galleryContent.length;
    const nextImg = galleryContent[nextIndex].getAttribute('src');
    modalContent.setAttribute('src', nextImg);

});

leftBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    
    const currentSrc = modalContent.getAttribute('src');
    const currentIndex = Array.from(galleryContent).findIndex(item => item.getAttribute('src') === currentSrc);
    const nextIndex = (currentIndex - 1 + galleryContent.length) % galleryContent.length;
    const nextImg = galleryContent[nextIndex].getAttribute('src');
    modalContent.setAttribute('src', nextImg);
    
});





