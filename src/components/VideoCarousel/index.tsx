import { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './index.scss'
import RadioSelect from "../RadioGroup";
import { ArrowButton } from "../../theme/components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    width: 40%;
    margin-left: 55%;

    h2 {
        color: white;
        text-align: left;
        font-size: 2.5rem;
        line-height: 3rem;
        font-weight: 900;
    }
`

export const VideoCarousel = () => {
    const [duration, setDuration] = useState(0);
    const navigate = useNavigate()

    const onPlayEnd = () => {
        const swiper = (document.getElementsByClassName('js-swiper-videos')[0] as any).swiper
        swiper.slideNext()
    }

    const moveToNextPage = () => {
        navigate('/encourage')
    }

    useEffect(() => {
        const brain3DApplication = (window as any).brain3DApplication

        brain3DApplication.question1Sum( 90 )
        brain3DApplication.question2Sum( 30 )
        brain3DApplication.question3Sum( 0 )
        brain3DApplication.question4Sum( 1 )
        brain3DApplication.question5Sum( 0 )

        if(duration == 10) moveToNextPage();
        setTimeout(() => setDuration(10), 7000);

    })


    return (
        <Wrapper className={`fixed top-0 left-0 z-50 w-screen h-screen flex flex-col justify-center items-center p-6`}>
            {/* <div className="l-container | relative text-center">
                <Swiper
                    centeredSlides
                    slidesPerView={'auto'}
                    effect={'slide'}
                    grabCursor={false}
                    draggable={false}
                    loop={false}
                    loopedSlides={1}
                    initialSlide={1}
                    navigation={false}
                    pagination={false}
                    className="js-swiper-videos swiper"
                    onTransitionEnd={(swiper: any) => {
                        var activeIndex = swiper.activeIndex;
                        var activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
                        var activeSlideVideo = activeSlide.getElementsByTagName('video')[0];
                        activeSlideVideo.play();
                    }}
                >
                    <SwiperSlide className="swiper-slide">
                        <video className="swiper-slide__video | object-cover w-full h-full" preload="metadata" muted autoPlay
                            poster="/assets/posters/video_poster_tpb_cake.jpg" 
                            onEnded={onPlayEnd}
                        >
                            <source src="/assets/videos/webm/video_tpb_choc_cake.webm" type="video/webm" />
                            <source src="/assets/videos/mp4/video_tpb_choc_cake.mp4" type="video/mp4" />
                        </video>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <video className="swiper-slide__video | object-cover w-full h-full" preload="metadata" muted
                            poster="/assets/posters/video_poster_tpb_cake.jpg"
                            onEnded={onPlayEnd}
                        >
                            <source src="/assets/videos/webm/video_tpb_choc_cake.webm" type="video/webm" />
                            <source src="/assets/videos/mp4/video_tpb_choc_cake.mp4" type="video/mp4" />
                        </video>
                    </SwiperSlide>

                    <SwiperSlide className="swiper-slide">
                        <video className="swiper-slide__video | object-cover w-full h-full" preload="metadata" muted
                            poster="/assets/posters/video_poster_tpb_cake.jpg"
                            onEnded={moveToNextPage}
                        >
                        <source src="/assets/videos/webm/video_tpb_choc_cake.webm" type="video/webm" />
                        <source src="/assets/videos/mp4/video_tpb_choc_cake.mp4" type="video/mp4" />                  
                        </video>
                    </SwiperSlide>
                </Swiper>

                <h2>
                    The more porn you watch, the more you increase your chances of dampening the rewarding feeling you can get from other pleasures.
                </h2>
            </div> */}
            <div className="container | relative text-start text-white mt-32">
                <div className="flex mb-16">
                    <div className="flex-none">
                        <img className="w-24 h-20 mr-6" src="/assets/images/love.png" alt = "cake" />
                    </div>
                    <div className="flex-inital w-64">
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "50px"}}>
                            INTIMACY
                        </h5>
                        <p>
                            Physical and romantic intimacy with your partner just isn't as exciting
                        </p>
                    </div>
                </div>
                <div className="flex mb-16">
                    <div className="flex-none">
                        <img className="w-24 h-20 mr-6" src="/assets/images/cake.png" alt = "cake" />
                    </div>
                    <div className="flex-inital" style={{width: "200px"}}>
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                        TREATS
                        </h5>
                        <p>
                            Your favourite food doesn't leave you feeling quite as satisfied
                        </p>
                    </div>
                </div>
                <div className="flex mb-16">
                    <div className="flex-none">
                        <img className="w-24 h-20 mr-6" src="/assets/images/sport.png" alt = "cake" />
                    </div>
                    <div className="flex-inital" style={{width: "200px"}}>
                        <h5 className="text-xl pb-3 font-bold" style={{fontSize: "40px"}}>
                            EXERCISE
                        </h5>
                        <p>
                            Rigorous exercise doesn't give you the same level of high that you hope for
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}