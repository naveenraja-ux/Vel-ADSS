import { motion } from "motion/react";
import { Hammer, Layout, Columns, Layers, ArrowUpRight } from "lucide-react";

const services = [
  { title: "CNC Design Work", icon: Hammer },
  { title: "Wooden Wall Paneling", icon: Layout },
  { title: "Partition Work", icon: Columns },
  { title: "Wooden False Ceiling", icon: Layers },
  { title: "Staircase Woodwork", icon: ArrowUpRight },
];

export default function CustomWoodwork() {
  return (
    <section className="py-24 section-padding bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Craftsmanship</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom <span className="text-primary">Woodwork</span> Services
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Our master craftsmen specialize in bespoke woodwork that adds character and warmth to any space. 
            From intricate CNC designs to structural paneling, we handle every detail with precision.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={s.title} className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  <s.icon size={18} />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">{s.title}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square"
        >
          <img
            src="https://past-beige-w3gcjd8k7w.edgeone.app/Mid-century%20modern%20with%20wooden%20accents.png"
            alt="Custom Woodwork"
            className="w-full h-full object-cover luxury-glow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -left-8 glass-card p-8 hidden md:block border border-primary/20">
            <p className="text-3xl font-bold text-primary mb-1">15+</p>
            <p className="text-xs uppercase tracking-widest font-semibold">Years of Mastery</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
