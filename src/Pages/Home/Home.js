// React Module Imports
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

// Import Swiper Slider components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

// Import Image Icons
import ImgIcon from '../../Assets/icons/img-icon.svg';

// Common Components Imports
import ProductCardsSlider from "../../CommonComponents/ProductCardSlider/ProductCardsSlider";
import BlackButton from "../../CommonComponents/Buttons/BlackButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { SliderListAct } from "../../ReduxStore/Actions/SliderListAction";
import { TestimonialListAct } from "../../ReduxStore/Actions/TestimonialsAction";

export default function Home() {
    const dispatch = useDispatch()
    const SliderList = useSelector((state)=> state.SliderList);
    const TestimonialList = useSelector((state)=> state.TestimonialList);
    const {loading, Sliders, error} = SliderList
    const {TestimonialLoading, Testimonial, TestimonialError} = TestimonialList
    useEffect(()=> {
      dispatch(SliderListAct());
      dispatch(TestimonialListAct());
    },[dispatch]);

    return <>
        <div className="container">
            <div className="home_section">
                <div className="home_slider">
                    <Swiper
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                        {loading ? ' ' 
                        : error? <p>no data found</p> 
                        : Sliders.data.map((data, index) =>
                            <SwiperSlide key={index}><img src={data.image} alt="ImgIcon" /></SwiperSlide>
                        )}
                    </Swiper>
                </div>

                {/* featured product */}
                <div className="feature_product">
                    <h2 className="section_heading">Related Products</h2>
                    <ProductCardsSlider />
                    <Link to="/products">
                        <BlackButton>EXPLORE</BlackButton>
                    </Link>
                </div>

                {/* top categories */}
                <div className="top_categories_section">
                    <h2 className="section_heading">What are you looking for?</h2>
                    <div className="top_Categories_content">
                        <Link to="/" className="category">
                            <div className="category_img">
                                <img src={ImgIcon} alt="ImgIcon" />
                            </div>
                            <div className="category_name">
                                <h3>Category Name</h3>
                            </div>
                        </Link>
                        <Link to="/" className="category">
                            <div className="category_img">
                                <img src={ImgIcon} alt="ImgIcon" />
                            </div>
                            <div className="category_name">
                                <h3>Category Name</h3>
                            </div>
                        </Link>
                        <Link to="/" className="category">
                            <div className="category_img">
                                <img src={ImgIcon} alt="ImgIcon" />
                            </div>
                            <div className="category_name">
                                <h3>Category Name</h3>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* latest product */}
                <div className="Latest_product">
                    <h2 className="section_heading">latest Products</h2>
                    <ProductCardsSlider />
                    <Link to="/products">
                        <BlackButton>EXPLORE</BlackButton>
                    </Link>
                </div>

                {/* testimonial */}
                <div className="testimonial_section">
                    <h2 className="section_heading">Testimonials</h2>
                    <div className="tastimonial_slider">
                        <Swiper navigation={true} modules={[Pagination, Navigation]} pagination={{
                            clickable: true,
                        }} className="mySwiper">
                            {
                            TestimonialLoading ? ' ' 
                            : TestimonialError? <p>no data found</p> 
                            : Testimonial.data.map((data, index) =>
                            <SwiperSlide key={index}>
                                <div className="testimonial_content">
                                    <p>{data.testimonial}</p>
                                    <img className="user_img" src={data.image} alt={data.name} />
                                    <h3>{data.name}</h3>
                                    <h4>{data.designation}</h4>
                                </div>
                            </SwiperSlide>
                        )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </>
}

