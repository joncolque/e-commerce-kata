## Front Dev
```
npm run dev
```
http://localhost:3000

## BFF dev
```
npm run dev
```
http://localhost:8080

## Main Strategies for Usability, SEO, Performance, Scalability
- Attributes such as `aria-label`, `role` and `alt` are used for Accessibility between others.
- It is possible navigate with `TAB`.
- All screens has minimal responsiveness for mobile use.
- The project uses Next.js leveraging its features for SEO concerns.
- Semantic tags such as main, section, h1, article are used for SEO between others.
- It is used SSR (Server Side Rendering) in most of the components, useful for search engines (SEO).
- It is used Image component from Next.js for optimization of large images.
- Next.js automatically apply Code Splitting by page.
- Next.js uses a file-based routing system, and each page is bundled separately. This ensures that only the necessary code for a specific route is loaded, making it easier to scale your application without performance degradation as the app grows.