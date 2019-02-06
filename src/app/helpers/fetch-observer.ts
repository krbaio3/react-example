import { from, Observable } from 'rxjs';

export const fetchObserver = (url: string, options = {}):Observable<any> => from( fetch( url, options ) );

