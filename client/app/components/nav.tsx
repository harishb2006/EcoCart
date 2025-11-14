"use client";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  name: string;
  submenus: string[];
}

export default function NavBar() {
  const [hovered, setHovered] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      name: "MEN",
      submenus: [
        "Topwear",
        "Bottomwear",
        "Innerwear & Sleepwear",
        "Footwear",
        "Sportswear",
        "Watches & Wearables",
        "Accessories",
        "Personal Care & Grooming",
      ],
    },
    {
      name: "WOMEN",
      submenus: [
        "Indian & Fusion Wear",
        "Western Wear",
        "Footwear",
        "Sportswear",
        "Watches & Wearables",
        "Bags & Handbags",
        "Accessories",
        "Personal Care & Grooming",
      ],
    },
    {
      name: "KIDS",
      submenus: [
        "Boys Clothing",
        "Girls Clothing",
        "Boys Footwear",
        "Girls Footwear",
        "Toys & Accessories",
      ],
    },
    {
      name: "HOME NEEDS",
      submenus: [
        "Kitchen",
        "Furniture",
        "Lighting",
        "Home Decor",
        "Pooja Needs",
        "Garden Needs",
      ],
    },
    {
      name: "BEAUTY",
      submenus: [
        "Makeup",
        "Skincare",
        "Hair Care",
        "Fragrances",
        "Personal Care",
      ],
    },
  ];

  let hideTimeout: NodeJS.Timeout;

  const handleMouseEnter = (name: string) => {
    clearTimeout(hideTimeout);
    setHovered(name);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setHovered(null), 150);
  };

  return (
    <header className="w-full bg-amber-100 backdrop-blur relative z-50">
      <div className="mx-auto flex h-[90px] w-full max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          EcoCart <span role="img" aria-label="tree">🌲</span>
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6">
          <ul className="flex gap-6 font-medium">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Menu */}
                <Link
                  href="#"
                  className="px-3 py-2 hover:text-amber-700 transition-colors"
                >
                  {item.name}
                </Link>

                {/* Dropdown */}
                {hovered === item.name && (
                  <div
                    className="absolute left-0 top-full mt-2 w-56 rounded-md bg-white shadow-lg z-10"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <ul className="py-2">
                      {item.submenus.map((submenu) => (
                        <li key={submenu}>
                          <Link
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100"
                          >
                            {submenu}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
