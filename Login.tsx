import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router';
import { useAuth } from './AuthContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Eye, EyeOff, Loader2, Lock, Mail } from 'lucide-react';
import { toast } from 'sonner@2.0.3';
import Logo from './Logo';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Molimo popunite sva polja');
      return;
    }

    const success = await login(email, password);
    
    if (success) {
      toast.success('Uspjesno ste se prijavili!');
      navigate(from, { replace: true });
    } else {
      toast.error('Pogresni email ili lozinka');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo className="h-16 w-16" style={{ color: '#8b1f1f' }} />
          </div>
          <h1 className="text-neutral-900 mb-2">Dobrodosli nazad</h1>
          <p className="text-neutral-600">Prijavite se na vas nalog</p>
        </div>

        <Card className="border-neutral-200 shadow-lg">
          <CardHeader>
            <CardTitle>Prijava</CardTitle>
            <CardDescription>Unesite vase pristupne podatke</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email adresa</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="vas.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Lozinka</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full text-white"
                style={{ backgroundColor: '#8b1f1f' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#6b1717'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#8b1f1f'}
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Prijava u toku...
                  </>
                ) : (
                  'Prijavite se'
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <div className="text-sm text-center text-neutral-600">
              Nemate nalog?{' '}
              <Link 
                to="/registracija" 
                className="hover:underline"
                style={{ color: '#8b1f1f' }}
              >
                Registrujte se
              </Link>
            </div>
          </CardFooter>
        </Card>

        {/* Demo Credentials Info */}
        <div className="mt-6 p-4 bg-neutral-100 rounded-lg border border-neutral-200">
          <p className="text-sm text-neutral-600 mb-2">
            <strong>Demo nalog:</strong>
          </p>
          <p className="text-xs text-neutral-500">
            Za testiranje, prvo se registrujte ili koristite bilo koji email/lozinku koju ste ranije kreirali.
          </p>
        </div>
      </div>
    </div>
  );
}