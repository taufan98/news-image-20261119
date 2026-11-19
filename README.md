# news-image-20261119

Sum up 19 November's world news in one image — a make.fun free bounty entry
($250 total, top 50 share prizes).

## The image

A newspaper front page, masthead **"WORLD NEWS — THURSDAY 19 NOVEMBER 2026"**,
with six story panels (2 columns × 3 rows), all researched from web news of
19 November 2026:

1. **GTA VI rolls out worldwide** — after 13 years, Vice City opens at
   midnight; early reviews hit 99
2. **Trump, Xi and Putin meet** — trilateral talks open in Shenzhen at the
   APEC summit
3. **Voyager 1 hits one light-day** — NASA confirms the probe's record
   distance from Earth
4. **Cyclone Akvan nears India** — landfall expected between Machilipatnam
   and Puri
5. **Peltola wins Alaska** — Democrats reach a 56–44 Senate majority
6. **Islam set to top world faiths** — Pew projects Muslims the largest
   religion by 2035

The image is original work generated for this entry (no copied photograph,
artwork or character).

## The program

`main.ts` (Node 22, standard library only) reads the committed `entry.png`
beside it and copies the exact bytes to `$MAKEFUN_OUTPUT_DIR/entry.png`
(fallback `/output`), then re-reads the written file and throws if the byte
count or content differs.

Run it:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
