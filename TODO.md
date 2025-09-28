# TODO: Implement Pagination in TongueTwisters.tsx

## Steps:
- [x] Add TONGUETWISTERS_CURRENTPAGE constant to src/constants.ts
- [x] Update src/pages/TongueTwisters.tsx to implement pagination logic similar to BrainTeasers.tsx
  - [x] Import Paginate, useRef, LoaderCircle
  - [x] Add state: currentPage, itemsPerPage=10, loading
  - [x] Add twistersRef = useRef<Twister[]>([])
  - [x] Add PaginationPage function to slice displayed twisters
  - [x] Add FetchInfo function to load from localStorage and filter tongueTwisters
  - [x] Add useEffect hooks for initialization and page changes
  - [x] Update grid to use displayedTwisters
  - [x] Add top and bottom Paginate components
  - [x] Add loading overlay
