import "./testmonials.css";
import AVTR1 from '../../assets/testmonials/Obrazek 9.jpeg';
import AVTR2 from '../../assets/testmonials/Obrazek 10.jpeg';
import AVTR3 from '../../assets/testmonials/Obrazek 11.jpeg';
import AVTR4 from '../../assets/testmonials/Obrazek 12.jpeg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';


export const data = [
  {
    avatar: AVTR1,
    name: 'Barrack Obama',
    review: 'Cupcake ipsum dolor sit amet cake sugar plum chocolate bear claw. Cookie apple pie cake chupa chups cheesecake toffee powder biscuit. Lollipop chupa chups croissant cupcake tart cupcake sesame snaps.'
  },
  {
    avatar: AVTR2,
    name: 'Mamba',
    review: 'Cupcake ipsum dolor sit amet cake sugar plum chocolate bear claw. Cookie apple pie cake chupa chups cheesecake toffee powder biscuit. Lollipop chupa chups croissant cupcake tart cupcake sesame snaps.'
  },
  {
    avatar: AVTR3,
    name: 'Bloncka',
    review: 'Cupcake ipsum dolor sit amet cake sugar plum chocolate bear claw. Cookie apple pie cake chupa chups cheesecake toffee powder biscuit. Lollipop chupa chups croissant cupcake tart cupcake sesame snaps.'
  },
  {
    avatar: AVTR4,
    name: 'Jim Carrey',
    review: 'Cupcake ipsum dolor sit amet cake sugar plum chocolate bear claw. Cookie apple pie cake chupa chups cheesecake toffee powder biscuit. Lollipop chupa chups croissant cupcake tart cupcake sesame snaps.'
  }
]

const Testmonials = () => {
  return (
    <section id='testmonials'>
      <h5>Hodnocení od mých klientů</h5>
      <h2>Doporučení</h2>
      <Slider className='container testmonials_container'>
        {data.map(({ avatar, name, review }, index) => {
          return (
            <div key={index} className="testmonials">
              <div className='client_avatar'>
                <img src={avatar} alt='' />
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </div>
          );
        })}
      </Slider>
    </section>

  );
};

export default Testmonials

