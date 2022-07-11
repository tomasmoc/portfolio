import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio/Obrazek 3.webp';
import IMG2 from '../../assets/portfolio/Obrazek 4.webp';
import IMG3 from '../../assets/portfolio/Obrazek 5.webp';
import IMG4 from '../../assets/portfolio/Obrazek 6.webp';
import IMG5 from '../../assets/portfolio/Obrazek 7.webp';
import IMG6 from '../../assets/portfolio/Obrazek 8.webp';


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Play: Meta, multimedia assets on metaverse, crypto logo design',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18163088-Scanner-Cars-mobile-app'
  },
  {
    id: 1,
    image: IMG2,
    title: 'John Lennon and Caverito',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18163088-Scanner-Cars-mobile-app'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Music',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18163088-Scanner-Cars-mobile-app'
  },
  {
    id: 1,
    image: IMG4,
    title: 'Video Editor - App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18163088-Scanner-Cars-mobile-app'
  },
  {
    id: 1,
    image: IMG5,
    title: 'Small Business App',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18163088-Scanner-Cars-mobile-app'
  },
  {
    id: 1,
    image: IMG6,
    title: 'Perfomee: landing page, brand, visual identity, hero',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/18163088-Scanner-Cars-mobile-app'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mé práce</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
      {
        data.map(({id, image, title, github, demo}) => {
          return (
        <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
          )
      })
}
      </div>
    </section>
  )
}

export default Portfolio