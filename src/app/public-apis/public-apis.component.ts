import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-public-apis',
  templateUrl: './public-apis.component.html',
  styleUrls: ['./public-apis.component.css']
})
export class PublicApisComponent implements OnInit {

  private apiUrl = 'https://api.publicapis.org/entries';
  dataApi: any = {};

  constructor(private _http: Http) {
    console.log("Debug testing :)");
    this.getDataAPI();
    this.setDataAPI();
  }

  getDataAPI() {
    return this._http.get(this.apiUrl).map((res: Response) => res.json());
  }
  setDataAPI() {
    this.getDataAPI().subscribe(dataApi =>{
      console.log(dataApi);
      this.dataApi = dataApi;
    })
  }
  ngOnInit() {
  }

}
