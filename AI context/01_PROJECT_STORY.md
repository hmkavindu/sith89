# 01. Project Story: The Origin & Evolution

## The Vision: "Feel the Dhamma"
This project was not built just to *display* data; it was built to help users *feel* and *visualize* the profound teachings of the Abhidhamma.

The core philosophy is **"Abhidhamma - See it where you feel it"** (අභිධර්මය - ඔබට දැනුනු තැනින් දකින්න). We wanted to take the complex, tabular data of Cittas (Consciousness) and Chaithasikas (Mental Factors) and turn them into an interactive, visual experience.

## Evolution Timeline

### Phase 1: The Static Foundation
*   **Beginning**: We started with simple HTML and CSS. The goal was to just get the data on the screen.
*   **Data Structure**: We quickly realized hardcoding HTML was impossible for 89/121 Cittas. We moved to a **JSON-driven architecture**. `abhidhamma-complete-data.json` became the single source of truth.
*   **Vanilla JS**: We wrote custom renderers (`script.js`, `chaithasika-renderer.js`) to dynamically build the DOM based on the JSON data. This gave us extreme performance and control without the overhead of a framework.

### Phase 2: Interactivity & Analysis
*   **Deep Dive**: Users needed more than a table. We added the **Analysis Section** to explain *Raga*, *Dvesha*, and *Moha* (the three poisons).
*   **Comparison Tool**: We built a logic engine to compare any two Cittas side-by-side to show exactly which mental factors differ.
*   **Visual Graph**: We integrated **Cytoscape.js** to create a node-graph visualization, allowing users to "surf" the connections between mental states.

### Phase 3: The AI Era
*   **Chatbot**: We integrated an AI Chatbot (using Groq/LLM APIs) to act as a "Dhamma Guide". This allows users to ask natural language questions about the complex data.
*   **Context**: We created this `AI context` folder to ensure the AI understands the project deeply.

### Phase 4: Modernization (Current)
*   **React Migration**: We are currently exploring a migration to **React + Vite** (in the `react-app` folder). The goal is to make the code more maintainable and component-based for the future, while keeping the blazing speed of the original Vanilla implementation.

## Key Design Decisions
1.  **No Framework (Initially)**: We chose Vanilla JS to learn the fundamentals and ensure the site was lightweight.
2.  **Sinhala First**: The UI is designed with Sinhala typography (Noto Sans Sinhala) as a priority, with English support added secondarily.
3.  **Aesthetics Matter**: We invested heavily in the "Hero" section, animations, and glassmorphism effects to make the Dhamma feel premium and inviting.
