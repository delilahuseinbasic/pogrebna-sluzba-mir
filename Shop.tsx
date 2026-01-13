import { useState } from "react";
import { ShoppingCart as CartIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useCart } from "./CartContext";
import { toast } from "sonner";
import {
  coffinOptions,
  flowerArrangements,
  musicians,
  photographers,
} from "./mockData";

type Category = "all" | "coffins" | "flowers" | "musicians" | "photographers";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const { addItem } = useCart();

  const categories = [
    { id: "all" as Category, name: "Sve kategorije" },
    { id: "coffins" as Category, name: "Kovčezi" },
    { id: "flowers" as Category, name: "Cvijeće" },
    { id: "musicians" as Category, name: "Muzičari" },
    { id: "photographers" as Category, name: "Fotografi" },
  ];

  const handleAddToCart = (item: any, type: string) => {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
      type,
    });
    toast.success(`${item.name} dodato u košaricu`);
  };

  const filteredProducts = () => {
    let products: any[] = [];

    if (selectedCategory === "all" || selectedCategory === "coffins") {
      products = [
        ...products,
        ...coffinOptions.map((item) => ({ ...item, category: "Kovčezi", type: "coffin" })),
      ];
    }
    if (selectedCategory === "all" || selectedCategory === "flowers") {
      products = [
        ...products,
        ...flowerArrangements.map((item) => ({ ...item, category: "Cvijeće", type: "flower" })),
      ];
    }
    if (selectedCategory === "all" || selectedCategory === "musicians") {
      products = [
        ...products,
        ...musicians.map((item) => ({ ...item, category: "Muzičari", type: "musician" })),
      ];
    }
    if (selectedCategory === "all" || selectedCategory === "photographers") {
      products = [
        ...products,
        ...photographers.map((item) => ({ ...item, category: "Fotografi", type: "photographer" })),
      ];
    }

    return products;
  };

  const products = filteredProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <CartIcon className="h-8 w-8" style={{ color: '#8b1f1f' }} />
              <h1>Web Shop</h1>
            </div>
            <p className="text-neutral-300 text-lg">
              Pregledajte našu ponudu proizvoda i usluga za dostojanstven oprostaj
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {categories.map((category) => {
            return (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                style={
                  selectedCategory === category.id
                    ? { backgroundColor: '#8b1f1f', color: 'white' }
                    : {}
                }
                className={
                  selectedCategory === category.id
                    ? "hover:opacity-90 text-white"
                    : ""
                }
              >
                {category.name}
              </Button>
            );
          })}
        </div>

        {/* Products Count */}
        <div className="text-center mb-8">
          <p className="text-neutral-600">
            Prikazano {products.length} proizvoda
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={`${product.type}-${product.id}`}
              className="overflow-hidden border-2 border-neutral-200 transition-all hover:shadow-lg"
              style={{ borderColor: '' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#8b1f1f'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                {product.imageUrl && (
                  <div className="relative h-48 bg-neutral-200 overflow-hidden">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className={`w-full h-full ${product.category === 'Cvijeće' ? 'object-contain' : 'object-cover'}`}
                    />
                    {/* Fade overlay for flowers */}
                    {product.category === 'Cvijeće' && (
                      <div 
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: 'linear-gradient(to bottom, rgba(229, 229, 229, 0.3) 0%, transparent 20%, transparent 80%, rgba(229, 229, 229, 0.3) 100%)'
                        }}
                      />
                    )}
                    <div className="absolute top-2 right-2 bg-neutral-900 text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </div>
                  </div>
                )}

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="mb-2">{product.name}</h3>
                  
                  {/* Additional Details */}
                  {product.material && (
                    <p className="text-sm text-neutral-600 mb-2">
                      Material: {product.material}
                    </p>
                  )}
                  {product.instrument && (
                    <p className="text-sm text-neutral-600 mb-2">
                      Instrument: {product.instrument}
                    </p>
                  )}
                  {product.experience && (
                    <p className="text-sm text-neutral-600 mb-2">
                      {product.experience}
                    </p>
                  )}

                  <p className="text-sm text-neutral-700 mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features for Packages */}
                  {product.features && (
                    <ul className="text-sm text-neutral-600 mb-4 space-y-1">
                      {product.features.slice(0, 3).map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span style={{ color: '#8b1f1f' }} className="mt-1">•</span>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-neutral-400 text-xs">
                          +{product.features.length - 3} više...
                        </li>
                      )}
                    </ul>
                  )}

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
                    <div>
                      <span style={{ color: '#8b1f1f' }} className="text-2xl">{product.price} KM</span>
                    </div>
                    <Button
                      onClick={() => handleAddToCart(product, product.type)}
                      style={{ backgroundColor: '#8b1f1f' }}
                      className="hover:opacity-90 text-white"
                    >
                      <CartIcon className="h-4 w-4 mr-2" />
                      Dodaj
                    </Button>
                  </div>

                  {product.popular && (
                    <div className="mt-3 text-center">
                      <span className="inline-block text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#fbe8e8', color: '#8b1f1f' }}>
                        Najpopularniji
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-500 text-lg">
              Nema proizvoda u ovoj kategoriji
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
          <h2 className="text-center mb-6">Informacije o narudžbini</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-lg mb-2">Brza dostava</h3>
              <p className="text-sm text-neutral-600">
                Svi proizvodi dostupni u roku od 24h
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Sigurna plaćanja</h3>
              <p className="text-sm text-neutral-600">
                Plaćanje gotovinom ili karticom
              </p>
            </div>
            <div>
              <h3 className="text-lg mb-2">Podrška 24/7</h3>
              <p className="text-sm text-neutral-600">
                Uvijek dostupni za sva vaša pitanja
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}