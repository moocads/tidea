"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/aboutus", label: "About" },
  { href: "/partnership", label: "Partnership" },
];

const supportLinks = [
  { href: "/support-tc-100", label: "FAQ" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/warranty", label: "Warranty" },
];

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === href;
  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isProductsPage = pathname === "/vacuums" || ["/tc-100", "/tc-200", "/tc-500"].some((path) => pathname.startsWith(path));

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8 md:pt-6 ">
      <div className="mx-auto flex h-14 max-w-[1380px] items-center justify-between rounded-full border border-white/60 bg-white/65 px-6 shadow-[0_12px_40px_rgba(15,35,65,0.16),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-xl backdrop-saturate-150 md:h-16 md:px-8">
        <Link aria-label="TIDEA home" href="/" className="relative z-50 block w-[116px] md:w-[132px]">
          <Image
            alt="TIDEA"
            className="h-auto w-full"
            height={267}
            preload
            src="/images/tidea/451416_ede2202648b24e5086202d58fcdc170d~mv2.png"
            width={734}
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 font-[family-name:var(--font-ubuntu)] text-[15px] md:flex">
          <Link className={isCurrent(pathname, "/") ? "nav-link active" : "nav-link"} href="/">
            Home
          </Link>
          <Link className={isProductsPage ? "nav-link active" : "nav-link"} href="/vacuums">
            Products
          </Link>
          <Link className={isCurrent(pathname, "/aboutus") ? "nav-link active" : "nav-link"} href="/aboutus">
            About
          </Link>
          <div className="group relative py-4">
            <Link className={isCurrent(pathname, "/support-tc-100") ? "nav-link active flex items-center gap-1" : "nav-link flex items-center gap-1"} href="/support-tc-100">
              Support <ChevronDown aria-hidden size={15} />
            </Link>
            <div className="invisible absolute left-1/2 top-full w-44 -translate-x-1/2 rounded-2xl bg-white p-2 opacity-0 shadow-[0_16px_36px_rgba(29,45,70,0.16)] transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              {supportLinks.map((link) => (
                <Link className="block rounded-xl px-4 py-3 text-sm hover:bg-[#e9eff9]" href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link className={isCurrent(pathname, "/partnership") ? "nav-link active" : "nav-link"} href="/partnership">
            Partnership
          </Link>
        </nav>

        <div className="hidden text-sm md:block">EN</div>
        <button
          aria-expanded={open}
          aria-label={open ? "Close navigation" : "Open navigation"}
          className="relative z-50 grid size-10 place-items-center rounded-full hover:bg-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-[#eef2f8] px-8 pb-12 pt-16 md:hidden">
          <nav aria-label="Mobile navigation" className="mx-auto mt-12 max-w-md">
            {mainLinks.slice(0, 1).map((link) => (
              <Link className="mobile-nav-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <Link className="mobile-nav-link" href="/vacuums" onClick={() => setOpen(false)}>Products</Link>
            <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#5676ae]">Company</p>
            {mainLinks.slice(1).map((link) => (
              <Link className="mobile-nav-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
            <p className="mb-3 mt-8 text-xs font-semibold uppercase tracking-[0.15em] text-[#5676ae]">Support</p>
            {supportLinks.map((link) => (
              <Link className="mobile-nav-link" href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
