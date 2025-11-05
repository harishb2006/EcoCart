"use client";


import { Search, Heart, ShoppingBag, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          
          <span className="font-bold text-xl text-gray-800">EcoCart</span>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
          <Link href="/men" className="hover:text-pink-600">
            MEN
          </Link>
          <Link href="/women" className="hover:text-pink-600">
            WOMEN
          </Link>
          <Link href="/kids" className="hover:text-pink-600">
            KIDS
          </Link>
          <Link href="/home-living" className="hover:text-pink-600">
            HOME & LIVING
          </Link>
          <Link href="/beauty" className="hover:text-pink-600">
            BEAUTY
          </Link>
          <Link href="/studio" className="hover:text-pink-600 border-r pr-4">
            STUDIO
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-3 py-1.5 w-64">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="ml-2 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-500"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-6 ml-4">
          <div className="flex flex-col items-center text-xs text-gray-700">
            <User className="w-5 h-5" />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center text-xs text-gray-700">
            <Heart className="w-5 h-5" />
            <span>Wishlist</span>
          </div>
          <div className="flex flex-col items-center text-xs text-gray-700">
            <ShoppingBag className="w-5 h-5" />
            <span>Bag</span>
          </div>
        </div>
      </div>
    </header>
  );
}
