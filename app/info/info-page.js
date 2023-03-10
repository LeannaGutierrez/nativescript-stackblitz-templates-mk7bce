import { Dialogs, getViewById } from '@nativescript/core';

export function onCalc(args) {
  var button = args.object;
  var parent = button.parent;
  if (parent) {
    var txtView1 = getViewById(parent, 'NumMin');
    var txtView = getViewById(parent, 'CatID');

    //Calculate bill according to Category Option Chosen
    if (txtView1) {
      if (txtView.text === '1') {
        var charge = txtView1.text * 0.07;
      } else if (txtView.text === '2') {
        var charge = txtView1.text * 0.12;
      } else if (txtView.text === '3') {
        var charge = txtView1.text * 0.05;
      }
      //Output bill to screen
      Dialogs.action('Bill: $' + charge);
    }
  }
}
