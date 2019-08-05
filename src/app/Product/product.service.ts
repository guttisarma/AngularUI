import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProductList,AssignProduct, AssignProdToUser} from '../HelperTs/ProductList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product} from 'src/app/HelperTs/ProductList';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private createdAssigneeProductUrl = '/Product/CreatedAssigneeProduct';  
  private registrationUrl='/Product/CreateProd';
  private AssignPronUrl='/Product/AssignProduct';
  private AssignConvertViewUrl='/Product/AssignedProforConversion';
    //Environment variable
    baseURL:String=environment.apiBaseUrl;

  
  constructor( private http: HttpClient) { }
  public submitAssProduct(assProToUser:AssignProdToUser):Observable<boolean>{
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.baseURL+this.AssignPronUrl,assProToUser,httpOptions).pipe(
      tap((hero: boolean) => this.log('added hero w/ id=${hero.id}')),
      catchError(this.handleError<boolean>('addHero'))
    );

  }

  /* public getMockProductList(category:string):Observable<ProductList[]>  {
    if(category=='Created'){
      return of(MockProductList);
    }
  } */

  public getAssgnConvertView():Observable<ProductList[]>{
    return this.http.get<ProductList[]>(this.baseURL+this.AssignConvertViewUrl);
  }

  public getProdbyCode(proCode: string):Observable<Product> {
    return this.http.get<Product>(this.baseURL+'/Product/GetProdbyCode?proCode:'+proCode);
  }  
  public getProductList():Observable<ProductList[]>  {
    console.log(this.baseURL+'/Product/CreatedAssigneeProduct');
        return this.http.get<ProductList[]>(this.baseURL+'/Product/CreatedAssigneeProduct');
    }
  
  public registration(prod:Product):Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log(prod.strProdName);
    return this.http.post(this.baseURL+this.registrationUrl,prod,httpOptions).pipe(
      tap((hero: Product) => this.log('added hero w/ id=${hero.id}')),
      catchError(this.handleError<Product>('addHero'))
    );
  }
  /** Log a HeroService message with the MessageService */
    private log(message: string) {
  
    }

    /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
  }
}
