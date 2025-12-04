# Add playSend Sound to All Buttons and Clickables

## Files to Update:

- [ ] src/pages/Settings.tsx
- [ ] src/pages/WisdomNuggets.tsx
- [ ] src/pages/NotFound.tsx
- [ ] src/pages/MiniStories.tsx
- [ ] src/pages/Help.tsx
- [ ] src/pages/ContactDeveloper.tsx
- [ ] src/pages/TongueTwisters.tsx
- [ ] src/pages/BrainTeasers.tsx

## Steps for Each File:

1. Import useSound hook
2. Destructure playSend from useSound()
3. Add playSend() call to each onClick handler
4. Ensure existing functionality is preserved

## Implementation Notes:

- Wrap existing onClick functions with playSend()
- Example: onClick={() => { playSend(); existingFunction(); }}
- For simple handlers, add playSend() before the action
