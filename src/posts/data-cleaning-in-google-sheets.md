---
layout: layouts/post.njk
title: "How to Clean Data in Google Sheets (Step-by-Step for Data Science Teachers)"
date: 2025-11-09
metaTitle: "Google Sheets Data Cleaning Tutorial for High School Data Science Teachers"
metaDesc: "A beginner-friendly walkthrough of cleaning messy data in Google Sheets, with free downloads, student handouts, and a full teacher bundle."
summary: "A complete Google Sheets data cleaning lesson — perfect for teachers rolling out high school data science, YouCubed, or CODAP-based courses."
primaryCategory: data-science-modeling
tags:
  - data-science
  - math-education
  - spreadsheets
  - google-sheets
permalink: /posts/data-cleaning-in-google-sheets/
cover: /images/blog/data-cleaning-google-sheets-classroom.webp
cardTitle: "Google Sheets Data Cleaning Tutorial"
engage: ""
---
<div class="featured-image">
  <img src="/images/blog/data-cleaning-google-sheets-classroom.webp" alt="Student cleaning a laptop showing a spreadsheet with a feather duster">
</div>
<!-- Payhip script for buttons -->
<script type="text/javascript" src="https://payhip.com/payhip.js"></script>

# How to Clean Data in Google Sheets  
## Step-by-Step for YouCubed & HS Data Science Teachers

Cleaning data is one of the most underrated — and most important — skills in any high school data science course. Whether your district is rolling out the YouCubed HS Data Science curriculum*, IDS*, or a state-developed pathway, students will need to learn how to:

- identify messy or inconsistent data  
- standardize capitalization  
- remove units and stray characters  
- fix typos and inconsistencies  
- prepare data for sorting, filtering, and visualizations  

This post walks through the **entire process using Google Sheets**, and includes:

- a **free student handout**
- a **copy/paste dataset** (including intentionally messy entries)
- a **downloadable CSV/XLSX**
- an optional **paid teacher bundle** with keys, lesson plans, screenshots, and the Common Errors reference sheet

Below is the full video lesson that accompanies this activity.

---

<div class="video-embed">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/uKML6ZIbaoc?si=kRrFjKteD79BsM5v" title="Google Sheets Data Cleaning Tutorial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

---

### 📥 Copy/Paste Dataset (Messy Version)

Teachers and students can paste this directly into Google Sheets.  
It includes:

- inconsistent spacing  
- inconsistent capitalization  
- missing values  
- a blank record  
- typos (“Rigth”)  
- units included in numeric fields  

### **Messy Dataset Table**

<div class="sf-table-wrap">
<table class="sf-table sf-table--fixed sf-table--zebra">
  <thead>
    <tr>
      <th>Student Name</th>
      <th>Paper Type</th>
      <th>Distance</th>
      <th>Hand Used</th>
      <th>Throwing style</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ava </td>
      <td>NoteBook</td>
      <td>182 cm</td>
      <td>Right</td>
      <td>overhand</td>
    </tr>
    <tr>
      <td>Jayden</td>
      <td>notebook</td>
      <td>160</td>
      <td>Left</td>
      <td>Underhand</td>
    </tr>
    <tr>
      <td>Amir</td>
      <td>Printer</td>
      <td>198cm</td>
      <td>right</td>
      <td>Overhand</td>
    </tr>
    <!-- Intentional blank row -->
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Maya</td>
      <td>Note Book</td>
      <td>172</td>
      <td>Right</td>
      <td>Under hand</td>
    </tr>
    <tr>
      <td>Ethan</td>
      <td>Printer</td>
      <td></td>
      <td>Left</td>
      <td>Overhand</td>
    </tr>
    <tr>
      <td>Sophia</td>
      <td>notebook</td>
      <td>155</td>
      <td>Right</td>
      <td>Underhand</td>
    </tr>
    <tr>
      <td>Noah</td>
      <td>Notebook</td>
      <td>188</td>
      <td>Right</td>
      <td>Overhand</td>
    </tr>
    <tr>
      <td>Isabella</td>
      <td>Printer </td>
      <td>203 cm</td>
      <td>Right</td>
      <td>Underhand</td>
    </tr>
    <tr>
      <td></td>
      <td>printer</td>
      <td>186 centimeters</td>
      <td>L</td>
      <td>Overhand</td>
    </tr>
    <tr>
      <td>Mateo</td>
      <td>NoteBook</td>
      <td>176</td>
      <td>Left</td>
      <td>Overhand</td>
    </tr>
    <tr>
      <td>Kai</td>
      <td>Printer</td>
      <td>190cm</td>
      <td>Right</td>
      <td>Overhand</td>
    </tr>
  </tbody>
