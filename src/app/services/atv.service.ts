import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {ATVInterface} from "../interfaces/atv.interface";
import {CarInterface} from "../interfaces/car.interface";

@Injectable({
  providedIn: 'root'
})
export class ATVService {
  private atvsURL = 'http://localhost:8080/atvs';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getAtvs(): Observable<ATVInterface> {
    return this.httpClient
      .get<ATVInterface>(this.atvsURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  getAtv(id: number): Observable<ATVInterface> {
    console.log(id)
    return this.httpClient.get<ATVInterface>(this.atvsURL + "/" + id)
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
