---
title: CrimeSense — Spatio-Temporal Crime Risk Forecasting
category: Graph ML · Capstone
plain: "A model that forecasts whether a police area will be Low, Moderate or High risk over the next 8 hours."
tagline: MDSI capstone. A spatio-temporal graph neural network over 33M+ NIBRS records that links 9,965 police agencies into one graph and forecasts each one's risk for the next 8-hour window.
date: "2026"
order: 1
metrics:
  - { value: "33M+", label: "NIBRS crime records" }
  - { value: "9,965", label: "agencies linked in one spatial graph" }
  - { value: "0.472", label: "macro F1, beats Gradient Boosting on every class" }
  - { value: "~4.9M", label: "held-out test observations" }
stack: [Python, Graph Neural Networks (STGNN), Gradient Boosting, Streamlit]
links:
  - { label: "Live app", href: "https://crimes-sense.streamlit.app/" }
  - { label: "Dashboard", href: "https://crime-dashboarded.streamlit.app/" }
---

## The problem

*"How many officers should we put in this suburb, on this shift?"* That question is still answered mostly by experience and last week's incident reports. As our capstone, my team and I set out to give it a **statistical starting point**: classify each police jurisdiction as **Low, Moderate or High risk** for the next **8-hour window**.

## The data

More than **33 million NIBRS records** (the US National Incident-Based Reporting System), covering **9,965 law-enforcement agencies**. We evaluated on a held-out test set of about **4.9 million observations**.

## The approach

- **Crime doesn't respect boundaries.** Activity in one area spills into its neighbours through transport, nightlife and people moving around. So instead of treating each agency as independent, we connected all **9,965 agencies into a spatial graph** and trained a **Spatio-Temporal Graph Neural Network (STGNN)** that learns from each agency's neighbours as well as its own history.
- **Scale doesn't transfer either.** Five incidents is a quiet night for a metro agency and an alarming one for a small regional department. Global thresholds would label big cities "High risk" and small towns "Low risk" forever. We set thresholds **relative to each agency's own baseline**, which is what made the system usable for rural and urban agencies alike.
- We benchmarked against a **Gradient Boosting** baseline.

## The result

The STGNN reached a **macro F1 of 0.472**, beating the Gradient Boosting baseline on **every class**.

## Where it shouldn't be trusted

We were explicit about this, and I'd argue it matters most:

- **Precision on the High-risk class is 0.21.** Most "High" alerts are not high-risk windows.
- Historical crime data measures **reported** crime, which reflects where police have already been looking. Predictive-policing tools can quietly reinforce that loop.
- A model like this belongs **next to a human decision-maker, not in place of one.**

## Team

Built with Yash Kapasi, Brighty Saji, Manasvi Menon, Parveen and Rose. Mentored by Ali Haidar and Junaid Akram, University of Technology Sydney.
