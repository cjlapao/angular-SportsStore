export class Common {
  static attributeToBoolean(object: object): boolean {
    return object !== undefined &&
      (String(object) === 'true' || String(object) === '')
      ? true
      : false;
  }
}
