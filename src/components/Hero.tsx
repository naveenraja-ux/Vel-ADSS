import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] lg:h-screen w-full overflow-hidden flex items-center pt-28 pb-16">
      <div className="section-padding w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content - Centered horizontally in its space, text left-aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 order-2 lg:order-1 flex flex-col items-start text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="w-full"
          >
            <span className="text-primary uppercase tracking-[0.6em] text-[9px] font-bold mb-6 block">
              Luxury Interior Design
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-8">
              Designing Spaces <br />
              That <span className="text-primary">Define Luxury</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-base lg:text-lg text-muted-foreground mb-12 max-w-lg leading-relaxed"
          >
            Modern interiors crafted with precision, elegance, and functionality. 
            We transform your vision into a masterpiece of living art.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-start gap-5 md:gap-8"
          >
            <Button className="btn-primary-modern">
              Get Free Consultation
            </Button>
            <Button variant="outline" className="btn-outline-modern">
              View Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image Part - Single High-Impact Card UI */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative order-1 lg:order-2 mb-8 lg:mb-0 w-full"
        >
          <div className="relative z-10 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] max-w-[550px] mx-auto overflow-hidden glass-card luxury-glow border border-primary/20 group">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury Interior Design"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 opacity-60" />
          </div>

          {/* Decorative Frame Elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/30 z-0 hidden md:block" />
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-primary/30 z-0 hidden md:block" />
          
          {/* Floating Accent Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-primary flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll</span>
        <ChevronDown size={16} />
      </motion.div>
    </section>
  );
}
