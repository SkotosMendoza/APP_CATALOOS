import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RootObject, Datum } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor(private http: HttpClient) { }

  getCatalog(){
   return this.http.get<RootObject>('http://localhost:8102/api/getCatalogos');
  }
  async getSubCatalogo(objeto:any){
    const api=await fetch('http://localhost:8102/api/getSubCatalogos',{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
          'Content-Type': 'application/json'
        }
      });
    const resultado=await api.json();
    return resultado;
  }
  async delSubCatalogo(objeto:any){
    const api=await fetch('http://localhost:8102/api/delCatalogos',{
        method: 'POST',
        body: JSON.stringify(objeto),
        headers:{
          'Content-Type': 'application/json'
        }
      });
    const resultado=await api.json();
    return resultado;
    }
    async addCatalogo(objeto:any){
      const api=await fetch('http://localhost:8102/api/addCatalog',{
          method: 'POST',
          body: JSON.stringify(objeto),
          headers:{
            'Content-Type': 'application/json'
          }
        });
      const resultado=await api.json();
      return resultado;
      }
}
