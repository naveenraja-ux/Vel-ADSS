import { motion } from "motion/react";
import { MessageSquare, PenTool, Hammer, PackageCheck } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "We discuss your vision, requirements, and budget to establish a clear direction.",
    icon: MessageSquare,
  },
  {
    title: "Design Planning",
    description: "Our experts create detailed 3D renders and material palettes for your approval.",
    icon: PenTool,
  },
  {
    title: "Execution",
    description: "Skilled craftsmen bring the designs to life with meticulous attention to detail.",
    icon: Hammer,
  },
  {
    title: "Final Delivery",
    description: "We conduct a thorough quality check and hand over your dream space.",
    icon: PackageCheck,
  },
];

export default function Process() {
  return (
    <section className="py-24 section-padding bg-background relative overflow-hidden">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-primary">Process</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          A seamless journey from concept to completion, ensuring transparency and quality at every step.
        </motion.p>
      </div>

      <div className="relative">
        {/* Connector Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 hidden lg:block -translate-y-1/2" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-card border border-primary/20 flex items-center justify-center mb-6 luxury-glow group-hover:border-primary transition-colors duration-500 relative bg-background">
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-background text-[10px] font-bold flex items-center justify-center">
                  0{index + 1}
                </span>
                <step.icon className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
