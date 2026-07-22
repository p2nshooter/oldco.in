// Adsterra direct-tag ad configuration for oldco.in.
// highperformanceformat.com = iframe display banners (isolated per slot);
// effectivecpmnetwork.com = native banner, social bar and smart link.
// Rendered by src/components/Ads.tsx.
export type BannerSlot = 'leaderboard' | 'rectangle' | 'banner468' | 'halfpage' | 'skyscraper' | 'mobile';
type Banner = { key: string; width: number; height: number };
interface AdsConfig {
  banners: Partial<Record<BannerSlot, Banner>>;
  native: { container: string; src: string } | null;
  socialBar: string | null;
  smartLink: string | null;
}

export const ADS: AdsConfig = {
  banners: {
    leaderboard: { key: 'edbe25a4debd89f5a757a649ce693b23', width: 728, height: 90 },
    rectangle: { key: '1c1abd435e36e59d679aaf7e53c57169', width: 300, height: 250 },
    banner468: { key: 'af32b0cee5ee93d6956bd7f0f25dfed7', width: 468, height: 60 },
    halfpage: { key: '98838c35aeff1d03793ca93eb0cc9825', width: 160, height: 600 },
    skyscraper: { key: '2628cf27fe84ababa9128c88b26ce009', width: 160, height: 300 },
    mobile: { key: 'a2b9b676b9163ebc8953f7880b54c7c1', width: 320, height: 50 },
  },
  native: {
    container: 'e2e099ac41011c4c8c5e7cf1908b79a6',
    src: 'https://pl30477861.effectivecpmnetwork.com/e2e099ac41011c4c8c5e7cf1908b79a6/invoke.js',
  },
  socialBar: 'https://pl30477863.effectivecpmnetwork.com/2c/96/e7/2c96e7907ce737c6de65a69b7cfabe62.js',
  smartLink: 'https://www.effectivecpmnetwork.com/gww8s7ch?key=d5ec4b23c966909e2dd44654e8d7c4c1',
};
