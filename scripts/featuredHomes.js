const featuredHomes = [
   {
        address: {
            street: '123 Main St.',
            city: 'Las Vegas',
            state: 'NV',
            zipcode: '89147'
        },
        price: 800150,
        beds: 3,
        baths: 4,
        area: 2504,
        image: 'Assests/ft-homes1.png'
    },
    {
        address: {
            street: '123 Main St.',
            city: 'Las Vegas',
            state: 'NV',
            zipcode: '89147'
        },
        price: 700150,
        beds: 3,
        baths: 4,
        area: 2504,
        image: 'Assests/ft-homes2.png'
    },
    {
        address: {
            street: '123 Main St.',
            city: 'Las Vegas',
            state: 'NV',
            zipcode: '89147'
        },
        price: 500150,
        beds: 3,
        baths: 4,
        area: 2504,
        image: 'Assests/ft-homes3.png'
    }
]

getFeaturedHomes = () => {
    const ftHomes = document.getElementById('ft-homes');

    featuredHomes.map( home => {
        //create a div for home-card
        let homeCard = document.createElement('div');
        homeCard.classList.add('home-card', 'animate-on-scroll');

        //create image tag for this home and add to homeCard
        const img = document.createElement('img');
        img.src = home.image;
        img.classList.add('ft-pic');
        homeCard.appendChild(img);

        //append the details of the home
        homeCard.appendChild(createHomeDetails(home));

        //append homeCard to Featured Homes Section
        ftHomes.appendChild(homeCard);
    })
}

createHomeDetails = home => {
    //create details div
    const homeDetails = document.createElement('div');
    homeDetails.classList.add('ft-home-details');

    //add the address to the details div
    const pAddress = document.createElement('p');
    pAddress.classList.add('ft-home-address', 'roboto');
    pAddress.innerText = home.address.street + ' ' + home.address.city + ', ' + home.address.state + ' ' + home.address.zipcode;
    homeDetails.appendChild(pAddress);

    //add price
    const pPrice = document.createElement('p');
    pPrice.classList.add('ft-home-price', 'roboto', 'bold');
    pPrice.innerText = '$' + home.price .toLocaleString('en-US');;
    homeDetails.appendChild(pPrice);

    //add div for home features
    const homeFeaturesDiv = document.createElement('div');
    homeFeaturesDiv.classList.add('ft-home-features', 'roboto', 'bold');
    homeFeaturesDiv.innerHTML = '<img id="bed-icon" src="Assests/bed-solid.png">' + 
                                '<p>' + home.beds + '</p>' + 
                                '<img id="bath-icon" src="Assests/bath-solid.png">' + 
                                '<p>' + home.baths + '</p>' + 
                                '<img id="home-icon" src="Assests/home-solid.png">' + 
                                '<p>' + home.area + ' SqFt</p>';
    homeDetails.appendChild(homeFeaturesDiv);
    
    //add a 'schedule showing' link
    const a = document.createElement('a');
    a.href = '#contact-me-section';
    a.innerText = 'Schedule a Showing';
    homeDetails.appendChild(a);

    //return the home details div   
    return homeDetails;
}