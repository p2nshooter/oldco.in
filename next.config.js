/** @type {import('next').NextConfig} */
// 23 machine-written articles were removed (owner rule: hand-written only).
// Most were runs of near-identical titles ("Valuation of Indian Ancient Coins"
// ×15); none was ever rewritten by hand. Each old url goes to the hand-written
// guide on the same subject so no link or index entry dies.
const REMOVED_MACHINE_ARTICLES = {
  'valuation-of-indian-ancient-coins': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-practice': 'how-coins-are-valued',
  'ancient-indian-coins-as-a-tool-for-historical-research': 'why-coins-matter-history',
  'ancient-indian-coins-and-their-role-in-empire-building': 'ancient-indian-coins-intro',
  'indian-coin-legislation': 'sell-old-coins-legally',
  'indian-coin-legislation-practical-application': 'sell-old-coins-legally',
  'indian-coin-authentication': 'spotting-fake-coins',
  'indian-coin-legislation-bwpv': 'sell-old-coins-legally',
  'valuation-of-indian-ancient-coins-rkcz': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-the-modern-era': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-the-market': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-market': 'how-coins-are-valued',
  'indian-coins-and-the-impact-of-colonialism': 'british-india-coins-guide',
  'valuation-of-indian-ancient-coins-in-practice-frna': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-cnik': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-practice-aw48': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-practice-p0n1': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-market-ocxx': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-24cf': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-practice-0g6c': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-the-modern-era-lzro': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-market-zf1y': 'how-coins-are-valued',
  'valuation-of-indian-ancient-coins-in-the-market-7rtu': 'how-coins-are-valued',
};
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  async redirects() {
    return Object.entries(REMOVED_MACHINE_ARTICLES).map(([from, to]) => ({
      source: `/articles/${from}`,
      destination: `/articles/${to}`,
      permanent: true,
    }));
  },
};

module.exports = nextConfig;

const { initOpenNextCloudflareForDev } = require('@opennextjs/cloudflare');
initOpenNextCloudflareForDev();
