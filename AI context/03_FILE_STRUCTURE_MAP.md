# 03. File Structure Map

This map explains the purpose of key files and directories in `abidharma-sith/`.

```
abidharma-sith/
├── AI context/                 # [YOU ARE HERE] Documentation for AI and Developers
├── public/                     # Static assets (images, icons)
├── visual-navigation/          # Cytoscape.js graph visualization module
├── react-app/                  # [EXPERIMENTAL] React version of the app
│
├── index.html                  # MAIN ENTRY POINT. The homepage.
├── styles.css                  # Main stylesheet.
├── script.js                   # Main application logic (Table rendering, events).
│
├── local-server.js             # Node.js Express server for local dev & API proxy.
├── package.json                # Dependencies (Express, Dotenv, etc.).
├── netlify.toml                # Netlify deployment configuration.
│
├── abhidhamma-complete-data.json # THE DATABASE. All Citta/Chaithasika data.
├── mental-states-data.json     # Specific data for Raga/Dvesha/Moha analysis.
│
├── generate-citta-pages.js     # Script to generate static HTML pages for each Citta.
├── citta-detail-page-template.html # Template used by the generator.
│
├── mental-states-analysis.js   # Logic for the "Three Poisons" section.
├── chatbot.js                  # Frontend logic for the AI assistant.
└── term-definitions-system.js  # Logic for tooltips and term definitions.
```

## Key Files to Watch
*   **`script.js`**: If you want to change how the main table works, look here.
*   **`styles.css`**: If you want to change the look and feel.
*   **`local-server.js`**: If you are debugging the Chatbot API connection.
