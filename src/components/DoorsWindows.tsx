import { motion, AnimatePresence } from "motion/react";
import { DoorOpen, Square, Maximize, Wind } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  { title: "Wooden Door Making & Installation", icon: DoorOpen },
  { title: "Door Frame Work", icon: Square },
  { title: "Window Shutter Work", icon: Maximize },
  { title: "Ventilator Work", icon: Wind },
];

const images = [
  "https://images.unsplash.com/photo-1506377247377-2a5b3b0ca7df?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=1000&auto=format&fit=crop",
  "https://coherent-gray-rsjypgchiq.edgeone.app/Elegant%20mahogany%20Art%20Deco%20door%20set.png",
  "https://marine-azure-oirglxiwet.edgeone.app/Variety%20of%20doors%20and%20windows.png"
];

export default function DoorsWindows() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 section-padding bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1 relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] overflow-hidden luxury-glow border border-primary/10 bg-muted/20"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt="Doors and Windows"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </AnimatePresence>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
          
          {/* Progress Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 transition-all duration-500 rounded-full ${i === currentImage ? 'w-8 bg-primary' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <span className="text-primary uppercase tracking-widest text-xs font-bold mb-4 block">Structural</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Doors & <span className="text-primary">Windows</span> Solutions
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            We provide robust and aesthetically pleasing solutions for your home's entryways and ventilation points. 
            Our woodwork ensures security without compromising on the luxury feel of your interiors.
          </p>
          <div className="space-y-4">
            {services.map((s, i) => (
              <div key={s.title} className="flex items-center gap-6 p-4 glass-card border border-primary/5 hover:border-primary/30 transition-all duration-300 group">
                <div className="text-primary group-hover:scale-110 transition-transform">
                  <s.icon size={24} />
                </div>
                <span className="font-semibold text-sm tracking-wide uppercase">{s.title}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
