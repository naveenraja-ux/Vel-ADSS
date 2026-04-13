import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 section-padding bg-[#020202] border-t border-primary/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center">
            <img 
              src="https://acute-olive-w8rmhzqnff.edgeone.app/Logo%201%20(2).png" 
              alt="Vel ADSS Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Premium interior design services crafting spaces that define luxury 
            with precision, elegance, and functionality. We transform your 
            vision into a masterpiece of living art.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4">
            {["Home", "Services", "Work", "About", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Services</h4>
          <ul className="space-y-4">
            {["Modular Kitchen", "False Ceiling", "Wardrobe", "Full Interiors", "Consultation"].map((link) => (
              <li key={link}>
                <a
                  href="#services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="text-sm text-muted-foreground">
              <a href="tel:7339231430" className="hover:text-primary transition-colors">7339231430</a>, <a href="tel:8056314349" className="hover:text-primary transition-colors">8056314349</a>
            </li>
            <li className="text-sm text-muted-foreground">
              <a href="mailto:Veladss143@gmail.com" className="hover:text-primary transition-colors">Veladss143@gmail.com</a>
            </li>
            <li className="text-sm text-muted-foreground">
              <a 
                href="https://www.google.com/maps/place/10%C2%B054'46.1%22N+77%C2%B002'44.2%22E/@10.912807,77.045598,1043m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d10.912807!4d77.045598!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Pollachi, Tamil Nadu
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground">
          © {currentYear} Vel ADSS. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
