const galleryImg = document.getElementById('slider').getElementsByTagName('img');
const btnLeft = document.getElementById('slider-btn-left');
const btnRight = document.getElementById('slider-btn-right');
console.log(galleryImg);
console.log(galleryImg.length);
let i = 0;

btnRight.onclick = () => {

  if(i >= galleryImg.length-1) {
    galleryImg[i].style.display = 'none';
    i = 0;
    galleryImg[i].style.display = 'block';
  } else {
    galleryImg[i].style.display = 'none';
    galleryImg[i+1].style.display = 'block';
    i++;
  }
};

btnLeft.onclick = () => {

  if(i <= 0) {
    galleryImg[i].style.display = 'none';
    i = galleryImg.length - 1;
    galleryImg[i].style.display = 'block';
  } else {
    galleryImg[i].style.display = 'none';
    galleryImg[i-1].style.display = 'block';
    i--;
  }
};


