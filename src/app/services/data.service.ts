import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  
  private goals = new BehaviorSubject<any>([
  	'Limb Mt. Kenya',
    'Register a Software Company',
    'Become a CEH'
  ]);
  goal = this.goals.asObservable();

  constructor(){}

  changeGoal(goal){
    this.goals.next(goal);
  }

}
