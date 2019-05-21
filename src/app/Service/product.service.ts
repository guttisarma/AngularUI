import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProductList,MockProductList,MockAssProductList,MockConProductList, AssignProduct,MockAssignProduct} from '../HelperTs/ProductList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product} from 'src/app/HelperTs/ProductList';
import { catchError, map, tap } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private createdAssigneeProductUrl = '/Product/CreatedAssigneeProduct';  
  private assignedProductProductUrl = '/Product/AssignedProduct';  
  private convertedProductUrl = '/Product/ConvertedProduct';  
  private registrationUrl='/Product/CreatedAssigneeProduct';
    //Environment variable
    baseURL:String=environment.apiBaseUrl;

  
  constructor( private http: HttpClient) { }

  /* public getProductList(category:string):Observable<ProductList[]>{
    if(category=='Created'){
      var CreateProdList:ProductList[];
       this.http.get(this.baseURL+this.createdAssigneeProductUrl).subscribe((res : any[])=>{
        CreateProdList = res;
    });
    return of(CreateProdList);
    }
  } */

  public getMockProductList(category:string):Observable<ProductList[]>  {
    if(category=='Created'){
      return of(MockProductList);
    }
    //if(category=='Assigned'){
      //return of(MockAssignProduct);
    //}
    if(category=='Converted'){
      return of(MockConProductList);
    }
  }
  public getMockAssignedPro(category:string):Observable<AssignProduct[]>{
    
      return of(MockAssignProduct);
    
  }
  public getMockSearchPCode(category:string):Observable<ProductList>{
    return of(MockAssProductList[1]);
  }
  public getMockAssignedProduct():Observable<ProductList[]>{
    return of(MockAssProductList)
  }

  public getProductList(category:string):Observable<ProductList[]>  {
    if(category=='Created'){
      alert(this.baseURL+'/Product/CreatedAssigneeProduct');
      alert('Jagadeesh');
        return this.http.get<ProductList[]>(this.baseURL+'/Product/CreatedAssigneeProduct');
      }
      if(category=='Assigned'){
        return this.http.get<ProductList[]>(this.baseURL+'/Product/AssignedProduct');
      }
      if(category=='Converted'){
        return this.http.get<ProductList[]>(this.baseURL+this.convertedProductUrl);
      }
    }
    
  public registration(prod:Product):Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    alert(prod.ProductName);
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
