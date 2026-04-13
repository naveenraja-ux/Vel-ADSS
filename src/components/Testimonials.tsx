import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    quote: "Vel ADSS transformed our outdated kitchen into a modern culinary haven. Their attention to detail is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CEO, Tech StartUp",
    quote: "The office interior they designed perfectly captures our brand's innovative spirit. Professional and creative team.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Interior Enthusiast",
    quote: "From the first consultation to the final delivery, the experience was seamless. They truly define luxury.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 section-padding bg-[#050505]">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Client <span className="text-primary">Stories</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Hear from our clients who have experienced the Vel ADSS touch of luxury.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 relative luxury-glow-hover transition-all duration-300"
          >
            <Quote className="text-primary/20 absolute top-6 right-8" size={40} />
            <div className="flex gap-1 mb-4">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <p className="text-muted-foreground italic mb-6 relative z-10">
              "{t.quote}"
            </p>
            <div>
              <h4 className="font-bold text-white">{t.name}</h4>
              <span className="text-xs text-primary uppercase tracking-widest font-medium">
                {t.role}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
