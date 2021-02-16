animateElements = () => {
    const scroll = window.requestAnimationFrame;
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    animateOnScroll = () => {
        elementsToAnimate.forEach( element => {
          if (isElementInViewport(element)) {
            element.classList.add('is-visible');
          } 
          else {
            element.classList.remove('is-visible');
          }
        });
      
        scroll(animateOnScroll);
    }

    animateOnScroll();
}

isElementInViewport = el => {
    let rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}