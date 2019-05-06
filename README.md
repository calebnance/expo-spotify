# Spotify Clone with Expo

<p align="center">
  <img src="screenshots/screenshare-2.png?raw=true" />
</p>

## Table of Contents

- [Install & Build](#install--build)
- [Stats](#stats)
- [Linting](#linting)
- [Demo & Release Notes](#release-notes)

## Install & Build

Install: `yarn install`

Expo CLI: `npm install -g expo-cli` (if not already installed)

Run Project Locally: `expo start`

## Stats

- Expo SDK 32
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

## Release Notes

### version 0.0.1 (current)

- iOS and Android
- Tab Navigation (stacks created)
  - Home
  - Search
  - Library
  - Custom Bar for Music Player added to `<BottomTabBar />`
- Modals (bottom to top)
  - Music Player
