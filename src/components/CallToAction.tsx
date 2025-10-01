import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary via-secondary to-accent p-12 md:p-16">
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              ¿Listo para Aplicar a tus Fondos?
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              FONBOT está aquí para ayudarte en cada paso del proceso. Comienza hoy mismo a disfrutar de tus beneficios.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 gap-2">
                <MessageCircle className="w-5 h-5" />
                Chatear con FONBOT
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 gap-2">
                <Phone className="w-5 h-5" />
                Contactar Asesor
              </Button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
