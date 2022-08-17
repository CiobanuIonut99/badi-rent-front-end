import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {CarInterface} from "../interfaces/car.interface";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carsURL = 'http://localhost:8080/cars';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(private httpClient: HttpClient) {
  }

  getCars(): Observable<CarInterface> {
    return this.httpClient
      .get<CarInterface>(this.carsURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  getCar(id: number): Observable<CarInterface> {
    console.log(id)
    return this.httpClient.get<CarInterface>(this.carsURL + "/" + id)
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
