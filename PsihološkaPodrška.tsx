import image_a9b103cd05f0d5f925e6cfc4d90ba478788e1577 from 'figma:asset/a9b103cd05f0d5f925e6cfc4d90ba478788e1577.png';
import image_543dc4b32697d703a8155efc8ac48c17e519ea28 from 'figma:asset/543dc4b32697d703a8155efc8ac48c17e519ea28.png';
import image_4ba277c295364e9d0982c4932bc71f28292ad5b0 from 'figma:asset/4ba277c295364e9d0982c4932bc71f28292ad5b0.png';
import image_680f89899dad7556a25dac263e0c8273effa2f2e from 'figma:asset/346c641ca6ec0ac0c24f70de3934a02e9c47e347.png';
import { useState } from "react";
import { motion } from "motion/react";
import { Heart, Phone, Mail, Calendar, Clock, Award, MessageCircle, Video } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { toast } from "sonner@2.0.3";

interface Psychologist {
  id: string;
  name: string;
  title: string;
  specialization: string[];
  experience: number;
  bio: string;
  phone: string;
  email: string;
  imageUrl: string;
  availableOnline: boolean;
  languages: string[];
}

const psychologists: Psychologist[] = [
  {
    id: "1",
    name: "Dr. Ana Marković",
    title: "Klinički psiholog",
    specialization: ["Žalovanje i gubitak", "Porodična terapija", "Trauma"],
    experience: 15,
    bio: "Dr. Ana Marković je klinički psiholog sa preko 15 godina iskustva u radu sa osobama koje prolaze kroz proces žalovanja. Specijalizirana je za podršku porodicama u teškim trenucima i pruža empatičan pristup svakom klijentu.",
    phone: "061 234 567",
    email: "ana.markovic@psihologija.ba",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    availableOnline: true,
    languages: ["Bosanski", "Engleski"]
  },
  {
    id: "2",
    name: "Prof. Dr. Marko Horvat",
    title: "Psihoterapeut",
    specialization: ["Žalovanje", "Depresija", "Anksioznost"],
    experience: 20,
    bio: "Profesor Horvat je renomirani psihoterapeut koji se bavi podrškom osobama u krizi. Njegov holistički pristup kombinuje moderne terapijske metode sa dubokim razumijevanjem ljudskih emocija u procesu žalovanja.",
    phone: "062 345 678",
    email: "marko.horvat@terapija.ba",
    imageUrl: image_4ba277c295364e9d0982c4932bc71f28292ad5b0,
    availableOnline: true,
    languages: ["Bosanski", "Hrvatski", "Engleski"]
  },
  {
    id: "3",
    name: "Doktor Zoran Vanev",
    title: "Psiholog - Specijalista za žalost",
    specialization: ["Složena žalost", "Gubitak djeteta", "PTSP"],
    experience: 12,
    bio: "Doktor Zoran Vanev je specijaliziran za rad sa osobama koje doživljavaju složene oblike žalovanja. Njegov saosjećajan pristup i stručnost pomažu klijentima da prođu kroz najteže životne trenutke.",
    phone: "063 456 789",
    email: "zoran.vanev@support.ba",
    imageUrl: image_a9b103cd05f0d5f925e6cfc4d90ba478788e1577,
    availableOnline: true,
    languages: ["Bosanski", "Engleski", "Njemački"]
  },
  {
    id: "4",
    name: "Tomislav Kovač, MA",
    title: "Savjetnik za žalost",
    specialization: ["Gubitak partnera", "Duhovni aspekti žalovanja", "Grupna terapija"],
    experience: 10,
    bio: "Tomislav Kovač pruža podršku osobama koje se suočavaju sa gubitkom voljenih. Sa magistarskom diplomom iz psihologije i dodatnim treningom u savjetovanju za žalost, pomaže klijentima da nađu mir i prihvatanje.",
    phone: "064 567 890",
    email: "tomislav.kovac@savjetovanje.ba",
    imageUrl: image_680f89899dad7556a25dac263e0c8273effa2f2e,
    availableOnline: false,
    languages: ["Bosanski", "Hrvatski"]
  }
];

