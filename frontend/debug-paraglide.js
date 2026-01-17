
import * as runtime from './src/paraglide/runtime.js';

console.log('Available locales:', runtime.availableLocales);
console.log('Source language tag:', runtime.sourceLanguageTag);

try {
    const url = new URL('http://localhost/about');
    console.log('Testing localizeUrl with es...');
    const localized = runtime.localizeUrl(url, 'es');
    console.log('Localized URL:', localized.href);
} catch (e) {
    console.error('Error in localizeUrl:', e.message);
}
