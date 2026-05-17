import { makeAutoObservable } from "mobx";

class RootStore {
  // role: string | null = null;
  // isIntroFinished = false;
  role: string | null = "schoolboy";
  isIntroFinished = true;

  constructor() {
    makeAutoObservable(this);
  }

  setRole(role: string) {
    this.role = role;
  }

  finishIntro() {
    this.isIntroFinished = true;
  }
}

export const rootStore = new RootStore();
