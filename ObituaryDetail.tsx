import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { Calendar, MapPin, Share2, ArrowLeft, Flower2 } from "lucide-react";
import { obituaries } from "./mockData";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import VirtualCandle from "./VirtualCandle";

export default function ObituaryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const obituary = obituaries.find((o) => o.id === id);
  const [candleCount, setCandleCount] = useState(obituary?.candles || 0);

  if (!obituary) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">Osmrtnica nije pronadjena</h1>
          <Button asChild>
            <Link to="/osmrtnice">Povratak na osmrtnice</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${obituary.firstName} ${obituary.lastName}`,
        text: `In memoriam: ${obituary.firstName} ${obituary.lastName}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link je kopiran u clipboard");
    }
  };

  const handleLightCandle = () => {
    setCandleCount(candleCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Decorative header */}
      <div className="h-32 bg-gradient-to-b from-neutral-900 to-transparent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-1/4 w-32 h-32 border border-amber-400 rounded-full"></div>
          <div className="absolute top-8 right-1/3 w-24 h-24 border border-amber-400 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 pb-12">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/osmrtnice")}
            className="mb-6 text-white hover:text-amber-400 hover:bg-neutral-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Povratak na osmrtnice
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-amber-200/50 shadow-xl">
                <CardContent className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row gap-8 mb-8">
                    {/* Photo with decorative frame */}
                    <div className="relative mx-auto md:mx-0 flex-shrink-0 w-64 h-64">
                      <div className="absolute -inset-2 rounded-lg" style={{ background: 'linear-gradient(to bottom right, #f8d1d1, #f2a9a9)' }}></div>
                      <div className="absolute -inset-1 bg-neutral-900 rounded-lg"></div>
                      <img
                        src={obituary.imageUrl}
                        alt={`${obituary.firstName} ${obituary.lastName}`}
                        className="relative w-full h-full rounded-lg object-cover border-4 border-white grayscale"
                      />
                      {/* Corner decorations */}
                      <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2" style={{ borderColor: '#8b1f1f' }}></div>
                      <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2" style={{ borderColor: '#8b1f1f' }}></div>
                      <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2" style={{ borderColor: '#8b1f1f' }}></div>
                      <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2" style={{ borderColor: '#8b1f1f' }}></div>
                    </div>

                    <div className="flex-grow text-center md:text-left">
                      <div className="mb-4">
                        <div className="text-sm mb-1" style={{ color: '#8b1f1f' }}>In memoriam</div>
                        <h1 className="mb-2">
                          {obituary.firstName} {obituary.lastName}
                        </h1>
                      </div>
                      
                      <div className="inline-block bg-neutral-900 text-white px-6 py-3 rounded-lg mb-4">
                        <p className="text-lg">
                          {obituary.birthDate} - {obituary.deathDate}
                        </p>
                      </div>
                      
                      <p className="text-neutral-600 mb-6">
                        {obituary.age} godina
                      </p>

                      <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                        <Button variant="outline" size="sm" onClick={handleShare}>
                          <Share2 className="h-4 w-4 mr-2" />
                          Podijeli
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Decorative divider */}
                  <div className="flex items-center gap-4 my-8">
                    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #f2a9a9, transparent)' }}></div>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#e87b7b' }}></div>
                    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, transparent, #f2a9a9, transparent)' }}></div>
                  </div>

                  {/* Biography */}
                  <div className="mb-8">
                    <h2 className="mb-4" style={{ color: '#4a0e0e' }}>O pokojniku</h2>
                    <div className="relative pl-6 border-l-2" style={{ borderColor: '#f2a9a9' }}>
                      <p className="text-neutral-700 leading-relaxed text-lg">
                        {obituary.biography}
                      </p>
                    </div>
                  </div>

                  <Separator className="my-8" style={{ backgroundColor: '#f8d1d1' }} />

                  {/* Burial Information */}
                  {(obituary.burialDate || obituary.burialLocation) && (
                    <div className="mb-8">
                      <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Informacije o sahrani</h2>
                      <div className="space-y-4">
                        {obituary.burialDate && (
                          <div className="flex items-center gap-3 p-4 rounded-lg border" style={{ backgroundColor: '#fbe8e8', borderColor: '#f8d1d1' }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6b1717' }}>
                              <Calendar className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-neutral-600">Datum sahrane</p>
                              <p className="text-lg">{obituary.burialDate}</p>
                            </div>
                          </div>
                        )}
                        {obituary.burialLocation && (
                          <div className="flex items-center gap-3 p-4 rounded-lg border" style={{ backgroundColor: '#fbe8e8', borderColor: '#f8d1d1' }}>
                            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#6b1717' }}>
                              <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-neutral-600">Lokacija</p>
                              <p className="text-lg">{obituary.burialLocation}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Additional Information */}
                  {(obituary.flowers || obituary.donations) && (
                    <>
                      <Separator className="my-8" style={{ backgroundColor: '#f8d1d1' }} />
                      <div>
                        <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Dodatne informacije</h2>
                        <div className="space-y-3">
                          {obituary.flowers && (
                            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                              <Flower2 className="h-5 w-5 text-green-600 mt-0.5" />
                              <div>
                                <p className="text-sm text-neutral-600">Cvijece</p>
                                <p>Porodica prihvata cvijece i vijence</p>
                              </div>
                            </div>
                          )}
                          {obituary.donations && (
                            <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                              <div>
                                <p className="text-sm text-neutral-600">Donacije</p>
                                <p>{obituary.donations}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Virtual Candle */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="border-2 border-amber-200/50 shadow-xl">
                  <CardContent className="p-6">
                    <h2 className="mb-6 text-center text-amber-900">Zapali svijecu</h2>
                    <VirtualCandle candleCount={candleCount} onLightCandle={handleLightCandle} />
                  </CardContent>
                </Card>

                {/* Condolences Note */}
                <Card className="mt-6 border-2 border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4">
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-2"></div>
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                    </div>
                    <p className="text-neutral-700 italic leading-relaxed">
                      Izrazavamo najdublju sucut porodici i prijateljima. Neka draga dusa pociva u miru.
                    </p>
                    <div className="mt-4">
                      <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-2"></div>
                      <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}