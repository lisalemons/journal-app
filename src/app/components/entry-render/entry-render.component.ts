import { Component, OnInit, Input, Output, EventEmitter, Pipe } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material';
import { Entry } from '../../models/entry';

@Component({
  selector: 'journal-entry-render',
  templateUrl: './entry-render.component.html',
  styleUrls: ['./entry-render.component.scss']
})
export class EntryRenderComponent implements OnInit {
  @Input() entries: Entry[];
  @Output() categoryChange: EventEmitter<string> = new EventEmitter();
  categories: string[];
  constructor() {
    this.categories = [];
  }

  ngOnInit() {
    console.log('render init', this.entries)
    this.entries.forEach(entry => {
      if (!this.categories.includes(entry.category)) {
        this.categories.push(entry.category);
      }
    });
  }

  onCategoryChange(category: MatTabChangeEvent) {
    console.log(category);
    this.categoryChange.emit(category.tab.textLabel);
  }
}
