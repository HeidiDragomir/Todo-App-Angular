export class Todo {
    id: number | undefined;
    title: string = '';
    complete: boolean = false;
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }
  
