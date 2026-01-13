import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./Home";
import Obituaries from "./Obituaries";
import ObituaryDetail from "./ObituaryDetail";
import Services from "./Services";
import Booking from "./Booking";
import Payment from "./Payment";
import Contact from "./Contact";
import Shop from "./Shop";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import NotFound from "./NotFound";
import PsihološkaPodrška from "./PsihološkaPodrška";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "osmrtnice", Component: Obituaries },
      { path: "osmrtnice/:id", Component: ObituaryDetail },
      { path: "usluge", Component: Services },
      { path: "rezervacija", Component: Booking },
      { path: "placanje", Component: Payment },
      { path: "shop", Component: Shop },
      { path: "psiholoska-podrska", Component: PsihološkaPodrška },
      { path: "kontakt", Component: Contact },
      { path: "prijava", Component: Login },
      { path: "registracija", Component: Register },
      { path: "profil", Component: Profile },
      { path: "*", Component: NotFound },
    ],
  },
]);