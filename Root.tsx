import { Outlet, Link, useLocation } from "react-router";
import { Phone, Mail, LogIn, LogOut, User } from "lucide-react";
import Logo from "./Logo";
import ShoppingCart from "./ShoppingCart";
import { Toaster } from "./ui/sonner";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { useState } from "react";
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

export default function Root() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutConfirm(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-neutral-50 to-neutral-100">
      <Toaster position="top-right" />
      {/* Decorative top border */}
      <div className="h-1" style={{ background: 'linear-gradient(to right, #8b1f1f, #6b1717, #8b1f1f)' }}></div>
      
      {/* Header */}
      <header className="bg-neutral-900 text-white shadow-2xl sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(139, 31, 31, 0.3)' }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="h-12 w-12 transition-transform group-hover:scale-110" style={{ color: '#8b1f1f' }} />
              <div>
                <h1 className="text-xl">Pogrebna sluzba "Mir"</h1>
                
              </div>
            </Link>

            <nav className="hidden md:flex gap-6">
              <Link
                to="/"
                className="transition-all"
                style={{
                  color: isActive("/") ? "#8b1f1f" : "",
                  borderBottom: isActive("/") ? "2px solid #8b1f1f" : ""
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b1f1f"}
                onMouseLeave={(e) => !isActive("/") && (e.currentTarget.style.color = "")}
              >
                Pocetna
              </Link>
              <Link
                to="/osmrtnice"
                className="transition-all"
                style={{
                  color: isActive("/osmrtnice") ? "#8b1f1f" : "",
                  borderBottom: isActive("/osmrtnice") ? "2px solid #8b1f1f" : ""
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b1f1f"}
                onMouseLeave={(e) => !isActive("/osmrtnice") && (e.currentTarget.style.color = "")}
              >
                Osmrtnice
              </Link>
              <Link
                to="/usluge"
                className="transition-all"
                style={{
                  color: isActive("/usluge") ? "#8b1f1f" : "",
                  borderBottom: isActive("/usluge") ? "2px solid #8b1f1f" : ""
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b1f1f"}
                onMouseLeave={(e) => !isActive("/usluge") && (e.currentTarget.style.color = "")}
              >
                Usluge
              </Link>
              <Link
                to="/shop"
                className="transition-all"
                style={{
                  color: isActive("/shop") ? "#8b1f1f" : "",
                  borderBottom: isActive("/shop") ? "2px solid #8b1f1f" : ""
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b1f1f"}
                onMouseLeave={(e) => !isActive("/shop") && (e.currentTarget.style.color = "")}
              >
                Shop
              </Link>
              <Link
                to="/rezervacija"
                className="transition-all"
                style={{
                  color: isActive("/rezervacija") ? "#8b1f1f" : "",
                  borderBottom: isActive("/rezervacija") ? "2px solid #8b1f1f" : ""
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b1f1f"}
                onMouseLeave={(e) => !isActive("/rezervacija") && (e.currentTarget.style.color = "")}
              >
                Rezervacija
              </Link>
              <Link
                to="/kontakt"
                className="transition-all"
                style={{
                  color: isActive("/kontakt") ? "#8b1f1f" : "",
                  borderBottom: isActive("/kontakt") ? "2px solid #8b1f1f" : ""
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#8b1f1f"}
                onMouseLeave={(e) => !isActive("/kontakt") && (e.currentTarget.style.color = "")}
              >
                Kontakt
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <ShoppingCart />
              
              {/* Auth Buttons */}
              {user ? (
                <div className="flex items-center gap-2">
                  <Link to="/profil">
                    <div 
                      className="hidden md:flex items-center gap-2 px-3 py-1 rounded cursor-pointer transition-all" 
                      style={{ backgroundColor: 'rgba(139, 31, 31, 0.1)' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.1)'}
                    >
                      <User className="h-4 w-4" style={{ color: '#8b1f1f' }} />
                      <span className="text-sm" style={{ color: '#8b1f1f' }}>{user.name}</span>
                    </div>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLogoutClick}
                    className="text-white hover:text-white"
                    style={{ backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.2)';
                      e.currentTarget.style.color = '#8b1f1f';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    <LogOut className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Odjava</span>
                  </Button>
                </div>
              ) : (
                <Link to="/prijava">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-white hover:text-white"
                    style={{ backgroundColor: 'transparent' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.2)';
                      e.currentTarget.style.color = '#8b1f1f';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = 'white';
                    }}
                  >
                    <LogIn className="h-4 w-4 md:mr-2" />
                    <span className="hidden md:inline">Prijava</span>
                  </Button>
                </Link>
              )}

              <div className="hidden lg:flex flex-col items-end">
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  <span>033 123 456</span>
                </div>
                <span className="text-xs text-neutral-400">Non-stop 24/7</span>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex gap-4 pb-4 overflow-x-auto">
            <Link
              to="/"
              className="whitespace-nowrap text-sm"
              style={{
                color: isActive("/") ? "#8b1f1f" : "",
                borderBottom: isActive("/") ? "2px solid #8b1f1f" : "",
                paddingBottom: isActive("/") ? "4px" : ""
              }}
            >
              Pocetna
            </Link>
            <Link
              to="/osmrtnice"
              className="whitespace-nowrap text-sm"
              style={{
                color: isActive("/osmrtnice") ? "#8b1f1f" : "",
                borderBottom: isActive("/osmrtnice") ? "2px solid #8b1f1f" : "",
                paddingBottom: isActive("/osmrtnice") ? "4px" : ""
              }}
            >
              Osmrtnice
            </Link>
            <Link
              to="/usluge"
              className="whitespace-nowrap text-sm"
              style={{
                color: isActive("/usluge") ? "#8b1f1f" : "",
                borderBottom: isActive("/usluge") ? "2px solid #8b1f1f" : "",
                paddingBottom: isActive("/usluge") ? "4px" : ""
              }}
            >
              Usluge
            </Link>
            <Link
              to="/shop"
              className="whitespace-nowrap text-sm"
              style={{
                color: isActive("/shop") ? "#8b1f1f" : "",
                borderBottom: isActive("/shop") ? "2px solid #8b1f1f" : "",
                paddingBottom: isActive("/shop") ? "4px" : ""
              }}
            >
              Shop
            </Link>
            <Link
              to="/rezervacija"
              className="whitespace-nowrap text-sm"
              style={{
                color: isActive("/rezervacija") ? "#8b1f1f" : "",
                borderBottom: isActive("/rezervacija") ? "2px solid #8b1f1f" : "",
                paddingBottom: isActive("/rezervacija") ? "4px" : ""
              }}
            >
              Rezervacija
            </Link>
            <Link
              to="/kontakt"
              className="whitespace-nowrap text-sm"
              style={{
                color: isActive("/kontakt") ? "#8b1f1f" : "",
                borderBottom: isActive("/kontakt") ? "2px solid #8b1f1f" : "",
                paddingBottom: isActive("/kontakt") ? "4px" : ""
              }}
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-8 mt-12" style={{ borderTop: '2px solid rgba(139, 31, 31, 0.3)' }}>
        <div className="container mx-auto px-4">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-px" style={{ background: 'linear-gradient(to right, transparent, #8b1f1f, transparent)' }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Logo className="h-8 w-8" style={{ color: '#8b1f1f' }} />
                <h3>Pogrebna sluzba "Mir"</h3>
              </div>
              <p className="text-neutral-400 text-sm">
                Pruzamo profesionalne pogrebne usluge sa postovanjem, dostojanstvom i brigom. Dostupni smo 24/7 za sve vase potrebe.
              </p>
            </div>

            <div>
              <h3 className="mb-4" style={{ color: '#8b1f1f' }}>Kontakt</h3>
              <div className="space-y-2 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" style={{ color: '#8b1f1f' }} />
                  <span>033 123 456 (Non-stop)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" style={{ color: '#8b1f1f' }} />
                  <span>info@pogrebnasluzbamir.ba</span>
                </div>
                <p>Ulica Mira 123, Sarajevo</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4" style={{ color: '#8b1f1f' }}>Radno vrijeme</h3>
              <div className="text-sm text-neutral-400 space-y-1">
                <p>Ponedjeljak - Petak: 08:00 - 20:00</p>
                <p>Subota: 09:00 - 18:00</p>
                <p>Nedjelja: 10:00 - 16:00</p>
                <p className="mt-3" style={{ color: '#8b1f1f' }}>Hitna linija: 24/7</p>
              </div>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-6 text-center text-sm text-neutral-400">
            <p>&copy; 2024 Pogrebna sluzba "Mir". Sva prava zadrzana.</p>
          </div>
        </div>
      </footer>

      {/* Logout Confirmation Dialog */}
      <AlertDialog open={showLogoutConfirm} onOpenChange={setShowLogoutConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Odjava</AlertDialogTitle>
            <AlertDialogDescription>
              Da li ste sigurni da zelite da se odjavite?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Odustani</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmLogout}
              style={{ backgroundColor: '#6b1717' }}
              className="hover:opacity-90"
            >
              Odjava
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}