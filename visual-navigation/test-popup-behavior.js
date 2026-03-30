/**
 * Test script to check popup behavior when clicking mental state cards
 * Uses Playwright to detect inconsistent popup behavior
 */

const { chromium } = require('playwright');

async function testPopupBehavior() {
    console.log('🧪 Testing popup behavior for mental state cards...');

    const browser = await chromium.launch();
    const page = await browser.newPage();

    try {
        // Navigate to the main page
        const indexPath = process.cwd().replace(/\\/g, '/') + '/../index.html';
        console.log('Navigating to:', indexPath);
        await page.goto('file:///' + indexPath);
        console.log('📄 Loaded index.html');

        // Wait for page to load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000); // Extra wait for dynamic content

        // Test Raga card
        console.log('🧪 Testing Raga card...');
        const ragaResults = await testCardClick(page, '#ragaCard', 'රාගය (ලෝභය)');

        // Test Dwesha card
        console.log('🧪 Testing Dwesha card...');
        const dweshaResults = await testCardClick(page, '#dveshaCard', 'ද්වේශ (පටිඝ)');

        // Test Moha card
        console.log('🧪 Testing Moha card...');
        const mohaResults = await testCardClick(page, '#mohaCard', 'මෝහ (අවිජ්ජා)');

        // Analyze results
        console.log('\n📊 Results Summary:');
        console.log('Raga card popups:', ragaResults.popupCount);
        console.log('Dwesha card popups:', dweshaResults.popupCount);
        console.log('Moha card popups:', mohaResults.popupCount);

        const totalPopups = ragaResults.popupCount + dweshaResults.popupCount + mohaResults.popupCount;
        console.log('Total popups across all tests:', totalPopups);

        if (totalPopups > 0) {
            console.log('❌ ISSUE DETECTED: Popups are appearing inconsistently');
            console.log('Details:');
            console.log('- Raga:', ragaResults.details);
            console.log('- Dwesha:', dweshaResults.details);
            console.log('- Moha:', mohaResults.details);
        } else {
            console.log('✅ No popups detected - behavior is consistent');
        }

    } catch (error) {
        console.error('❌ Test failed:', error);
    } finally {
        await browser.close();
    }
}

async function testCardClick(page, selector, cardName) {
    const results = {
        popupCount: 0,
        details: []
    };

    try {
        // Check if card exists
        const cardExists = await page.locator(selector).count() > 0;
        if (!cardExists) {
            results.details.push(`Card ${cardName} not found`);
            return results;
        }

        // Ensure any open modals are closed before testing
        await page.evaluate(() => {
            const modal = document.getElementById('analysisModal');
            if (modal && modal.style.display !== 'none') {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        await page.waitForTimeout(500); // Wait for modal to close

        // Listen for dialog events (popups/alerts)
        page.on('dialog', dialog => {
            results.popupCount++;
            results.details.push(`Popup triggered: "${dialog.message()}"`);
            dialog.dismiss(); // Dismiss the popup
        });

        // Check if modal is displayed after click
        const checkModalDisplay = async () => {
            const modalVisible = await page.locator('#analysisModal').isVisible();
            if (modalVisible) {
                results.popupCount++;
                results.details.push('Modal popup displayed');
            }
            return modalVisible;
        };

        // Click the card multiple times to test consistency
        for (let i = 0; i < 3; i++) {
            console.log(`   Clicking ${cardName} - attempt ${i + 1}`);

            // Reset popup counter for this attempt
            const initialPopupCount = results.popupCount;

            // Click the card
            await page.locator(selector).click();
            await page.waitForTimeout(1000); // Wait for any popup or modal

            // Check if modal is displayed
            const modalDisplayed = await page.locator('#analysisModal').isVisible();
            const dialogTriggered = results.popupCount > initialPopupCount;

            if (modalDisplayed) {
                results.popupCount++;
                results.details.push(`Modal displayed on attempt ${i + 1}`);
            } else if (dialogTriggered) {
                results.details.push(`Alert popup on attempt ${i + 1}`);
            } else {
                results.details.push(`No popup/modal on attempt ${i + 1}`);
            }

            await page.waitForTimeout(500); // Brief pause between clicks
        }

    } catch (error) {
        results.details.push(`Error testing ${cardName}: ${error.message}`);
    }

    return results;
}

// Run the test
testPopupBehavior().then(() => {
    console.log('\n🏁 Test completed');
    process.exit(0);
}).catch(error => {
    console.error('💥 Test failed with error:', error);
    process.exit(1);
});
