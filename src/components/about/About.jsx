import React from "react";
import "./about.css";
import ME from '../../assets/about/Obrazek 2.jpeg';
import {FiAward} from 'react-icons/fi';
import {FiUsers} from 'react-icons/fi';
import {BsFolder} from 'react-icons/bs';



const About = () => {
    return (
        <section id="about">
            <h5>Můžeš se dozvědět</h5>
            <h2>O mně</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt=""/>
                    </div>
                </div>  

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                        <FiAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>3+ years working</small>
                        </article>

                        <article className="about_card">
                        <FiUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>300+ clients worldwide</small>
                        </article>

                        <article className="about_card">
                        <BsFolder className="about_icon"/>
                        <h5>Projects</h5>
                        <small>80+</small>
                        </article>
                    </div>

                    <p>Dragée jelly pastry caramels muffin tart oat cake gummi bears. Chocolate cake halvah gummies chocolate sweet sweet roll fruitcake liquorice. Gummies tootsie roll gummi bears topping chupa chups gummi bears donut ice cream marzipan. Gummies carrot cake croissant chocolate cake dragée tiramisu cake jelly beans gingerbread.</p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                
                </div>  
            </div>
        </section>
    )
}

export default About;