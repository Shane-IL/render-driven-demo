# Render-Driven React Demo

A practical guide to understanding and implementing Render-Driven React Architecture (RDR). This demo app showcases how RDR principles can lead to more maintainable and predictable React applications.

View the live demo: [https://shane-il.github.io/render-driven-demo/](https://shane-il.github.io/render-driven-demo/)

## What is Render-Driven React?

Render-Driven React (RDR) is an architectural pattern that emphasizes React's core strength: predictable UI rendering driven by state changes. In RDR:

- All significant state lives in a central store
- Components focus purely on rendering based on props and store values
- UI updates flow predictably from state changes
- Complex local state and side effects are minimized

## Examples in this Demo

The demo includes several interactive examples showing RDR in practice:

1. **Task Management**
   - Simple state management
   - Filter controls
   - Immediate UI updates

2. **Data Table**
   - Complex state handling
   - Sorting and filtering
   - Pagination
   - Bulk selection

3. **Currency Converter**
   - Integration with external APIs
   - Async state management with React Query
   - Real-time updates

## Tech Stack

- React
- Zustand for state management
- TanStack Query for API integration
- Tailwind CSS with Catppuccin theme
- Vite as build tool

## Building and Deploying
The project is set up to deploy to GitHub Pages using GitHub Actions. Push to the main branch to trigger a deploy.

## License
MIT

## About
This project was created to share insights gained from working with RDR in production environments. While this pattern might not be suitable for every project, understanding these principles can improve your approach to React development.