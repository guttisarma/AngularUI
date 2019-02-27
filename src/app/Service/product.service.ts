import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {ProductList,MockProductList,MockAssProductList,MockConProductList} from '../HelperTs/ProductList';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product} from 'src/app/HelperTs/ProductList';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private createdAssigneeProductUrl = 'api/Product/CreatedAssigneeProduct';  
  private assignedProductProductUrl = 'api/Product/AssignedProduct';  
  private convertedProductUrl = 'api/Product/ConvertedProduct';  
  private registrationUrl='http://localhost:55374/api/Product/CreateProduct';

  
  constructor( private http: HttpClient) { }
  public getMockProductList(category:string):Observable<ProductList[]>  {
    if(category=='Created'){
      return of(MockProductList);
    }
    if(category=='Assigned'){
      return of(MockAssProductList);
    }
    if(category=='Converted'){
      return of(MockConProductList);
    }
  }
  public getMockSearchPCode(category:string):Observable<ProductList>{
    return of(MockAssProductList[1]);
  }
  public getMockAssignedProduct():Observable<ProductList[]>{
    return of(MockAssProductList)
  }

  public getProductList(category:string):Observable<ProductList[]>  {
    if(category=='Created'){
        return this.http.get<ProductList[]>(this.createdAssigneeProductUrl)
      }
      if(category=='Assigned'){
        return this.http.get<ProductList[]>(this.assignedProductProductUrl)
      }
      if(category=='Converted'){
        return this.http.get<ProductList[]>(this.convertedProductUrl)
      }
    }
    
  public registration(prod:Product):Observable<Product> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    alert(prod.ProductName);
    return this.http.post(this.registrationUrl,prod,httpOptions).pipe(
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
