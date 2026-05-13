import React from "react";

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
      href: "/more",
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

  return (
    <div className="flex items-center justify-between px-4 py-8 text-xl text-gray-500 uppercase font-semibold">
      {Navs.map((nav, idx) => (
        <ul key={idx}>
          <li>{nav.label}</li>
        </ul>
      ))}
    </div>
  );
}

export default BottomNav;
