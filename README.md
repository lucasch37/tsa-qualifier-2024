# RHS Slippers

The premier place to get your lobster slippers.

## Accessing the website

Here are your options to view the website in order of most ideal to okay.

### Option 1: Vercel (Recommended)

You can view the website at [rhs-slippers.vercel.app](rhs-slippers.vercel.app).

### Option 2: Development Build

With `npm` installed, run:

```bash
cd tsa-qualifier-2024/devBuild
npm i --legacy-peer-deps
npm run dev
```

Then you can access the website at `http://localhost:3000`. The pages will initially build as you navigate them, so it might be a bit slow.

The dev build is also where you can find the source code for our website.

### Option 2: Static Build (Not Recommended)

If you have `python` installed, then you can:

```bash
cd tsa-qualifier-2024/staticBuild
python -m http.server
```

Then you can access the website at `http://localhost:8000`.

This is not recommended because some pictures will not load due to a quirk with `next/image`.
