'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Network-controlled ad slot. Reads the SAME central config as the whole
 * network from api.ulyah.com — edited ONLY in the ulyah.com admin. Hidden by
 * default; a dashed preview box when the site is switched on without a real
 * ad-unit id; a real AdSense unit once the id is set centrally. Never sticky,
 * never interstitial — reader-friendly placements only.
 */
interface AdView {
  enabled: boolean;
  clientId: string;
  slots: Record<string, string>;
}

let cached: Promise<AdView> | null = null;
function fetchAdView(): Promise<AdView> {
  if (cached) return cached;
  cached = fetch('https://api.ulyah.com/content/ad-config?site=oldco-in')
    .then((r) => r.json() as Promise<Partial<AdView>>)
    .then((v) => ({ enabled: !!v.enabled, clientId: v.clientId ?? '', slots: v.slots ?? {} }))
    .catch(() => ({ enabled: false, clientId: '', slots: {} }));
  return cached;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ placement = 'in_article', className = '' }: { placement?: string; className?: string }) {
  const [view, setView] = useState<AdView | null>(null);
  const pushed = useRef(false);

  useEffect(() => {
    let alive = true;
    fetchAdView().then((v) => alive && setView(v));
    return () => {
      alive = false;
    };
  }, []);

  const slotId = view?.slots?.[placement] || '';

  useEffect(() => {
    if (!view?.enabled || !slotId || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* blocked — the empty ins collapses quietly */
    }
  }, [view, slotId]);

  if (!view?.enabled) return null;

  if (!slotId) {
    return (
      <div
        className={`my-6 rounded-lg border-2 border-dashed border-gold-400/60 bg-gold-300/10 py-6 text-center text-xs text-gold-600 ${className}`}
      >
        Ad preview · {placement}
      </div>
    );
  }

  return (
    <div className={`my-6 ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={view.clientId || 'ca-pub-6371903555702163'}
        data-ad-slot={slotId}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
