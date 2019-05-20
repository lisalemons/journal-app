import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Entry } from '../../models/entry';

@Component({
  selector: 'journal-entry-input',
  templateUrl: './entry-input.component.html',
  styleUrls: ['./entry-input.component.scss']
})
export class EntryInputComponent implements OnInit, OnChanges {
  @Input() category:string = "Life";
  @Output() submit: EventEmitter<Entry> = new EventEmitter();

  entry: Entry = new Entry(this.category, '', '');
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.entry.category = this.category;
  }

  onSubmit() {
    console.log('submitting from entry input:', this.entry);
    if (this.entry.entry.length < 1) { return; }
    this.submit.emit(this.entry);
  }
}
