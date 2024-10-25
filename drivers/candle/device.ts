import Homey from 'homey';

module.exports = class EvieCandleDevice extends Homey.Device {

  /**
   * onInit is called when the device is initialized.
   */
  async onInit() {
    this.log('EvieCandle has been initialized');
    this.registerCapabilityListener('onoff', async (value) => {
      const irSignal = this.homey.rf.getSignalInfrared('evie');
      if (value) {
        this.log("Sending ON");
        await irSignal.cmd('ON');
        this.log("...sent!");
      }
      else {
        this.log("Sending OFF");
        await irSignal.cmd('OFF');
        this.log("...sent!");
      }
    });
  }

};
