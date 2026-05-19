# Klein Four Group Simulator

A visual and interactive simulator demonstrating the **Klein Four Group (\(V_4\))** using rectangle symmetries.

This project helps visualize abstract algebra concepts through geometric transformations such as:

- Horizontal Reflection
- Vertical Reflection
- 180° Rotation
- Identity Transformation

---

# What is the Klein Four Group?

The Klein Four Group is a mathematical group with 4 elements:

\[
V_4 = \{e, h, v, r\}
\]

Where:

| Symbol | Meaning |
|---|---|
| \(e\) | Identity |
| \(h\) | Horizontal reflection |
| \(v\) | Vertical reflection |
| \(r\) | 180° rotation |

These transformations satisfy:

\[
h^2 = v^2 = r^2 = e
\]

and:

\[
hv = vh = r
\]

This project visually demonstrates these operations using rectangle symmetry.

---

# Features

- Interactive rectangle transformations
- Horizontal flip
- Vertical flip
- 180° rotation
- Transformation history tracker
- Current state display
- Canvas-based rendering
- Real-time visual updates

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- HTML Canvas API
- Visual Studio Code

---

# Project Structure

```plaintext
rectangle-symmetry-simulator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# How to Run the Project

## 1. Clone the Repository

```bash
git clone https://github.com/yourusername/klein-four-group-simulator.git
```

---

## 2. Open in VS Code

Open the folder in:

- Visual Studio Code

---

## 3. Install Live Server Extension

Install:

- Live Server (by Ritwick Dey)

---

## 4. Run the Project

Right-click:

```plaintext
index.html
```

Then select:

```plaintext
Open with Live Server
```

The project will open in your browser.

---

# How the Simulator Works

The rectangle supports the following symmetry operations:

| Operation | Effect |
|---|---|
| Horizontal Flip | Reflects over x-axis |
| Vertical Flip | Reflects over y-axis |
| Rotate 180° | Rotates rectangle |
| Reset | Returns to identity |

The red marker and text label help visualize transformations clearly.

---

# Mathematical Background

The symmetry group of a non-square rectangle forms the Klein Four Group.

The transformation table:

| × | e | h | v | r |
|---|---|---|---|---|
| e | e | h | v | r |
| h | h | e | r | v |
| v | v | r | e | h |
| r | r | v | h | e |

This group is:

- Finite
- Abelian
- Non-cyclic

---

# Future Improvements

Possible upgrades:

- Smooth animations
- Cayley table visualization
- Matrix transformation display
- Transformation composition engine
- React + TypeScript version
- Interactive algebra explorer
- Support for Dihedral Groups
- SVG rendering
- Mobile responsiveness

---

# Learning Outcomes

This project helps understand:

- Abstract Algebra
- Group Theory
- Geometric Symmetry
- Canvas Transformations
- JavaScript Graphics
- Matrix Operations
- Mathematical Visualization

---



# Educational Purpose

This project was built as a learning tool for:

- Group Theory
- Mathematics Visualization
- Interactive Geometry
- Computer Graphics Concepts

---


# Author

Ayesha Tahreem
Meghana M

