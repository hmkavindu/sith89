// Playwright Test for Language Translation Verification
// This test ensures that all content translates properly between Sinhala and English

const { test, expect } = require('@playwright/test');

test.describe('Language Translation Tests', () => {
    test.beforeEach(async ({ page }) => {
        // Navigate to the application
        await page.goto('file:///C:/Users/hp/Desktop/sith%2089/index.html');
        await page.waitForLoadState('networkidle');
    });

    test('should display Sinhala content by default', async ({ page }) => {
        // Check that the page loads with Sinhala content
        await expect(page.locator('html')).toHaveAttribute('lang', 'si');
        
        // Check navigation elements are in Sinhala
        await expect(page.locator('.nav-title')).toContainText('අභිධර්මය - චිත්ත චෛතසික මෙවලම');
        await expect(page.locator('a[href="#home"]')).toContainText('මුල් පිටුව');
        await expect(page.locator('a[href="#categories"]')).toContainText('මූලික කාණ්ඩ');
        
        // Check hero section is in Sinhala
        await expect(page.locator('.hero-title')).toContainText('නමෝ තස්ස භගවතෝ අරහතෝ සම්මා සම්බුද්ධස්ස');
        
        // Check language switcher shows English option
        await expect(page.locator('.lang-text')).toContainText('English');
    });

    test('should switch to English when language button is clicked', async ({ page }) => {
        // Click the language switcher
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500); // Wait for translation to complete
        
        // Check that page language attribute changed
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        
        // Check navigation elements are now in English
        await expect(page.locator('.nav-title')).toContainText('Abhidhamma - Citta Chaithasika Tool');
        await expect(page.locator('a[href="#home"]')).toContainText('Home');
        await expect(page.locator('a[href="#categories"]')).toContainText('Basic Categories');
        
        // Check hero section is now in English
        await expect(page.locator('.hero-title')).toContainText('Homage to the Blessed One, the Worthy One, the Fully Enlightened One');
        
        // Check language switcher now shows Sinhala option
        await expect(page.locator('.lang-text')).toContainText('සිංහල');
    });

    test('should switch back to Sinhala when clicked again', async ({ page }) => {
        // First switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Then switch back to Sinhala
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check that page language attribute is back to Sinhala
        await expect(page.locator('html')).toHaveAttribute('lang', 'si');
        
        // Check navigation elements are back in Sinhala
        await expect(page.locator('.nav-title')).toContainText('අභිධර්මය - චිත්ත චෛතසික මෙවලම');
        await expect(page.locator('a[href="#home"]')).toContainText('මුල් පිටුව');
    });

    test('should translate table headers correctly', async ({ page }) => {
        // Check Sinhala table headers
        await expect(page.locator('#mainTable th').nth(0)).toContainText('අංකය');
        await expect(page.locator('#mainTable th').nth(1)).toContainText('චිත්තය');
        await expect(page.locator('#mainTable th').nth(2)).toContainText('කාණ්ඩය');
        await expect(page.locator('#mainTable th').nth(3)).toContainText('චෛතසික');
        await expect(page.locator('#mainTable th').nth(4)).toContainText('විස්තර');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English table headers
        await expect(page.locator('#mainTable th').nth(0)).toContainText('Number');
        await expect(page.locator('#mainTable th').nth(1)).toContainText('Consciousness');
        await expect(page.locator('#mainTable th').nth(2)).toContainText('Category');
        await expect(page.locator('#mainTable th').nth(3)).toContainText('Mental Factors');
        await expect(page.locator('#mainTable th').nth(4)).toContainText('Description');
    });

    test('should translate search placeholder correctly', async ({ page }) => {
        // Check Sinhala placeholder
        await expect(page.locator('#searchInput')).toHaveAttribute('placeholder', 'චිත්තයක් සොයන්න...');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English placeholder
        await expect(page.locator('#searchInput')).toHaveAttribute('placeholder', 'Search for a consciousness state...');
    });

    test('should translate filter options correctly', async ({ page }) => {
        // Check Sinhala filter options
        await expect(page.locator('#categoryFilter option').nth(0)).toContainText('සියලුම කාණ්ඩ');
        await expect(page.locator('#categoryFilter option').nth(1)).toContainText('කුසල් චිත්ත');
        await expect(page.locator('#categoryFilter option').nth(2)).toContainText('අකුසල් චිත්ත');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English filter options
        await expect(page.locator('#categoryFilter option').nth(0)).toContainText('All Categories');
        await expect(page.locator('#categoryFilter option').nth(1)).toContainText('Wholesome Consciousness');
        await expect(page.locator('#categoryFilter option').nth(2)).toContainText('Unwholesome Consciousness');
    });

    test('should translate category cards correctly', async ({ page }) => {
        // Check Sinhala category cards
        await expect(page.locator('.category-card').nth(0).locator('h3')).toContainText('කුසල් චිත්ත');
        await expect(page.locator('.category-card').nth(1).locator('h3')).toContainText('අකුසල් චිත්ත');
        await expect(page.locator('.category-card').nth(2).locator('h3')).toContainText('විපාක චිත්ත');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English category cards
        await expect(page.locator('.category-card').nth(0).locator('h3')).toContainText('Wholesome Consciousness');
        await expect(page.locator('.category-card').nth(1).locator('h3')).toContainText('Unwholesome Consciousness');
        await expect(page.locator('.category-card').nth(2).locator('h3')).toContainText('Resultant Consciousness');
    });

    test('should translate analysis section correctly', async ({ page }) => {
        // Check Sinhala analysis section
        await expect(page.locator('#analysis .section-title')).toContainText('චෛතසික විග්‍රහයන්');
        await expect(page.locator('.analysis-card').nth(0).locator('h3')).toContainText('ඵස්සය');
        await expect(page.locator('.analysis-card').nth(1).locator('h3')).toContainText('වේදනා');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English analysis section
        await expect(page.locator('#analysis .section-title')).toContainText('Chaithasika Analysis');
        await expect(page.locator('.analysis-card').nth(0).locator('h3')).toContainText('Contact (Phassa)');
        await expect(page.locator('.analysis-card').nth(1).locator('h3')).toContainText('Feeling (Vedana)');
    });

    test('should translate comparison section correctly', async ({ page }) => {
        // Navigate to comparison section
        await page.click('a[href="#comparison"]');
        await page.waitForTimeout(500);
        
        // Check Sinhala comparison section
        await expect(page.locator('#comparison .section-title')).toContainText('චිත්තයන් සංසන්දනය');
        await expect(page.locator('#comparison h3')).toContainText('චිත්තයන් තෝරන්න (උපරිම 5)');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English comparison section
        await expect(page.locator('#comparison .section-title')).toContainText('Consciousness Comparison');
        await expect(page.locator('#comparison h3')).toContainText('Select Consciousness States (Maximum 5)');
    });

    test('should translate about section correctly', async ({ page }) => {
        // Navigate to about section
        await page.click('a[href="#about"]');
        await page.waitForTimeout(500);
        
        // Check Sinhala about section
        await expect(page.locator('#about .section-title')).toContainText('මෙවලම පිළිබඳව');
        await expect(page.locator('#about h3')).toContainText('උපදෙස් සහ උපදෙස්');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English about section
        await expect(page.locator('#about .section-title')).toContainText('About the Tool');
        await expect(page.locator('#about h3')).toContainText('Instructions and Guidelines');
    });

    test('should translate footer correctly', async ({ page }) => {
        // Scroll to footer
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(500);
        
        // Check Sinhala footer
        await expect(page.locator('.footer-text p').nth(0)).toContainText('ඔබගේ ධර්මාවබෝධය දියුණු කරගැනීමට මෙය උපකාරකයක්ම වේවා');
        await expect(page.locator('.footer-blessing')).toContainText('තෙරුවන් සරණයි !');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check English footer
        await expect(page.locator('.footer-text p').nth(0)).toContainText('May this be helpful in developing your understanding of the Dhamma');
        await expect(page.locator('.footer-blessing')).toContainText('Triple Gem refuge!');
    });

    test('should not mix languages in the same view', async ({ page }) => {
        // Check that all visible text is in Sinhala
        const sinhalaElements = await page.locator('text=අභිධර්මය').count();
        expect(sinhalaElements).toBeGreaterThan(0);
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check that no Sinhala text is visible in English mode
        const sinhalaInEnglishMode = await page.locator('text=අභිධර්මය').count();
        expect(sinhalaInEnglishMode).toBe(0);
        
        // Check that English text is visible
        const englishElements = await page.locator('text=Abhidhamma').count();
        expect(englishElements).toBeGreaterThan(0);
    });

    test('should persist language preference', async ({ page }) => {
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Reload the page
        await page.reload();
        await page.waitForLoadState('networkidle');
        
        // Check that English is still selected
        await expect(page.locator('html')).toHaveAttribute('lang', 'en');
        await expect(page.locator('.nav-title')).toContainText('Abhidhamma - Citta Chaithasika Tool');
    });

    test('should translate table data correctly', async ({ page }) => {
        // Wait for table to load
        await page.waitForSelector('#mainTable tbody tr');
        
        // Check first row in Sinhala
        const firstRowSinhala = page.locator('#mainTable tbody tr').nth(0);
        await expect(firstRowSinhala.locator('td').nth(1)).toContainText('සෝමනස්ස සහගත දෘෂ්ටිගත සම්ප්‍රයුක්ත අසංස්කාරික සිත');
        
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check first row in English
        const firstRowEnglish = page.locator('#mainTable tbody tr').nth(0);
        await expect(firstRowEnglish.locator('td').nth(1)).toContainText('Pleasant feeling with wrong view, accompanied, rootless consciousness');
    });
});

