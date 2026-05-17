import { makeAutoObservable } from "mobx";

class RootStore {
  role: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setRole(role: string) {
    this.role = role;
  }
}

export const rootStore = new RootStore();
