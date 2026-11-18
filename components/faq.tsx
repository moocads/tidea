"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type KeyboardEvent } from "react";
import {useTranslations} from "next-intl";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

export function Faq() {
  const t = useTranslations("FAQ");
  const faqCategories = t.raw("categories") as FaqCategory[];
  const [activeCategoryId, setActiveCategoryId] = useState(faqCategories[0].id);
  const [openQuestionId, setOpenQuestionId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const activeCategory =
    faqCategories.find((category) => category.id === activeCategoryId) ?? faqCategories[0];
  const accordionTransition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const };

  function selectCategory(categoryId: string) {
    setActiveCategoryId(categoryId);
    setOpenQuestionId(null);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const lastIndex = faqCategories.length - 1;
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight") nextIndex = index === lastIndex ? 0 : index + 1;
    if (event.key === "ArrowLeft") nextIndex = index === 0 ? lastIndex : index - 1;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = lastIndex;
    if (nextIndex === null) return;

    event.preventDefault();
    const nextCategory = faqCategories[nextIndex];
    selectCategory(nextCategory.id);
    requestAnimationFrame(() => document.getElementById(`faq-tab-${nextCategory.id}`)?.focus());
  }

  return (
    <div>
      <div aria-label={t("categoriesLabel")} className="overflow-x-auto" role="tablist">
        <div className="flex min-w-max gap-3 pb-2">
          {faqCategories.map((category, index) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                aria-controls={`faq-panel-${category.id}`}
                aria-selected={isActive}
                className={`rounded-full border px-6 py-3 text-sm font-semibold leading-6 transition-all duration-300 ease-out hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600 md:text-base ${
                  isActive
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-black/10 bg-white text-black/70 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                }`}
                id={`faq-tab-${category.id}`}
                key={category.id}
                onClick={() => selectCategory(category.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                role="tab"
                tabIndex={isActive ? 0 : -1}
                type="button"
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-labelledby={`faq-tab-${activeCategory.id}`}
        className="mt-8 rounded-[28px] bg-white px-6 md:px-8"
        id={`faq-panel-${activeCategory.id}`}
        role="tabpanel"
      >
        {activeCategory.items.map((item, index) => {
          const questionId = `${activeCategory.id}-${index}`;
          const isOpen = openQuestionId === questionId;

          return (
            <div className="border-b border-black/10 last:border-0" key={item.question}>
              <button
                aria-controls={`faq-answer-${questionId}`}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-base font-semibold leading-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
                id={`faq-question-${questionId}`}
                onClick={() => setOpenQuestionId(isOpen ? null : questionId)}
                type="button"
              >
                <span>{item.question}</span>
                <span className="grid size-6 shrink-0 place-items-center rounded-full border border-black/50">
                  {isOpen ? <Minus aria-hidden size={15} /> : <Plus aria-hidden size={15} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    aria-labelledby={`faq-question-${questionId}`}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    id={`faq-answer-${questionId}`}
                    initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                    role="region"
                    transition={accordionTransition}
                  >
                    <p className="body-copy pb-6 text-black/70">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
