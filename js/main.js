
let images = document.querySelectorAll('.slider-line img');
let sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;
let player;

 function init(){ // расчет размер изображения в зависимости от экрана при старте
  width = document.querySelector('.slider').offsetWidth;
  sliderLine.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
  });
  rollSlider()
}
window.addEventListener('resize', init); // расчет размер изображения при изменении экрана
window.onload = init; // включение функции после загрузки страницы


document.querySelector('.slider-prev').addEventListener('click', function (){ // кнопка назад
  count--;
  if (count < 0){
    count = images.length - 1;
  }
  currentSlide(count) // для переключения радио-кнопок по нажатию стрелки
  rollSlider()
})

document.querySelector('.slider-next').addEventListener('click', function (){ // кнопка вперед
  count++;
  if (count >= images.length){
    count = 0;
  }
  currentSlide(count)
  rollSlider()
})

function rollSlider(){ // отрисовка перемещения
  sliderLine.style.transform = 'translate(-'+count*width+'px)'
}

function currentSlide(n){ // настройка радио кнопок
  let dots = document.getElementsByClassName("slider-dots_item");
  count=n // слайд равен индексу currentSlide(х)
  for (let i = 0; i < 3; i++) {
    dots[i].classList.remove('active') // удаление класса
  }
  dots[n].classList.add('active');
  rollSlider()
}

function onYouTubePlayerAPIReady() { // Плеер
  player = new YT.Player('player');
}
$('#stop').click(function(){
  player.stopVideo()
})






function touchSlider(){ //
  // console.log(TouchList);
  let sliderDots = document.querySelector(".slider-dots");
  let sliderLine = document.querySelector(".slider-line");
  let startClientX;
  let endClientX;

  sliderDots.addEventListener('touchstart', function(){
    startClientX = event.changedTouches[0].clientX; //
  });
  /* проверка движения
  box.addEventListener('touchmove', function(){
    console.log('move');
    console.log(event);
    console.log(event.changedTouches);
    console.log(width)
  });*/
  sliderDots.addEventListener('touchend', function(){
    endClientX = event.changedTouches[0].clientX;
    if (startClientX>endClientX){
      $(".slider-next").click();
    } else {$(".slider-prev").click();}
  });

  sliderLine.addEventListener('touchstart', function(){
    startClientX = event.changedTouches[0].clientX;
  });
  sliderLine.addEventListener('touchend', function(){
    endClientX = event.changedTouches[0].clientX;
    if (startClientX>=endClientX){
      $(".slider-next").click();
    } else {$(".slider-prev").click();}
  });
}
touchSlider()
