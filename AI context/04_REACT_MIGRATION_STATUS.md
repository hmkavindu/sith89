# 04. React Migration Status

## Why React?
While the Vanilla JS version is fast and effective, as the application grows (especially with complex state management for the Comparison Tool and AI Chatbot), a component-based architecture becomes more manageable.

## Current Status (as of Dec 2025)
*   **Location**: `react-app/`
*   **Tech**: React 18+, Vite, TailwindCSS (likely).
*   **State**: **Experimental / In-Progress**.
    *   The main production site is still the Vanilla JS version in the root directory.
    *   The React app is a parallel implementation.

## Feature Parity Check
| Feature | Vanilla JS (Root) | React App | Notes |
| :--- | :---: | :---: | :--- |
| **Citta Table** | ✅ | 🚧 | Core table rendering needs porting. |
| **Analysis** | ✅ | ❌ | Not yet implemented in React. |
| **Chatbot** | ✅ | ❌ | Needs to be wrapped in a React Component. |
| **Visual Graph** | ✅ | ❌ | Cytoscape integration needed in React. |

## How to Run the React App
1.  `cd react-app`
2.  `npm install`
3.  `npm run dev`

## Future Plan
The goal is to eventually replace the root Vanilla JS app with the built React app, but only when feature parity is 100% and performance is matched.
