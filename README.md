# Oaky AI Site

Static website for Oaky AI products, including Drift's public privacy and support pages.

## Development

```sh
npm install
npm run dev
```

## Verification

```sh
npm run build
```

## Public routes

- `/drift/`
- `/drift/privacy/`
- `/drift/support/`
- `/zh-cn/drift/`
- `/zh-cn/drift/privacy/`
- `/zh-cn/drift/support/`

The support address is defined once in `src/config.ts`. Confirm that the inbox is active before publishing.

## Deployment

The GitHub Actions workflow builds the static site and deploys `dist/` to GitHub Pages. Configure GitHub Pages to use **GitHub Actions** as its source and configure DNS for the custom domain in `public/CNAME`.

## License

Copyright (c) 2026 Oaky AI. All rights reserved. This repository is proprietary and is not licensed for reuse, modification, or distribution. See `LICENSE` for details.
