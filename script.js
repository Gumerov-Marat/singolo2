document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const divs = document.querySelectorAll('body .anchor');
  const links = document.querySelectorAll('.header__menu a');

  divs.forEach((el) => {
  //  console.log(el);
  //   console.log(el.getAttribute('id'));
  //   el.getAttribute('id');
     
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
        console.log(el.offsetTop);
        links.forEach((a)=>{
         a.classList.remove('active');
         if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
           a.classList.add('active');
         }
       })
    }
  });
}