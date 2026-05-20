import { makeAutoObservable } from 'mobx';

class RootStore {
  // role: string | null = null;
  // isIntroFinished = false;
  // goal: string | null = null;
  role: string | null = 'schoolboy';
  isIntroFinished = true;
  goal: string | null = 'olympiad';

  constructor() {
    makeAutoObservable(this);
  }

  setRole(role: string) {
    this.role = role;
  }

  finishIntro() {
    this.isIntroFinished = true;
  }

  setGoal(goal: string) {
    this.goal = goal;
  }
}

export const rootStore = new RootStore();
