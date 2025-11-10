# 📍 Location Guide: View Details Button & Click Functionality

## ✅ What Was Added:

### 1. **"View Details" Button Column** 
   - **Location**: Rightmost column in the table (Column 6: "ක්‍රියා" / "Actions")
   - **File**: `index.html` line 230
   - **File**: `script.js` lines 295-299

### 2. **Button Styling**
   - **Location**: `styles.css` lines 709-778
   - **Visual**: Purple gradient button with eye icon 👁️
   - **Text**: "විස්තර" (Sinhala) / "View" (English)

### 3. **Click Functionality**
   - **Location**: `load-abhidhamma-data.js` lines 56-99
   - **How it works**: 
     - Click the button OR click anywhere on the row
     - Opens a modal with complete citta details
     - Shows all 52 cetasika factors
     - Shows references to tipitaka.lk and archive.org

### 4. **Detail Modal**
   - **Location**: Created dynamically when button is clicked
   - **File**: `load-abhidhamma-data.js` lines 140-234
   - **File**: `styles.css` lines 2850-3087
   - **What it shows**:
     - Citta name and description
     - Category and subcategory
     - All 52 cetasika factors (with ✓/✗ indicators)
     - References to tipitaka.lk and archive.org

## 🎯 How to Use:

1. **Open the website** - Navigate to `index.html`
2. **Go to the table section** - Click "චිත්ත චෛතසික වගුව" in navigation
3. **Find a citta row** - Scroll through the table
4. **Click the button** - Look for the purple "විස්තර" button in the rightmost column
5. **OR click the row** - Click anywhere on the row itself
6. **View details** - Modal opens showing complete information

## 🔍 Where to Find:

### Table Header (6th column):
```html
<th data-si="ක්‍රියා" data-en="Actions">ක්‍රියා</th>
```
**File**: `index.html` line 230

### Button in Each Row:
```html
<button class="view-details-btn" data-citta-id="${citta.id}">
    <i class="fas fa-eye"></i> <span>විස්තර</span>
</button>
```
**File**: `script.js` lines 295-299

### Button CSS Styles:
```css
.view-details-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    /* ... */
}
```
**File**: `styles.css` lines 710-725

### Click Handler Code:
```javascript
tableBody.addEventListener('click', function(e) {
    // Handle button clicks
    if (e.target.closest('.view-details-btn')) {
        // Show details modal
    }
});
```
**File**: `load-abhidhamma-data.js` lines 56-99

## 📱 Visual Indicator:

- **Button Color**: Purple gradient (purple to violet)
- **Icon**: Eye icon (👁️)
- **Text**: "විස්තර" (Sinhala) / "View" (English)
- **Hover Effect**: Button lifts up and changes color
- **Row Hover**: Entire row highlights when you hover over it

## 🐛 Troubleshooting:

If buttons don't appear:
1. Check browser console (F12) for errors
2. Make sure `abhidhamma-complete-data.json` file exists
3. Check if JSON file is loading (look for console message: "✅ Abhidhamma data loaded")
4. Verify table has 6 columns (including Actions column)

If clicking doesn't work:
1. Check console for: "Button clicked, showing citta:"
2. Make sure `load-abhidhamma-data.js` is loaded (check script tags in HTML)
3. Verify the JSON data is loaded correctly

## 📝 Note:

- The entire row is clickable (not just the button)
- The button is in the LAST column (rightmost)
- Modal shows ALL data from JSON file
- Each cetasika factor is shown with ✓ (present) or ✗ (absent)







