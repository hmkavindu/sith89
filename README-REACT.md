# React Conversion - Abhidhamma Citta Chaithasika Tool

This is the React version of the Abhidhamma Citta Chaithasika tool.

## Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Start Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

## Project Structure

```
abidharma-sith/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with navigation
│   │   └── Layout.css
│   ├── pages/
│   │   ├── Home.jsx            # Home page with citta table
│   │   ├── Home.css
│   │   ├── CittaDetail.jsx     # Detailed citta page
│   │   └── CittaDetail.css
│   ├── data/
│   │   └── cittaData.js        # Citta data (needs to be completed with all 89 cittas)
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index-react.html            # HTML entry point for React
├── vite.config.js              # Vite configuration
└── package-react.json          # Dependencies (rename to package.json after setup)
```

## Current Status

✅ React project structure created
✅ Routing setup (React Router)
✅ Layout component
✅ Home page with citta table
✅ CittaDetail page (basic structure)
✅ Data structure defined

## Next Steps

1. **Complete Data Migration:**
   - Extract all 89 cittas from `script.js` into `src/data/cittaData.js`
   - Add detailed content for each citta (from HTML detailed pages)

2. **Enhance CittaDetail Page:**
   - Add all 7 sections from the HTML template
   - Implement collapsible sections
   - Add styling matching the original design

3. **Migrate Additional Features:**
   - Language switcher
   - Search and filtering
   - Comparison functionality
   - Category badges and styling

4. **Testing:**
   - Test all routes
   - Verify data display
   - Check responsive design

## Notes

- The original static HTML files are preserved
- React app runs on port 5173 by default
- Original Express server can still run on its original port

