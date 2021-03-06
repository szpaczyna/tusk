'use strict';
const {app, shell} = require('electron');
const dialog = require('./../dialog');
const settings = require('./../settings');
const update = require('./../update');
const url = require('./../url');

module.exports = {
  label: 'Help',
  submenu: [
    {
      label: `Version ${app.getVersion()}`,
      enabled: false
    }, {
      label: 'View License',
      click() {
        shell.openExternal(url.license);
      }
    }, {
      label: 'Tusk Homepage',
      click() {
        shell.openExternal(url.homepage);
      }
    }, {
      type: 'separator'
    }, {
      label: 'Keyboard Shortcuts Reference',
      click() {
        shell.openExternal(url.keyboardShortcutsRef);
      }
    }, {
      type: 'separator'
    }, {
      label: 'Fork Source',
      click() {
        shell.openExternal(url.source);
      }
    }, {
      type: 'separator'
    }, {
      role: 'about',
      click() {
        dialog.confirmAbout();
      }
    }
  ]
};
