import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Contato } from './contato.model';
import { CONTATOS } from './contatos-mock';

@Injectable()
export class ContatoService {

    private contatoUrl: string = 'app/contatos';
    private headers: Headers = new Headers({ 'Content-Type': 'application/json' })

    constructor(
        private http: Http
    ) { }

    create(contato: Contato): Promise<Contato> {
        return this.http
            .post(this.contatoUrl, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then((response: Response) => response.json().data as Contato)
            .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato> {
        const url: string = `${this.contatoUrl}/${contato.id}`; // app/contatos/:id
        return this.http
            .put(url, JSON.stringify(contato), { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    delete(contato: Contato): Promise<Contato> {
        const url: string = `${this.contatoUrl}/${contato.id}`; // app/contatos/:id 
        return this.http
            .delete(url, { headers: this.headers })
            .toPromise()
            .then(() => contato as Contato)
            .catch(this.handleError);
    }

    getContatos(): Promise<Array<Contato>> {
        return this.http.get(this.contatoUrl)
            .toPromise()
            .then(response => response.json().data as Array<Contato>)
            .catch(this.handleError);
    }

    getContato(id: number): Promise<Contato> {
        return this.getContatos()
            .then((contatos: Array<Contato>) => contatos.find(contato => contato.id === id));
    }

    private handleError(err: any): Promise<any> {
        console.log('Error: ', err);
        return Promise.reject(err.message || err);
    }

    search(term: string): Observable<Array<Contato>> {
        return this.http
            .get(`${this.contatoUrl}/?nome=${term}`)
            .map((res: Response) => res.json().data as Array<Contato>);
    }

}