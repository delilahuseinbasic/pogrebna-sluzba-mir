import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { coffinOptions, flowerArrangements, musicians, photographers } from "../utils/mockData";
import { Music, Camera, ShoppingCart, Check } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { toast } from "sonner";

export default function ProductGallery() {
  const { addItem } = useCart();
  const [addedItems, setAddedItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (
    id: string,
    type: "coffin" | "flower" | "musician" | "photographer",
    name: string,
    price: number,
    imageUrl?: string
  ) => {
    addItem({ id, type, name, price, imageUrl });
    setAddedItems((prev) => new Set(prev).add(id));
    toast.success(`${name} dodato u košaricu!`);
    
    // Remove the checkmark after 2 seconds
    setTimeout(() => {
      setAddedItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="py-20 bg-gradient-to-b from-neutral-50 to-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="mb-4" style={{ color: '#4a0e0e' }}>Nasi proizvodi i usluge</h2>
          <div className="w-24 h-1 mx-auto mb-4" style={{ background: 'linear-gradient(to right, #8b1f1f, #6b1717)' }}></div>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Izaberite iz nase ponude kvalitetnih proizvoda i profesionalnih usluga
          </p>
        </div>

        <Tabs defaultValue="coffins" className="max-w-7xl mx-auto">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="coffins">Kovcezi</TabsTrigger>
            <TabsTrigger value="flowers">Cvijece</TabsTrigger>
            <TabsTrigger value="musicians">Muzicari</TabsTrigger>
            <TabsTrigger value="photographers">Fotografi</TabsTrigger>
          </TabsList>

          {/* Coffins */}
          <TabsContent value="coffins">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffinOptions.map((coffin) => (
                <Card key={coffin.id} className="border-2 hover:shadow-2xl transition-all overflow-hidden group" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <div className="relative h-64 overflow-hidden bg-neutral-100">
                    <img
                      src={coffin.imageUrl}
                      alt={coffin.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="text-white px-4 py-2 rounded-full shadow-lg absolute top-4 right-4" style={{ backgroundColor: '#6b1717' }}>
                      {coffin.price} KM
                    </div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <h3 className="mb-2" style={{ color: '#4a0e0e' }}>{coffin.name}</h3>
                    <p className="text-sm text-neutral-600 mb-3">
                      <strong>Materijal:</strong> {coffin.material}
                    </p>
                    <p className="text-sm text-neutral-600 mb-4">
                      {coffin.description}
                    </p>
                    <Button
                      className={`w-full ${
                        addedItems.has(coffin.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "hover:opacity-90"
                      }`}
                      style={!addedItems.has(coffin.id) ? { backgroundColor: '#6b1717' } : {}}
                      onClick={() =>
                        handleAddToCart(
                          coffin.id,
                          "coffin",
                          coffin.name,
                          coffin.price,
                          coffin.imageUrl
                        )
                      }
                    >
                      {addedItems.has(coffin.id) ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Dodato
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Dodaj u košaricu
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Flowers */}
          <TabsContent value="flowers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flowerArrangements.map((flower) => (
                <Card key={flower.id} className="border-2 hover:shadow-2xl transition-all overflow-hidden group" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <div className="relative h-64 overflow-hidden bg-neutral-100">
                    <img
                      src={flower.imageUrl}
                      alt={flower.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="bg-green-600 text-white px-4 py-2 rounded-full shadow-lg absolute top-4 right-4">
                      {flower.price} KM
                    </div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <h3 className="mb-2" style={{ color: '#4a0e0e' }}>{flower.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      {flower.description}
                    </p>
                    <Button
                      className={`w-full ${
                        addedItems.has(flower.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-green-600 hover:bg-green-700"
                      }`}
                      onClick={() =>
                        handleAddToCart(
                          flower.id,
                          "flower",
                          flower.name,
                          flower.price,
                          flower.imageUrl
                        )
                      }
                    >
                      {addedItems.has(flower.id) ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Dodato
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Dodaj u košaricu
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Musicians */}
          <TabsContent value="musicians">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {musicians.map((musician) => (
                <Card key={musician.id} className="border-2 hover:shadow-2xl transition-all overflow-hidden group" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <div className="relative h-64 overflow-hidden bg-neutral-100">
                    <img
                      src={musician.imageUrl}
                      alt={musician.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg absolute top-4 right-4">
                      {musician.price} KM
                    </div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="h-5 w-5" style={{ color: '#8b1f1f' }} />
                      <h3 style={{ color: '#4a0e0e' }}>{musician.name}</h3>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">
                      <strong>Instrument:</strong> {musician.instrument}
                    </p>
                    <Button
                      className={`w-full ${
                        addedItems.has(musician.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-purple-600 hover:bg-purple-700"
                      }`}
                      onClick={() =>
                        handleAddToCart(
                          musician.id,
                          "musician",
                          musician.name,
                          musician.price,
                          musician.imageUrl
                        )
                      }
                    >
                      {addedItems.has(musician.id) ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Dodato
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Dodaj u košaricu
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Photographers */}
          <TabsContent value="photographers">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photographers.map((photographer) => (
                <Card key={photographer.id} className="border-2 hover:shadow-2xl transition-all overflow-hidden group" style={{ borderColor: 'rgba(139, 31, 31, 0.3)' }}>
                  <div className="relative h-64 overflow-hidden bg-neutral-100">
                    <img
                      src={photographer.imageUrl}
                      alt={photographer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg absolute top-4 right-4">
                      {photographer.price} KM
                    </div>
                  </div>
                  <CardContent className="pt-6 pb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Camera className="h-5 w-5" style={{ color: '#8b1f1f' }} />
                      <h3 style={{ color: '#4a0e0e' }}>{photographer.name}</h3>
                    </div>
                    <p className="text-sm text-neutral-600 mb-4">
                      {photographer.experience}
                    </p>
                    <Button
                      className={`w-full ${
                        addedItems.has(photographer.id)
                          ? "bg-green-600 hover:bg-green-700"
                          : "bg-blue-600 hover:bg-blue-700"
                      }`}
                      onClick={() =>
                        handleAddToCart(
                          photographer.id,
                          "photographer",
                          photographer.name,
                          photographer.price,
                          photographer.imageUrl
                        )
                      }
                    >
                      {addedItems.has(photographer.id) ? (
                        <>
                          <Check className="mr-2 h-4 w-4" />
                          Dodato
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Dodaj u košaricu
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}