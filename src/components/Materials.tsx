import { motion } from "motion/react";

const materials = [
  { 
    name: "Plywood", 
    description: "High-grade structural strength",
    image: "https://wittering-olive-hae2ejd601.edgeone.app/VEL%20ADSS%20plywood%20in%20warehouse%20setting.png"
  },
  { 
    name: "MDF Board", 
    description: "Smooth finish & versatile",
    image: "https://intact-rose-obisvkd0nh.edgeone.app/Stacked%20MDF%20sheets%20with%20sharp%20edges.png"
  },
  { 
    name: "Laminate", 
    description: "Durable & aesthetic surfaces",
    image: "https://melodic-gold-wqpahc3y4z.edgeone.app/Variety%20of%20wood%20laminate%20planks.png"
  },
  { 
    name: "Veneer", 
    description: "Natural wood elegance",
    image: "https://sorry-ivory-5x5eucqcxu.edgeone.app/Wood%20veneer%20sample%20arrangement%20close-up.png"
  },
  { 
    name: "PVC Board", 
    description: "Water-resistant solutions",
    image: "https://alive-coral-23zfsdcbf5.edgeone.app/Stack%20of%20pristine%20white%20foam%20boards.png"
  },
];

export default function Materials() {
  return (
    <section className="py-24 section-padding bg-[#050505]">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Premium <span className="text-primary">Materials</span> We Use
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          We source only the finest materials to ensure longevity, durability, and a flawless finish for every project.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {materials.map((material, index) => (
          <motion.div
            key={material.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="relative aspect-[3/4] overflow-hidden luxury-glow border border-primary/10 group-hover:border-primary/40 transition-all duration-500">
              <img
                src={material.image}
                alt={material.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-lg font-bold mb-2 text-primary">
                  {material.name}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {material.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
