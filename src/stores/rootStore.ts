import { makeAutoObservable } from 'mobx';

class RootStore {
  role: string | null = null;
  isIntroFinished = false;
  goal: string | null = null;
  // role: string | null = 'schoolboy';
  // isIntroFinished = true;
  // goal: string | null = 'movement';

  constructor() {
    makeAutoObservable(this);
  }

  setRole(role: string | null) {
    this.role = role;
  }

  finishIntro(finished: boolean) {
    this.isIntroFinished = finished;
  }

  setGoal(goal: string | null) {
    this.goal = goal;
  }
}

export const rootStore = new RootStore();
