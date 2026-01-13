import { useState } from "react";
import { useNavigate } from "react-router";
import { ShoppingCart as CartIcon, X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "./CartContext";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Badge } from "./ui/badge";
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

export default function ShoppingCart() {
  const { items, removeItem, updateQuantity, getTotalPrice, getItemCount, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleCheckout = () => {
    setOpen(false);
    navigate("/rezervacija");
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "coffin":
        return "Kovceg";
      case "flower":
        return "Cvijece";
      case "musician":
        return "Muzicar";
      case "photographer":
        return "Fotograf";
      default:
        return type;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "coffin":
        return "bg-amber-100 text-amber-900 border-amber-300";
      case "flower":
        return "bg-green-100 text-green-900 border-green-300";
      case "musician":
        return "bg-purple-100 text-purple-900 border-purple-300";
      case "photographer":
        return "bg-blue-100 text-blue-900 border-blue-300";
      default:
        return "";
    }
  };

  const handleRemoveItem = (itemId: string) => {
    setItemToRemove(itemId);
    setShowRemoveConfirm(true);
  };

  const confirmRemoveItem = () => {
    if (itemToRemove) {
      removeItem(itemToRemove);
      setItemToRemove(null);
    }
    setShowRemoveConfirm(false);
  };

  const handleClearCart = () => {
    setShowClearConfirm(true);
  };

  const confirmClearCart = () => {
    clearCart();
    setShowClearConfirm(false);
  };

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="relative border-amber-300 hover:bg-amber-50"
          >
            <CartIcon className="h-5 w-5 text-amber-700" />
            {getItemCount() > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-amber-600">
                {getItemCount()}
              </Badge>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2 text-amber-900">
              <ShoppingBag className="h-6 w-6" />
              Vasa košarica
            </SheetTitle>
            <SheetDescription className="sr-only">
              Pregled odabranih proizvoda i usluga u vasoj košarici
            </SheetDescription>
          </SheetHeader>

          <div className="mt-8">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <CartIcon className="h-16 w-16 text-neutral-300 mx-auto mb-4" />
                <p className="text-neutral-600 mb-2">Vasa košarica je prazna</p>
                <p className="text-sm text-neutral-500">
                  Dodajte proizvode i usluge u košaricu
                </p>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <Card key={item.id} className="border-amber-200/50">
                      <CardContent className="p-4">
                        <div className="flex gap-4">
                          {item.imageUrl && (
                            <img
                              src={item.imageUrl}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                          )}
                          <div className="flex-grow">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <Badge
                                  variant="outline"
                                  className={`text-xs mb-1 ${getTypeBadgeColor(item.type)}`}
                                >
                                  {getTypeLabel(item.type)}
                                </Badge>
                                <h3 className="text-sm">{item.name}</h3>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                                onClick={() => handleRemoveItem(item.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>

                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1">
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity - 1)
                                  }
                                >
                                  <Minus className="h-3 w-3" />
                                </Button>
                                <span className="text-sm w-8 text-center">
                                  {item.quantity}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6"
                                  onClick={() =>
                                    updateQuantity(item.id, item.quantity + 1)
                                  }
                                >
                                  <Plus className="h-3 w-3" />
                                </Button>
                              </div>
                              <p className="text-amber-900">
                                {item.price * item.quantity} KM
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-6 bg-amber-200" />

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-neutral-600">Broj stavki:</span>
                    <span>{getItemCount()}</span>
                  </div>

                  <div className="flex justify-between items-center text-xl">
                    <span className="text-amber-900">Ukupno:</span>
                    <span className="text-amber-900">{getTotalPrice()} KM</span>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button
                      className="w-full bg-amber-600 hover:bg-amber-700"
                      size="lg"
                      onClick={handleCheckout}
                    >
                      <ShoppingBag className="mr-2 h-5 w-5" />
                      Naruci
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-red-300 text-red-600 hover:bg-red-50"
                      onClick={handleClearCart}
                    >
                      <Trash2 className="mr-2 h-4 w-4" />
                      Isprazni košaricu
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </SheetContent>
      </Sheet>

      <AlertDialog open={showRemoveConfirm} onOpenChange={setShowRemoveConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Da li ste sigurni?</AlertDialogTitle>
            <AlertDialogDescription>
              Da li ste sigurni da želite ukloniti ovu stavku iz košarice?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Odustani</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmRemoveItem}
              className="bg-red-600 hover:bg-red-700"
            >
              Ukloni
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showClearConfirm} onOpenChange={setShowClearConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Da li ste sigurni?</AlertDialogTitle>
            <AlertDialogDescription>
              Da li ste sigurni da želite isprazniti košaricu?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Odustani</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmClearCart}
              className="bg-red-600 hover:bg-red-700"
            >
              Isprazni
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}