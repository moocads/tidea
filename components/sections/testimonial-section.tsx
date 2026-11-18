import { TestimonialSlider } from "@/components/shared/testimonial-slider";

export function TestimonialSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="page-shell section-space">
      <div className="rounded-2xl bg-brand-100 p-6 md:p-12">
        <p className="text-center text-xs font-semibold leading-[1.35] text-brand-600 uppercase">Customer Stories</p>
        <h2 className="mx-auto mt-4 max-w-[20ch] text-balance text-center text-[35px] font-semibold leading-[1.14]" id="testimonials-heading">
          Real Stories from TIDEA Customers
        </h2>
        <TestimonialSlider />
      </div>
    </section>
  );
}
