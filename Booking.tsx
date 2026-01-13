import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { User, Phone, FileText, CreditCard, Flame, Music, Camera, Upload, X, File, CheckCircle, AlertCircle } from "lucide-react";
import { servicePackages, coffinOptions, flowerArrangements, musicians, photographers } from "./mockData";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Separator } from "./ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";

export default function Booking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectedPackage = searchParams.get("paket");
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  const [formData, setFormData] = useState({
    // Informacije o pokojniku
    deceasedFirstName: "",
    deceasedLastName: "",
    dateOfDeath: "",
    placeOfDeath: "",
    
    // Informacije o klijentu
    clientFirstName: "",
    clientLastName: "",
    relationship: "",
    phone: "",
    email: "",
    address: "",
    
    // Usluge
    servicePackage: preselectedPackage || "",
    burialDate: "",
    burialLocation: "",
    
    // Dodatni izbori
    coffin: "",
    flowers: "",
    musician: "",
    photographer: "",
    
    // Dodatne napomene
    notes: "",
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  const [deathCertificate, setDeathCertificate] = useState<File | null>(null);

  // Validation functions
  const validateName = (value: string): string | null => {
    if (!value.trim()) return null; // Don't show error for empty fields
    if (value.length < 2) return "Mora imati najmanje 2 karaktera";
    if (!/^[a-zA-ZčćžšđČĆŽŠĐ\s]+$/.test(value)) return "Dozvoljeni su samo slova";
    return null;
  };

  const validatePhone = (value: string): string | null => {
    if (!value.trim()) return null;
    // Remove spaces and dashes for validation
    const cleanPhone = value.replace(/[\s-]/g, '');
    if (!/^\+?[0-9]{8,15}$/.test(cleanPhone)) return "Unesite validan broj telefona";
    return null;
  };

  const validateEmail = (value: string): string | null => {
    if (!value.trim()) return null;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Unesite validnu email adresu";
    return null;
  };

  const validateDateOfDeath = (value: string): string | null => {
    if (!value) return null;
    
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Check if date is valid
    if (isNaN(selectedDate.getTime())) return "Unesite validan datum";
    
    // Check if date is in the future
    if (selectedDate > today) return "Datum smrti ne može biti u budućnosti";
    
    // Check if date is too far in the past (e.g., more than 150 years ago)
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 150);
    if (selectedDate < minDate) return "Datum je prevelik u prošlosti";
    
    return null;
  };

  const validateBurialDate = (value: string): string | null => {
    if (!value) return null;
    
    const selectedDate = new Date(value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (isNaN(selectedDate.getTime())) return "Unesite validan datum";
    
    // Burial date should be today or in the future
    if (selectedDate < today) return "Datum sahrane ne može biti u prošlosti";
    
    return null;
  };

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "deceasedFirstName":
      case "deceasedLastName":
      case "clientFirstName":
      case "clientLastName":
        return validateName(value);
      case "phone":
        return validatePhone(value);
      case "email":
        return validateEmail(value);
      case "dateOfDeath":
        return validateDateOfDeath(value);
      case "burialDate":
        return validateBurialDate(value);
      default:
        return null;
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Mark field as touched
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });

    // Validate field
    const error = validateField(name, value);
    setValidationErrors({
      ...validationErrors,
      [name]: error || "",
    });
  };

  const getInputClassName = (fieldName: string) => {
    if (!touchedFields[fieldName] || !formData[fieldName as keyof typeof formData]) {
      return "border-amber-200 focus:border-amber-400";
    }
    
    if (validationErrors[fieldName]) {
      return "border-red-400 focus:border-red-500 bg-red-50";
    }
    
    return "border-green-400 focus:border-green-500 bg-green-50";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSubmitConfirm(true);
  };

  const confirmSubmit = () => {
    setShowSubmitConfirm(false);
    
    // Store booking data in sessionStorage
    sessionStorage.setItem("bookingData", JSON.stringify(formData));
    
    // Navigate to payment page
    navigate("/placanje");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("Fajl je prevelik. Maksimalna velicina je 10MB.");
        return;
      }
      // Check file type
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      if (!allowedTypes.includes(file.type)) {
        alert("Dozvoljeni formati: PDF, JPG, PNG");
        return;
      }
      setDeathCertificate(file);
    }
  };

  const removeFile = () => {
    setDeathCertificate(null);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  const selectedPackage = servicePackages.find(
    (pkg) => pkg.id === formData.servicePackage
  );

  const selectedCoffin = coffinOptions.find(c => c.id === formData.coffin);
  const selectedFlowers = flowerArrangements.find(f => f.id === formData.flowers);
  const selectedMusician = musicians.find(m => m.id === formData.musician);
  const selectedPhotographer = photographers.find(p => p.id === formData.photographer);

  const calculateTotal = () => {
    let total = selectedPackage?.price || 0;
    if (selectedCoffin) total += selectedCoffin.price;
    if (selectedFlowers) total += selectedFlowers.price;
    if (selectedMusician) total += selectedMusician.price;
    if (selectedPhotographer) total += selectedPhotographer.price;
    return total;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Decorative header */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-8 left-1/3 w-48 h-48 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute bottom-8 right-1/3 w-32 h-32 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
        </div>
        <div className="container mx-auto px-4 relative text-center">
          <Flame className="h-12 w-12 mx-auto mb-4" style={{ color: '#8b1f1f' }} />
          <h1 className="mb-4">Rezervacija usluga</h1>
          <p className="text-neutral-300">
            Popunite formu ispod i kontaktirat cemo vas u najkracem roku
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Informacije o pokojniku */}
                <Card className="border-2 shadow-xl" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <CardHeader style={{ background: 'linear-gradient(to right, rgba(251, 232, 232, 0.5), transparent)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8b1f1f' }}>
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <h2 style={{ color: '#4a0e0e' }}>Informacije o pokojniku</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="deceasedFirstName">Ime *</Label>
                        <Input
                          id="deceasedFirstName"
                          name="deceasedFirstName"
                          value={formData.deceasedFirstName}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('deceasedFirstName')}`}
                        />
                        {validationErrors.deceasedFirstName && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.deceasedFirstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="deceasedLastName">Prezime *</Label>
                        <Input
                          id="deceasedLastName"
                          name="deceasedLastName"
                          value={formData.deceasedLastName}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('deceasedLastName')}`}
                        />
                        {validationErrors.deceasedLastName && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.deceasedLastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="dateOfDeath">Datum smrti *</Label>
                        <Input
                          id="dateOfDeath"
                          name="dateOfDeath"
                          type="date"
                          value={formData.dateOfDeath}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('dateOfDeath')}`}
                        />
                        {validationErrors.dateOfDeath && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.dateOfDeath}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="placeOfDeath">Mjesto smrti</Label>
                        <Input
                          id="placeOfDeath"
                          name="placeOfDeath"
                          value={formData.placeOfDeath}
                          onChange={handleChange}
                          style={{ borderColor: '#f8d1d1' }}
                          className="focus:border-[#8b1f1f]"
                        />
                      </div>
                    </div>

                    <Separator style={{ backgroundColor: '#f8d1d1' }} />

                    {/* Document Upload */}
                    <div>
                      <Label htmlFor="deathCertificate">
                        Dokument - Potvrda o smrti *
                      </Label>
                      <p className="text-xs text-neutral-500 mb-3">
                        Prihvaceni formati: PDF, JPG, PNG (max 10MB)
                      </p>
                      
                      {!deathCertificate ? (
                        <label
                          htmlFor="deathCertificate"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer transition-colors"
                          style={{ borderColor: '#f2a9a9', backgroundColor: '#fbe8e8' }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8d1d1'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fbe8e8'}
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-10 h-10 mb-2" style={{ color: '#8b1f1f' }} />
                            <p className="mb-1 text-sm" style={{ color: '#4a0e0e' }}>
                              <span className="font-semibold">Kliknite za upload</span> ili prevucite fajl
                            </p>
                            <p className="text-xs text-neutral-500">
                              PDF, JPG ili PNG
                            </p>
                          </div>
                          <Input
                            id="deathCertificate"
                            type="file"
                            className="hidden"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      ) : (
                        <div className="flex items-center justify-between p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                              <File className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <p className="text-sm text-green-900">
                                {deathCertificate.name}
                              </p>
                              <p className="text-xs text-green-700">
                                {formatFileSize(deathCertificate.size)}
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={removeFile}
                            className="text-red-600 hover:text-red-700 hover:bg-red-100"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Vase informacije */}
                <Card className="border-2 shadow-xl" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <CardHeader style={{ background: 'linear-gradient(to right, rgba(251, 232, 232, 0.5), transparent)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8b1f1f' }}>
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <h2 style={{ color: '#4a0e0e' }}>Vase kontakt informacije</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="clientFirstName">Vase ime *</Label>
                        <Input
                          id="clientFirstName"
                          name="clientFirstName"
                          value={formData.clientFirstName}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('clientFirstName')}`}
                        />
                        {validationErrors.clientFirstName && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.clientFirstName}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="clientLastName">Vase prezime *</Label>
                        <Input
                          id="clientLastName"
                          name="clientLastName"
                          value={formData.clientLastName}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('clientLastName')}`}
                        />
                        {validationErrors.clientLastName && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.clientLastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="relationship">Odnos sa pokojnikom *</Label>
                      <Input
                        id="relationship"
                        name="relationship"
                        placeholder="npr. sin, kcerka, supruznik..."
                        value={formData.relationship}
                        onChange={handleChange}
                        required
                        style={{ borderColor: '#f8d1d1' }}
                        className="focus:border-[#8b1f1f]"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
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
                          className={`focus:border-[#8b1f1f] ${getInputClassName('phone')}`}
                        />
                        {validationErrors.phone && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('email')}`}
                        />
                        {validationErrors.email && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Adresa</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        style={{ borderColor: '#f8d1d1' }}
                        className="focus:border-[#8b1f1f]"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Odabir usluga i proizvoda */}
                <Card className="border-2 shadow-xl" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <CardHeader style={{ background: 'linear-gradient(to right, rgba(251, 232, 232, 0.5), transparent)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#8b1f1f' }}>
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <h2 style={{ color: '#4a0e0e' }}>Odabir usluga i proizvoda</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <div>
                      <Label htmlFor="servicePackage">Paket usluga *</Label>
                      <Select
                        value={formData.servicePackage}
                        onValueChange={(value) =>
                          setFormData({ ...formData, servicePackage: value })
                        }
                        required
                      >
                        <SelectTrigger style={{ borderColor: '#f8d1d1' }} className="focus:border-[#8b1f1f]">
                          <SelectValue placeholder="Odaberite paket" />
                        </SelectTrigger>
                        <SelectContent>
                          {servicePackages.map((pkg) => (
                            <SelectItem key={pkg.id} value={pkg.id}>
                              {pkg.name} - {pkg.price} KM
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator style={{ backgroundColor: '#f8d1d1' }} />

                    <div>
                      <Label htmlFor="coffin">Kovceg (opcionalno)</Label>
                      <Select
                        value={formData.coffin}
                        onValueChange={(value) =>
                          setFormData({ ...formData, coffin: value })
                        }
                      >
                        <SelectTrigger style={{ borderColor: '#f8d1d1' }} className="focus:border-[#8b1f1f]">
                          <SelectValue placeholder="Odaberite kovceg" />
                        </SelectTrigger>
                        <SelectContent>
                          {coffinOptions.map((coffin) => (
                            <SelectItem key={coffin.id} value={coffin.id}>
                              {coffin.name} - {coffin.price} KM
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="flowers">Cvijece (opcionalno)</Label>
                      <Select
                        value={formData.flowers}
                        onValueChange={(value) =>
                          setFormData({ ...formData, flowers: value })
                        }
                      >
                        <SelectTrigger style={{ borderColor: '#f8d1d1' }} className="focus:border-[#8b1f1f]">
                          <SelectValue placeholder="Odaberite cvijece" />
                        </SelectTrigger>
                        <SelectContent>
                          {flowerArrangements.map((flower) => (
                            <SelectItem key={flower.id} value={flower.id}>
                              {flower.name} - {flower.price} KM
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="musician">
                        <Music className="h-4 w-4 inline mr-2" />
                        Muzicar (opcionalno)
                      </Label>
                      <Select
                        value={formData.musician}
                        onValueChange={(value) =>
                          setFormData({ ...formData, musician: value })
                        }
                      >
                        <SelectTrigger style={{ borderColor: '#f8d1d1' }} className="focus:border-[#8b1f1f]">
                          <SelectValue placeholder="Odaberite muzicara" />
                        </SelectTrigger>
                        <SelectContent>
                          {musicians.map((musician) => (
                            <SelectItem key={musician.id} value={musician.id}>
                              {musician.name} - {musician.instrument} - {musician.price} KM
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="photographer">
                        <Camera className="h-4 w-4 inline mr-2" />
                        Fotograf (opcionalno)
                      </Label>
                      <Select
                        value={formData.photographer}
                        onValueChange={(value) =>
                          setFormData({ ...formData, photographer: value })
                        }
                      >
                        <SelectTrigger style={{ borderColor: '#f8d1d1' }} className="focus:border-[#8b1f1f]">
                          <SelectValue placeholder="Odaberite fotografa" />
                        </SelectTrigger>
                        <SelectContent>
                          {photographers.map((photographer) => (
                            <SelectItem key={photographer.id} value={photographer.id}>
                              {photographer.name} - {photographer.price} KM
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Separator style={{ backgroundColor: '#f8d1d1' }} />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="burialDate">Zeljeni datum sahrane *</Label>
                        <Input
                          id="burialDate"
                          name="burialDate"
                          type="date"
                          value={formData.burialDate}
                          onChange={handleChange}
                          required
                          style={{ borderColor: '#f8d1d1' }}
                          className={`focus:border-[#8b1f1f] ${getInputClassName('burialDate')}`}
                        />
                        {validationErrors.burialDate && (
                          <p className="text-xs text-red-500 mt-1">
                            {validationErrors.burialDate}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="burialLocation">Lokacija sahrane</Label>
                        <Input
                          id="burialLocation"
                          name="burialLocation"
                          placeholder="npr. Gradsko groblje"
                          value={formData.burialLocation}
                          onChange={handleChange}
                          style={{ borderColor: '#f8d1d1' }}
                          className="focus:border-[#8b1f1f]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Dodatne napomene</Label>
                      <Textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        placeholder="Unesite dodatne napomene ili posebne zahtjeve..."
                        value={formData.notes}
                        onChange={handleChange}
                        style={{ borderColor: '#f8d1d1' }}
                        className="focus:border-[#8b1f1f]"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Napomena */}
                <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                  <CardContent className="pt-6">
                    <p className="text-sm text-blue-900">
                      <strong>Napomena:</strong> Nakon slanja rezervacije, nas tim ce vas kontaktirati u
                      najkracem mogucem roku da potvrdi detalje i dogovori dalje korake. U hitnim
                      slucajevima, molimo nazovite direktno na 033 123 456.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Summary Sidebar */}
              <div className="lg:col-span-1">
                <Card className="border-2 shadow-xl sticky top-24" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <CardHeader style={{ background: 'linear-gradient(to right, rgba(251, 232, 232, 0.5), transparent)' }}>
                    <h2 style={{ color: '#4a0e0e' }}>Pregled</h2>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-4">
                    {selectedPackage && (
                      <div className="pb-4" style={{ borderBottom: '1px solid #f8d1d1' }}>
                        <p className="text-sm text-neutral-600 mb-1">Paket</p>
                        <p className="mb-1">{selectedPackage.name}</p>
                        <p style={{ color: '#4a0e0e' }}>{selectedPackage.price} KM</p>
                      </div>
                    )}

                    {selectedCoffin && (
                      <div className="pb-4" style={{ borderBottom: '1px solid #f8d1d1' }}>
                        <p className="text-sm text-neutral-600 mb-1">Kovceg</p>
                        <p className="mb-1">{selectedCoffin.name}</p>
                        <p style={{ color: '#4a0e0e' }}>+{selectedCoffin.price} KM</p>
                      </div>
                    )}

                    {selectedFlowers && (
                      <div className="pb-4" style={{ borderBottom: '1px solid #f8d1d1' }}>
                        <p className="text-sm text-neutral-600 mb-1">Cvijece</p>
                        <p className="mb-1">{selectedFlowers.name}</p>
                        <p className="text-green-700">+{selectedFlowers.price} KM</p>
                      </div>
                    )}

                    {selectedMusician && (
                      <div className="pb-4" style={{ borderBottom: '1px solid #f8d1d1' }}>
                        <p className="text-sm text-neutral-600 mb-1">Muzicar</p>
                        <p className="mb-1">{selectedMusician.name}</p>
                        <p className="text-purple-700">+{selectedMusician.price} KM</p>
                      </div>
                    )}

                    {selectedPhotographer && (
                      <div className="pb-4" style={{ borderBottom: '1px solid #f8d1d1' }}>
                        <p className="text-sm text-neutral-600 mb-1">Fotograf</p>
                        <p className="mb-1">{selectedPhotographer.name}</p>
                        <p className="text-blue-700">+{selectedPhotographer.price} KM</p>
                      </div>
                    )}

                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#fbe8e8' }}>
                      <p className="text-sm text-neutral-600 mb-1">Ukupno</p>
                      <p className="text-3xl" style={{ color: '#4a0e0e' }}>{calculateTotal()} KM</p>
                    </div>

                    <Button type="submit" size="lg" className="w-full hover:opacity-90 text-white" style={{ backgroundColor: '#6b1717' }}>
                      <CreditCard className="mr-2 h-5 w-5" />
                      Nastavi na placanje
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Submit Confirmation Dialog */}
      <AlertDialog open={showSubmitConfirm} onOpenChange={setShowSubmitConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Da li ste sigurni?</AlertDialogTitle>
            <AlertDialogDescription>
              Da li ste sigurni da želite da pošaljete ovu rezervaciju?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Nazad</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSubmit}>
              <CheckCircle className="mr-2 h-5 w-5" />
              Potvrdi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}