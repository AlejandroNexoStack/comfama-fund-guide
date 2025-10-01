import { Card } from "@/components/ui/card";
import { GraduationCap, Home, Heart, Sparkles, Users, Gift } from "lucide-react";

const funds = [
  {
    icon: GraduationCap,
    title: "FONIÑEZ",
    description: "Este fondo permite acompañar a madres gestantes niños y adolescentes promoviendo su desarrollo integral.",
    benefits: ["Programas para niños de 0 a 6 años.", "Para apoyar nutrición, salud, protección y educación inicial.", "Jardines y hogares infantiles en zonas rurales","Bono nutricional"],
    color: "text-secondary"
  },
  {
    icon: Home,
    title: "Ley 115",
    description: "Pensado para fortalecer la educación básica y media. Con este sembramos oportunidades para niños, jóvenes y adultos que desean culminar sus estudios.",
    benefits: ["Bibliotecas", "Becas Básica y media", "Educación rural para Antioquia","Inspiración Experiencias"],
    color: "text-accent"
  },
  {
    icon: Heart,
    title: "FOSFEC",
    description: "Apoya a quienes se encuentran en búsqueda de empleo y necesitan fortalecer sus habilidades y competencias. Es un fondo que adicionalmente destina recursos para programas enfocados en el mejoramiento de la productividad de los trabajadores, beneficiarios y MiPymes afiliadas",
    benefits: ["Capacitaciones", "Desarrollo empresarial", "Subsidio al desempleo"],
    color: "text-secondary"
  },
  {
    icon: Sparkles,
    title: "Excedentes del 55%",
    description: "Este Fondo se destina para aumentar los subsidios en los programas de inversión social que como Caja de Compensación debemos desarrollar.",
    benefits: ["Población afiliada en categoría A y B", "Bienestar", "Aumento de subsidios"],
    color: "text-accent"
  }
];

const FundBenefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Fondos Disponibles Para Ti
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce todos los beneficios que Comfama tiene preparados para mejorar tu calidad de vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {funds.map((fund, index) => {
            const Icon = fund.icon;
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card border-border group"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform ${fund.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {fund.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {fund.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-border">
                    {fund.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FundBenefits;
