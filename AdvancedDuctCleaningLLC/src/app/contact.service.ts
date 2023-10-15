import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  readonly baseUrl = `${environment.apiUrl}api/Contact`;

  constructor(private readonly http: HttpClient) { }

  public submitRequestQuote(request: RequestQuoteDTO): Observable<void> {
    return this.http.post<void>(this.baseUrl, request);
  }
}

export interface RequestQuoteDTO {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zip: number;
  phoneNumber: string;
  how: string;
  serviceDesired: DesiredService[];
  typeOfProperty: string;
  numberOfFurnaces: number;
  styleOfHome: string;
  foundation: string;
  squareFootage: number;
}

export enum DesiredService {
  AirDuctCleaning = 'Air Duct Cleaning',
  DryerVentCleaning = 'Dryer Vent Cleaning',
  AirDuctSanitation = 'Air Duct Sanitation'
}
