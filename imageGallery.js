const mainHd = document.querySelector("#main_hd");
if (window.innerWidth >= 480) {
  mainHd.innerHTML = "~~~ &clubs; Image Gallery &clubs; ~~~";
} else if ((window.innerWidth <= 480) && (window.innerWidth >= 330)) {
  mainHd.innerHTML = "&clubs; Image Gallery &clubs;";
} else if (window.innerWidth <= 330) {
  mainHd.innerHTML = "Image Gallery";
}

const lightBox = document.getElementById("lightbox");
const lightBoxImage = document.getElementById("lightbox-img");
let currentImageIndex = 0;
let images = [];


function openLightbox(imgElement) {
  images = Array.from(document.querySelectorAll(".gallery-item"))
                .filter(img => img.style.display !== 'none');
  currentImageIndex = images.indexOf(imgElement);
  lightBoxImage.src = imgElement.src;
  lightBox.style.display = 'flex';
};

function closeLightbox(event) {
  lightBox.style.display = 'none';
  event.stopPropagation();
};

lightBoxImage.addEventListener("click", (event) => {
  event.stopPropagation();
})

function changeImage(direction) {
  event.stopPropagation();
  currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
  lightBoxImage.src = images[currentImageIndex].src;
};

const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(Item => {
  Item.addEventListener("click", () => {
    openLightbox(Item);
  });
});

const imageBar = document.querySelector("#image-info-sticky-bar");
function filterImages(category) {
  galleryItems.forEach(item => {
    item.style.display = (category === "all" || item.classList.contains(category))  ? 'block' : 'none';
    imageBar.innerHTML = `<b>~~~&sect;</b> <b>&nbsp;Images&nbsp;</b>: &nbsp;${category.toUpperCase()}&nbsp; <b>&sect;~~~</b>`;

    if (window.innerWidth <= 400) {
      imageBar.innerHTML = `<b>Images</b>: &nbsp;${category.toUpperCase()}`;
    }
  });
};

const filterMenuIcon = document.querySelector("#filter-menu-icon");
const filterMenu = document.querySelector("#filter_menu");
const filterCrossMark = document.querySelector("#filter-cross-mark");

filterMenuIcon.addEventListener("click", () => {
  filterMenuIcon.style.display = 'none';
  filterMenu.style = "display: inline-flex; position: absolute; background-color: rgba(229, 244, 250, 0.79); border-right: 1.5px solid darkgray; height: 70%";
  filterCrossMark.style.display = 'initial';
});

filterCrossMark.addEventListener("click", () => {
  filterMenu.style.display = 'none';
  filterMenuIcon.style.display = 'initial';
});
