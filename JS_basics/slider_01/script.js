const galleryImg = document.querySelectorAll('#slider > img');
const btnGallery = document.querySelectorAll('#slider-nav > input');

let i = 0;

function btnClick () {
  const btnType = this.getAttribute('data-value');

  if (btnType === 'left') {

    if(i <= 0) {
      galleryImg[i].style.display = 'none';
      i = galleryImg.length - 1;
      galleryImg[i].style.display = 'block';
    }
    else {
      galleryImg[i].style.display = 'none';
      galleryImg[i-1].style.display = 'block';
      i--;
    }
  }
  else {

    if(i >= galleryImg.length-1) {
      galleryImg[i].style.display = 'none';
      i = 0;
      galleryImg[i].style.display = 'block';
    }
    else {
      galleryImg[i].style.display = 'none';
      galleryImg[i+1].style.display = 'block';
      i++;
    }
  }
}

btnGallery.forEach((elem) => {
  elem.onclick = btnClick;
});





