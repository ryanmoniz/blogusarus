/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User1',
    image: '/rocketswift/img/swift-logo.svg',
    infoLink: 'https://www.swift.org',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Rocket Swift' /* title for your website */,
  tagline: 'Exploring development projects involving Swift',
  url: 'https://github.com/ryanmoniz/blogusarus' /* your website url */,
  baseUrl: '/rocketswift/' /* base url for your project */,
  projectName: 'rocketswift',
  headerLinks: [
    /*{doc: 'doc1', label: 'Docs'},
    {doc: 'doc4', label: 'API'},*/
    {doc: 'about', label: 'About'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/rocket-white-vertical.svg',
  footerIcon: 'img/rocket-swift-logo-footer.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#F14D33',
    secondaryColor: '#D95B2F',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Ryan Moniz ',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/ryanmoniz/blogusarus',
};

module.exports = siteConfig;
