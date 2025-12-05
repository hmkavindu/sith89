# 02. Architecture & Technology Stack

## Core Technology
*   **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+).
*   **Backend (Local)**: Node.js with Express (`local-server.js`).
*   **Data Storage**: Static JSON files.
*   **Hosting**: Netlify (Static hosting).

## The Data Flow
1.  **Source of Truth**: `abhidhamma-complete-data.json` contains the entire database of Cittas and Chaithasikas.
2.  **Loading**: `load-abhidhamma-data.js` fetches this JSON on page load.
3.  **Processing**:
    *   `script.js`: Main controller. Parses data and populates the main table.
    *   `mental-states-analysis.js`: Extracts specific data for the "Three Poisons" analysis.
    *   `chaithasika-renderer.js`: Specialized logic for rendering the 52 mental factors.

## Key Systems

### 1. Dynamic Page Generation
We don't just have one `index.html`. We use `generate-citta-pages.js` (Node script) to pre-generate individual HTML pages for each Citta (e.g., `citta-1-detailed-page.html`).
*   **Why?** SEO and performance. Each Citta gets its own permalink.
*   **Template**: Uses `citta-detail-page-template.html`.

### 2. Visual Navigation (Cytoscape)
Located in `visual-navigation/`.
*   **Lib**: Cytoscape.js.
*   **Logic**: Converts the JSON relationships (Citta <-> Chaithasika) into Nodes and Edges.
*   **Interaction**: Clicking a node navigates to the detailed view.

### 3. AI Chatbot Integration
*   **Frontend**: `chatbot.js` handles the UI widget.
*   **Backend**: The `local-server.js` proxies requests to the Groq API (or similar LLM provider) to avoid exposing keys in the client.
*   **Context**: The system prompts are stored in `prompts/` or embedded in the server logic.

## CSS Architecture
*   **`styles.css`**: The monolith stylesheet.
*   **Variables**: We use CSS Custom Properties (`--primary-color`, etc.) for theming.
*   **Responsive**: Media queries handle Mobile vs Desktop layouts.
