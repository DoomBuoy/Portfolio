---
title: Sydly — Travel Sydney Seamlessly
category: Mobile app
plain: "An app that shows Sydney commuters where their bus, train or ferry is, live on a map."
tagline: A live transit app for Sydney that tracks 10,000+ vehicles with 5-second GPS updates, published on Google Play and the App Store.
date: Feb 2026
order: 1
metrics:
  - { value: "10,000+", label: "live vehicles on the map" }
  - { value: "5 s", label: "GPS refresh rate" }
  - { value: "2", label: "app stores, live" }
stack: [Flutter, Dart, TfNSW GTFS-R, Protocol Buffers, OpenStreetMap]
links:
  - { label: "Website", href: "https://doombuoy.github.io/Transport_app_website/" }
  - { label: "Google Play", href: "https://play.google.com/store/apps/details?id=io.github.Doombuoy.safarnama" }
  - { label: "App Store", href: "https://apps.apple.com/au/app/sydly-travel-sydney-seamlessly/id6761148694" }
---

## The problem

Getting around Sydney means juggling several apps: one for the train, one for parking, one for fuel prices. I wanted **one app** that shows where every bus, train and ferry actually is *right now*, along with the things drivers need.

## The data

Transport for NSW publishes real-time GTFS-R feeds: binary Protocol Buffer streams that describe the position of every active vehicle in the network. The feeds are large and arrive constantly, and they're no use to a commuter until they're decoded, joined to static timetable data and drawn on a map.

## The approach

- Engineered a high-speed backend that consumes the live **TfNSW GTFS-R feeds** (Protocol Buffers).
- Rendered **10,000+ active vehicles** on a map with precise **5-second** GPS updates.
- Added **smart trip planning** alongside the live tracking.
- Added driver tools on top of the transit data: **live car park capacity**, a **cheap fuel finder** and **commercial loading zone** maps.

## The result

Sydly is live on **Google Play and the App Store**. It's my first product built for the public rather than for a marker, and it taught me that shipping a product is a different job from training a model.

## What I'd do next

Use historical vehicle positions to predict delays, turning Sydly from "where is my bus" into "when will my bus *really* arrive".
