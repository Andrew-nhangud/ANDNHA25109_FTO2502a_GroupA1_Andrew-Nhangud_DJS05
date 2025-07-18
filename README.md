# Podcast Hub

## Features
- View detailed information about each podcast, including seasons and episodes.
- Responsive design for optimal viewing on various devices.
- Loading indicators for better user experience during data fetching.
- Error handling for failed API requests.

---

## Project Structure
src/
 ├── components/ # Reusable React components
 │ ├── Filter.jsx # Search and filter component 
 │ ├── FullScreenModal.jsx # Modal for detailed podcast view 
 │ ├── Header.jsx # Header component with branding 
 │ ├── HeroSection.jsx # Hero section for landing page 
 │ ├── PodcastCard.jsx # Component for displaying individua podcast 
 │ ├── PodcastModal.jsx # Modal for podcast details 
 |
 ├── utils/ # Utility functions 
 │ └── utils.js # Functions for formatting and genre titles
 | 
 ├── styles/ # CSS styles 
 │ └── styles.css # Global styles for the application 
 |
 ├── App.jsx # Main application component 
 |
 └── main.jsx # Entry point for the React application

 
---


---

## How it Works
The application fetches podcast data from an external API and displays it in a user-friendly interface. Users can search for podcasts, filter them by genre, and sort them by date. When a podcast is selected, a modal displays detailed information, including the podcast's image, genres, last updated date, and seasons. The application handles loading states and errors gracefully to enhance user experience.

### Interacting with the JavaScript Functionality
1. **Search for Podcasts**: Use the search bar at the top of the page to enter keywords related to podcasts. The list will filter in real-time based on your input.
   
2. **Filter by Genre**: Select a genre from the dropdown menu to filter the podcasts displayed. The list will update to show only those podcasts that match the selected genre.

3. **Sort Podcasts**: Use the sort dropdown to arrange the podcasts by their last updated date or title (A-Z or Z-A).

4. **View Podcast Details**: Click on any podcast card to open a modal that displays detailed information about the podcast, including its image, genres, last updated date, and seasons.

5. **Pagination**: Navigate through the pages of podcasts using the pagination controls at the bottom of the list.

---

## Learning Goals
- Understand how to build a React application with functional components and hooks.
- Learn to manage state and side effects using React's `useState` and `useEffect` hooks.
- Implement API calls using Axios for data fetching.
- Create reusable components and manage component interactions.
- Style components using CSS for a responsive design.

## How to Run
1. Clone the repository:
   ```bash
   git clone https://github.com/Andrew-nhangud/ANDNHA25109_FTO2502a_GroupA1_Andrew-Nhangud_DJS04.git

## Navigate to the podcasthub subdirectory
- cd podcasthub

## Install project dependencies
- npm install

##  Start the development server
- npm run dev

## 📝 Additional Notes

- Ensure you have **Node.js** and **npm** installed on your machine to run the application.
- The application is built using **Vite** and **React**, leveraging modern JavaScript features and best practices.

## 📚 JSDoc Comments

All components and utility functions in the project are documented using **JSDoc** comments. These annotations include:

- Purpose of the function or component
- Parameters with their types and descriptions
- Return types and what they represent

This documentation supports better code readability, maintainability, and onboarding for future collaborators.