'use strict';

import Homey from 'homey';

module.exports = class EvieApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('EvieApp has been initialized');
  }

}
