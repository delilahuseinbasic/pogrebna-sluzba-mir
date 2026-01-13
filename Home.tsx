import { Link } from "react-router";
import { Clock, Shield, Phone, ArrowRight, Flame, HeartHandshake, Building, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Logo from "./Logo";
import ProductGallery from "./ProductGallery";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white py-24 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-64 h-64 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute bottom-20 right-1/4 w-48 h-48 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Logo className="h-24 w-24 mx-auto mb-8" style={{ color: '#8b1f1f' }} />
            
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #8b1f1f)' }}></div>
                <Flame className="h-6 w-6" style={{ color: '#8b1f1f' }} />
                <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #8b1f1f)' }}></div>
              </div>
            </div>

            <h1 className="mb-6 text-5xl">Pogrebna sluzba "Mir"</h1>
            <p className="text-2xl text-neutral-300 mb-4">
              Sa postovanjem i dostojanstvom
            </p>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              U najtezim trenucima tu smo za vas. Pruzamo profesionalne pogrebne usluge sa
              postovanjem, dostojanstvom i brigom koju zasluzujete.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-10">
              <Button asChild size="lg" style={{ backgroundColor: '#6b1717' }} className="hover:opacity-90 text-white">
                <Link to="/rezervacija">
                  Rezervisite uslugu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }} className="hover:opacity-90">
                <Link to="/osmrtnice">Pregled osmrtnica</Link>
              </Button>
            </div>

            <div className="inline-flex items-center gap-4 p-6 rounded-xl shadow-2xl" style={{ background: 'linear-gradient(to right, #6b1717, #4a0e0e)' }}>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone className="h-6 w-6" />
              </div>
              <div className="text-left">
                <p className="text-sm" style={{ color: '#fbe8e8' }}>Hitna linija - dostupno 24/7</p>
                <p className="text-2xl">033 123 456</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 70C120 60 240 40 360 33.3C480 26.7 600 33.3 720 40C840 46.7 960 53.3 1080 50C1200 46.7 1320 33.3 1380 26.7L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#FAFAF9"/>
          </svg>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Zasto odabrati nas?</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #8b1f1f, #6b1717)' }}></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-xl transition-all hover:scale-105" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3" style={{ color: '#4a0e0e' }}>Dostupni 24/7</h3>
              <p className="text-neutral-600">
                Nas tim je dostupan non-stop, svaki dan u godini. Tu smo kada nam najvise
                trebate.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all hover:scale-105" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                <HeartHandshake className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3" style={{ color: '#4a0e0e' }}>Sa postovanjem</h3>
              <p className="text-neutral-600">
                Tretiramo svaku porodicu sa postovanjem i dostojanstvom koje zasluzuju u
                teskim trenucima.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all hover:scale-105" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
            <CardContent className="pt-8 pb-8 text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="mb-3" style={{ color: '#4a0e0e' }}>Profesionalnost</h3>
              <p className="text-neutral-600">
                Iskusni profesionalci koji se brinu o svakom detalju sa paznjom i strucnoscu.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-neutral-100 to-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Nase usluge</h2>
            <div className="w-24 h-1 mx-auto mb-4" style={{ background: 'linear-gradient(to right, #8b1f1f, #6b1717)' }}></div>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Nudimo kompletan spektar pogrebnih usluga prilagodenih vasim potrebama i zeljama
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 transition-all" style={{ borderColor: 'rgba(139, 31, 31, 0.2)' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fbe8e8' }}>
                  <Building className="h-8 w-8" style={{ color: '#6b1717' }} />
                </div>
                <h3 className="mb-2 text-lg" style={{ color: '#4a0e0e' }}>Organizacija sahrane</h3>
                <p className="text-sm text-neutral-600">
                  Kompletna organizacija i koordinacija svih aspekata sahrane
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all" style={{ borderColor: 'rgba(139, 31, 31, 0.2)' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fbe8e8' }}>
                  <HeartHandshake className="h-8 w-8" style={{ color: '#6b1717' }} />
                </div>
                <h3 className="mb-2 text-lg" style={{ color: '#4a0e0e' }}>Priprema tijela</h3>
                <p className="text-sm text-neutral-600">
                  Profesionalna priprema i balzamovanje prema najvisim standardima
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all" style={{ borderColor: 'rgba(139, 31, 31, 0.2)' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fbe8e8' }}>
                  <ArrowRight className="h-8 w-8" style={{ color: '#6b1717' }} />
                </div>
                <h3 className="mb-2 text-lg" style={{ color: '#4a0e0e' }}>Transport</h3>
                <p className="text-sm text-neutral-600">
                  Siguran i dostojanstven prijevoz na lokaciju sahrane
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all" style={{ borderColor: 'rgba(139, 31, 31, 0.2)' }}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fbe8e8' }}>
                  <Flame className="h-8 w-8" style={{ color: '#6b1717' }} />
                </div>
                <h3 className="mb-2 text-lg" style={{ color: '#4a0e0e' }}>Memorijali</h3>
                <p className="text-sm text-neutral-600">
                  Kreiranje online memorijala i osmrtnica za vase najmilije
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" style={{ backgroundColor: '#6b1717' }} className="hover:opacity-90 text-white">
              <Link to="/usluge">
                Pogledajte sve pakete usluga
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <ProductGallery />

      {/* Psychological Support Section */}
      <section className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-2 hover:shadow-2xl transition-all overflow-hidden" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left side - Content */}
                <CardContent className="p-10 flex flex-col justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Psihološka podrška</h2>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    Niste sami u ovim teškim trenucima. Naš tim psihologa specijalizovanih za
                    žalovanje tu je da vam pruži podršku, razumijevanje i pomoć u procesu
                    suočavanja sa gubitkom.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3 text-neutral-600">
                      <span className="text-lg" style={{ color: '#8b1f1f' }}>✓</span>
                      <span>Individualne konsultacije sa iskusnim psiholozima</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-600">
                      <span className="text-lg" style={{ color: '#8b1f1f' }}>✓</span>
                      <span>Online i lični susreti prilagođeni vašim potrebama</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-600">
                      <span className="text-lg" style={{ color: '#8b1f1f' }}>✓</span>
                      <span>Podrška u procesu žalovanja i prihvatanja gubitka</span>
                    </li>
                    <li className="flex items-start gap-3 text-neutral-600">
                      <span className="text-lg" style={{ color: '#8b1f1f' }}>✓</span>
                      <span>Grupna i porodična terapija</span>
                    </li>
                  </ul>
                  <Button asChild size="lg" style={{ backgroundColor: '#6b1717' }} className="hover:opacity-90 text-white w-full md:w-auto">
                    <Link to="/psiholoska-podrska">
                      Saznajte više
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>

                {/* Right side - Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop"
                    alt="Psihološka podrška"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent"></div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Obituaries */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="h-px w-12" style={{ backgroundColor: '#8b1f1f' }}></div>
            <Flame className="h-6 w-6" style={{ color: '#8b1f1f' }} />
            <div className="h-px w-12" style={{ backgroundColor: '#8b1f1f' }}></div>
          </div>
          <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Nedavne osmrtnice</h2>
          <p className="text-neutral-600">Posljednji oprostaji i sjecanja</p>
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg" variant="outline" style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }} className="hover:opacity-80">
            <Link to="/osmrtnice">
              Pregledajte sve osmrtnice
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-1/3 w-48 h-48 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute bottom-10 right-1/3 w-64 h-64 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative">
          <Flame className="h-16 w-16 mx-auto mb-6" style={{ color: '#8b1f1f' }} />
          <h2 className="mb-4">Trebate hitnu pomoc?</h2>
          <p className="text-xl text-neutral-300 mb-10 max-w-2xl mx-auto">
            Nasa hitna linija je dostupna 24 sata dnevno, 7 dana u sedmici. Nazovite nas u bilo
            koje vrijeme.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" style={{ backgroundColor: '#6b1717' }} className="hover:opacity-90 text-white" asChild>
              <a href="tel:033123456" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Nazovi odmah: 033 123 456
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }} className="hover:opacity-90">
              <Link to="/kontakt">Posaljite upit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}