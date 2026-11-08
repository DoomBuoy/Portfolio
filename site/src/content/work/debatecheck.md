---
title: DebateCheck — Multi-Agent Health-Claim Checker
category: LLM agents · NLP
plain: "AI agents argue for and against a health claim using real PubMed studies, and a judge model weighs the evidence."
tagline: Multi-agent LLM system (LangGraph). PRO and CON agents debate a health claim over retrieved PubMed abstracts and a judge model decides, with every citation checked.
date: "2026"
order: 4
metrics:
  - { value: "47.1%", label: "accuracy on evidence-backed claims (NLI baseline 35.3%)" }
  - { value: "35.5%", label: "macro-F1 on evidence-backed claims (baseline 23.1%)" }
  - { value: "181 / 181", label: "agent citations valid" }
  - { value: "101", label: "PubHealth benchmark claims" }
stack: [Python, LangGraph, Gemini, Groq, FastAPI, Streamlit, PubMed API]
links:
  - { label: "Live demo", href: "https://debatecheck.onrender.com/" }
  - { label: "Repository", href: "https://github.com/DoomBuoy/Debate_check" }
---

## The problem

Health claims are hard to check quickly, and a single search or a single model answer can miss relevant studies or overstate them. DebateCheck makes the **evidence and the reasoning visible** instead of handing back one opaque verdict. It is an educational tool, not medical advice.

## The approach

- **Retrieve:** search PubMed, filter for relevance, pull up to **8 papers per claim**, and extract snippets with their stance.
- **Debate:** a **PRO agent and a CON agent** argue the claim over **two rounds**, built with **LangGraph**. Claim analysis, stance and the debate run on Gemini.
- **Judge:** a separate, quality-aware judge model (on Groq) decides the verdict, using **self-consistency across four runs**.
- **Fallback:** if no snippet supports or contradicts the claim, the verdict is **"Unverifiable"**, with a clearly labelled general-knowledge answer.
- Served as a **FastAPI** backend with a **Streamlit** front end.

## The result

On a benchmark of **101 PubHealth claims**, compared with a traditional NLI classifier:

- On claims where usable evidence was found (n = 17): **47.06% vs 35.29%** accuracy and **35.54% vs 23.08%** macro-F1.
- **All 181 citation IDs** the agents produced were valid.
- About **21 seconds** per evidence-backed claim.

## Honest limits

- PubMed evidence was found for only **17 of 101 claims (16.8%)**. Retrieval is the main bottleneck, and across all 101 claims both systems score low (9.90% vs 7.92% accuracy). The results are preliminary.
- A valid citation is not necessarily a faithful one; overstatement wasn't measured automatically.

## Team

Course project for 36118 Applied Natural Language Processing (UTS, Spring 2026) with Parisasadat Kalaki, Chenchira Bamrung, Ezgi Kemer Alp and Seyoung Kim.
