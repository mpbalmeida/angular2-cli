import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';

@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [
        `.cursor-pointer:hover {
            cursor: pointer;
        }`
    ]
})
export class ContatoBuscaComponent implements OnInit {

    contatos: Observable<Contato[]>
    private termosBuscados: Subject<string> = new Subject<string>();

    constructor(
        private contatoService: ContatoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.contatos = this.termosBuscados
            .debounceTime(300) //aguardar 300 ms para emitir novos eventos
            .distinctUntilChanged() //ignore se o próximo termo de busca for igual ao anterior
            .switchMap(term => term ? this.contatoService.search(term) : Observable.of<Contato[]>([]))
            .catch(err => {
                console.log(err);
                return Observable.of<Contato[]>();
            });

    }

    search(term: string): void {
        this.termosBuscados.next(term);
    }

    verDetalhe(contato: Contato):void {
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
    }
}