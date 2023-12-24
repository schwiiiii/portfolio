# Portfolio

## 0.1 December 2023

### General

- Set up a basic JS project
- Added welcome blurb and footer links
- Built vue apps for each area of the site (Header, Main, Footer)
- Built FontAwesomeIcon Vue component, used to consume @fortawesome/free-brands-svg-icons icon objects and construct svgs from them.
- Added `README.md` and `CHANGELOG.md`
- Changed the main access file to see if it will remove the jekyll theming ( I want the whole document dangit >:( )
- More shuffling around of files to attempt to override the default github pages layout
- Added .nojekyll [found here](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators:~:text=empty%20file%20called-,.nojekyll,-in%20the%20root)
- Added index.html to the root
- Updated project to vite
- Updated title and favicon
- Testing custom git publishing alias
- Tidy up the DarkMode toggle and add some visual flair
- Added router for a fully fledged SPA
- Realized that header, main, and footer tags aren't as strict as I thought and they don't need to be direct children of the body; Reworked app structure
- Added Hypno Eye pen as a router test page

## 1.0 Color Comparison Tool

### Added

- Added BsButton component for consistent button styles throughout the site
  - Currently just used for housing styles, needs cleanup
- Added ColorInput component for choosing colors
  - Currently only accepts 6 character hex values and outputs the same
  - Utilizes native browser color picker
- Added BsMenu component for eventually being used as a menu toggle
  - Currently does nothing
- Added ColorComparison page and routes to site
- Added ColorComparisonGridCell for use in the ColorComparison component
  - Uses svg text for responsive text size

### Updated

- Updated the FontAwesomeIcon component to be vertical-align: bottom by default, removing unneeded empty space below svgs
- Updated the Header and Footer and App components to include an appSettings object
  - Used to adjust page size for now
  - Used to adjust global transitions
- Updated the ColorComparison grid to now contain dynamically generated, static css selectors to add hover effects when hovering over columns and rows