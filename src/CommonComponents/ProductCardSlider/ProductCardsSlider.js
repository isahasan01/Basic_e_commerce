
// React Module Imports
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Common Components Imports
import Card from "../../CommonComponents/ProductCard";

// Import Swiper Slider components
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ProductCardsSlider.css"
import { useDispatch, useSelector } from 'react-redux';
import { ProductsListAct } from '../../ReduxStore/Actions/ProductsListAction';


export default function ProductCardsSlider() {

  const dispatch = useDispatch()
    const ProductsList = useSelector((state)=> state.ProductsList);
    const {Productsloading, Products, ProductsError} = ProductsList
    useEffect(()=> {
      dispatch(ProductsListAct());
    },[dispatch]);

  return <>
    <div className="Cards_slider">
        <Swiper
        slidesPerView= {2}
        spaceBetween= {14}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          1679:{
            width: 1615,
            slidesPerView: 4,
            spaceBetween: 43

          },
          1399:{
            width: 1420,
            slidesPerView: 4,
            spaceBetween: 32
          },
          991: {
            width: 1140,
            slidesPerView: 4,
            spaceBetween: 32,
          },
          768: {
            width: 915,
            slidesPerView: 3,
            spaceBetween: 32,
          },
          575: {
            width: 575,
            slidesPerView: 2,
            spaceBetween: 14,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        
        {
          Productsloading ? <h3>loading</h3>
          : ProductsError? <p>no data found</p> 
          : Products.data.map((p,index)=> <SwiperSlide key={index} ><Card key={index}  title={p.name} /></SwiperSlide>
          )
        }
        </Swiper>
        
    </div>
  </>;
}
