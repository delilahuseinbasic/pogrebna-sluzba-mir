import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { User, Mail, Calendar, ShoppingBag, Heart, ArrowLeft } from 'lucide-react';
import Logo from './Logo';

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    navigate('/prijava');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Mock user activity data
  const userStats = {
    ordersCount: 0,
    savedObituaries: 0,
    memberSince: new Date().toLocaleDateString('bs-BA', { year: 'numeric', month: 'long', day: 'numeric' })
  };

  return (
    <div className="min-h-[calc(100vh-200px)] py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
          style={{ color: '#8b1f1f' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.1)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Nazad
        </Button>

        {/* Profile Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div 
              className="h-24 w-24 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(139, 31, 31, 0.1)' }}
            >
              <User className="h-12 w-12" style={{ color: '#8b1f1f' }} />
            </div>
          </div>
          <h1 className="text-neutral-900 mb-2">{user.name}</h1>
          <p className="text-neutral-600">{user.email}</p>
        </div>

        {/* Profile Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Account Info */}
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle>Informacije o nalogu</CardTitle>
              <CardDescription>Osnovni podaci o vasem nalogu</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-neutral-400" />
                <div>
                  <p className="text-sm text-neutral-500">Ime i prezime</p>
                  <p>{user.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-neutral-400" />
                <div>
                  <p className="text-sm text-neutral-500">Email adresa</p>
                  <p>{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-neutral-400" />
                <div>
                  <p className="text-sm text-neutral-500">Clan od</p>
                  <p>{userStats.memberSince}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Stats */}
          <Card className="border-neutral-200">
            <CardHeader>
              <CardTitle>Aktivnost</CardTitle>
              <CardDescription>Pregled vase aktivnosti</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-5 w-5" style={{ color: '#8b1f1f' }} />
                  <span>Narudzbe</span>
                </div>
                <span className="px-3 py-1 rounded" style={{ backgroundColor: 'rgba(139, 31, 31, 0.1)', color: '#8b1f1f' }}>
                  {userStats.ordersCount}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-50">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5" style={{ color: '#8b1f1f' }} />
                  <span>Sacuvane osmrtnice</span>
                </div>
                <span className="px-3 py-1 rounded" style={{ backgroundColor: 'rgba(139, 31, 31, 0.1)', color: '#8b1f1f' }}>
                  {userStats.savedObituaries}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-neutral-200">
          <CardHeader>
            <CardTitle>Brze akcije</CardTitle>
            <CardDescription>Pristupite nasim uslugama</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2"
                onClick={() => navigate('/osmrtnice')}
                style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Heart className="h-6 w-6" />
                <span>Osmrtnice</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2"
                onClick={() => navigate('/shop')}
                style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <ShoppingBag className="h-6 w-6" />
                <span>Shop</span>
              </Button>
              <Button
                variant="outline"
                className="h-auto py-4 flex flex-col items-center gap-2"
                onClick={() => navigate('/rezervacija')}
                style={{ borderColor: '#8b1f1f', color: '#8b1f1f' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(139, 31, 31, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Calendar className="h-6 w-6" />
                <span>Rezervacija</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            onClick={handleLogout}
            className="text-neutral-600 hover:text-red-600 border-neutral-300 hover:border-red-300"
          >
            Odjavi se
          </Button>
        </div>
      </div>
    </div>
  );
}
