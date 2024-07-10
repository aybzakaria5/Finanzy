import React from 'react';
import Style from './Testimonial.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = ({ testimonials }) => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <main className={Style.Container}>
            <section className={Style.TestimonialSection}>
                <div className={Style.Testimonial}>
                    <div className={Style.Container}>
                        <div className={Style.TestimonialInner}>
                            <h3 className={Style.Title}>Join millions of happy readers.</h3>
                            <Slider {...settings} className={Style.TestimonialSlider}>
                                {testimonials.map((testimonial, index) => (
                                    <div key={index} className={Style.TestimonialSlide}>
                                        <div className={Style.TestimonialBox}>
                                            <div className={Style.TestimonialBoxInner}>
                                                <div className={Style.TestimonialBoxTop}>
                                                    <div className={Style.TestimonialBoxIcon}>
                                                        <i className="fas fa-quote-right"></i>
                                                    </div>
                                                    <div className={Style.TestimonialBoxImg}>
                                                        <img src={testimonial.image} alt="profile" />
                                                    </div>
                                                    <div className={Style.TestimonialBoxName}>
                                                        <h4>{testimonial.name}</h4>
                                                    </div>
                                                    <div className={Style.TestimonialBoxJob}>
                                                        <p>{testimonial.opinion}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Testimonial;