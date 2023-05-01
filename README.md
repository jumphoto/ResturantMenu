ProQuo AI Food Menu

This project is a web application that displays a food menu for ProQuo AI, a restaurant specializing in artificial intelligence-powered cuisine. The menu is contained within a 21:9 aspect ratio and has a two-column layout, much like a traditional restaurant menu.

Implementation and Design Details
Cover Page

The cover page contains the ProQuo AI logo and a button to "Open" the menu. It only uses one half of the available area, as the menu is not yet open.
Opened Menu

The opened menu displays all of the menu items grouped by their type in the order: appetizer, main course, dessert. The "pq" logo is displayed at the top of both pages. As display space runs out on the first page, the items continue on to the second.
Restaurant History

Beneath the dessert section, there is a "Restaurant History" section that displays the data from the history API call.
Modal

There is a modal that displays all information for a selected menu item, including general menu item information and metadata.
Additional Details. The menu is outlined to indicate the 21:9 area.The menu items and history section only display when both have fully loaded.

Git is used to make reasonable commits.

Installation

To run the project locally, clone the repository and install the necessary dependencies
Angular CLI: 15.2.1
Node: 16.14.0

Run: 
ng v
node -v

nmp i
ng build 
ng serve

Once open the instructions will be visible on the instructions.html file

TypeScript 56.0%
HTML 22.2%
SCSS 21.8%
