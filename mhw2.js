function onScroll(){
    const header = document.querySelector('header');
    const scrollContainer = document.querySelector('.scroll-header-container');
    if (window.scrollY > header.offsetHeight){
        scrollContainer.classList.remove('hidden');        
    }
    else{
        scrollContainer.classList.add("hidden");
    }
}

function closeSectionsFooter(){
    if (window.innerWidth < 768){
        const subsections = document.querySelectorAll('.link-footer-container');
        for (let subsection of subsections){
            subsection.classList.add('hidden');
        }
    }
}

function menuClick(event){
    event.preventDefault();
    const item = event.currentTarget;
    console.log(item.tagName)
    const header = document.querySelector('header');
    let nuovoURL = null;
    let subheader = document.querySelector('.header-text-description .subheader')
    if (item.dataset.menuCategory === 'Sport'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltf72c772c545eac44/6540fe9e20567d001b090c64/7_Amsterdam_Cruijff_stadium_a_mobile.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Approfitta dell\'accesso privato alla Johan Cruijff Arena'
    }
    if (item.dataset.menuCategory === 'Food'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltf1a15f5256d7bf0d/6540ff840970dd001bd15522/6_Rome.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Riscopri le tradizioni culinarie italiane a Roma'
    }
    if (item.dataset.menuCategory === 'Culture'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltd0ca1069566c7d75/65425bfa2149b10407ad83fd/11_Amsterdam_bike.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Esplora Amsterdam in modo autentico'
    }
    if (item.dataset.menuCategory === 'Nature'){
        nuovoURL = 'https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/blt89f86751d709a4d6/6543969b36795e040703e1e6/3_Teide_desktop.jpg?auto=webp&quality=60';
        header.style.backgroundImage = "url('" + nuovoURL + "')";
        subheader.textContent = 'Ammira il tramonto e osserva le stelle al Parco Nazionale del Teide'
    }
}

function likeMouseOn(event){
    const like = event.currentTarget;
    let textDescription = like.parentNode.querySelector('.like-text');
    if (!textDescription) {
        textDescription = document.createElement('div');
        textDescription.classList.add('like-text');
        like.parentNode.appendChild(textDescription);
    }
    if (like.classList.contains('liked')){
        textDescription.textContent = 'Rimuovi dai preferiti';
    }
    else{
        textDescription.textContent = 'Aggiungi ai preferiti';
    }
}

function likeMouseLeave(event){
    const like = event.currentTarget;
    const textDescription = like.parentNode.querySelector('.like-text');
    if(textDescription){
        textDescription.remove();
    }

}

function likeClick(event){
    const like = event.currentTarget;
    let textDescription = like.parentNode.querySelector('.like-text');
    if (like.classList.contains('liked')){
        like.classList.remove('liked');
        like.src = 'heart.png';
        if (textDescription){
            textDescription.textContent = 'Aggiungi ai preferiti'
        }
    }
    else {
        like.classList.add('liked');
        like.src = 'heart.svg';
        if (textDescription){
            textDescription.textContent = 'Rimuovi dai preferiti'
        }
    }
    event.preventDefault();
    event.stopPropagation();
}

function footerSectionClick(event){
    if (window.innerWidth < 768){
        const section = event.currentTarget;
        const index = parseInt(section.dataset.secIndex);
        const subsections = document.querySelectorAll('.link-footer-container');
        for (let subsection of subsections){
            if (parseInt(subsection.dataset.childIndex) === index){
                subsection.classList.toggle('hidden');
            }
        }
    }

}

function profileIconOn(event){
    if (window.innerWidth > 768) {
        const profileIcon = event.currentTarget;
        const profileMenu = profileIcon.querySelector('.profile-menu');
        if (profileMenu.classList.contains('hidden')){
            profileMenu.classList.remove('hidden');
        }
    }


}

function profileIconLeave(event){
    if (window.innerWidth > 768) {
        const profileIcon = event.currentTarget;
        const profileMenu = profileIcon.querySelector('.profile-menu');
        if (!profileMenu.classList.contains('hidden')){
            profileMenu.classList.add('hidden');
        }
    }

}
window.addEventListener('scroll', onScroll);
window.addEventListener('load', closeSectionsFooter);

const scrollMenuItem = document.querySelectorAll('.themes-menu-item');
for (let item of scrollMenuItem){
    item.addEventListener('click',menuClick);
}

const likeIcons = document.querySelectorAll('.bch-single-block .like-icon');
for (let like of likeIcons){
    like.addEventListener('mouseenter', likeMouseOn)
    like.addEventListener('mouseleave', likeMouseLeave)
    like.addEventListener('click', likeClick);
}

const footerSections = document.querySelectorAll('.title-footer-section');
for (let section of footerSections){

    section.addEventListener('click', footerSectionClick);
}
if (window.innerWidth > 768) {

}
const profileIcon = document.querySelector('.menu_item[data-menu-link="Profile"]');
profileIcon.addEventListener('mouseenter', profileIconOn)
profileIcon.addEventListener('mouseleave', profileIconLeave)