export default function PsihološkaPodrška() {
  const [selectedPsychologist, setSelectedPsychologist] = useState<Psychologist | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    sessionType: "online",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Zahtjev za termin je poslat! Psiholog će vas kontaktirati u najkraćem roku.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      preferredDate: "",
      preferredTime: "",
      sessionType: "online",
      message: ""
    });
    setSelectedPsychologist(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#600000] py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-white mb-4">Psihološka podrška</h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Niste sami u ovim teškim trenucima. Naš tim psihologa i terapeuta specijalizovanih
              za žalovanje tu je da vam pruži podršku, razumijevanje i pomoć u procesu žalovanja.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
            <CardContent className="p-8">
              <h2 className="text-white mb-4">Zašto je podrška važna?</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Gubitak voljene osobe je jedan od najsurovijih životnih iskustava. Proces žalovanja
                  je prirodan, ali može biti iznimno težak i često zahtijeva stručnu podršku.
                </p>
                <p>
                  Naši psiholozi su specijalizovani za rad sa osobama koje prolaze kroz žalost i mogu
                  vam pomoći da:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B0000] mt-1">•</span>
                    <span>Razumijete i prihvatite svoje emocije</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B0000] mt-1">•</span>
                    <span>Naučite zdrave strategije suočavanja sa gubitkom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B0000] mt-1">•</span>
                    <span>Pronađete smisao i nadu u nastavku života</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#8B0000] mt-1">•</span>
                    <span>Obnovite odnose sa porodicom i prijateljima</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Psychologists Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">Naš tim psihologa</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-[#8B0000] to-[#600000]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {psychologists.map((psychologist, index) => (
            <motion.div
              key={psychologist.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-[#8B0000] transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={psychologist.imageUrl}
                        alt={psychologist.name}
                        className="w-32 h-32 rounded-lg object-cover border-2 border-gray-700"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-white mb-1">{psychologist.name}</h3>
                      <p className="text-[#CD5C5C] mb-3">{psychologist.title}</p>

                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Award className="h-4 w-4" />
                        <span>{psychologist.experience} godina iskustva</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {psychologist.specialization.map((spec, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#8B0000]/20 text-[#CD5C5C] rounded text-xs"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {psychologist.bio}
                      </p>

                      {/* Contact & Actions */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Phone className="h-4 w-4" />
                          <span>{psychologist.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Mail className="h-4 w-4" />
                          <span>{psychologist.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          {psychologist.availableOnline ? (
                            <>
                              <Video className="h-4 w-4 text-green-500" />
                              <span className="text-green-500">Online konsultacije dostupne</span>
                            </>
                          ) : (
                            <>
                              <MessageCircle className="h-4 w-4 text-gray-400" />
                              <span className="text-gray-400">Samo lični susreti</span>
                            </>
                          )}
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            onClick={() => setSelectedPsychologist(psychologist)}
                            className="w-full"
                            style={{ backgroundColor: "#8B0000" }}
                          >
                            <Calendar className="h-4 w-4 mr-2" />
                            Zakažite termin
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-white">
                              Zakazivanje termina - {psychologist.name}
                            </DialogTitle>
                          </DialogHeader>
                          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="name" className="text-gray-300">
                                  Vaše ime i prezime
                                </Label>
                                <Input
                                  id="name"
                                  value={formData.name}
                                  onChange={(e) =>
                                    setFormData({ ...formData, name: e.target.value })
                                  }
                                  required
                                  className="bg-gray-800 border-gray-700 text-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="phone" className="text-gray-300">
                                  Telefon
                                </Label>
                                <Input
                                  id="phone"
                                  type="tel"
                                  value={formData.phone}
                                  onChange={(e) =>
                                    setFormData({ ...formData, phone: e.target.value })
                                  }
                                  required
                                  className="bg-gray-800 border-gray-700 text-white"
                                />
                              </div>
                            </div>

                            <div>
                              <Label htmlFor="email" className="text-gray-300">
                                Email
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) =>
                                  setFormData({ ...formData, email: e.target.value })
                                }
                                required
                                className="bg-gray-800 border-gray-700 text-white"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="date" className="text-gray-300">
                                  Željeni datum
                                </Label>
                                <Input
                                  id="date"
                                  type="date"
                                  value={formData.preferredDate}
                                  onChange={(e) =>
                                    setFormData({ ...formData, preferredDate: e.target.value })
                                  }
                                  required
                                  className="bg-gray-800 border-gray-700 text-white"
                                />
                              </div>
                              <div>
                                <Label htmlFor="time" className="text-gray-300">
                                  Željeno vrijeme
                                </Label>
                                <Input
                                  id="time"
                                  type="time"
                                  value={formData.preferredTime}
                                  onChange={(e) =>
                                    setFormData({ ...formData, preferredTime: e.target.value })
                                  }
                                  required
                                  className="bg-gray-800 border-gray-700 text-white"
                                />
                              </div>
                            </div>

                            {psychologist.availableOnline && (
                              <div>
                                <Label className="text-gray-300 mb-2 block">Tip sesije</Label>
                                <div className="flex gap-4">
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                      type="radio"
                                      name="sessionType"
                                      value="online"
                                      checked={formData.sessionType === "online"}
                                      onChange={(e) =>
                                        setFormData({ ...formData, sessionType: e.target.value })
                                      }
                                      className="accent-[#8B0000]"
                                    />
                                    <span className="text-gray-300">Online</span>
                                  </label>
                                  <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                      type="radio"
                                      name="sessionType"
                                      value="in-person"
                                      checked={formData.sessionType === "in-person"}
                                      onChange={(e) =>
                                        setFormData({ ...formData, sessionType: e.target.value })
                                      }
                                      className="accent-[#8B0000]"
                                    />
                                    <span className="text-gray-300">Lični susret</span>
                                  </label>
                                </div>
                              </div>
                            )}

                            <div>
                              <Label htmlFor="message" className="text-gray-300">
                                Poruka (opciono)
                              </Label>
                              <Textarea
                                id="message"
                                value={formData.message}
                                onChange={(e) =>
                                  setFormData({ ...formData, message: e.target.value })
                                }
                                rows={4}
                                className="bg-gray-800 border-gray-700 text-white"
                                placeholder="Ukratko opišite razlog za konsultaciju..."
                              />
                            </div>

                            <div className="flex gap-4">
                              <Button
                                type="submit"
                                className="flex-1"
                                style={{ backgroundColor: "#8B0000" }}
                              >
                                Pošalji zahtjev
                              </Button>
                            </div>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emergency Support Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-800">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center">
                    <Phone className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-3">Hitna psihološka pomoć</h3>
                  <p className="text-gray-300 mb-4">
                    Ako prolazite kroz akutnu krizu ili imate misli o samopovrjeđivanju, odmah
                    kontaktirajte hitnu psihološku pomoć.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-red-400" />
                      <span className="text-white">
                        <strong>Centar za kriznu intervenciju:</strong> 080 05 03 05 (besplatno)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-red-400" />
                      <span className="text-gray-300">Dostupno 24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Additional Resources */}
      <div className="container mx-auto px-4 py-12 pb-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-white text-center mb-8">Dodatni resursi</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-[#8B0000] transition-all">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-[#CD5C5C] mx-auto mb-4" />
                <h4 className="text-white mb-2">Grupna terapija</h4>
                <p className="text-gray-400 text-sm">
                  Podijelite svoja iskustva sa drugima koji prolaze kroz slične situacije
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-[#8B0000] transition-all">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-[#CD5C5C] mx-auto mb-4" />
                <h4 className="text-white mb-2">Porodična terapija</h4>
                <p className="text-gray-400 text-sm">
                  Zajedno sa porodicom pronađite put ka ozdravljenju i razumijevanju
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 hover:border-[#8B0000] transition-all">
              <CardContent className="p-6 text-center">
                <Video className="h-12 w-12 text-[#CD5C5C] mx-auto mb-4" />
                <h4 className="text-white mb-2">Online savjetovanje</h4>
                <p className="text-gray-400 text-sm">
                  Pristupite podršci iz udobnosti svog doma putem video poziva
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
}