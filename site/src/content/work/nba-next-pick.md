---
title: NBA Next Pick
category: Machine learning
plain: "A model that predicts which college players will be drafted into the NBA."
tagline: Predicting which college basketball players get drafted into the NBA, with a soft-voting ensemble scoring 0.98+ ROC-AUC.
date: "2025"
order: 6
metrics:
  - { value: "0.98+", label: "ROC-AUC score (1.0 is perfect)" }
  - { value: "0.94+", label: "recall on drafted players" }
  - { value: "4", label: "structured experiments" }
stack: [Python, Scikit-Learn, XGBoost, LDA, Poetry]
links: []
---

## The problem

Scouts can't watch every college player. Could a model give each player a **probability of being drafted**, so scouts know where to look first?

## The data

Historical college player statistics, demographics and draft outcomes from a UTS Kaggle competition.

## The approach

I ran four experiments, each one testing a hypothesis:

1. **Baseline**: cleaning, feature engineering and logistic regression.
2. **Feature selection** with LDA to reduce dimensions and overfitting.
3. **Tuning**: grid search on XGBoost.
4. **Ensemble**: soft voting across logistic regression, LDA and XGBoost.

## The result

The ensemble reached **ROC-AUC above 0.98** and **recall above 0.94**, confirming the hypothesis that ensembling reduces overfitting. Recall mattered most: missing a future star is the expensive mistake.

## What I'd do next

Explain the predictions per player with SHAP so scouts can see *why* the model flagged someone.
