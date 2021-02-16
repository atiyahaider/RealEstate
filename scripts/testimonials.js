const testimonials = [
    {
        name: 'First1 Last',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    },
    {
        name: 'First2 Last',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    },
    {
        name: 'First3 Last',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    },
    {
        name: 'First4 Last',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    },
    {
        name: 'First5 Last',
        rating: 5,
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    }
]

let groupSize = 2;
let currentSlide = 1;

const chevron = document.getElementsByClassName('chevron');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

//On resize of window, if window gets smaller than 675px, display only one testimonial
window.addEventListener("resize", () => {
    gotoFirstSlide();
    configureNextPrevBtns();

    //if window size gets smaller than 675 and was greater before, change groupSize to 1
    if (window.outerWidth <= 675) {
        if (groupSize === 2) {
            groupSize = 1;  
            removeTestimonials();
            getTestimonials();
        }
    }
    else {   //if screen was smaller before and has increased then change groupSize to 2
        if (groupSize === 1) {
            groupSize = 2;
            removeTestimonials();
            getTestimonials();
        }
    }
});

//slide to previous page of testimonials 
prevBtn.addEventListener('click', () => {
    currentSlide--;

    //slide the prev group
    let testimonialsDiv = document.getElementById('testimonials');
    let slideWidth = testimonialsDiv.clientWidth;
    testimonialsDiv.scrollTo((currentSlide-1) * slideWidth, 0);

    //display the next button and enable it, as there is a next page now
    chevron[1].style.cursor = 'pointer';
    nextBtn.style.opacity = 1;
    nextBtn.style.pointerEvents = 'auto';

    //if first slide, do not show prev button and disable it
    if (currentSlide <= 1) {
        chevron[0].style.cursor = 'none';
        prevBtn.style.opacity = 0.25;
        prevBtn.style.pointerEvents = 'none';
    }
})

//slide to next page of testimonials 
nextBtn.addEventListener('click', () => {
    //slide the next group
    let testimonialsDiv = document.getElementById('testimonials');
    let slideWidth = testimonialsDiv.clientWidth;
    testimonialsDiv.scrollTo(currentSlide * slideWidth, 0);

    //display the prev button and enable it, as there is a prev page now
    chevron[0].style.cursor = 'pointer';
    prevBtn.style.opacity = 1;
    prevBtn.style.pointerEvents = 'auto';

    currentSlide++;
    //if last slide, do not show next button and disable it
    if (currentSlide * groupSize >= testimonials.length) {
        chevron[1].style.cursor = 'none';
        nextBtn.style.opacity = 0.25;
        nextBtn.style.pointerEvents = 'none';
    }
})

getTestimonials = () => {
    let testimonialsList = document.getElementById('testimonials');
    let testimonialWrapper;

    testimonials.forEach((testimonial, i) => {
        //create a flex div for every two testimonials
        if (i % groupSize === 0) {
            testimonialWrapper = document.createElement('div');
            testimonialWrapper.classList.add('testimonial-wrapper');
        }

        //create a div for the testimonial
        let testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        
        //create a span for displaying rating
        let span = document.createElement('span');
        //create image tag for star rating
        let starImg = document.createElement('img');
        starImg.src = 'Assests/lnr-star.png';
        starImg.classList.add('img-star');
        //append as many stars as rating
        for (let j=0; j<testimonial.rating; j++) {
            span.appendChild(starImg.cloneNode(true));
        }
        //append the span to testimonial div
        testimonialDiv.appendChild(span);

        //create p tag for the review and append to testimonial div 
        let pReview = document.createElement('p');
        pReview.classList.add('testimonial-text', 'roboto');
        pReview.innerText = testimonial.review;
        testimonialDiv.appendChild(pReview);

        //create p tag for the name and append to testimonial div 
        let pName = document.createElement('p');
        pName.innerHTML = '<i>- ' + testimonial.name + '</i>';
        testimonialDiv.appendChild(pName);

        //append testimonialDiv to the testimonial Wrapper
        testimonialWrapper.appendChild(testimonialDiv);


        //If groupSize testimonials have been appended to the wrapper,
        //or it is the last testimoinal,
        //append the wrapper to the testimonials list
        if (testimonialWrapper.childElementCount === groupSize || i === testimonials.length - 1) {
            testimonialsList.appendChild(testimonialWrapper);
            if (testimonialWrapper.childElementCount === 1)
                testimonialWrapper.style.justifyContent = 'center';
        }
        
    })

    configureNextPrevBtns();
}

configureNextPrevBtns = () => {
    const chevron = document.getElementsByClassName('chevron');

    //disable the prev button
    chevron[0].style.cursor = 'none';
    prevBtn.style.opacity = 0.25;
    prevBtn.style.pointerEvents = 'none';

    //enable the next button
    if (testimonials.length > groupSize) {
        chevron[1].style.cursor = 'pointer';
        nextBtn.style.opacity = 1;
        nextBtn.style.pointerEvents = 'auto';
    }
    //disable the next button
    else {
        chevron[1].style.cursor = 'none';
        nextBtn.style.opacity = 0.25;
        nextBtn.style.pointerEvents = 'none';
    }
    
}

removeTestimonials = () => {
    let testimonialsList = document.getElementById('testimonials');
    while (testimonialsList.firstChild) {
        testimonialsList.removeChild(testimonialsList.firstChild);
    }
}

gotoFirstSlide = () => {
    let testimonialsDiv = document.getElementById('testimonials');
    testimonialsDiv.scrollTo(0, 0);
    currentSlide = 1;
}