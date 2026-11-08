---
title: doombuoy — Python package
category: Open source
plain: "A Python tool that lets data scientists compare many models with a single call."
tagline: My open-source Python package. One call compares a whole range of models on your data and gives you a baseline in seconds.
date: Nov 2025
order: 8
metrics:
  - { value: "~50%", label: "less repeated code" }
  - { value: "4", label: "task types supported" }
  - { value: "1 call", label: "to a model comparison summary" }
stack: [Python, Scikit-Learn, Pandas, Packaging]
links:
  - { label: "Package (TestPyPI)", href: "https://test.pypi.org/project/doombuoy/" }
  - { label: "Repository", href: "https://github.com/DoomBuoyz/doombuoy" }
---

## The problem

Every new project started the same way: copy-paste the same twenty lines to try ten models and see which one wins. I got tired of it.

## The approach

I packaged that routine into a library:

```python
from doombuoy import binary_classification_model_comparison_summary

summary = binary_classification_model_comparison_summary(df, target_col="target")
```

- One-call model comparison for **binary classification, multiclass, regression and time series**.
- `plot_model_performance()` to chart accuracy, AUC or F1 across models.
- **Data quality** helpers: reports, summaries, plots and issue detection.

## The result

It cut repeated code in my own experiments by **about half**, and taught me packaging, versioning and writing docs for people who aren't me.

## What I'd do next

Publish to the main PyPI index and add a CI test suite.
