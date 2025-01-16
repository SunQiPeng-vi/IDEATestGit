import { LightningElement, track, wire } from 'lwc';

export default class controls extends LightningElement {
	factors = [0,2,3,4,5,6];
  handleAdd() {
  	console.log("adddddddddd");
    this.dispatchEvent(new CustomEvent('add'));
  }
  handleSubtract() {
  	console.log("subbbbbbbbbbb");
    this.dispatchEvent(new CustomEvent('subtract'));
  }
   handleMultiply(event) {
    const factor = event.target.dataset.factor;
    this.dispatchEvent(new CustomEvent('multiply', {
      detail: factor
    }));
  }
}