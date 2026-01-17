
import { localizeUrl, deLocalizeUrl, locales } from './src/paraglide/runtime.js';

console.log('Locales:', locales);

if (!locales.includes('es')) {
    console.error('❌ Locales does not include "es"');
    process.exit(1);
}

try {
    // Test Spanish
    // Trying with object options as per inspection
    const url = new URL('http://localhost/about');
    console.log('Testing localizeUrl(url, { locale: "es" })...');
    const localizedEs = localizeUrl(url, { locale: 'es' });
    console.log('Localized ES:', localizedEs.href);

    if (localizedEs.pathname !== '/es/about') {
        throw new Error(`Expected /es/about, got ${localizedEs.pathname}`);
    } else {
        console.log('✅ /es/about correct');
    }

    // Test English (Base)
    console.log('Testing localizeUrl(url, { locale: "en" })...');
    const localizedEn = localizeUrl(url, { locale: 'en' });
    console.log('Localized EN:', localizedEn.href);

    if (localizedEn.pathname !== '/about') {
        console.warn(`⚠️ Warning: English URL is ${localizedEn.pathname}. User requested "/" for English.`);
        if (localizedEn.pathname === '/en/about') {
            console.error('❌ English is being prefixed with /en. Configuration update required.');
            process.exit(1);
        }
    } else {
        console.log('✅ English URL is root (correct)');
    }

    // Test deLocalizeUrl
    console.log('Testing deLocalizeUrl...');
    const esUrl = new URL('http://localhost/es/about');
    const deLocalized = deLocalizeUrl(esUrl);
    // Usually returns { url, lang } or similar? 
    // paraglide-js 1.x returns { url, lang }?
    // Let's inspect it.
    console.log('De-localized:', deLocalized);

    // Check if it's correct implicitly by re-localizing?
    // Or check properties if specific.

} catch (e) {
    console.error('❌ Verification failed:', e.message);
    process.exit(1);
}
