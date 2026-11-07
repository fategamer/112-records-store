# 11/2 Records — Official Storefront

Premium **Discipline Over Drama** streetwear store for **11/2 Records™**.

## Official shopping link

**https://11over2records.com/**

This is the canonical public storefront and the destination for customer shopping links.

## Stack

- **Frontend:** Static HTML / CSS / JS (this repo)
- **Commerce backend:** Shopify (`r0up81-3t.myshopify.com`) — catalogue, cart, checkout, payments and orders
- **Product images:** Shopify CDN

## Features

- Phase 2 streetwear catalogue (tees, hoodies and accessories)
- Product detail drawer with size selection
- Trust, shipping, care and FAQ content
- Conversion-focused label branding
- Buy → official Shopify checkout

## Channel architecture

- **Shopify:** source of truth for products, prices, inventory and checkout.
- **Notion:** 11/2 Records HQ for brand operations and campaign planning.
- **Whop:** planned additional discovery/sales channel; publish only after its account and purchase flow are configured and tested.

## Deploy

1. Import this repo on [Vercel](https://vercel.com/new)
2. Deploy (no build command)
3. Configure the custom domain for the deployed storefront if needed.

## Artist HQ

[fategamer.com](https://www.fategamer.com) — music and artist site (links here for merch).
