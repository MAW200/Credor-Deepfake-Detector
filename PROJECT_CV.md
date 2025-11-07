Credor — Mobile frontend (Expo, React Native, TypeScript)

One-line summary
----------------
Credor — Mobile fintech app (Expo + React Native, TypeScript): implemented user authentication, biometric facial scan, QR/document scanning, personalized settings, and news feed in a performant, themeable UI.

Two-line summary
----------------
Credor is an Expo-based React Native app built with TypeScript that provides secure user onboarding (email + biometric facial scan), document/QR scanning features, personalized account settings, and an in-app news feed. Implemented core UI components, custom hooks for scan/news/settings state, and cross-platform theming.

Key achievements / CV bullet points
---------------------------------
- Developed core mobile features using Expo, React Native and TypeScript: authentication flows (`app/(auth)/login.tsx`, `register.tsx`), biometric facial scanning (`app/(app)/home/facialScan.tsx`), and QR/document scanning (`app/(app)/scan/index.tsx`).
- Built reusable UI components and design primitives (`components/ThemedText.tsx`, `components/ThemedView.tsx`, `components/NewsCard.tsx`) to ensure consistent theming and accessibility across screens.
- Architected and implemented application state and side-effect hooks (`hooks/useScan.ts`, `hooks/useNews.ts`, `hooks/useSettings.ts`, `hooks/useStorage.ts`) to centralize logic and improve testability.
- Configured cross-platform project settings and iOS build hooks (iOS folder and `Podfile`), improving maintainability across devices.

Technologies
------------
React Native · Expo · TypeScript · React Hooks · Context API · Mobile UI · Theming · Biometric integration · QR/document scanning · Git · ESLint

Files & features to cite in interviews
-------------------------------------
- Authentication: `app/(auth)/login.tsx`, `app/(auth)/register.tsx`
- Facial scan: `app/(app)/home/facialScan.tsx`
- Scan features: `app/(app)/scan/index.tsx`, `hooks/useScan.ts`
- Settings: `app/(app)/settings/*.tsx`, `hooks/useSettings.ts`
- UI primitives/components: `components/ThemedText.tsx`, `components/ThemedView.tsx`, `components/NewsCard.tsx`
- Project config: `app.json`, `tsconfig.json`, `eslint.config.js`, `ios/Podfile`

Notes
-----
If you'd like, I can:
- Add this repository to GitHub for you (I can create the remote if you provide access or use the GitHub CLI if installed). 
- Open a pull request with a refined README or generate a demo build.

Prepared on: 2025-11-07
