import { Component, OnInit, Input } from '@angular/core';
import entries from '../../../assets/posts.json';

@Component({
  selector: 'journal-entry-render',
  templateUrl: './entry-render.component.html',
  styleUrls: ['./entry-render.component.scss']
})
export class EntryRenderComponent implements OnInit {
  entries: any = entries.entries;
  constructor() { }

  ngOnInit() {
    console.log(this.entries);
  }
}
