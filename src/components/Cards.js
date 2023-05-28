import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <p>Creating memories that last</p>
      <h1>EXPLORE A DIFFERENT PLACE TO TRAVEL</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Discover One of the Endangered Animals in Ujung Kulon'
              label='Banten'
              path='/Products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Visit Historic Sites and Learn About Their Origins'
              label='Jakarta'
              path='/Products'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean Visiting Uncharted Waters'
              label='West Java'
              path='/Products'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Enjoy the Magnificent View That the Color Lake Creates'
              label='Central Java'
              path='/Products'
            />
          </ul>
          <ul className='cards__items'>
             <CardItem
              src='images/img-11.jpg'
              text='Learn About the History of the Beautiful Palace Ruins'
              label='Special Region of Yogyakarta'
              path='/Products'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Discover More About the Free Spirit Behind the Waterfall'
              label='East Java'
              path='/Products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Find Out More About Java'
              label='Java Island Information'
              path='/Products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='What are you waiting for? Lets Plan Your Trip!'
              label='Agenda'
              path='/sign-up'
            />
          </ul> 
        </div>
      </div>
    </div>
  );
}

export default Cards;