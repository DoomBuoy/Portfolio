---
title: Bitcoin Price Forecaster
category: Forecasting
plain: "A web app that predicts tomorrow's highest Bitcoin price."
tagline: A deployed forecasting product, from model to FastAPI to Streamlit, predicting Bitcoin's next-day high from a decade of market data.
date: Nov 2025
order: 5
metrics:
  - { value: "79.6%", label: "of next-day price movement explained (R²)" }
  - { value: "10 yrs", label: "of training data" }
  - { value: "3", label: "services: model, API, app" }
stack: [XGBoost, LightGBM, CatBoost, FastAPI, Streamlit, Docker, W&B, LIME]
links:
  - { label: "Live dashboard", href: "https://digitalappuctbitcoinpriceprediction-8f9newvrhuqkth7wb25e7l.streamlit.app/" }
  - { label: "Repository", href: "https://github.com/DoomBuoy/Digital_Product_Bitcoin_Price_Prediction" }
---

## The problem

Most crypto "predictors" are a notebook and a chart. I wanted to build the **whole product**: a model, an API other apps can call, and a dashboard anyone can open, all able to keep running when something fails.

## The data

Bitcoin market data from **2015 to 2025**, pulled from **Kraken** (price data) and **CoinGecko** (market cap), plus engineered features such as circulating supply, velocity and EMAs.

## The approach

- Trained and tuned **XGBoost, LightGBM and CatBoost**, tracking experiments in Weights & Biases.
- Used **LIME** so each prediction comes with an explanation.
- Served the pipeline through a **FastAPI** service with health checks and a **fallback** in case model loading fails.
- Built a **Streamlit** dashboard with live prices, multi-timeframe charts and theme options, and packaged everything in **Docker**.

## The result

**79.6% R²** on next-day high prediction, deployed and publicly usable. Honest caveat: crypto is noisy, so the value is in the engineering more than in trading on the numbers.

## What I'd do next

Add on-chain and sentiment features, and run the model as a scheduled job that records its own accuracy over time.
