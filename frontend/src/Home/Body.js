import React, { useState, useEffect } from 'react';
import Style from './Body.module.css';
import imageCanva from './canvas.png';

const Body = () => {
    const testimonials = [
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'Alex Calf',
            opinion: 'BookBub has revolutionized my reading experience! The personalized deals are amazing.'
        },
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'Adrian Joes',
            opinion: 'I love finding hidden gems through BookBub. It’s my go-to for eBook deals.'
        },
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'David Johnson',
            opinion: 'BookBub makes it easy to discover new books tailored to my interests.'
        },
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'Smith Xavi',
            opinion: 'BookBub makes it easy to discover new books tailored to my interests.'
        },
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'Gavi swoot',
            opinion: 'BookBub makes it easy to discover new books tailored to my interests.'
        },
        {
            image: 'https://mir-s3-cdn-cf.behance.net/project_modules/hd/d65ee7111000421.5ff9a76af0694.jpg',
            name: 'Emma Brown',
            opinion: "BookBub helps me explore new genres and authors I wouldn't have found otherwise."
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

    return (
        <div className={Style.Body}>
            <div className={Style.Container}>
                <div className={Style.ImageWrapper}>
                    <img src={imageCanva} alt="" />
                </div>
                <div className={Style.Content}>
                    <h1>Read the Biggest eBooks for Free</h1>
                    <br />
                    <p>Receive a daily selection of titles, ranging from bestsellers to hidden gems, all at no cost.</p>
                </div>
            </div>
            <div className={Style.arrow}>
                <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/down-arrow" alt="" />
            </div>
            <div className={Style.Container}>
                <div className={Style.Content}>
                    <h1>Discover Personalized eBook Deals</h1>
                    <br />
                    <p>Tell BookBub what you like to read and receive handpicked deals that match your reading preferences.</p>
                </div>
                <div className={Style.ImageWrapper}>
                    <img src={imageCanva} alt="" />
                </div>
            </div>
            <div className={Style.arrow}>
                <img src="https://res.cloudinary.com/bookbub/image/upload/f_auto,q_auto/welcome/down-arrow" alt="" />
            </div>
            <div className={Style.Container}>
                <div className={Style.ImageWrapper}>
                    <img src={imageCanva} alt="Canvas" />
                </div>
                <div className={Style.Content}>
                    <h1> Buy Now, Pay Later – Simplified</h1>
                    <br />
                    <p>Receive a daily selection of titles, ranging from bestsellers to hidden gems, all at no cost.</p>
                </div>
            </div>

            {/* Testimonials Slider */}
            <div className={Style.Slider}>
                <h3 className={Style.Title}>Join millions of happy readers.</h3>
                <div className={Style.Testimonials}>
                    <div className={`${Style.TestimonialSlider} ${Style.Center}`}>
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={`${Style.Testimonial}`} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                <img src={testimonial.image} alt={testimonial.name} />
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.opinion}</p>
                            </div>
                        ))}
                    </div>
                    <div className={Style.Buttons}>
                        <button className={`${Style.PrevButton} ${Style.NavButton}`} onClick={prevSlide}><i className="bi bi-arrow-left"></i></button>
                        <button className={`${Style.NextButton} ${Style.NavButton}`} onClick={nextSlide}><i className="bi bi-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;
