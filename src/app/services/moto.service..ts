import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {MotoInterface} from "../interfaces/moto.interface";

@Injectable({
  providedIn: 'root'
})
export class MotoService {
  private motosURL = 'http://localhost:8080/motos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getMotos(): Observable<MotoInterface> {
    return this.httpClient
      .get<MotoInterface>(this.motosURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  getMoto(id: number): Observable<MotoInterface> {
    console.log(id)
    return this.httpClient.get<MotoInterface>(this.motosURL + "/" + id)
      .pipe(retry(1), catchError(this.handleError))
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = ' ';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message + 'occured';
    } else {
      errorMessage = err.status + err.message;
    }
    return throwError(() => {
      return errorMessage;
    })
  }
}
