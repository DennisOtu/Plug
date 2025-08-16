import { useEffect, useRef } from 'react'

function ImageCarousel(props) {
    const carouselRef = useRef(null)
    useEffect(()=>{
        const track = carouselRef.current
        console.log(track)    
        try {
            const slides = Array.from(track.children)
            console.log(slides)
            const nextBtn = document.querySelector('.carouselNext')
            const previousBtn = document.querySelector('.carouselPrev')
            // stack slides next to each other horizontally
            slides.forEach((slide, index) => {
                const slideWidth = slide.getBoundingClientRect().width
                slide.style.left = `${ slideWidth * index }px`
                console.log(index)
            })

            function moveToSlide(track, currentSlide, targetSlide) {
                track.style.transform = `translateX(-${targetSlide.style.left})`
                currentSlide.classList.remove('activeSlide')
                targetSlide.classList.add('activeSlide')
            }

            nextBtn.addEventListener('click', e => {
                const currentSlide = track.querySelector('.activeSlide')
                const nextSlide = currentSlide.nextElementSibling
                
                moveToSlide(track, currentSlide, nextSlide)
            })

            previousBtn.addEventListener('click', e => {
                const currentSlide = track.querySelector('.activeSlide')
                const prevSlide = currentSlide.previousElementSibling

                moveToSlide(track, currentSlide, prevSlide)
            })
        } catch (error) {
            console.log(error)
        }
    })


    return (
        <div className="heroDiv">
            <div className="heroCarousel" ref={ carouselRef }>
                <div style={{ backgroundColor: 'rgba(185, 176, 12, 0.67)'}}
                    className="activeSlide">
                    <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.671)'}}>Slide 1</h1>
                </div>
                <div style={{backgroundColor: 'rgba(10, 155, 109, 0.67)'}}>
                    <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.671)'}}>Slide 2</h1>
                </div>
                <div style={{backgroundColor: 'rgba(10, 53, 193, 0.67)'}}>
                    <h1 style={{backgroundColor: 'rgba(0, 0, 0, 0.671)'}}>Slide 3</h1>
                </div>
            </div>
            <button className="carouselPrev"><i className="fa fa-arrow-left"></i> </button>
            <button className="carouselNext"><i className="fa fa-arrow-right"></i></button>

            {/*<div className="background-light-gray-color rts-section-gap bg_light-1 pt_sm--20">
                <div className="rts-banner-area-one mb--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="category-area-main-wrapper-one">
                                    <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                                        "spaceBetween":1,
                                        "slidesPerView":1,
                                        "loop": true,
                                        "speed": 2000,
                                        "autoplay":{
                                            "delay":"4000"
                                        },
                                        "navigation":{
                                            "nextEl":".swiper-button-next",
                                            "prevEl":".swiper-button-prev"
                                        },
                                        "breakpoints":{
                                        "0":{
                                            "slidesPerView":1,
                                            "spaceBetween": 0},
                                        "320":{
                                            "slidesPerView":1,
                                            "spaceBetween":0},
                                        "480":{
                                            "slidesPerView":1,
                                            "spaceBetween":0},
                                        "640":{
                                            "slidesPerView":1,
                                            "spaceBetween":0},
                                        "840":{
                                            "slidesPerView":1,
                                            "spaceBetween":0},
                                        "1140":{
                                            "slidesPerView":1,
                                            "spaceBetween":0}
                                        }
                                    }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <div className="banner-bg-image bg_image bg_one-banner  ptb--120 ptb_md--80 ptb_sm--60">
                                                    <div className="banner-one-inner-content">
                                                        <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                                        <h1 className="title">
                                                            Do not miss our amazing <br/>
                                                            productw deals
                                                        </h1>
                                                        <a href="shop-grid-sidebar.html" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Shop Now
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="swiper-slide">
                                                <div className="banner-bg-image bg_image bg_one-banner two  ptb--120 ptb_md--80 ptb_sm--60">
                                                    <div className="banner-one-inner-content">
                                                        <span className="pre">Get up to 30% off on your first $150 purchase</span>
                                                        <h1 className="title">
                                                            Do not miss our amazing <br/>
                                                            productw deals
                                                        </h1>
                                                        <a href="shop-grid-sidebar.html" className="rts-btn btn-primary radious-sm with-icon">
                                                            <div className="btn-text">
                                                                Shop Now
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                            <div className="arrow-icon">
                                                                <i className="fa-light fa-arrow-right"></i>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button className="swiper-button-next"><i className="fa fa-arrow-right"></i></button>
                                        <button className="swiper-button-prev"><i className="fa fa-arrow-left"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rts-caregory-area-one ">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="category-area-main-wrapper-one">
                                    <div className="swiper mySwiper-category-1 swiper-data" data-swiper='{
                                        "spaceBetween":12,
                                        "slidesPerView":10,
                                        "loop": true,
                                        "speed": 1000,
                                        "breakpoints":{
                                        "0":{
                                            "slidesPerView":2,
                                            "spaceBetween": 12},
                                        "320":{
                                            "slidesPerView":2,
                                            "spaceBetween":12},
                                        "480":{
                                            "slidesPerView":3,
                                            "spaceBetween":12},
                                        "640":{
                                            "slidesPerView":4,
                                            "spaceBetween":12},
                                        "840":{
                                            "slidesPerView":4,
                                            "spaceBetween":12},
                                        "1140":{
                                            "slidesPerView":10,
                                            "spaceBetween":12}
                                        }
                                    }'>
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/01.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>

                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/02.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/03.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/04.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/05.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/06.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/07.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/08.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/09.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                            <div className="swiper-slide">
                                                <a href="shop-grid-sidebar.html" className="single-category-one">
                                                    <img src="assets/images/category/10.png" alt="category"/>
                                                    <p>Organic Vegetable</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}     
        </div>

    )
}



export default ImageCarousel

