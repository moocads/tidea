"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Star } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/button";
import {useTranslations} from "next-intl";

const AUTO_ROTATE_DELAY = 6500;

type Testimonial = {
  quote: string;
  name?: string;
  location?: string;
  attribution?: string;
  disclosure?: string;
};

export function TestimonialSlider() {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("items") as Testimonial[];
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTemporarilyPaused, setIsTemporarilyPaused] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !isAutoPlaying || isTemporarilyPaused) return;

    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, AUTO_ROTATE_DELAY);

    return () => window.clearInterval(interval);
  }, [isAutoPlaying, isTemporarilyPaused, prefersReducedMotion, testimonials.length]);

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const showSlide = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const testimonial = testimonials[activeIndex];

  return (
    <div
      aria-label={t("carousel")}
      aria-roledescription="carousel"
      className="mt-8 rounded-2xl bg-white p-6 shadow-sm md:p-12"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setIsTemporarilyPaused(false);
        }
      }}
      onFocusCapture={() => setIsTemporarilyPaused(true)}
      onMouseEnter={() => setIsTemporarilyPaused(true)}
      onMouseLeave={() => setIsTemporarilyPaused(false)}
      role="region"
    >
      <div aria-live="polite" className="overflow-hidden">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.article
            animate={{ opacity: 1, x: 0 }}
            className="text-center"
            custom={direction}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * -24 }}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, x: direction * 24 }}
            key={testimonial.quote}
            transition={{ duration: prefersReducedMotion ? 0.01 : 0.42, ease: [0.22, 1, 0.36, 1] }}
          >
            <div aria-label={t("stars")} className="flex justify-center gap-2" role="img">
              {Array.from({ length: 5 }, (_, index) => (
                <Star aria-hidden="true" className="size-5 fill-amber-400 text-amber-400" key={index} strokeWidth={1.8} />
              ))}
            </div>

            <blockquote className="mx-auto mt-6 max-w-4xl text-balance text-lg leading-8 text-black/85 md:text-2xl md:leading-8">
              “{testimonial.quote}”
            </blockquote>

            <footer className="mt-8">
              {testimonial.name ? <p className="font-semibold text-black">{testimonial.name}</p> : null}
              <p className="mt-1 text-sm text-black/55">{testimonial.attribution ?? testimonial.location}</p>
              {testimonial.disclosure ? <p className="mt-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800">{testimonial.disclosure}</p> : null}
            </footer>
          </motion.article>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Button
          aria-label={t("previous")}
          className="size-12 rounded-full border-brand-200 text-brand-700 hover:bg-brand-50"
          onClick={showPrevious}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </Button>

        <div aria-label={t("choose")} className="flex items-center" role="group">
          {testimonials.map((item, index) => (
            <button
              aria-current={index === activeIndex ? "true" : undefined}
              aria-label={item.name ? t("showFrom", {number: index + 1, name: item.name}) : t("show", {number: index + 1})}
              className="flex size-10 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              key={item.quote}
              onClick={() => showSlide(index)}
              type="button"
            >
              <span
                aria-hidden="true"
                className={`size-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-brand-600" : "bg-brand-200"
                }`}
              />
            </button>
          ))}
        </div>

        <Button
          aria-label={t("next")}
          className="size-12 rounded-full border-brand-200 text-brand-700 hover:bg-brand-50"
          onClick={showNext}
          size="icon"
          type="button"
          variant="outline"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </Button>

        {!prefersReducedMotion && (
          <Button
            aria-label={isAutoPlaying ? t("pause") : t("play")}
            className="size-12 rounded-full border-brand-200 text-brand-700 hover:bg-brand-50"
            onClick={() => setIsAutoPlaying((current) => !current)}
            size="icon"
            type="button"
            variant="outline"
          >
            {isAutoPlaying ? <Pause aria-hidden="true" className="size-4" /> : <Play aria-hidden="true" className="size-4" />}
          </Button>
        )}
      </div>
    </div>
  );
}
