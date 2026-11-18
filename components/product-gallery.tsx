"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import {useTranslations} from "next-intl";

const visibleThumbnailCount = 5;

export function ProductGallery({ images, model }: { images: string[]; model: string }) {
  const t = useTranslations("ProductUI");
  const [selected, setSelected] = useState(0);
  const [thumbnailStart, setThumbnailStart] = useState(0);
  const hasCarousel = images.length > visibleThumbnailCount;
  const maxThumbnailStart = Math.max(0, images.length - visibleThumbnailCount);
  const visibleImages = images.slice(thumbnailStart, thumbnailStart + visibleThumbnailCount);

  return (
    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#f2f5fa]">
        <Image
          alt={t("productView", {model})}
          className="object-contain p-6 md:p-4"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          src={images[selected]}
        />
      </div>
      <div className="mt-4 flex items-center gap-2">
        {hasCarousel ? (
          <button
            aria-label={t("previousImages")}
            className="grid size-8 shrink-0 place-items-center rounded-full border border-black/15 transition hover:border-[#4f73b1] hover:text-[#4f73b1] disabled:cursor-not-allowed disabled:opacity-30"
            disabled={thumbnailStart === 0}
            onClick={() => setThumbnailStart((start) => Math.max(0, start - 1))}
            type="button"
          >
            <ChevronLeft aria-hidden size={17} />
          </button>
        ) : null}
        <div className={`grid min-w-0 flex-1 gap-2 ${hasCarousel ? "grid-cols-5" : "grid-cols-3"}`}>
          {visibleImages.map((image, visibleIndex) => {
            const imageIndex = thumbnailStart + visibleIndex;
            return (
              <button
                aria-label={t("viewImage", {model, number: imageIndex + 1})}
                aria-pressed={selected === imageIndex}
                className={`relative aspect-square overflow-hidden rounded-xl border bg-[#f5f7fb] transition ${selected === imageIndex ? "border-[#4f73b1]" : "border-transparent hover:border-black/20"}`}
                key={image}
                onClick={() => setSelected(imageIndex)}
                type="button"
              >
                <Image alt="" className="object-contain p-1.5" fill sizes="110px" src={image} />
              </button>
            );
          })}
        </div>
        {hasCarousel ? (
          <button
            aria-label={t("nextImages")}
            className="grid size-8 shrink-0 place-items-center rounded-full border border-black/15 transition hover:border-[#4f73b1] hover:text-[#4f73b1] disabled:cursor-not-allowed disabled:opacity-30"
            disabled={thumbnailStart === maxThumbnailStart}
            onClick={() => setThumbnailStart((start) => Math.min(maxThumbnailStart, start + 1))}
            type="button"
          >
            <ChevronRight aria-hidden size={17} />
          </button>
        ) : null}
      </div>
    </div>
  );
}
