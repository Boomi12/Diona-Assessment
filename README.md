# Dynamic PDF Recreation Assignment

This project was developed as part of the Diona Technologies screening assignment.

The objective was to recreate the two provided reference PDF documents using only **HTML, CSS, and Vanilla JavaScript**, while making the document content dynamic and maintaining a layout close to the original PDFs.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

No frontend frameworks were used.

## Project Overview

The project contains two exercises based on the reference PDFs provided with the assignment.

Both exercises were implemented as browser-based documents with dynamic data rendering and print-friendly layouts.

### Exercise 1

Exercise 1 recreates the first reference document while supporting dynamic data through JavaScript.

The implementation includes:

- Dynamic field rendering
- Dynamic checkbox/radio states
- Multiple datasets for demonstration
- Header and footer
- Page numbering
- Multi-page document layout
- Print / Save PDF functionality

### Exercise 2

Exercise 2 recreates the Medical & Travel Expense Request document.

The implementation includes:

- Dynamic worker and claim information
- Prescription drug records
- Over-the-counter drug records
- Medical supplies
- Parking expenses
- Mileage expenses
- Bus/Taxi expenses
- Dynamically generated table rows
- Multiple datasets for demonstration
- Header and footer
- Page numbering
- Print / Save PDF functionality

## Dynamic Data

The document data is stored in JavaScript objects and arrays rather than being completely hardcoded into the HTML.

The basic rendering flow is:

```text
JavaScript Dataset
        ↓
Rendering Functions
        ↓
Dynamic DOM
        ↓
Rendered Document
```

This allows the same document layout to display different data.

For demonstration purposes, dataset controls are provided so that different data can be loaded directly from the browser without modifying the source code.

## Print / Save PDF

Both exercises include a **Print / Save PDF** option.

The print styles are designed to:

- Preserve the document layout
- Maintain page separation
- Hide demonstration controls
- Keep headers and footers correctly positioned
- Produce a clean printable document

To save the document as a PDF:

1. Open the required exercise.
2. Click **Print / Save PDF**.
3. Select **Save as PDF** in the browser print dialog.
4. Save the generated document.

## How to Run

No installation or build process is required.

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a browser.

For development, the project can also be opened using the **Live Server** extension in Visual Studio Code.

## Testing

The implementation was tested with different datasets to verify:

- Dynamic field updates
- Multiple table rows
- Different amounts of data
- Checkbox/radio states
- Page layouts
- Page numbering
- Headers and footers
- Print output
- Dataset switching

The rendered documents were also manually compared with the provided reference PDFs during development.

## AI Usage

ChatGPT was used as a development assistant for understanding the reference PDFs, implementation suggestions, debugging, and layout refinement.

The implementation was reviewed, tested, and adjusted manually against the provided reference documents.

The prompt history is included in the repository in:

`AI_PROMPT_HISTORY.md`

## Exercise 1 Walkthrough Video

**Video:**  
[Add Exercise 1 walkthrough video link here]

---

## Exercise 2 Walkthrough Video

**Video:**  
[Add Exercise 2 walkthrough video link here]