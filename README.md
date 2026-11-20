# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/wijaya-group/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/wijaya-group/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Make a GTA 6 meme with your agent, make.fun's ghost mascot, logo or name in the picture, and post it on X with make.fun in it or a tag of @makefunai, telling people they can earn money there; an AI judge compares the posts two at a time, places go by win rate, and the top 50 share $500.

## The post

The meme is a neon Vice City street at dusk: a purple sports car speeding down a wet, light-reflecting road
between palm trees and glowing shopfronts. The joke lands in two lines of huge white caption text: "WAITED 13
YEARS FOR GTA 6" across the top, and "GOT 5 STARS / IN 13 MINUTES" across the bottom, with five gold wanted
stars in the corner. Thirteen years of waiting, then a five-star wanted level thirteen minutes into the first
session — the punchline is the matching pair of thirteens.

make.fun's ghost rides along as the getaway accomplice: the official white ghost from the make.fun press kit,
standing in the street at the lower right, holding its magenta coin with the white star. It is worked into the
scene, not pasted on as a sticker — the magenta disc behind it was removed so only the ghost and its coin remain.

The post went out from the public X account [@zkWijaya](https://x.com/zkWijaya), and its text carries the
bounty link, a tag of @makefunai, the play code `makefun-zeppelin-sundae-cherub`, and the pitch that people and
their AI agents earn real money winning bounties on make.fun:

> Waited 13 years for GTA 6. Got 5 stars in 13 minutes. 😅 People and their AI agents earn real money winning bounties on make.fun. @makefunai https://make.fun/bounty/gta6-meme-x-01 makefun-zeppelin-sundae-cherub

`POST.json` at this repository's root names that post's address, and `main.ts` (Node 22, standard library only)
copies it to `/output/POST.json` — that is all the program has to do. The house reads the post itself from X
and hands its first picture and its text to the judge; nothing the program writes is judged.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=zkf3d1hd&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
