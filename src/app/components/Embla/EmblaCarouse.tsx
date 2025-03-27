import React, { useEffect, useState, useCallback } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { NextButton, PrevButton, usePrevNextButtons } from "@/app/components/Embla/EmblaCarouselArrowButton";
import { Book } from "@/app/lib/book";  // 'Book' 타입 임포트

type PropType = {
    slides: Book[];  // 'Book' 객체 배열을 slides로 전달
    options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoScroll({ playOnInit: false })]);
    const [isPlaying, setIsPlaying] = useState(false);

    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoScroll = emblaApi?.plugins()?.autoScroll;
            if (!autoScroll) return;
            const resetOrStop =
                autoScroll.options.stopOnInteraction === false ? autoScroll.reset : autoScroll.stop;
            resetOrStop();
            callback();
        },
        [emblaApi]
    );

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
        playOrStop();
    }, [emblaApi]);

    useEffect(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll;
        if (!autoScroll) return;

        setIsPlaying(autoScroll.isPlaying());
        emblaApi
            .on('autoScroll:play', () => setIsPlaying(true))
            .on('autoScroll:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoScroll.isPlaying()));
    }, [emblaApi]);

    return (
        <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((book) => (
                        <div className="embla__slide" key={book.id}>
                            <div className="embla__slide__content">
                                <img src={book.image} alt={book.title} className="book-image" />
                                <h3>{book.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={() => onButtonAutoplayClick(onPrevButtonClick)} disabled={prevBtnDisabled} />
                    <NextButton onClick={() => onButtonAutoplayClick(onNextButtonClick)} disabled={nextBtnDisabled} />
                </div>

                <button className="embla__play" onClick={toggleAutoplay} type="button">
                    {isPlaying ? 'Stop' : 'Start'}
                </button>
            </div>
        </div>
    );
};

export default EmblaCarousel;
