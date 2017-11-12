(function() {
  'use strict';

  let init = () => {

    if(document.getElementById('home')){

      let logo  = document.getElementById('logo')
      let inview = new Waypoint.Inview({
        element: document.getElementById('title'),
        enter: (direction) => {
          console.log('Enter triggered with direction ' + direction)
          logo.classList.add('hidden')
        },
        exit: (direction) => {
          console.log('Exit triggered with direction ' + direction)
          logo.classList.remove('hidden')
        }
      })
    }

    let animated = Array.prototype.slice.call(document.getElementsByClassName('inview'));

    animated.forEach((el) => {
      el.inview = new Waypoint.Inview({
        element: el,
        enter: function(direction) {
          this.element.classList.add('visible')
        },
      })
    })

    // let links = Array.prototype.slice.call(document.getElementsByClassName('smoothscroll'));

    // links.forEach((el) => {

    //   el.addEventListener('click', function(e){
    //     // console.log('sdfsdf', this.getAttribute('href'))
    //     let target = this.getAttribute('href').replace('/#', '');
    //     if(document.getElementById(target)){
    //       e.preventDefault();
    //     }else{

    //     }
    //   });
    // })

    var scroll = new SmoothScroll('a[href*="#"]');

    // window.addEventListener('hashchange', (e) => {
    //   hashchange();
    // })

    // hashchange();
  }

  // let hashchange = () => {
  //   let hash = window.location.hash.replace('#', '');
  //   console.log(hash);

  //   if(document.getElementById(hash)){
  //     document.getElementById(hash).scrollIntoView({ behavior: 'smooth' });
  //   }
  // }

  init();

})();