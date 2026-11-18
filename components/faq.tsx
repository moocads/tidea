"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState, type KeyboardEvent } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  id: string;
  label: string;
  items: FaqItem[];
};

const faqCategories: FaqCategory[] = [
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    items: [
      {
        question: "The vacuum shut off on its own.",
        answer:
          "If the battery indicator flashed five times before it stopped, the overheat protection was triggered. Let it cool for 20 to 30 minutes, check the pipe, floor brush and dust bin for blockages, then switch it on again. If the battery is low, recharge it.",
      },
      {
        question: "Suction feels weak.",
        answer:
          "Empty the dust bin, rinse both filters (they must be completely dry before reinstalling), and check the pipe and floor brush for blockages. For heavier dirt, switch to Boost.",
      },
      {
        question: "It stopped charging partway through.",
        answer:
          "Charging pauses automatically if the vacuum is too warm and resumes once it cools down. Charge it at room temperature, away from heaters and direct sunlight.",
      },
    ],
  },
  {
    id: "cleaning-care",
    label: "Cleaning & Care",
    items: [
      {
        question: "When should I empty the dust bin?",
        answer:
          "Empty it when the dirt reaches the MAX mark. Hold the dust bin over a trash can and press the release button. The lid opens and the contents drop out.",
      },
      {
        question: "How do I clean the filters?",
        answer:
          "Remove the dust bin, slide out the stainless steel filter, then pull the washable filter out of it. Rinse both under cold or lukewarm water and let them air-dry completely (allow at least 24 hours) before putting them back. Never use the vacuum without the filter, and never reinstall a damp filter.",
      },
      {
        question: "Hair is wrapped around the brush roll. How do I clean it?",
        answer:
          "Switch off the vacuum and remove the floor brush. Turn the brush roll release to the open position and pull the brush roll out. Cut away hair with the Deep-Clean Tool's blade or a pair of scissors, then slide the brush roll back in and turn the release to close.",
      },
    ],
  },
  {
    id: "using-your-vacuum",
    label: "Using Your Vacuum",
    items: [
      {
        question: "Eco or Boost: which mode should I use?",
        answer:
          "Eco is for everyday cleaning of hard floors and rugs with light to medium dirt, and gives the longest runtime. Boost gives more suction for heavier dirt, with a shorter runtime. Press the mode button to switch. The vacuum always starts in Eco.",
      },
      {
        question: "What is the Deep-Clean Tool?",
        answer:
          "It's a cleaning brush with a built-in cutter. Use the brush to clear dust from the dust bin, and the rear blade to cut away hair wrapped around the dust bin area and the floor brush.",
      },
      {
        question: "Can the vacuum stand up on its own?",
        answer:
          "No. It has a high center of gravity and can tip over. When you pause, hang it on the wall mount or lay it flat on the floor.",
      },
      {
        question: "How do I install the wall mount?",
        answer:
          "Mark the four holes using the wall mount, drill with a 5 mm bit, insert the wall plugs supplied in the box, then screw the mount in place. On drywall, always use the wall plugs, because screws alone will pull out. Check for electrical wires and pipes before drilling.",
      },
      {
        question: "Can I use it on wet surfaces or to pick up liquids?",
        answer:
          "No. The TC-100 is for dry use only. Liquids can damage the motor and are not covered by the warranty.",
      },
    ],
  },
  {
    id: "charging-battery",
    label: "Charging & Battery",
    items: [
      {
        question: "How long does it take to charge?",
        answer:
          "About 5.5 hours from empty. The battery indicator flashes while charging and stays lit when charging is complete. Before your first use, charge it fully.",
      },
      {
        question: "How do I charge it?",
        answer:
          "Hang the vacuum on the wall mount so the charging plug connects to the socket on the bottom of the vacuum. You can also plug the adapter directly into the charging socket on the vacuum. The battery charges only while it is installed in the vacuum.",
      },
      {
        question: "How long does it run on a full charge?",
        answer:
          "About 45 minutes in Eco mode and about 25 minutes in Boost mode. Actual runtime depends on the mode, floor type and attachment you use.",
      },
      {
        question: "How do I remove the battery?",
        answer:
          "Press and hold the battery release button, then pull the battery out. To reinstall it, push it in until it clicks.",
      },
      {
        question: "How should I store it if I won't use it for a while?",
        answer:
          "Store it charged to about 50–80%, in a dry place out of direct sunlight, and check the charge every few months. Storing it fully discharged for a long time can permanently damage the battery.",
      },
    ],
  },
];

export function Faq() {
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
      <div aria-label="FAQ categories" className="overflow-x-auto" role="tablist">
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
