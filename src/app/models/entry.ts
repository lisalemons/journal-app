export class Entry{
  id?: number;
  date?: Date;
  category: string;
  title: string;
  entry: string;
  listItems?: any[];
  constructor(
    category: string,
    title: string,
    entry: string,
    id?: number,
    date?: Date,
    listItems?: any[],
  ) {
    this.id = id;
    this.date = date;
    this.category = category;
    this.title = title;
    this.entry = entry;
    this.listItems = listItems;
  }
}
