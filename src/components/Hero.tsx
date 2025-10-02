import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fonbotImage from "@/assets/fonbot-assistant.png";
import MiBoton from '@/components/ui/miBoton';


const Hero = () => {
  const FonBot = () => {window.location.href ="https://teams.microsoft.com/l/app/f6405520-7907-4464-8f6e-9889e2fb7d8f?templateInstanceId=b6fb3609-d5f4-45b4-bf17-0de909487f9a&environment=462a7200-93ba-e5b0-855b-2b7e6450b211"}
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-accent opacity-10" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-secondary/10 rounded-full">
              <span className="text-secondary font-semibold">Asistente Virtual Comfama</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Descubre los Beneficios de los{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Fondos de Ley
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              FONBOT te ayuda a entender y aprovechar al máximo todos los lineamientos de los fondos para que puedas potenciar al máximo el desarrollo de los programas que buscan impactar la movilidad social.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="group">
                Explorar Fondos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* <Button onClick={FonBot} size="lg" variant="outline" >
                Hablar con FONBOT
              </Button> */}
              <MiBoton/>
            </div>
          </div>
          
          {/* Right Content - FONBOT Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-full blur-3xl" />
              <img 
                src={fonbotImage} 
                alt="FONBOT - Asistente Virtual de Fondos Comfama"
                className="relative z-10 w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
