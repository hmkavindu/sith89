# Deep Analysis: Visual Navigation System

## User Requirement
**Goal**: Visually navigate the website.
**Structure**: "Fish bone / Graph mesh".
**Starting Point**: Raga, Dwesha, Moha.
**Purpose**: Help users understand the Dhamma by seeing connections.

## Current Implementation Analysis

### 1. The "Starting Point" (Roots)
*   **Code**: `graph-visualizer.js` (Line 130)
*   **Logic**: `roots: '#raga, #dwesha, #moha'`
*   **Verdict**: ✅ **Perfect Match**. The graph is explicitly programmed to grow from these three roots.

### 2. The "Fish Bone / Mesh" Structure
*   **Code**: `generate-complete-graph.js`
*   **Logic**:
    *   **Spine**: The script groups Cittas into categories (Akusala, Kusala, etc.) which act as the main branches.
    *   **Ribs**: Individual Cittas (`citta-1`, `citta-2`...) branch off from these categories.
    *   **Mesh/Web**: The script connects Cittas to Cetasikas (`type: 'has-cetasika'`). Since multiple Cittas share the same Cetasikas, this creates a **Mesh** (many-to-many connections) rather than just a simple tree.
*   **Verdict**: ✅ **Matches "Mesh"**. The "Fish bone" aspect is represented by the hierarchical flow from Roots -> Categories -> Cittas.

### 3. Visual Representation
*   **Code**: `graph-visualizer.js` (Style definitions)
*   **Nodes**:
    *   `main-poison` (Raga/Dwesha/Moha): Large, Ellipse (The Head).
    *   `citta`: Small, Round Rectangle (The Bones).
    *   `cetasika`: Small, Ellipse (The Details).
*   **Verdict**: ✅ **Good Foundation**.

## Gaps & Recommendations

1.  **Integration is Missing**: The system lives in `visual-navigation/test-graph.html`. It is **not** connected to the main `index.html`. Users currently cannot find it.
2.  **"Fish bone" Layout**: The current layout is `breadthfirst` (Tree). A true "Fish bone" might benefit from a custom layout or a force-directed layout with constraints to make it look more organic.
3.  **Navigation**: Clicking a node currently just logs to console or alerts (in the test file). It needs to actually scroll the main page or open the modal.

## Action Plan
1.  **Generate Data**: Run the script to ensure the JSON is full and valid.
2.  **Embed**: Add the graph container to `index.html` (e.g., below the "Comparison" section).
3.  **Link**: Connect the node click events to the existing `showCittaDetails()` function in `script.js`.
