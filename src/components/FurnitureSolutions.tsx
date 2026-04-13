import { motion } from "motion/react";
import { Sofa, Table, Briefcase, BookOpen, Box } from "lucide-react";

const solutions = [
  { 
    title: "Sofa Frame Work", 
    icon: Sofa, 
    desc: "Durable and ergonomic structural frames.",
    image: "https://thoughtless-orange-pouzdxdh4l.edgeone.app/Wooden%20sofa%20frame%20under%20construction.png"
  },
  { 
    title: "Dining Table & Chairs", 
    icon: Table, 
    desc: "Bespoke dining sets for family gatherings.",
    image: "https://mechanical-coral-ht3g808f6q.edgeone.app/925872e1-c8ad-4284-8493-27185d7ebfa0.png"
  },
  { 
    title: "Study & Office Table", 
    icon: Briefcase, 
    desc: "Productive workspaces for home and office.",
    image: "https://above-chocolate-hsta7eglrh.edgeone.app/Executive%20office%20with%20sleek%20desk%20setup.png"
  },
  { 
    title: "Bookshelves", 
    icon: BookOpen, 
    desc: "Elegant storage for your literary collection.",
    image: "https://homeless-maroon-fgoznvrjjd.edgeone.app/Mid-century%20modern%20walnut%20bookshelf.png"
  },
  { 
    title: "Shoe Racks", 
    icon: Box, 
    desc: "Organized and stylish entryway solutions.",
    image: "https://exceptional-indigo-bpmn21rsr9.edgeone.app/Organized%20elegance%20in%20a%20shoe%20cabinet.png"
  },
];

export default function FurnitureSolutions() {
  return (
    <section className="py-24 section-padding bg-background overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 sticky top-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-4 block">Manufacturing</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Furniture <span className="text-primary">Design</span> & Manufacturing
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Custom-built furniture that combines ergonomic comfort with high-end aesthetics, tailored to your space. 
              We use premium wood and fabrics to create pieces that last a lifetime.
            </p>
            <div className="w-20 h-1 bg-primary/30" />
          </motion.div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card relative overflow-hidden h-80">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-all duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 lg:transform lg:translate-y-4 lg:group-hover:translate-y-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
