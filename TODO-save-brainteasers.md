# TODO: Add Save Button and View Saved Teasers in BrainTeasers.tsx

## Steps:
- [x] Add savedTeasers state (Set<number>) and filter state ("all" | "saved")
- [x] Add toggleSave function to update savedTeasers and persist to localStorage
- [x] Add save button UI in each teaser card near the reveal button
- [x] Load savedTeasers from localStorage on component mount
- [x] Add filter UI (buttons for "All Teasers" and "Saved Teasers")
- [x] Modify PaginationPage to filter teasers based on selected filter
- [x] Update grid to use filtered teasers
