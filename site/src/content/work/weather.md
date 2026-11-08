---
title: Rain Forecaster
category: Forecasting
plain: "A web app that predicts whether it will rain a week from now."
tagline: Ensemble models that predict whether it will rain in 7 days and how much will fall over the next 3, served through a live API and web app.
date: Nov 2025
order: 4
metrics:
  - { value: "50+", label: "weather signals used per prediction" }
  - { value: "5", label: "models in the ensemble" }
  - { value: "2", label: "tasks: classify + regress" }
stack: [CatBoost, XGBoost, LightGBM, FastAPI, Streamlit, Docker, Render, Open-Meteo]
links:
  - { label: "Live app", href: "https://digitalappuctweatherprediction-tfdvs8zextpi3xvktbpogy.streamlit.app/" }
  - { label: "API docs", href: "https://weather-prediction-api-isp4.onrender.com/docs" }
  - { label: "Repository", href: "https://github.com/DoomBuoy/Digital_Product_Weather_Prediction" }
---

## The problem

Farmers, logistics teams and event planners don't need tomorrow's forecast so much as **next week's**. Two questions: *will it rain in exactly 7 days?* and *how many millimetres will fall over the next 3?*

## The data

Historical weather from the **Open-Meteo API**, with **50+ features**: temperature, humidity, wind, cloud cover, soil moisture and more.

## The approach

- A **classification ensemble** (CatBoost, XGBoost, LightGBM, Gradient Boosting, Gaussian NB) for rain or no rain, **tuned for high recall**, because a missed storm costs far more than a false alarm.
- A **regression ensemble** for 3-day cumulative precipitation.
- **Time-based cross-validation** so the models never see the future during training.
- A FastAPI service on **Render** (with Swagger docs) and a **Streamlit** app, both containerised with Docker.

## The result

A working forecasting product with a public API other systems can call, and a clear lesson in **choosing the metric that matches the cost of being wrong**.

## What I'd do next

Calibrate the probabilities and show forecast uncertainty in the app instead of a single number.
