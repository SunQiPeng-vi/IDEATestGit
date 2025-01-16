import { LightningElement, track, wire,api } from 'lwc';

export default class button extends LightningElement {
  @api label;
  @api icon;
  handleButton(event) {
    this.dispatchEvent(new CustomEvent('buttonclick',{
      bubbles: true
    }));
  }
}