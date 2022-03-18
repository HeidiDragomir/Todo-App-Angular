import { TestBed } from '@angular/core/testing';
import {Todo} from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  let service: TodoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // 1
  describe('#getAllTodos()', () => {

    it('should return an empty array by default', () => {
      expect(service.getAllTodos()).toEqual([]);
    });

  // 2
  });
});
