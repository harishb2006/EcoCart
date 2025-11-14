'use client'
import Link from "next/link"
import { useState } from "react"

interface MenuItem {
  name: string
  submenus: string[]
}

const NavBar = () => {
  const [hovered, setHovered] = useState<string | null>(null)

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
  ]

  let hideTimeout: NodeJS.Timeout

  const handleMouseEnter = (name: string) => {
    clearTimeout(hideTimeout)
    setHovered(name)
  }

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => setHovered(null), 150)
  }

  return (
    <header className="bg-white shadow-md sticky h-[70px] top-0 z-50">
      <div className="max-w-7xl ml-[100px]">
        <div className="flex items-center justify-between= h-16">
          {/* Logo */}
          <div className="">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-emerald-600 bg-clip-text text-transparent transition-all"
            >
              🛒 EcoCart
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 flex ml-[60px] ">
            <ul className="flex gap-8 ">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <Link 
                    href="#" 
                    className="text-gray-700 font-semibold text-sm tracking-wide transition-colors duration-200 py-2 block"
                  >
                    {item.name}
                  </Link>

                  {/* under the line */}
                   <span 
            className={`absolute left-0 bottom-0 top-[52px]  h-[4px] bg-emerald-600 transition-all duration-300 ${
              hovered === item.name ? 'w-full' : 'w-0'
            }`}
          ></span>


                  {/* Submenu Dropdown */}
                  {hovered === item.name && (
                    <div
                      className="absolute top-full  left-1/2 -translate-x-1/2 pt-2"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <ul className="bg-white  border border-gray-100 py-3 mt-[14px] px-2 min-w-[220px] animate-fadeIn">
                        {item.submenus.map((submenu) => (
                          <li key={submenu}>
                            <Link
                              href="#"
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors duration-150"
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

          <div>
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-[2px] transition-all"
              />
              <svg 
                className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Right side actions (optional) */}
          <div className="flex items-center ml-[40px] gap-4">
          
            <button className="text-gray-700 hover:text-emerald-600 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            <button className="text-gray-700 hover:text-emerald-600 transition-colors relative">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar