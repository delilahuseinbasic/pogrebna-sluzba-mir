import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router";
import { CreditCard, Check, ShieldCheck, Lock, ArrowLeft } from "lucide-react";
import { servicePackages } from "./mockData";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription } from "./ui/alert";
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

export default function Payment() {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState<any>(null);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPaymentConfirm, setShowPaymentConfirm] = useState(false);

  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const data = sessionStorage.getItem("bookingData");
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      // If no booking data, redirect to booking page
      navigate("/rezervacija");
    }
  }, [navigate]);

  if (!bookingData) {
    return null;
  }

  const selectedPackage = servicePackages.find(
    (pkg) => pkg.id === bookingData.servicePackage
  );

  // Validation functions
  const validateCardNumber = (value: string): string | null => {
    if (!value.trim()) return null;
    const cleaned = value.replace(/\s/g, '');
    if (!/^\d{13,19}$/.test(cleaned)) return "Broj kartice mora imati 13-19 cifara";
    return null;
  };

  const validateCardName = (value: string): string | null => {
    if (!value.trim()) return null;
    if (value.length < 3) return "Unesite puno ime";
    if (!/^[a-zA-ZčćžšđČĆŽŠĐ\s]+$/.test(value)) return "Dozvoljeni su samo slova";
    return null;
  };

  const validateExpiryDate = (value: string): string | null => {
    if (!value.trim()) return null;
    
    // Check format MM/YY or MM/YYYY
    if (!/^(0[1-9]|1[0-2])\/(\d{2}|\d{4})$/.test(value)) {
      return "Format: MM/GG";
    }
    
    const [month, year] = value.split('/');
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    let fullYear = parseInt(year);
    if (year.length === 2) {
      fullYear = 2000 + parseInt(year);
    }
    
    // Check if expired
    if (fullYear < currentYear || (fullYear === currentYear && parseInt(month) < currentMonth)) {
      return "Kartica je istekla";
    }
    
    return null;
  };

  const validateCVV = (value: string): string | null => {
    if (!value.trim()) return null;
    if (!/^\d{3,4}$/.test(value)) return "CVV mora imati 3-4 cifre";
    return null;
  };

  const validateField = (name: string, value: string): string | null => {
    switch (name) {
      case "cardNumber":
        return validateCardNumber(value);
      case "cardName":
        return validateCardName(value);
      case "expiryDate":
        return validateExpiryDate(value);
      case "cvv":
        return validateCVV(value);
      default:
        return null;
    }
  };

  const handleCardDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    
    // Format card number with spaces
    if (name === "cardNumber") {
      formattedValue = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    
    // Format expiry date
    if (name === "expiryDate") {
      formattedValue = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substr(0, 5);
    }
    
    // Limit CVV to 4 digits
    if (name === "cvv") {
      formattedValue = value.replace(/\D/g, '').substr(0, 4);
    }
    
    setCardData({
      ...cardData,
      [name]: formattedValue,
    });

    // Mark field as touched
    setTouchedFields({
      ...touchedFields,
      [name]: true,
    });

    // Validate field
    const error = validateField(name, formattedValue);
    setValidationErrors({
      ...validationErrors,
      [name]: error || "",
    });
  };

  const getInputClassName = (fieldName: string) => {
    if (!touchedFields[fieldName] || !cardData[fieldName as keyof typeof cardData]) {
      return "border-amber-200 focus:border-amber-400";
    }
    
    if (validationErrors[fieldName]) {
      return "border-red-400 focus:border-red-500 bg-red-50";
    }
    
    return "border-green-400 focus:border-green-500 bg-green-50";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if there are any validation errors for card payment
    if (paymentMethod === "card") {
      const hasErrors = Object.values(validationErrors).some(error => error !== "");
      if (hasErrors) {
        return;
      }
    }
    
    setShowPaymentConfirm(true);
  };

  const confirmPayment = () => {
    setShowPaymentConfirm(false);
    setProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
      sessionStorage.removeItem("bookingData");

      // Redirect to home after 3 seconds
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }, 2000);
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-green-300 bg-gradient-to-br from-green-50 to-emerald-50 shadow-2xl">
              <CardContent className="pt-12 pb-12 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Check className="h-12 w-12 text-white" />
                </div>
                <h1 className="mb-4 text-green-900">Rezervacija uspjesno potvrdjena</h1>
                <p className="text-neutral-700 mb-8 text-lg">
                  Hvala vam sto ste izabrali nasu sluzbu. Kontaktirat cemo vas u najkracem roku na
                  broj telefona {bookingData.phone}.
                </p>
                <div className="flex items-center justify-center gap-2 text-neutral-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">
                    Preusmjeravamo vas na pocetnu stranicu...
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/rezervacija")}
            className="mb-6 hover:bg-amber-50"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Povratak na rezervaciju
          </Button>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="mb-2 text-amber-900">Placanje</h1>
            <p className="text-neutral-600">Finalizujte vasu rezervaciju</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Payment Method */}
                <Card className="border-2 border-amber-200/50 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                    <h2 className="text-amber-900">Nacin placanja</h2>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2 p-4 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-all">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-5 w-5 text-amber-600" />
                            <span>Kreditna/Debitna kartica</span>
                          </div>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 p-4 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-all">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex-1 cursor-pointer">
                          Bankovna uplatnica
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2 p-4 border-2 border-amber-200 rounded-lg hover:bg-amber-50 transition-all">
                        <RadioGroupItem value="cash" id="cash" />
                        <Label htmlFor="cash" className="flex-1 cursor-pointer">
                          Gotovina (placanje u kancelariji)
                        </Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>

                {/* Card Details */}
                {paymentMethod === "card" && (
                  <Card className="border-2 border-amber-200/50 shadow-xl">
                    <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                      <h2 className="text-amber-900">Detalji kartice</h2>
                    </CardHeader>
                    <CardContent className="space-y-4 pt-6">
                      <div>
                        <Label htmlFor="cardNumber">Broj kartice *</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardData.cardNumber}
                          onChange={handleCardDataChange}
                          required
                          className={getInputClassName("cardNumber")}
                        />
                        {validationErrors.cardNumber && (
                          <p className="text-red-500 text-sm mt-1">
                            {validationErrors.cardNumber}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="cardName">Ime na kartici *</Label>
                        <Input
                          id="cardName"
                          placeholder="Ime Prezime"
                          value={cardData.cardName}
                          onChange={handleCardDataChange}
                          required
                          className={getInputClassName("cardName")}
                        />
                        {validationErrors.cardName && (
                          <p className="text-red-500 text-sm mt-1">
                            {validationErrors.cardName}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Datum isteka *</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/GG"
                            value={cardData.expiryDate}
                            onChange={handleCardDataChange}
                            required
                            className={getInputClassName("expiryDate")}
                          />
                          {validationErrors.expiryDate && (
                            <p className="text-red-500 text-sm mt-1">
                              {validationErrors.expiryDate}
                            </p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={cardData.cvv}
                            onChange={handleCardDataChange}
                            required
                            className={getInputClassName("cvv")}
                          />
                          {validationErrors.cvv && (
                            <p className="text-red-500 text-sm mt-1">
                              {validationErrors.cvv}
                            </p>
                          )}
                        </div>
                      </div>

                      <Alert className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
                        <Lock className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-900">
                          Vase informacije su sigurne i enkriptvane
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                )}

                {paymentMethod === "bank" && (
                  <Card className="border-2 border-amber-200/50 shadow-xl">
                    <CardContent className="pt-6">
                      <h3 className="mb-4 text-amber-900">Informacije za uplatu</h3>
                      <div className="space-y-2 text-sm bg-amber-50 p-4 rounded-lg">
                        <p><strong>Primalac:</strong> Pogrebna sluzba "Mir" d.o.o.</p>
                        <p><strong>Broj racuna:</strong> 1234567890123456</p>
                        <p><strong>Banka:</strong> UniCredit Bank</p>
                        <p><strong>Iznos:</strong> {selectedPackage?.price} KM</p>
                        <p><strong>Poziv na broj:</strong> {bookingData.phone}</p>
                        <p className="mt-4 text-neutral-600">
                          Nakon uplate, molimo kontaktirajte nas sa dokazom o uplati.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {paymentMethod === "cash" && (
                  <Card className="border-2 border-amber-200/50 shadow-xl">
                    <CardContent className="pt-6">
                      <h3 className="mb-4 text-amber-900">Placanje gotovinom</h3>
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p className="text-sm text-neutral-600 mb-4">
                          Placanje mozete izvrsiti u nasoj kancelariji na adresi:
                        </p>
                        <p className="mb-4">Ulica Mira 123, Sarajevo</p>
                        <p className="text-sm text-neutral-600">
                          Radno vrijeme: Ponedjeljak - Petak 08:00 - 20:00
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  disabled={processing}
                >
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Obradjujem...
                    </span>
                  ) : paymentMethod === "card" ? (
                    <>
                      <ShieldCheck className="mr-2 h-5 w-5" />
                      Potvrdi placanje
                    </>
                  ) : (
                    "Potvrdi rezervaciju"
                  )}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 border-2 border-amber-200/50 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-amber-50 to-transparent">
                  <h2 className="text-amber-900">Pregled narudzbe</h2>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div>
                    <p className="text-sm text-neutral-600">Paket</p>
                    <p className="text-amber-900">{selectedPackage?.name}</p>
                  </div>

                  <Separator className="bg-amber-200" />

                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Pokojnik</p>
                    <p>
                      {bookingData.deceasedFirstName} {bookingData.deceasedLastName}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Datum sahrane</p>
                    <p>{bookingData.burialDate}</p>
                  </div>

                  {bookingData.burialLocation && (
                    <div>
                      <p className="text-sm text-neutral-600 mb-2">Lokacija</p>
                      <p>{bookingData.burialLocation}</p>
                    </div>
                  )}

                  <Separator className="bg-amber-200" />

                  <div>
                    <p className="text-sm text-neutral-600 mb-2">Kontakt osoba</p>
                    <p>
                      {bookingData.clientFirstName} {bookingData.clientLastName}
                    </p>
                    <p className="text-sm text-neutral-600">{bookingData.phone}</p>
                  </div>

                  <Separator className="bg-amber-200" />

                  <div className="flex justify-between items-center pt-2 bg-amber-50 p-4 rounded-lg">
                    <p>Ukupno</p>
                    <p className="text-2xl text-amber-900">{selectedPackage?.price} KM</p>
                  </div>

                  <Alert className="bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
                    <ShieldCheck className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-xs text-blue-900">
                      Sigurna transakcija sa SSL enkripcijom
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Confirmation Dialog */}
      <AlertDialog open={showPaymentConfirm} onOpenChange={setShowPaymentConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Potvrda placanja</AlertDialogTitle>
            <AlertDialogDescription>
              Da li ste sigurni da zelite da nastavite sa placanjem?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Odustani</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmPayment}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Potvrdi
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}