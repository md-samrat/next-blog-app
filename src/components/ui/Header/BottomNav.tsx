"use client";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface NavItems {
  label: string;
  href?: string;
  subItems?: NavItems[];
}

function BottomNav() {
  const Navs: NavItems[] = [
    { label: "Home", href: "/" },

    {
      label: "Categories",
      subItems: [
        { label: "Politics", href: "/categories/politics" },
        { label: "Health", href: "/categories/health" },
        { label: "Design", href: "/categories/design" },
      ],
    },

    { label: "Lifestyle", href: "/lifestyles" },
    { label: "Education", href: "/education" },
    { label: "Health", href: "/health" },
    { label: "Design", href: "/design" },

    { label: "Technology", href: "/technology" },
    { label: "Culture", href: "/culture" },
    { label: "Contact", href: "/contact" },

    {
      label: "More",
     
      subItems: [
        {
          label: "about",
          href: "/about",
        },
        {
          label: "privacy policy",
          href: "/privacy-policy",
        },
      ],
    },
  ];

  const [openSubItems, setOpenSubItems] = useState<number | null>(null);

  return (
    <ul className="md:flex items-center justify-between px-4 py-8 text-lg text-gray-500 uppercase font-semibold ">
      {Navs.map((nav, idx) => (
        <li key={idx} className="flex items-center gap-2 relative">
          {nav.href ? (
            <Link href={nav.href} className="flex items-center gap-2">
              {nav.label}

              {nav.subItems && (
                <BsChevronDown
                  size={16}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenSubItems(openSubItems === idx ? null : idx);
                  }}
                  className={`transition-transform hover:rotate-180 ${
                    openSubItems === idx ? "rotate-180" : ""
                  }`}
                />
              )}
            </Link>
          ) : (
            <div
              onClick={() =>
                setOpenSubItems(openSubItems === idx ? null : idx)
              }
              className="flex items-center gap-2 cursor-pointer"
            >
              {nav.label}

              {nav.subItems && (
                <BsChevronDown
                  size={16}
                  className={`transition-transform hover:rotate-180 ${
                    openSubItems === idx ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>
          )}

          {nav.subItems && openSubItems === idx && (
            <ul className="absolute top-10 left-0 p-3 rounded-md shadow-md">
              {nav.subItems.map((subItem, subIdx) => (
                <li key={subIdx} >
                  <Link href={subItem.href || "#"}>
                    {subItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default BottomNav;