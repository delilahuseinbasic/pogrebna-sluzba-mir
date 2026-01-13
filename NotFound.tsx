import { Link } from "react-router";
import { Home } from "lucide-react";
import { Button } from "./ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 flex items-center justify-center">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl mb-4 text-amber-900">404</h1>
          <h2 className="mb-4">Stranica nije pronadjena</h2>
          <p className="text-neutral-600 mb-8">
            Stranica koju trazite ne postoji ili je premestena.
          </p>
          <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="h-5 w-5" />
              Povratak na pocetnu
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