test.describe('Translation Quality Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('file:///C:/Users/hp/Desktop/sith%2089/index.html');
        await page.waitForLoadState('networkidle');
    });

    test('should have meaningful Sinhala translations', async ({ page }) => {
        // Check that Sinhala translations are not just transliterations
        const navTitle = await page.locator('.nav-title').textContent();
        expect(navTitle).toContain('අභිධර්මය');
        expect(navTitle).toContain('චිත්ත');
        expect(navTitle).toContain('චෛතසික');
        
        // Check that technical terms are properly translated
        const heroTitle = await page.locator('.hero-title').textContent();
        expect(heroTitle).toContain('නමෝ තස්ස භගවතෝ');
        expect(heroTitle).toContain('අරහතෝ');
        expect(heroTitle).toContain('සම්මා සම්බුද්ධස්ස');
    });

    test('should have accurate English translations', async ({ page }) => {
        // Switch to English
        await page.click('#languageSwitcher');
        await page.waitForTimeout(500);
        
        // Check that English translations are accurate
        const navTitle = await page.locator('.nav-title').textContent();
        expect(navTitle).toContain('Abhidhamma');
        expect(navTitle).toContain('Citta');
        expect(navTitle).toContain('Chaithasika');
        
        // Check that technical terms are properly translated
        const heroTitle = await page.locator('.hero-title').textContent();
        expect(heroTitle).toContain('Homage to the Blessed One');
        expect(heroTitle).toContain('Worthy One');
        expect(heroTitle).toContain('Fully Enlightened One');
    });
});
