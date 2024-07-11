import React, { useState, useEffect } from 'react';
import Style from './Body.module.css';
import imageCanva from './canvas.png';
import Lottie from 'react-lottie';
import animation_1 from './animation_1.json';
import animation_2 from './animation_2.json';
import Testimonial from './Testimonial';
import Currency from '../../Currency/Currency';
import Category from '../Category/Category';

const Body = () => {
    const testimonials = [
        {
            image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Alex Calf',
            opinion: 'Finanzy plan allowed me to buy a car to transport my gear and reach clients, making my business thrive.'
        },
        {
            image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Alex, Photographer',
            opinion: 'Finanzy plan allowed me to buy a car to transport my gear and reach clients, making my photography business thrive.'
        },
        {
            image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Rachel, Businesswoman',
            opinion: 'Thanks to Finanzy, I was able to get a reliable car, making my daily commute and business trips smooth and hassle-free.'
        },
        {
            image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'John, Construction Worker',
            opinion: 'Finanzy made it easy for me to buy a car, breaking down payments into manageable chunks. Now, I get to work on time and stress-free.'
        },
        {
            image: 'https://images.pexels.com/photos/5867737/pexels-photo-5867737.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Dr. Adam',
            opinion: 'Finanzy flexible plan helped me buy a reliable car for my demanding schedule. Now, I can reach my patients with ease.'
        },
        {
            image: 'https://images.pexels.com/photos/1117647/pexels-photo-1117647.jpeg?auto=compress&cs=tinysrgb&w=600',
            name: 'Sarah, Mother of Two',
            opinion: "Finanzy helped me secure a car for my family, ensuring safe transportation for my kids and me. It was a lifesaver!"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Adjusted interval for smoother slide transition

        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1));
    };

    // parameter of animation
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: animation_1,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animation_2,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className={Style.Body}>
            <div className={Style.Container}>
                <div className={Style.ImageWrapper}>
                    <Lottie options={defaultOptions1} />
                </div>
                <div className={Style.Content}>
                    <h1>Buy Now, Pay Later – Simplified</h1>
                    <br />
                    <p>Get your dream car today with Finanzy's flexible payment plans, making it easier for you to manage your finances.</p>
                </div>
            </div>
            <div className={Style.arrow}>
                <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/down-arrow" alt="Down Arrow" />
            </div>
            <div className={Style.Container}>
                <div className={Style.Content}>
                    <h1>Flexible Payment Options</h1>
                    <br />
                    <p>Choose from a variety of payment plans that suit your needs and budget, ensuring a smooth car buying experience.</p>
                </div>
                <div className={Style.ImageWrapper}>
                    <Lottie options={defaultOptions2} width={"400px"} />
                </div>
            </div>
            <div className={Style.arrow}>
                <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/down-arrow" alt="Down Arrow" />
            </div>
            <div className={Style.Container}>
                <div className={Style.ImageWrapper}>
                    <img src={imageCanva} alt="Canvas" />
                </div>
                <div className={Style.Content}>
                    <h1>Get Started Today</h1>
                    <br />
                    <p>Sign up with Finanzy and take the first step towards owning your car. Enjoy the freedom and convenience that comes with our hassle-free service.</p>
                </div>
            </div>

            <Category />

            {/* Testimonials Slider */}
            <Testimonial testimonials={testimonials} />
            <Currency />
        </div>
    );
};

export default Body;
