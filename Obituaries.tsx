import { useState } from "react";
import { Link } from "react-router";
import { Search, Calendar, MapPin, Flame, Filter } from "lucide-react";
import { obituaries } from "./mockData";
import { Input } from "./ui/input";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function Obituaries() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCity, setSelectedCity] = useState<string>("svi");
  const [selectedMonth, setSelectedMonth] = useState<string>("svi");
  const [selectedYear, setSelectedYear] = useState<string>("svi");

  // Get unique cities for filter
  const cities = ["svi", ...Array.from(new Set(obituaries.map(o => o.city).filter(Boolean)))];

  // Get unique months and years from death dates
  const getMonthYear = (dateString: string) => {
    // Format: "DD.MM.YYYY"
    const parts = dateString.split(".");
    return { month: parts[1], year: parts[2] };
  };

  const months = ["svi", ...Array.from(new Set(obituaries.map(o => getMonthYear(o.deathDate).month)))].sort();
  const years = ["svi", ...Array.from(new Set(obituaries.map(o => getMonthYear(o.deathDate).year)))].sort().reverse();

  const monthNames: { [key: string]: string } = {
    "01": "Januar",
    "02": "Februar",
    "03": "Mart",
    "04": "April",
    "05": "Maj",
    "06": "Juni",
    "07": "Juli",
    "08": "August",
    "09": "Septembar",
    "10": "Oktobar",
    "11": "Novembar",
    "12": "Decembar",
  };

  const filteredObituaries = obituaries.filter((obit) => {
    const fullName = `${obit.firstName} ${obit.lastName}`.toLowerCase();
    const matchesSearch = fullName.includes(searchTerm.toLowerCase());
    const matchesCity = selectedCity === "svi" || obit.city === selectedCity;
    
    const { month, year } = getMonthYear(obit.deathDate);
    const matchesMonth = selectedMonth === "svi" || month === selectedMonth;
    const matchesYear = selectedYear === "svi" || year === selectedYear;
    
    return matchesSearch && matchesCity && matchesMonth && matchesYear;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Decorative header */}
      <div className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-1/4 w-48 h-48 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
          <div className="absolute bottom-8 right-1/4 w-32 h-32 border rounded-full" style={{ borderColor: '#8b1f1f' }}></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="flex items-center gap-2" style={{ color: '#8b1f1f' }}>
                <div className="h-px w-12" style={{ backgroundColor: '#8b1f1f' }}></div>
                <Flame className="h-6 w-6" />
                <div className="h-px w-12" style={{ backgroundColor: '#8b1f1f' }}></div>
              </div>
            </div>
            <h1 className="mb-4">Osmrtnice</h1>
            <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
              Sjecanje na one koje smo voljeli
            </p>

            {/* Search and Filters */}
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-5 gap-4 mb-4">
                {/* Search */}
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none" />
                  <Input
                    type="text"
                    placeholder="Pretrazite po imenu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white text-neutral-900 border-neutral-300"
                  />
                </div>

                {/* City Filter */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none z-10" />
                  <Select value={selectedCity} onValueChange={setSelectedCity}>
                    <SelectTrigger className="pl-9 bg-white text-neutral-900 border-neutral-300">
                      <SelectValue placeholder="Grad" />
                    </SelectTrigger>
                    <SelectContent>
                      {cities.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city === "svi" ? "Svi gradovi" : city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Month Filter */}
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none z-10" />
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="pl-9 bg-white text-neutral-900 border-neutral-300">
                      <SelectValue placeholder="Mjesec" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month} value={month}>
                          {month === "svi" ? "Svi mjeseci" : monthNames[month]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Year Filter */}
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none z-10" />
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="pl-9 bg-white text-neutral-900 border-neutral-300">
                      <SelectValue placeholder="Godina" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={year}>
                          {year === "svi" ? "Sve godine" : year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Active filters info */}
              {(searchTerm || selectedCity !== "svi" || selectedMonth !== "svi" || selectedYear !== "svi") && (
                <div className="flex flex-wrap items-center gap-2 text-sm" style={{ color: '#fbe8e8' }}>
                  <span className="font-semibold">Pronadeno: {filteredObituaries.length} rezultata</span>
                  {selectedCity !== "svi" && (
                    <span className="px-3 py-1 rounded-full text-white flex items-center gap-1" style={{ backgroundColor: '#8b1f1f' }}>
                      <MapPin className="h-3 w-3" />
                      {selectedCity}
                    </span>
                  )}
                  {selectedMonth !== "svi" && (
                    <span className="px-3 py-1 rounded-full text-white flex items-center gap-1" style={{ backgroundColor: '#8b1f1f' }}>
                      <Calendar className="h-3 w-3" />
                      {monthNames[selectedMonth]}
                    </span>
                  )}
                  {selectedYear !== "svi" && (
                    <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#8b1f1f' }}>
                      {selectedYear}
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Obituaries Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredObituaries.map((obituary) => (
              <Card key={obituary.id} className="overflow-hidden hover:shadow-2xl transition-all border-2" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8b1f1f'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(139, 31, 31, 0.3)'}>
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row gap-4 p-6">
                    {/* Photo with frame */}
                    <div className="relative mx-auto sm:mx-0 flex-shrink-0 w-48 h-48">
                      <div className="absolute -inset-1 rounded-lg" style={{ background: 'linear-gradient(to bottom right, #f8d1d1, #f2a9a9)' }}></div>
                      <div className="absolute -inset-0.5 bg-neutral-900 rounded-lg"></div>
                      <img
                        src={obituary.imageUrl}
                        alt={`${obituary.firstName} ${obituary.lastName}`}
                        className="relative w-full h-full rounded-lg object-contain border-2 border-white grayscale"
                      />
                    </div>

                    <div className="flex-grow text-center sm:text-left">
                      <div className="text-xs mb-1" style={{ color: '#8b1f1f' }}>In memoriam</div>
                      <h2 className="mb-2">
                        {obituary.firstName} {obituary.lastName}
                      </h2>
                      <p className="text-neutral-600 mb-3">
                        {obituary.birthDate} - {obituary.deathDate}
                      </p>

                      <p className="text-sm text-neutral-600 mb-4 line-clamp-2">
                        {obituary.biography}
                      </p>

                      {obituary.burialDate && (
                        <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2 justify-center sm:justify-start">
                          <Calendar className="h-4 w-4" style={{ color: '#8b1f1f' }} />
                          <span>Sahrana: {obituary.burialDate}</span>
                        </div>
                      )}

                      {obituary.city && (
                        <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2 justify-center sm:justify-start">
                          <MapPin className="h-4 w-4" style={{ color: '#8b1f1f' }} />
                          <span>{obituary.city}</span>
                        </div>
                      )}

                      {/* Candle count */}
                      <div className="flex items-center gap-2 text-sm mb-4 justify-center sm:justify-start" style={{ color: '#6b1717' }}>
                        <Flame className="h-4 w-4" />
                        <span>{obituary.candles} {obituary.candles === 1 ? 'svijeca' : 'svijeca'}</span>
                      </div>

                      <Button asChild variant="outline" size="sm" style={{ borderColor: '#f2a9a9' }} className="hover:opacity-80">
                        <Link to={`/osmrtnice/${obituary.id}`}>
                          Procitajte vise
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredObituaries.length === 0 && (
            <div className="text-center py-12">
              <p className="text-neutral-600 mb-2">
                Nema rezultata za vasu pretragu
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCity("svi");
                  setSelectedMonth("svi");
                  setSelectedYear("svi");
                }}
                style={{ borderColor: '#f2a9a9' }}
                className="hover:opacity-80"
              >
                Resetuj filtere
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}