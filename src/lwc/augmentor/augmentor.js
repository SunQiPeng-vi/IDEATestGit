import { LightningElement, track, wire } from 'lwc';

export default class augmentor extends LightningElement {
  startCounter = 0;
  handleStartChange(event) {
    this.startCounter = parseInt(event.target.value);
  }
    handleMaximizeCounter() {
    this.template.querySelector('c-numerator').maximizeCounter();
  }
}