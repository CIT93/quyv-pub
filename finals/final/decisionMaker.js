export default class DecisionMaker {
  validateFeedingInterval(interval) {
    if (interval <= 0 || interval > 24) {
      alert("Feeding interval must be between 1 and 24 hours.");
      return false;
    }
    return true;
  }

  calculateNextFeedingTime(interval) {
    const now = new Date();
    now.setHours(now.getHours() + interval);
    return now.toLocaleString();
  }

  checkFeedingDecision(interval) {
    return interval < 4 ? "Feed Soon" : "No feeding needed yet";
  }

  filterByDecision(petData, decision) {
    return petData.filter((pet) => pet.decision === decision);
  }
}
