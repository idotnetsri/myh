/**
 * Created by NetSri on 01/07/2016.
 */
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'filter-textbox',
    template: `
    <form class="form-inline">
    <div class="form-group">
        <label for="filterTextBoxInput">Filter: </label> 
         <input type="text" class="form-control" name="filter" id="filterTextBoxInput"
                [(ngModel)]="model.filter"  placeholder="Enter Search String"
                (keyup)="filterChanged($event)"  />
    </div>
    </form>
  `
})
export class FilterTextboxComponent {


    model: { filter: string } = { filter: null };

    @Output()
    changed: EventEmitter<string> = new EventEmitter<string>();

    filterChanged(event: any) {
        event.preventDefault();
        this.changed.emit(this.model.filter); //Raise changed event
    }
}
