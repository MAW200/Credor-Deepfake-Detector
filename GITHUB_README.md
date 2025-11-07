# Credor — Mobile frontend (Expo, React Native, TypeScript)

This repository contains the mobile frontend for Credor — a cross-platform fintech application built with Expo and React Native using TypeScript. The app provides secure user onboarding (email + biometric facial scan), QR/document scanning, personalized account settings, and an in-app news stream.

Use this file as the expanded README for the GitHub repository. If you'd like it to replace `README.md` on the main branch, I can do that in a follow-up commit (I left the current `README.md` untouched to avoid accidental overwrite).

Summary
-------
- Project: Credor (mobile frontend)
- Platform: Expo (React Native)
- Language: TypeScript

Key features
------------
- Email authentication and registration
- Biometric facial scan for verification (`app/(app)/home/facialScan.tsx`)
- QR/document scanning (`app/(app)/scan/index.tsx`)
- User settings and profile management (`app/(app)/settings/*`)
- News feed and history components

Quick start
-----------
1. Clone the repository
2. Install dependencies: `npm install`
3. Start Expo dev server: `npx expo start`
4. Open on device with Expo Go or a simulator

Key files and where to look
--------------------------
- Authentication: `app/(auth)/login.tsx`, `app/(auth)/register.tsx`
- Facial scan: `app/(app)/home/facialScan.tsx`
- Scanning: `app/(app)/scan/index.tsx`, `hooks/useScan.ts`
- Settings: `app/(app)/settings/*.tsx`, `hooks/useSettings.ts`
- UI components: `components/ThemedText.tsx`, `components/ThemedView.tsx`, `components/NewsCard.tsx`
- Project config: `app.json`, `tsconfig.json`, `eslint.config.js`

Notes for maintainers
---------------------
- Do NOT commit secrets. `.env` files should be added to `.gitignore` and kept out of the repo.
- Run `npm run lint` (or the equivalent) before creating a pull request.

Next actions I can take for you
------------------------------
- Replace the repository `README.md` with this content (if you want it as the primary README).
- Add CI (GitHub Actions) for linting and basic smoke tests.
- Add a demo GIF or screenshots in `assets/images` and reference them here.

If you'd like me to make any of those changes now, tell me which one.
