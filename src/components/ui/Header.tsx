"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Calendar } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group shrink-0">
            <img
              src="/assets/img/imgi_1_maa logo.jpg"
              alt="Maa Nursing Home Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-6 text-xs font-semibold text-slate-800">
            <Link href="/" className="hover:text-primary-700 transition-colors py-2">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center hover:text-primary-700 transition-colors py-2">
                About Us <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-slate-400 group-hover:text-primary-700" />
              </button>
              <div className="absolute left-0 mt-0 w-60 rounded-xl bg-white border border-slate-200 shadow-xl py-2 hidden group-hover:block z-50">
                <Link href="/about" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Introduction
                </Link>
                <Link href="/dr-jugal" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Dr Jugal Shah
                </Link>
                <Link href="/dr-jyoti" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Dr Jyoti Shah
                </Link>
                <Link href="/doctors" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Panel of Doctors
                </Link>
                <Link href="/certificates" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Certificates
                </Link>
                <Link href="/trophies" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Trophies
                </Link>
                <Link href="/insurance-companies" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  List of Insurance Companies
                </Link>
              </div>
            </div>

            {/* Eye Care Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center hover:text-primary-700 transition-colors py-2">
                Eye Care <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-slate-400 group-hover:text-primary-700" />
              </button>
              <div className="absolute left-0 mt-0 w-64 rounded-xl bg-white border border-slate-200 shadow-xl py-2 hidden group-hover:block z-50">
                <Link href="/treatments/cataract" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Cataract
                </Link>
                <Link href="/treatments/glaucoma" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Glaucoma
                </Link>
                <Link href="/treatments/diabetic-retinopathy" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Diabetic Retinopathy
                </Link>
                <Link href="/treatments/computer-vision-syndrome" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Computer Vision Syndrome
                </Link>
                <Link href="/treatments/dry-eyes" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Dry Eyes
                </Link>
                <Link href="/treatments/retinal-detachment" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Retinal Detachment
                </Link>
                <Link href="/treatments/squint" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Squint
                </Link>
                <Link href="/treatments/armd" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Age-related macular degeneration (ARMD)
                </Link>
                <Link href="/treatments/cornea-dsaek" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Cornea DSAEK
                </Link>
                <Link href="/treatments/paediatric-eye" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Paediatric Eye Care
                </Link>
                <Link href="/treatments/oculoplasty" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Oculoplasty
                </Link>
              </div>
            </div>

            <Link href="/treatments/lasik" className="hover:text-primary-700 transition-colors py-2">
              LASIK Clinic
            </Link>

            {/* Gynaec Care Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center hover:text-primary-700 transition-colors py-2">
                Gynaec Care <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-slate-400 group-hover:text-primary-700" />
              </button>
              <div className="absolute left-0 mt-0 w-60 rounded-xl bg-white border border-slate-200 shadow-xl py-2 hidden group-hover:block z-50">
                <Link href="/treatments/pcod" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  PCOD
                </Link>
                <Link href="/treatments/amenorrhea" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Amenorrhea
                </Link>
                <Link href="/treatments/endometriosis" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Endometriosis
                </Link>
                <Link href="/treatments/dub" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Dysfunctional Uterine Bleeding
                </Link>
                <Link href="/treatments/menopause" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Menopause
                </Link>
                <Link href="/treatments/obstetrics" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Obstetrics (Maternity Care)
                </Link>
              </div>
            </div>

            {/* Infertility Clinic Dropdown */}
            <div className="relative group">
              <button className="inline-flex items-center hover:text-primary-700 transition-colors py-2">
                Infertility Clinic <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-slate-400 group-hover:text-primary-700" />
              </button>
              <div className="absolute left-0 mt-0 w-60 rounded-xl bg-white border border-slate-200 shadow-xl py-2 hidden group-hover:block z-50">
                <Link href="/treatments/infertility" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Infertility
                </Link>
                <Link href="/treatments/hysteroscopy" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Hysteroscopy
                </Link>
                <Link href="/treatments/laparoscopy" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  Laparoscopy
                </Link>
                <Link href="/treatments/iui" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  IUI
                </Link>
                <Link href="/treatments/tesapesa" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  TESA/PESA
                </Link>
                <Link href="/treatments/icsi" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  ICSI
                </Link>
                <Link href="/treatments/ivf" className="block px-4 py-2 hover:bg-slate-50 hover:text-primary-700">
                  IVF
                </Link>
              </div>
            </div>

            <Link href="/testimonials" className="hover:text-primary-700 transition-colors py-2">
              Patients' Reviews
            </Link>

            <Link href="/charity" className="hover:text-primary-700 transition-colors py-2">
              Charity
            </Link>

            <Link href="/gallery" className="hover:text-primary-700 transition-colors py-2">
              Media
            </Link>

            <Link href="/blogs" className="hover:text-primary-700 transition-colors py-2">
              Blogs
            </Link>

            <Link href="/contact" className="hover:text-primary-700 transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-primary-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link href="/" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            Home
          </Link>

          <div>
            <button onClick={() => toggleDropdown("about")} className="w-full flex justify-between items-center py-2 text-sm font-semibold text-slate-900">
              <span>About Us</span> <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "about" && (
              <div className="pl-4 space-y-1 text-xs">
                <Link href="/about" className="block py-1 text-slate-700">Introduction</Link>
                <Link href="/dr-jugal" className="block py-1 text-slate-700">Dr Jugal Shah</Link>
                <Link href="/dr-jyoti" className="block py-1 text-slate-700">Dr Jyoti Shah</Link>
                <Link href="/doctors" className="block py-1 text-slate-700">Panel of Doctors</Link>
                <Link href="/certificates" className="block py-1 text-slate-700">Certificates</Link>
                <Link href="/trophies" className="block py-1 text-slate-700">Trophies</Link>
                <Link href="/insurance-companies" className="block py-1 text-slate-700">List of Insurance Companies</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("eyecare")} className="w-full flex justify-between items-center py-2 text-sm font-semibold text-slate-900">
              <span>Eye Care</span> <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "eyecare" && (
              <div className="pl-4 space-y-1 text-xs">
                <Link href="/treatments/cataract" className="block py-1 text-slate-700">Cataract</Link>
                <Link href="/treatments/glaucoma" className="block py-1 text-slate-700">Glaucoma</Link>
                <Link href="/treatments/diabetic-retinopathy" className="block py-1 text-slate-700">Diabetic Retinopathy</Link>
                <Link href="/treatments/computer-vision-syndrome" className="block py-1 text-slate-700">Computer Vision Syndrome</Link>
                <Link href="/treatments/dry-eyes" className="block py-1 text-slate-700">Dry Eyes</Link>
                <Link href="/treatments/retinal-detachment" className="block py-1 text-slate-700">Retinal Detachment</Link>
                <Link href="/treatments/squint" className="block py-1 text-slate-700">Squint</Link>
                <Link href="/treatments/armd" className="block py-1 text-slate-700">ARMD</Link>
                <Link href="/treatments/cornea-dsaek" className="block py-1 text-slate-700">Cornea DSAEK</Link>
                <Link href="/treatments/paediatric-eye" className="block py-1 text-slate-700">Paediatric Eye Care</Link>
                <Link href="/treatments/oculoplasty" className="block py-1 text-slate-700">Oculoplasty</Link>
              </div>
            )}
          </div>

          <Link href="/treatments/lasik" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            LASIK Clinic
          </Link>

          <div>
            <button onClick={() => toggleDropdown("gynaec")} className="w-full flex justify-between items-center py-2 text-sm font-semibold text-slate-900">
              <span>Gynaec Care</span> <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "gynaec" && (
              <div className="pl-4 space-y-1 text-xs">
                <Link href="/treatments/pcod" className="block py-1 text-slate-700">PCOD</Link>
                <Link href="/treatments/amenorrhea" className="block py-1 text-slate-700">Amenorrhea</Link>
                <Link href="/treatments/endometriosis" className="block py-1 text-slate-700">Endometriosis</Link>
                <Link href="/treatments/dub" className="block py-1 text-slate-700">Dysfunctional Uterine Bleeding</Link>
                <Link href="/treatments/menopause" className="block py-1 text-slate-700">Menopause</Link>
                <Link href="/treatments/obstetrics" className="block py-1 text-slate-700">Obstetrics</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={() => toggleDropdown("infertility")} className="w-full flex justify-between items-center py-2 text-sm font-semibold text-slate-900">
              <span>Infertility Clinic</span> <ChevronDown className="w-4 h-4" />
            </button>
            {activeDropdown === "infertility" && (
              <div className="pl-4 space-y-1 text-xs">
                <Link href="/treatments/infertility" className="block py-1 text-slate-700">Infertility</Link>
                <Link href="/treatments/hysteroscopy" className="block py-1 text-slate-700">Hysteroscopy</Link>
                <Link href="/treatments/laparoscopy" className="block py-1 text-slate-700">Laparoscopy</Link>
                <Link href="/treatments/iui" className="block py-1 text-slate-700">IUI</Link>
                <Link href="/treatments/tesapesa" className="block py-1 text-slate-700">TESAPESA</Link>
                <Link href="/treatments/icsi" className="block py-1 text-slate-700">ICSI</Link>
                <Link href="/treatments/ivf" className="block py-1 text-slate-700">IVF</Link>
              </div>
            )}
          </div>

          <Link href="/testimonials" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            Patients' Reviews
          </Link>
          <Link href="/charity" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            Charity
          </Link>
          <Link href="/gallery" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            Media
          </Link>
          <Link href="/blogs" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            Blogs
          </Link>
          <Link href="/contact" className="block py-2 text-sm font-semibold text-slate-900" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
