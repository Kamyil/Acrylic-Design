const pageContent = document.querySelector(".contentViewport .content");
const pagecopy = pageContent.cloneNode(true);
const blurryContent = document.querySelector(".overlay-view .content-wrapper");
const blurryContentViewport = document.querySelector(".overlay-view");
//side-bar
const 
blurryContent.appendChild(pagecopy);
window.onscroll = function() {

  blurryContentViewport.scrollTop = window.pageYOffset;
};
