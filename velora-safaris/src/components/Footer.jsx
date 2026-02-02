// src/components/Footer.jsx
import { NavLink } from "react-router-dom";
import { Facebook, Instagram, Youtube, Send } from "lucide-react";
import logo from "../assets/velogo.png";

const linkCls =
  "text-sm text-gray-500 hover:text-gray-900 transition leading-7";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f2efef]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <NavLink to="/" className="flex items-center gap-2">
              <img
                src={logo}
                alt="Velora Safaris logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-semibold text-gray-900">
                Velora Safaris
              </span>
            </NavLink>

            <p className="mt-4 text-sm text-gray-500 leading-6">
              Nairobi, Kenya <br />
              info@velorasafaris.com <br />
              +254 700 000 000
            </p>

            <div className="mt-4 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">About</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/about" className={linkCls}>
                  About us
                </NavLink>
              </li>
              <li>
                <NavLink to="/tours" className={linkCls}>
                  Features
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={linkCls}>
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to="/price" className={linkCls}>
                  Plans
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/why-velora" className={linkCls}>
                  Why Velora
                </NavLink>
              </li>
              <li>
                <NavLink to="/partner" className={linkCls}>
                  Partner with us
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className={linkCls}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className={linkCls}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Support</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <NavLink to="/account" className={linkCls}>
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to="/support" className={linkCls}>
                  Support center
                </NavLink>
              </li>
              <li>
                <NavLink to="/feedback" className={linkCls}>
                  Feedback
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={linkCls}>
                  Contact us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-4 text-sm text-gray-500 leading-6">
              Subscribe to our newsletter and get exciting offers.
            </p>

            <form
              className="mt-4 flex items-center gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-pink-400"
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 text-white hover:bg-pink-700 transition"
                aria-label="Subscribe"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-gray-100 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Velora Safaris. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <NavLink to="/privacy" className="text-xs text-gray-500 hover:text-gray-900 transition">
              Privacy
            </NavLink>
            <NavLink to="/terms" className="text-xs text-gray-500 hover:text-gray-900 transition">
              Terms
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

