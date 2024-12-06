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

    * git clone https://github.com/your-username/redux-data-flow-app.git
    * cd redux-data-flow-app
    * npm install
    * npm run dev
    * Open the application in your browser at http://localhost:3000.

## Folder Structure

    /app
    ├── /layout.js            # App-wide layout and meta configuration
    ├── /page.js              # Main entry point for the application
    ├── /components           # Reusable UI components
    │     ├── ButtonBlock
    │     │     └── ButtonGroup.jsx  # Handles input for adding data
    |     |     |__ ButtonGroup.module.scss
    │     ├── CountBlock
    │     │     └── CountSection.jsx # Displays the count of data entries
    │     ├── ListingBlock
    │           └── Listing.jsx      # Renders the list of data entries
    ├── /store                # Redux state management
    │     ├── store.js        # Redux store configuration
    │     └── itemSlice.js    # Redux slice for item management
    ├── /styles               # Scoped styles for components
    │     └── page.module.css # Styling for the main page

## Components Overview

## Home Component

   The main page (page.js) serves as the application’s entry point and organizes the following blocks:

       * ButtonBlock: For adding items to the data list.
       * CountBlock: Displays the total count of items added.
       * ListingBlock: Shows all added items with delete functionality.
