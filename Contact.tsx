import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Flame } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Alert, AlertDescription } from "./ui/alert";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Decorative header */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-1/4 w-48 h-48 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute bottom-8 right-1/4 w-32 h-32 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <Flame className="h-12 w-12 mx-auto mb-4" style={{ color: '#8b1f1f' }} />
          <h1 className="mb-4">Kontaktirajte nas</h1>
          <p className="text-neutral-300">
            Tu smo za vas 24 sata dnevno, 7 dana u sedmici
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 shadow-xl" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                      <Phone className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Telefon</h3>
                      <p className="text-neutral-600 mb-1">Hitna linija (24/7):</p>
                      <a href="tel:033123456" className="text-xl hover:underline" style={{ color: '#6b1717' }}>
                        033 123 456
                      </a>
                      <p className="text-neutral-600 mt-3 mb-1">Kancelarija:</p>
                      <a href="tel:033123457" className="hover:underline" style={{ color: '#6b1717' }}>
                        033 123 457
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                      <Mail className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Email</h3>
                      <a
                        href="mailto:info@pogrebnasluzbamir.ba"
                        className="hover:underline text-neutral-600"
                      >
                        info@pogrebnasluzbamir.ba
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                      <MapPin className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Adresa</h3>
                      <p className="text-neutral-600">
                        Ulica Mira 123
                        <br />
                        71000 Sarajevo
                        <br />
                        Bosna i Hercegovina
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(to bottom right, #8b1f1f, #6b1717)' }}>
                      <Clock className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="mb-2" style={{ color: '#4a0e0e' }}>Radno vrijeme</h3>
                      <div className="text-sm text-neutral-600 space-y-1">
                        <p>Ponedjeljak - Petak: 08:00 - 20:00</p>
                        <p>Subota: 09:00 - 18:00</p>
                        <p>Nedjelja: 10:00 - 16:00</p>
                        <p className="mt-3" style={{ color: '#6b1717' }}>
                          Hitna linija: Non-stop 24/7
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Notice */}
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-300 shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-red-900">U hitnim slucajevima</h3>
                  <p className="text-sm text-red-800 mb-4">
                    Za hitne intervencije dostupni smo 24 sata dnevno. Ne oklevajte da nas
                    kontaktirate u bilo koje doba dana ili noci.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 w-full shadow-lg"
                  >
                    <a href="tel:033123456" className="flex items-center justify-center gap-2">
                      <Phone className="h-5 w-5" />
                      Nazovite odmah
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-2 shadow-xl" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                <CardHeader style={{ background: 'linear-gradient(to right, rgba(251, 232, 232, 0.5), transparent)' }}>
                  <h2 style={{ color: '#4a0e0e' }}>Posaljite nam poruku</h2>
                  <p className="text-neutral-600 text-sm">
                    Popunite formu ispod i odgovorit cemo vam u najkracem roku
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  {submitted && (
                    <Alert className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
                      <AlertDescription className="text-green-800">
                        Hvala vam. Vasa poruka je uspjesno poslana.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Ime i prezime *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ borderColor: '#f8d1d1' }}
                        className="focus:border-[#8b1f1f]"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className="focus:border-[#8b1f1f]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefon *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className="focus:border-[#8b1f1f]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Predmet</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        style={{ borderColor: '#f8d1d1' }}
                        className="focus:border-[#8b1f1f]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Poruka *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={{ borderColor: '#f8d1d1' }}
                        className="focus:border-[#8b1f1f]"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full hover:opacity-90 text-white" style={{ backgroundColor: '#6b1717' }}>
                      <Send className="mr-2 h-5 w-5" />
                      Posalji poruku
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-12">
            <Card className="border-2 shadow-xl overflow-hidden" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
              <CardContent className="p-0">
                <div className="relative h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.3425774838444!2d18.39758431556289!3d43.85643647911577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c8d3c2e1c7a9%3A0x3a5c6e8f7a2f3b1c!2sBa%C5%A1%C4%8Dar%C5%A1ija%2C%20Sarajevo!5e0!3m2!1sen!2sba!4v1234567890123!5m2!1sen!2sba"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokacija pogrebne sluzbe"
                    className="w-full h-full"
                  ></iframe>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-lg border-2" style={{ borderColor: '#f2a9a9' }}>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" style={{ color: '#8b1f1f' }} />
                      <div>
                        <p className="text-sm">Ulica Mira 123</p>
                        <p className="text-xs text-neutral-600">Bascarsija, Sarajevo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}