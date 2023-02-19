import { Frame } from '@nativescript/core';

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
