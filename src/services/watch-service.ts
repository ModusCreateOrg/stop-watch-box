export class WatchService {
  /**
   * @author Ahsan Ayaz
   * @desc Calculates the units and sets in string format.
   * @param unit value of the unit in numbers
   * @return {string} the string representation of the unit's value with at least 2 digits
   */
  getTimeString(unit: number): string {
    return (unit ? (unit > 9 ? unit : "0" + unit) : "00").toString();
  }
}
