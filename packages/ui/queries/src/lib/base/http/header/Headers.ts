export abstract class Headers {
  public static defaultHeader() {
    return {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Headers': 'Content-Type, Accept-Language',
    };
  }
}
