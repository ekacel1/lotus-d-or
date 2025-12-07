"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("cookie-consent");
      if (!v) setVisible(true);
    } catch {}
  }, []);

  const agree = () => {
    try {
      localStorage.setItem("cookie-consent", "accepted");
    } catch {}
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem("cookie-consent", "declined");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 bg-white shadow-lg border border-black/10 rounded-t-2xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-brand-gray/80">
            Nous utilisons des cookies pour améliorer votre expérience et mesurer l'audience. Vous pouvez accepter ou refuser.
          </p>
          <div className="flex gap-2">
            <button onClick={decline} className="px-4 py-2 text-sm rounded-full border">
              Refuser
            </button>
            <button onClick={agree} className="px-4 py-2 text-sm rounded-full bg-brand-red text-white">
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
