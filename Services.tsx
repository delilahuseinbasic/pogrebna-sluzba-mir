import { Link } from "react-router";
import { Check, ArrowRight, Sparkles } from "lucide-react";
import { servicePackages } from "./mockData";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Decorative header */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-1/4 w-48 h-48 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute bottom-8 right-1/4 w-32 h-32 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-16" style={{ backgroundColor: '#8b1f1f' }}></div>
              <Sparkles className="h-6 w-6" style={{ color: '#8b1f1f' }} />
              <div className="h-px w-16" style={{ backgroundColor: '#8b1f1f' }}></div>
            </div>
            <h1 className="mb-4">Paketi usluga</h1>
            <p className="text-neutral-300 max-w-2xl mx-auto">
              Nudimo razlicite pakete usluga prilagodene vasim potrebama i budzetu. Svi paketi
              ukljucuju profesionalnu brigu i paznju koju zasluzujete.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {servicePackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="relative hover:scale-105 transition-all border-2"
                style={{
                  borderColor: pkg.popular ? '#8b1f1f' : 'rgba(139, 31, 31, 0.3)',
                  boxShadow: pkg.popular ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' : ''
                }}
              >
                {pkg.popular && (
                  <>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="text-white px-4 py-1" style={{ background: 'linear-gradient(to right, #8b1f1f, #6b1717)' }}>
                        <Sparkles className="h-3 w-3 mr-1 inline" />
                        Najpopularnije
                      </Badge>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-lg -z-10" style={{ background: 'linear-gradient(to bottom right, rgba(139, 31, 31, 0.2), transparent)' }}></div>
                  </>
                )}

                <CardHeader className="text-center pb-4" style={{ background: 'linear-gradient(to bottom, rgba(251, 232, 232, 0.5), transparent)' }}>
                  <h2 className="mb-2" style={{ color: '#4a0e0e' }}>{pkg.name}</h2>
                  <div className="mb-2">
                    <span className="text-4xl">{pkg.price}</span>
                    <span className="text-neutral-600"> KM</span>
                  </div>
                  <p className="text-sm text-neutral-600">{pkg.description}</p>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-green-700" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
                    size="lg"
                    style={pkg.popular ? { backgroundColor: '#6b1717' } : { borderColor: '#f2a9a9' }}
                  >
                    <Link to={`/rezervacija?paket=${pkg.id}`} className={pkg.popular ? "hover:opacity-90" : "hover:opacity-80"}>
                      Izaberite paket
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="rounded-2xl p-8 border-2 shadow-xl" style={{ background: 'linear-gradient(to bottom right, #fbe8e8, #fafaf9)', borderColor: 'rgba(139, 31, 31, 0.3)' }}>
            <div className="text-center mb-8">
              <h2 className="mb-2" style={{ color: '#4a0e0e' }}>Dodatne usluge</h2>
              <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #8b1f1f, #6b1717)' }}></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all" style={{ borderColor: '#fbe8e8' }}>
                <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Prijevoz van grada</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Organizujemo prijevoz pokojnika na udaljenije destinacije
                </p>
                <p>Od 300 KM</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all" style={{ borderColor: '#fbe8e8' }}>
                <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Nadgrobni spomenik</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Izrada i postavljanje kvalitetnih nadgrobnih spomenika
                </p>
                <p>Od 1.200 KM</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all" style={{ borderColor: '#fbe8e8' }}>
                <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Godisnja njega groba</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Redovno odrzavanje i uredjenje groba tokom godine
                </p>
                <p>500 KM/godisnje</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all" style={{ borderColor: '#fbe8e8' }}>
                <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Kremacija</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Organizacija kremacije sa urnom po izboru
                </p>
                <p>Od 2.000 KM</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all" style={{ borderColor: '#fbe8e8' }}>
                <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Online memorijal</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Kreiranje trajnog online memorijala sa fotografijama
                </p>
                <p>200 KM</p>
              </div>

              <div className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all" style={{ borderColor: '#fbe8e8' }}>
                <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Prijevod na strani jezik</h3>
                <p className="text-sm text-neutral-600 mb-3">
                  Prevodjenje dokumenata i osmrtnica na strane jezike
                </p>
                <p>100 KM</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 p-12 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 right-1/4 w-32 h-32 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
            </div>
            <div className="relative">
              <h2 className="mb-4">Trebate pomoc pri izboru?</h2>
              <p className="text-neutral-300 mb-8 max-w-xl mx-auto">
                Nas tim je tu da vam pomogne odabrati pravi paket za vase potrebe
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" style={{ backgroundColor: '#6b1717' }} className="hover:opacity-90 text-white">
                  <Link to="/kontakt">Kontaktirajte nas</Link>
                </Button>
                <Button asChild size="lg" variant="outline" style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }} className="hover:opacity-90">
                  <a href="tel:033123456">Nazovite: 033 123 456</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}