# Fix Pagination in MiniStories.tsx

- [x] Add `filteredStories` state to hold the current filtered list
- [x] Update `FetchData` to set `filteredStories` to `AllStories` initially
- [x] Modify filter `useEffect` to set `filteredStories` based on filter and reset `currentPage` to 1
- [x] Modify `PaginationPage` to take `filteredStories` as parameter and paginate it
- [x] Update `storiesRef.current` to `filteredStories` in `PaginationPage`
- [x] Render `Paginate` when `filteredStories.length > itemsPerPage`
- [x] Update `totalItems` prop for `Paginate` to `filteredStories.length`
- [x] Remove the two conditional `Paginate` renders and replace with one
- [x] Ensure `PaginationPage` is called after setting `filteredStories`
- [x] Fix bugs in Paginate component: move onClick to PaginationLink instead of PaginationItem
