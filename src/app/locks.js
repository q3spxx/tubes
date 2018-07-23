import { getAllLocks } from './service.js';

class Locks {
  constructor() {
    this.listFetched = false;
    this.locks = [];
    this.found = [];
  }
  setLocks(locks) {
    this.locks = locks;
  }
  getLocks() {
    return this.found;
  }
  searchByOne(resistanceMoment) {
    this.found = this.locks.filter((lock) => {
      const max = resistanceMoment + resistanceMoment * 0.1;
      const min = resistanceMoment - resistanceMoment * 0.1;
      if (lock.resistanceMoment <= max && lock.resistanceMoment >= min) {
        return true;
      } else {
        return false;
      }
    });
  }
  searchByThree(values) {
    this.found = this.locks.filter((lock) => {
      if (
        values.diameter === lock.diameter &&
        values.wallThickness === lock.wallThickness &&
        values.lockLength === lock.lockLength
      ) {
        return true;
      } else {
        return false;
      }
    });
  }
}

export default new Locks();
