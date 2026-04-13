import { motion } from "motion/react";
import { Wrench, Lock, Sparkles, RefreshCw } from "lucide-react";

const services = [
  { title: "Old Furniture Repair", icon: Wrench, desc: "Restoring your cherished pieces to their former glory." },
  { title: "Door & Lock Repair", icon: Lock, desc: "Ensuring security and smooth operation of all entryways." },
  { title: "Polish / Re-polish Work", icon: Sparkles, desc: "Revitalizing wood surfaces with premium finishes." },
  { title: "Hinges & Channel Replacement", icon: RefreshCw, desc: "Smooth and silent operation for all your cabinetry." },
];

export default function Maintenance() {
  return (
    <section className="py-24 section-padding bg-[#050505]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Repair & <span className="text-primary">Maintenance</span> Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground"
        >
          We don't just build; we care. Our maintenance services ensure your luxury interiors stay pristine for years to come.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-6 p-8 glass-card border border-primary/10 hover:border-primary/40 transition-all duration-300 group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-none bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500">
              <s.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