</table>
</div>

---

### Copy the CSV and Paste it into Google Sheets

```text
Ava,Notebook,182 cm,Right,overhand
Jayden,notebook,160,Left,Underhand
Amir,Printer,198cm,right,Overhand

Maya,Note Book,172,Right,Under hand
Ethan,Printer,,Left,Overhand
Sophia,notebook,155,Right,Underhand
Noah,Notebook,188,Right,Overhand
Isabella,"Printer ",203 cm,Right,Underhand
" ",printer,"186 centimeters",L,Overhand
Mateo,NoteBook,176,Left,Overhand
Kai,Printer,190cm,Right,Overhand
```

> **Pro Tip:** If the data pastes into a single column, select the data, go to the **Data** menu, and choose **Split text to columns**. Google Sheets usually detects the commas automatically!
---

### 📁 XLSX Version

<a href="/downloads/messy-student-data.xlsx" target="_blank" rel="noopener noreferrer">⬇️ <strong>Download the Sample Student Dataset</strong></a>

---

## 🎯 What This Lesson Covers

Students will learn how to:

- remove units (cm, ft, etc.)  
- correct inconsistent capitalization  
- remove hidden spaces  
- apply **LOWER()**, **UPPER()**, and **PROPER()**  
- safely use Find & Replace  
- convert formulas to text  
- delete blank or corrupted rows  
- prepare data for sorting, filtering, and pivot tables  

This directly supports multiple early units in high school data science:

- **YouCubed HS Data Science** Units 1 & 2  *
- **IDS (UCLA)** early modules  *
- **Maryland Data Science Pathway** introductory competencies  
---



### Free Student Handout (Warm-Up)

Use this before teaching the data cleaning steps — students highlight what looks “messy,” which primes them for the lesson.

<a href="https://payhip.com/b/s86ji" class="payhip-buy-button" data-theme="blue" data-product="s86ji">Download FREE Student Handout</a>

---

### Common Data Cleaning Fixes Reference Sheet

PDF Quick Reference handout for students covering removing whitespace, fixing capitalization, using find and replace, and dealing with blanks

<a href="https://payhip.com/b/R4Trw" class="payhip-buy-button" data-theme="blue" data-product="R4Trw">Get the Reference Sheet</a>

### Full Teacher Bundle (Lesson Plan + Keys + Reference Sheet)

The premium download includes:

- 10-page teacher guide  
- Full answer key  
- Student-ready handout (editable)  
- Common Errors Reference Sheet  
- Discussion questions & extensions  
- STAR framework activity format  
- Classroom tips & differentiation options  

<a href="https://payhip.com/b/KS2xA" class="payhip-buy-button" data-theme="blue" data-product="KS2xA">Get the FULL Teacher Bundle</a>

---

## Why Data Cleaning First?

Before students can analyze anything — in Sheets, CODAP, Tableau, or Python — they need to learn that:

- data arrives messy  
- tools do not fix errors for them  
- small inconsistencies create big downstream problems  
- transparency + documentation = real data science  
- cleaning is part of “showing your work”  

This mirrors industry practice and prepares them for later work in:

- regressions  
- visualizations  
- modeling  
- simulations  
- coding in Python/Colab  

---

## 🔗 More Resources Coming Soon

The full Google Sheets series includes:

1. **Sorting & Filtering**
2. **Descriptive Statistics**
3. **Pivot Tables & Charts**
4. **Simulations with RANDBETWEEN() + COUNTIF()**
5. **Intro to CODAP**
6. **Intro to Google Colab & Python**

All will follow the same Solvefinity structure:  
**Learn it. Teach it. Bring it to life.**
---

<div class="sf-disclaimer">
<small><em>*This activity and tutorial are not endorsed by, affiliated with, or sponsored by YouCubed, Stanford University, or the Illustrative Data Science curriculum. All references are for educational purposes only.</em></small>
</div>

---
