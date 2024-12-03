# Easter Eggs

This file tracks all easter eggs and hidden content in the website.

## Hidden Pages System

### Secret UUID Page
- URL: /7b9a8d3f-e2c1-4a5b-9d6e-8f7c4b3a2d1e.html
- Access Methods:
  1. Direct URL navigation
  2. Adding UUID as URL hash (#7b9a8d3f-e2c1-4a5b-9d6e-8f7c4b3a2d1e)
- Contains initial hints for the discovery system

### Hidden Terminal
- Location: /secrets/terminal.html
- Access: Use enterTheVoid() in browser console
- Features:
  - Interactive terminal interface
  - Hints about matrix and party modes
  - Command system for exploration

### The Void
- Location: /secrets/void.html
- Access Requirements:
  1. Matrix mode must be active (open dev tools)
  2. Use followTheRabbit() in console
- Features:
  - Matrix-themed interface
  - Hints about party mode
  - List of known secrets

### The Nexus
- Location: /secrets/nexus.html
- Access Requirements:
  1. Party mode must be active
  2. Use seekTheTruth() in console
- Features:
  - Complete list of all secrets
  - Discovery methods
  - Hidden features

## Discovery Sequence

1. Find Secret UUID Page:
   - Direct URL: /7b9a8d3f-e2c1-4a5b-9d6e-8f7c4b3a2d1e.html
   - Or use URL hash: #7b9a8d3f-e2c1-4a5b-9d6e-8f7c4b3a2d1e

2. Access Terminal:
   - Open browser console
   - Use command: enterTheVoid()
   - Explore available terminal commands

3. Enter The Void:
   - Open developer tools to activate matrix mode
   - Use command: followTheRabbit()
   - Read hints about party mode

4. Find The Truth:
   - Activate party mode
   - Use command: seekTheTruth()
   - Access complete secret manifest

## Theme Easter Eggs

- [x] Pastel Theme (Konami Code: ↑↑↓↓←→←→BA)
- [x] Portal Theme (Type "thecake" anywhere)
- [x] Matrix Theme (Open DevTools)
- [x] Party Mode (startPartyMode() in console)

## Console Commands

### Discovery System
- enterTheVoid(): Access terminal interface
- followTheRabbit(): Access void (requires matrix mode)
- seekTheTruth(): Access nexus (requires party mode)

### Other Features
- showStats(): Reveals GitHub statistics
- resetTheme(): Resets to default theme
- startPartyMode(): Activates party mode

## Visual Effects

### Matrix Mode
- Activates when DevTools open
- Green text and dark background
- Required for void access

### Party Mode
- Rainbow colors and animations
- Required for nexus access
- Celebratory visual effects

## Implementation Notes

- Each hidden page has specific access requirements
- Console commands only work under correct conditions
- Discovery requires using different methods:
  - Console commands
  - Developer tools
  - Special modes
  - Hidden hints
- No secrets are visible in page source
- Progressive discovery system guides users
