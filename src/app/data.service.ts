import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey: 'AIzaSyAETDdGEfDRTbmnyp5hkeCYnxsVbg3cG80';
  website: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UUtOdQIpV39yjelu6heuWnbQ&key=AIzaSyAETDdGEfDRTbmnyp5hkeCYnxsVbg3cG80';

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=UUtOdQIpV39yjelu6heuWnbQ&key=AIzaSyAETDdGEfDRTbmnyp5hkeCYnxsVbg3cG80');
  }
}
