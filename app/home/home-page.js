import { Frame } from '@nativescript/core';

//Function for page transition upon user interaction with button
export function onTap() {
  var navigationEntry = {
    moduleName: './info/info-page',
    transition: {
      name: 'fade',
      duration: 1000,
    },
  };
  Frame.topmost().navigate(navigationEntry);
}
