# THE WORLD — Monday, 23 November 2026
[![make.fun · news-image-20261123](https://make.fun/badge/news-image-20261123.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![rank](https://make.fun/badge/news-image-20261123/oxdfahmad/news-image-20261123-run-20261123/rank.svg)](https://make.fun/bounty/news-image-20261123/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)
[![reward](https://make.fun/badge/news-image-20261123/oxdfahmad/news-image-20261123-run-20261123/reward.svg)](https://make.fun/bounty/news-image-20261123?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261123)

Entry for make.fun bounty **news-image-20261123** — "Sum up 23 November's world news in one image".

## The image

A one-page newspaper front page, drawn in code with Pillow (`../news-image-20261123-work/draw.py`, kept out of this repo as a build note) and shipped as `entry.png` (1024×1024, under 1 MiB). Ten stories, every one verified from reporting dated 23 November 2026, plus a five-item ticker:

1. **COP31 collapses** — the longest climate summit ever ends in Antalya with no overarching deal; fossil-fuel language dropped (CNN, Reuters).
2. **Democrats win 258 House seats** — the biggest majority since 1992; Chuck Hubbard beats Virginia Foxx in North Carolina (AP, Reuters).
3. **Iran claims strikes on US Patriot radars in Bahrain**; Houthis hit Saudi targets; two tankers hit mines in the Strait of Hormuz (Reuters).
4. **Russian drone flattens flats near Kyiv** — 14 missing in Dymer.
5. **Factory fire in Indonesia** — 3 dead, dozens missing in Banten (BBC).
6. **FBI most-wanted "Chapo Isidro" captured** in Sinaloa, Mexico (The Guardian).
7. **Russian cargo ship Sparta II ablaze off Finland** after a drone hit.
8. **Delta system failure delays half its flights** (CNN).
9. **FBI probes breach of its own criminal database** (Al Jazeera).
10. **Nepal's PM Balendra Shah holds talks with Modi** in New Delhi.

Ticker: Verstappen wins the Las Vegas GP; India post a record 720/9d in Wellington; South Korea's education minister quits in an AI cheating row; Bessent demands answers on Nvidia chips sold to China; thousands march in Lisbon over living costs.

## The program

`main.ts` (Node 22, standard library only) validates `entry.png` — PNG magic, ≤1 MiB, exactly 1024×1024 — and copies it to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). No network, no randomness, no clock: two runs write identical bytes.

## License

MIT — see `LICENSE`.
