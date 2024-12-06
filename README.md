# NextJS-Redux State Managment

This project demonstrates a Redux-powered data management application built with Next.js. The application provides an intuitive interface to:

1. Add new data dynamically.
2. Track and display the count of data entries.
3. List all data entries with functionality to delete them.

## Featured

1. Add Data: Users can add data dynamically through an input field.
2. Display Counts: The total count of data entries is displayed in real-time.
3. Manage List: View all data in a scrollable list with delete functionality.
4. Modern Frameworks:
   * Next.js for a performant, SEO-friendly frontend.
   * Redux Toolkit for simplified state management.
   * CSS Modules for scoped, reusable styles.

## Prerequisites

Before you begin, ensure you have the following installed:

     * Node.js v18+
     * npm or yarn

## Setup and Installation

    * git clone https://github.com/MERN-dev75/NextJS-Redux.git
    * cd NextJS-Redux
    * npm install
    * npm run dev
    * Open the application in your browser at http://localhost:3000.

## Folder Structure

    /app
      |── /layout.js                      # App-wide layout and meta configuration
      |── /page.js                        # Main entry point for the application
      |──  page.module.css                # Styling for the main page
      |──  globals.css
      |──  /api
      |
    components                            # Reusable UI components
      |── ButtonBlock
      │     └── ButtonGroup.jsx           # Handles input for adding data
      |     └── ButtonGroup.module.scss   # Styling for ButtonBlock\
      |
      |── CountBlock
      │     └── CountSection.jsx          # Displays the count of data entries
      |     └── CountSection.module.scss  # Styling for CountBlock
      |
      |── ListingBlock
      |     └── Listing.jsx               # Renders the list of data entries
      |     └── Listing.module.scss       # Styling for ListingBlock
      |
    Redux                                 # Redux state management
      ├── store.js                        # Redux store configuration
      ├── rootReducer.js                  # Combined root reducer for the entire app state
      ├── Provider.js                     # Redux Provider wrapper for the app
      ├── /Content
      |     ├── reducer.js                # Reducer logic for content updates
      │     └── action.js                 # Action creators for content management
      │     └── actionType.js             # Constants for action types
      |
    styles                                # Scoped styles for components
      └── fonts.js                        # Local fonts for the all page

## Components Overview

## Home Component

The main page (page.js) serves as the application’s entry point and organizes the following blocks:

  1. ButtonBlock: For adding items to the data list.
  2. CountBlock: Displays the total count of items added.
  3. ListingBlock: Shows all added items with delete functionality.

## ButtonBlock

* Path: /components/ButtonBlock/ButtonGroup.jsx
* Purpose: Handles user input and adds new items to the Redux store.

## CountBlock

* Path: /components/CountBlock/CountSection.jsx
* Purpose: Uses Redux selectors to display the current count of items.

## ListingBlock

* Path: /components/ListingBlock/Listing.jsx
* Purpose: Dynamically displays a scrollable list of data fetched from the Redux store. Includes a delete button for each item.
