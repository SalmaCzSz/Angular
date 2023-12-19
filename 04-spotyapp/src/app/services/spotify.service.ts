import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) { 
    console.log('Spotify service listo');
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDG0zWgPj1HGr63GqffquCpo_KfMxIOEcrLl3A9GvZYNtO6n20v9peXGB7ydS3KdW3snRYn2zJsmBzNbf92QdS_AHOx6Y1zCv46HSV7jjceYOTw_Vc'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases?limit=25')
               .pipe(map( (data: any) => data['albums'].items ));
  }

  getArtistas(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=25`)
               .pipe(map( (data: any) =>  data['artists'].items ));
  }

  getArtista(id: string){
    return this.getQuery(`artists/${id}`)
              // .pipe(map( (data: any) =>  data['artists'].items ));
  }

  getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`)
               .pipe(map( (data: any) =>  data['tracks'] ));
  }
}
