import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Facility, Counties, Types } from './facility';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FacilityService {

    private _apiUrl = 'http://192.168.133.10/adt-core/lib/public/api/';

    private _faciltyApi = this._apiUrl + 'facility';
    private _countiesApi = this._apiUrl+ 'lists/counties';
    private _typesApi = this._apiUrl+ 'lists/type';

    constructor(private _http: Http) { }


    // Get

    getFacilityDetails(id: number) {
        return this._http.get(this._faciltyApi + `/${id}`)
            .map((response: Response) => <Facility[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getCounties() {
        return this._http.get(this._countiesApi)
            .map((response: Response) => <Counties[]>response.json())
            .catch(this.handleError);        
    }

    getFacilityTypes(){
        return this._http.get(this._typesApi)
            .map((response: Response) => <Types[]>response.json())
            .catch(this.handleError); 
    }

    // Put

    updateFacility(body: Object): Observable<Facility> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option

        return this._http.put(`${this._faciltyApi}/${body['id']}`, body, options) // ...using put request
            .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
            .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if a
    }

    // Error Handling

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let msg = `Status code ${error.status} on url ${error.url}`;
        console.error(msg);
        return Observable.throw(msg);
    }
}