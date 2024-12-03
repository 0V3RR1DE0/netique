# Changelog

All notable changes to this project will be documented in this file.

## [Latest] - 2024

### Added
- New self-contained OSINT discovery system:
  - Hidden terminal interface (via console command)
  - Void realm (matrix mode exclusive)
  - Nexus page (party mode exclusive)
  - Progressive discovery mechanics
- Secret console commands:
  - enterTheVoid(): Access terminal interface
  - followTheRabbit(): Access void (requires matrix mode)
  - seekTheTruth(): Access nexus (requires party mode)
- Automatic Matrix theme activation when dev console is opened
- Secret UUID page (7b9a8d3f-e2c1-4a5b-9d6e-8f7c4b3a2d1e) accessible via:
  - Direct URL with UUID
  - Adding UUID as URL hash (#7b9a8d3f-e2c1-4a5b-9d6e-8f7c4b3a2d1e)
- Smooth scrolling and hover effects for project listings
- Automatic disabling of Card and LinkedIn links in all themes

### Changed
- Improved background particle system efficiency
- Enhanced ripple effect visibility
- Improved project listing UI with smooth transitions and hover effects
- Modified secret page implementation to use a dedicated HTML file
- Restructured hidden content system to be self-contained
- Moved ARG pages to /secrets/ directory with conditional access

### Removed
- Old ARG system and guide page
- URL-based easter eggs (replaced with mode-based access)
- Console commands: showSecrets, spinEverything, makeItRain
- Manual Matrix mode toggle command

### Fixed
- Performance issues with particle system
- Tab switching animation smoothness
- Secret page accessibility issues by implementing proper page routing

### Technical Improvements
- Switched to Canvas-based animations for better performance
- Implemented requestAnimationFrame for smoother animations
- Reduced DOM manipulation overhead
- Added proper cleanup for event listeners
- Improved code organization and documentation
- Enhanced secret page implementation with Jekyll integration
- Added theme-compatible styling for all special pages
