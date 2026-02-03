import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, UserCircle, ShoppingCart } from "lucide-react";
import logo from "../assets/velogo.png";
import about from "../assets/about.png";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const linkBase =
  "group relative px-2 py-1 text-sm font-medium text-gray-500 transition hover:text-gray-900";
const linkActive = "text-gray-900";

function NavItem({ to, children, end = false, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
    >
      {children}
      <span className="absolute left-1/2 top-full h-0.5 w-0 -translate-x-1/2 rounded-full bg-amber-600 transition-all duration-300 group-hover:w-6" />
    </NavLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const { count: cartCount } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="w-full bg-[#f2efef]">
      <div className="flex h-16 items-center justify-between px-2">
        <NavLink
          to="/"
          className="flex items-center gap-2 pl-4"
          onClick={close}
        >
          <img
            src={logo}
            alt="Velora Safaris logo"
            className="h-15 w-15 object-contain"
          />
        </NavLink>

        {/* Center: Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavItem to="/" end>
            Home
          </NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/services">Services</NavItem>
          <NavItem to="/price">Pricing</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        <div className="flex items-center gap-3 pr-4">
          {/* Profile link (opens in new tab) */}
          <NavLink
            to={isAuthenticated ? "/account" : "/login"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-gray-200 bg-white px-2 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700 shadow-sm transition hover:border-amber-400 hover:text-gray-900"
            aria-label={isAuthenticated ? "Open account" : "Open login"}
            onClick={close}
          >
            <span className="relative h-8 w-8 overflow-hidden rounded-full border border-gray-200 bg-amber-50">
              <img src={about} alt="User avatar" className="h-full w-full object-cover" />
            </span>
            <UserCircle className="h-4 w-4 text-amber-600" />
          </NavLink>

          
          <NavLink
            to="/cart"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition"
            aria-label="Cart"
            onClick={close}
          >
            <ShoppingCart className="h-5 w-5 text-gray-800" />

            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-pink-600 px-1 text-[11px] font-bold text-white">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </NavLink>

          {/* Mobile menu button */}
          <button
            type="button"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-gray-100 transition md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gray-100" />

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <div className="px-4 py-3">
            <div className="flex flex-col gap-2 rounded-2xl border items-center border-gray-100 bg-white p-3 shadow-sm">
              <NavItem to="/" end onClick={close}>
                Home
              </NavItem>
              <NavItem to="/about" onClick={close}>
                About
              </NavItem>
              <NavItem to="/services" onClick={close}>
                Services
              </NavItem>
              <NavItem to="/price" onClick={close}>
                Pricing
              </NavItem>
              <NavItem to="/contact" onClick={close}>
                Contact
              </NavItem>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
