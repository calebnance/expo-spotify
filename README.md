# Spotify Clone with Expo

<p align="center">
  <img src="screenshots/screenshare-4.jpg?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Expo Web](#expo-web)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 33
- React Navigation v3
- PropTypes

## Linting

- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Expo Web

Currently Expo Web support is not production ready, but if you want to see how this project looks on the web as a PWA (Progressive Web App)...

[PWA: Expo Spotify](https://expo-spotify.calebnance.now.sh) looks best on a mobile device, but not bad on desktop!

View the code here: [feature_expo-web](https://github.com/calebnance/expo-spotify/tree/feature_expo-web)

**Dev with Expo Web**
- Remove node_modules if they exist: `rm -rf nodes_modules`
- Install/Re-install: `yarn`
- Start development: `expo start --web`
- Build PWA: `expo build:web`

a couple manual changes within `index.html` i found needed to be made so far:
- **to make splash screen work:** "mobile-web-app-capable" => "apple-mobile-web-app-capable"
- **status bar transparent:** apple-mobile-web-app-status-bar-style="default" => "black-translucent"
- **no white background:** add background color within body{background-color: #121212; ...}
- **check output meta:** double image meta tags
- **check output js:** double/triple js packages

## Release Notes

### version 0.0.1 (current)

- iOS and Android
- Tab Navigation (stacks created)
  - Home
    - Horizontal Album component
    - Album Screen
      - animation opacity on header
      - scroll sticky of shuffle button
      - current song playing shows in album list view
    - Header animation on scroll event
      - animation opacity on iPhoneX notch
      - animation opacity on cog icon
  - Search
    - Sticky search bar (animated width)
    - Playlists sections added (with mock data)
  - Library
    - Menu items from mock data
  - Custom Bar for Music Player added to `<BottomTabBar />`
- Modals (bottom to top)
  - Music Player
