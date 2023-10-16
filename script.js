// JavaScript

const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');

// 確認
//console.log(main);
//console.log(thumbs);
// クリックで切り替え
 thumbs.forEach(function(item, index) {
  item.onclick = function() {
   //console.log(this.dataset.image);
   main.src = this.dataset.image;
  }
});
