export class ExifGpsInfo {
  latitude: string;
  longitude: string;
  constructor(latitude: string, longitude: string) {
    this.latitude = latitude;
    this.longitude = longitude;
  }
}