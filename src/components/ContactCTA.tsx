import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight max-w-xs">
            Ready to <span className="text-primary">Transform</span> <br /> Your Space?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-lg">
            Let's build your dream interior with Vel ADSS. Our team is ready to bring your vision to life.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-2">Call or WhatsApp Us</p>
                <div className="space-y-4 mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex-grow">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Mani Kannan</p>
                      <p className="text-xl font-bold">7339231430</p>
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href="tel:7339231430" 
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <Phone size={16} /> Call
                      </a>
                      <a 
                        href="https://wa.me/917339231430" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <MessageCircle size={16} /> WhatsApp
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 glass-card border border-primary/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex-grow">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Abilash</p>
                      <p className="text-xl font-bold">8056314349</p>
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href="tel:8056314349" 
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-background rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <Phone size={16} /> Call
                      </a>
                      <a 
                        href="https://wa.me/918056314349" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full text-sm font-bold hover:scale-105 transition-transform"
                      >
                        <MessageCircle size={16} /> WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Email</p>
                <a href="mailto:Veladss143@gmail.com" className="text-lg font-semibold hover:text-primary transition-colors">
                  Veladss143@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-1">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Location</p>
                <a 
                  href="https://www.google.com/maps/place/10%C2%B054'46.1%22N+77%C2%B002'44.2%22E/@10.912807,77.045598,1043m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d10.912807!4d77.045598!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-primary transition-colors"
                >
                  Pollachi, Tamil Nadu
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card p-4 md:p-6 luxury-glow h-[400px] md:h-[500px] overflow-hidden"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.47!2d77.045598!3d10.912807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU0JzQ2LjEiTiA3N8KwMDInNDQuMiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-700"
          />
        </motion.div>
      </div>
    </section>
  );
}
