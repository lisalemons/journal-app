import { Component, OnInit } from '@angular/core';
import { Entry } from '../app/models/entry';
import entriesData from '../assets/posts.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isQuickEntry = true;
  title = 'katies-journal-app';
  entries: Entry[] = [];
  selectedCategory: string = "Life";

  ngOnInit() {
    console.log('entry render init', this.entries);
    entriesData.entries.forEach(entry => {
      this.entries.push(
        new Entry(entry.category, entry.title, entry.entry, entry.id, new Date(entry.date), entry.listItems)
      )
    });
    console.log('app init this entries', this.entries)
  }

  updateCategory(category: string) {
    console.log('updating category:', category);
    this.selectedCategory = category;
  }

  renderEntry(entry: Entry) {
    console.log('entry submitting: ', entry);
    this.entries.push(
      new Entry(
        this.selectedCategory,
        entry.title,
        entry.entry,
        this.entries.length,
        new Date(),
        )
      );

    console.log(this.entries);
  }
}
