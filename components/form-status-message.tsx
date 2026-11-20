"use client";

import {Check} from "lucide-react";
import {motion, useReducedMotion} from "motion/react";
import {SUCCESS_CHECK_TRANSITION, SUCCESS_MESSAGE_TRANSITION} from "@/lib/motion";

export type FormStatus = {type: "error" | "success"; text: string};

export function FormStatusMessage({message, successTitle}: {message: FormStatus; successTitle: string}) {
  const reduceMotion = useReducedMotion();

  if (message.type === "error") {
    return <p className="mt-4 text-sm text-red-700" role="alert">{message.text}</p>;
  }

  return (
    <motion.div
      animate={{opacity: 1, y: 0}}
      aria-live="polite"
      className="mt-4 flex items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-950"
      initial={reduceMotion ? false : {opacity: 0, y: 8}}
      role="status"
      transition={SUCCESS_MESSAGE_TRANSITION}
    >
      <motion.span
        animate={{rotate: 0, scale: 1}}
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"
        initial={reduceMotion ? false : {rotate: -18, scale: 0}}
        transition={SUCCESS_CHECK_TRANSITION}
      >
        <Check aria-hidden strokeWidth={3} />
      </motion.span>
      <span>
        <strong className="block text-sm font-semibold">{successTitle}</strong>
        <span className="mt-1 block text-sm leading-6">{message.text}</span>
      </span>
    </motion.div>
  );
}
