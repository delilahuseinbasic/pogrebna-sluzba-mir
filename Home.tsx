import { Link } from "react-router";
import { Clock, Shield, Phone, ArrowRight, Flame, HeartHandshake, Building, Heart, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Logo from "./Logo";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dark Modern */}
      <section className="relative bg-black text-white py-32 overflow-hidden">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/90 via-black to-neutral-900/90"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8b1f1f 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <Logo className="h-20 w-20 mx-auto" style={{ color: '#cd5c5c' }} />
            </div>

            {/* Main heading */}
            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Pogrebna služba<br/>
              <span className="text-[#cd5c5c]">"Mir"</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Sa poštovanjem i dostojanstvom
            </p>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              U najtežim trenucima tu smo za vas. Pružamo profesionalne pogrebne usluge 
              sa poštovanjem, dostojanstvom i brigom koju zaslužujete.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                asChild 
                size="lg" 
                className="bg-[#8b1f1f] hover:bg-[#6b1717] text-white px-8 py-6 text-lg rounded-full"
              >
                <Link to="/rezervacija" className="flex items-center gap-2">
                  Rezervišite uslugu
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full"
              >
                <Link to="/osmrtnice">Pregled osmrtnica</Link>
              </Button>
            </div>

            {/* Emergency Contact */}
            <div className="inline-flex items-center gap-4 px-8 py-5 bg-gradient-to-r from-[#8b1f1f] to-[#6b1717] rounded-2xl shadow-2xl">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-7 w-7" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-200">Hitna linija - dostupno 24/7</p>
                <p className="text-3xl font-bold">033 123 456</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Clean & Modern */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Zašto odabrati nas?
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#8b1f1f] to-[#cd5c5c] rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Dostupni 24/7",
                description: "Naš tim je dostupan non-stop, svaki dan u godini. Tu smo kada nam najviše trebate."
              },
              {
                icon: HeartHandshake,
                title: "Sa poštovanjem",
                description: "Tretiramo svaku porodicu sa poštovanjem i dostojanstvom koje zaslužuju u teškim trenucima."
              },
              {
                icon: Shield,
                title: "Profesionalnost",
                description: "Iskusni profesionalci koji se brinu o svakom detalju sa pažnjom i stručnošću."
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8b1f1f] to-[#cd5c5c] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services - Dark Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Naše usluge
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#8b1f1f] to-[#cd5c5c] rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Nudimo kompletan spektar pogrebnih usluga prilagođenih vašim potrebama i željama
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Building, title: "Organizacija sahrane", desc: "Kompletna organizacija i koordinacija" },
              { icon: HeartHandshake, title: "Priprema tijela", desc: "Profesionalna priprema i balzamovanje" },
              { icon: MapPin, title: "Transport", desc: "Siguran i dostojanstven prijevoz" },
              { icon: Flame, title: "Memorijali", desc: "Online memorijali i osmrtnice" }
            ].map((service, idx) => (
              <Card key={idx} className="bg-white/5 border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#8b1f1f]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-[#cd5c5c]" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-400">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg" 
              className="bg-[#8b1f1f] hover:bg-[#6b1717] text-white px-8 py-6 text-lg rounded-full"
            >
              <Link to="/usluge" className="flex items-center gap-2">
                Pogledajte sve pakete
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Psychological Support - Image + Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b1f1f]/10 rounded-full mb-6">
                  <Heart className="h-5 w-5 text-[#8b1f1f]" />
                  <span className="text-sm font-semibold text-[#8b1f1f]">PODRŠKA</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Psihološka podrška
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Niste sami u ovim teškim trenucima. Naš tim psihologa specijalizovanih za 
                  žalovanje tu je da vam pruži podršku, razumijevanje i pomoć.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Individualne konsultacije sa iskusnim psiholozima",
                    "Online i lični susreti prilagođeni potrebama",
                    "Podrška u procesu žalovanja",
                    "Grupna i porodična terapija"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-[#8b1f1f] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#8b1f1f] hover:bg-[#6b1717] text-white px-8 py-6 text-lg rounded-full"
                >
                  <Link to="/psiholoska-podrska" className="flex items-center gap-2">
                    Saznajte više
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                    alt="Psihološka podrška"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8b1f1f] rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #8b1f1f 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <Flame className="h-16 w-16 mx-auto mb-8 text-[#cd5c5c]" />
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trebate hitnu pomoć?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Naša hitna linija je dostupna 24 sata dnevno, 7 dana u sedmici. 
            Nazovite nas u bilo koje vrijeme.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#8b1f1f] hover:bg-[#6b1717] text-white px-8 py-6 text-lg rounded-full" 
              asChild
            >
              <a href="tel:033123456" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Nazovi: 033 123 456
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full"
              asChild
            >
              <Link to="/kontakt">Pošaljite upit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
