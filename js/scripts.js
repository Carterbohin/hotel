import { hotels } from '../data/hotels.js';

const hb = document.querySelector('#hamburgerBtn');
const pw = document.querySelector('#pageWrapper');

hb.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
});

const rightNow = new Date();
document.querySelector('#year').textContent = rightNow.getFullYear();

const cards = document.querySelector('#allHotels');

hotels.forEach(hotel => {
    const mySection = document.createElement('section');

    const theImage = document.createElement('img');
    theImage.src = hotel.photo;
    theImage.alt = `${hotel.name} (${hotel.year})`;

    const theName = document.createElement('h2');
    theName.textContent = hotel.name;

    const theAddress = document.createElement('p');
    theAddress.textContent = hotel.address;

    const thePhone = document.createElement('p');
    thePhone.classList.add('phone');  // Add this line to ensure the correct class is applied
    thePhone.textContent = hotel.phone;
    

    mySection.appendChild(theImage);
    mySection.appendChild(theName);
    mySection.appendChild(theAddress);
    mySection.appendChild(thePhone);

    cards.appendChild(mySection);
});
