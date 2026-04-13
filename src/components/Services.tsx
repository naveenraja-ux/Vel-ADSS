import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Modular Kitchen",
    description: "Ergonomic designs meeting aesthetic excellence for the heart of your home.",
    image: "https://soviet-crimson-bsqgoux8ax.edgeone.app/Modern%20kitchen%20with%20black%20countertops.png",
  },
  {
    title: "Wardrobe",
    description: "Custom storage solutions that blend seamlessly with your bedroom's character.",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Tv Unit",
    description: "Sleek and functional entertainment centers designed for modern living rooms.",
    image: "https://diverse-amethyst-klxl61y0bz.edgeone.app/Modern%20living%20room%20with%20sleek%20design.png",
  },
  {
    title: "Loft Covering",
    description: "Maximize your vertical space with elegant and practical loft storage solutions.",
    image: "https://moderate-sapphire-nd32y1rscz.edgeone.app/Wooden%20cabinetry%20with%20etched%20glass%20doors.png",
  },
  {
    title: "Pooja Unit",
    description: "Serene and beautifully crafted sacred spaces for your spiritual needs.",
    image: "https://interested-azure-pwfblwejgm.edgeone.app/Carved%20peacock%20cabinet%20in%20dark%20wood.png",
  },
  {
    title: "Bed Cot & Storage Bed",
    description: "Comfortable and space-saving sleeping solutions with integrated storage.",
    image: "https://rural-teal-rvapr7ge0e.edgeone.app/Wooden%20bed%20with%20geometric%20accents.png",
  },
  {
    title: "Dressing Table",
    description: "Elegant vanity units that combine style with functional organization.",
    image: "https://subjective-orange-oybreh5tch.edgeone.app/Elegant%20wooden%20wardrobe%20with%20frosted%20glass.png",
  },
  {
    title: "Study & Office Table",
    description: "Productive workspaces designed for focus, comfort, and efficiency.",
    image: "https://daily-emerald-ei5tyyc9of.edgeone.app/Modern%20office%20desk%20on%20wooden%20floor.png",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 section-padding bg-background">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Our <span className="text-primary">Expertise</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          We offer a wide range of interior design services tailored to your lifestyle and preferences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="glass-card luxury-glow relative h-full flex flex-col overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
              {/* Image Container with innovative clip-path or border */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 text-background text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                  Premium
                </div>
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Innovative Border/Line */}
                <div className="w-12 h-[2px] bg-primary/30 group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-all duration-500 pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
