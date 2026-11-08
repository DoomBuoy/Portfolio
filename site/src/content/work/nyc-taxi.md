---
title: NYC Taxi — Big Data Analytics
category: Big data
plain: "I cleaned 10 years of New York taxi data and built a model that predicts trip fares."
tagline: Cleaned and modelled ~1 billion NYC taxi trips (2014–2024) on Databricks, then predicted fares within $8 for 91% of trips.
date: Nov 2024
order: 2
metrics:
  - { value: "~1B", label: "trip records processed" }
  - { value: "0.873", label: "R² on fare prediction (1.0 is perfect)" }
  - { value: "$7.63", label: "RMSE (baseline $23.05)" }
  - { value: "91%", label: "fares within $8" }
stack: [PySpark, Databricks, Spark SQL, Python, MLlib]
links:
  - { label: "Repository", href: "https://github.com/DoomBuoy/New_York_Taxi_Databricks" }
---

## The problem

Ten years of New York yellow and green taxi data is several terabytes of Parquet files. The schemas change between years, the data is full of errors, and it's far too large for a laptop. The questions were simple: **when, where and how much?** Getting reliable answers at that scale was the hard part.

## The data

About **1 billion trip records** from 2014 to 2024, covering both yellow and green taxis, with schemas that changed over the decade.

## The approach

- **Unified the schemas** across a decade of files and processed them with distributed PySpark on Databricks.
- Built multi-check data validation and found **70–80 million invalid records** (7–8% of the data): negative fares, impossible distances and broken timestamps.
- Engineered **20+ features** and trained fare-prediction models with a time-aware train/test split.
- Ran Spark SQL analytics on peak hours, top revenue routes and tipping behaviour.

## The result

- RMSE of **$7.63**, against a $23.05 baseline: a **66% improvement**.
- **R² of 0.873**, with **91% of predictions within $8** of the real fare.
- Insights: trip volume peaks between **6 and 8 PM**, about **65% of trips include a tip**, and I ranked the top 10 routes by revenue share for 2024.

## What I'd do next

Stream the newest monthly drops automatically and serve the fare model behind an API.
