# TODO: Implement FilterBar in Pages

## Tasks
- [x] Modify FilterBar.tsx to accept genres prop
- [x] Implement FilterBar in BrainTeasers.tsx
- [x] Implement FilterBar in AmazingFacts.tsx
- [x] Implement FilterBar in TongueTwisters.tsx
- [x] Implement FilterBar in WisdomNuggets.tsx

## Details
- Modify FilterBar to accept optional genres array, default to current genres
- For each page:
  - Import FilterBar
  - Add currentFilter state
  - Add onFavoriteClick handler
  - Define genres array based on page categories/difficulties
  - Add filtering logic in data handling
  - Place FilterBar component in UI
- Test filtering and favorites functionality
