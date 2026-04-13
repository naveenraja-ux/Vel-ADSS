import { motion } from "motion/react";

const projects = [
  {
    title: "Modern Minimalist Living",
    category: "Living Room",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Royal Gold Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Ethereal Bedroom",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Contemporary Office",
    category: "Office",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Luxury Dining Space",
    category: "Dining",
    image: "https://mechanical-coral-ht3g808f6q.edgeone.app/925872e1-c8ad-4284-8493-27185d7ebfa0.png",
  },
  {
    title: "Zen Bathroom",
    category: "Bathroom",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 section-padding bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-primary">Masterpieces</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xl"
          >
            A curated collection of our most prestigious projects, showcasing our commitment to excellence.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          {["All", "Kitchen", "Living", "Ceiling"].map((cat) => (
            <button
              key={cat}
              className="text-xs uppercase tracking-widest font-semibold hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-[4/5] group overflow-hidden cursor-pointer"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-background/80 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center">
              <span className="text-primary text-xs uppercase tracking-widest mb-2 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-4 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                {project.title}
              </h3>
              <button className="text-sm font-semibold border-b border-primary text-primary lg:transform lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 delay-150">
                View Project
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
