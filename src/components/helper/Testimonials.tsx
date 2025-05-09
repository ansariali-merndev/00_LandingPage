import React from "react";

type Testimonial = {
  name: string;
  role: string;
  message: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Ali Ansari",
    role: "Full Stack Developer",
    message:
      "Absolutely love the sound quality! The clarity and comfort are on another level.",
  },
  {
    name: "Sara Khan",
    role: "Music Producer",
    message:
      "These headphones changed how I experience audio. Perfect for studio work!",
  },
  {
    name: "Rahul Verma",
    role: "Tech Reviewer",
    message:
      "The best audio experience I ve had so far. Lightweight and powerful.",
  },
];

const TestimonialSection: React.FC = () => {
  return (
    <section id="testimonials" className=" py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-lg p-6 transition hover:scale-105 duration-300"
            >
              <p className="italic mb-6">&quot;{testimonial.message}&quot;</p>
              <h4 className="font-semibold text-lg">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
