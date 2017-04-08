import { Component, OnInit } from '@angular/core';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';
import { DialogService } from './../dialog.service';

@Component({
    moduleId: module.id,
    selector: 'contatos-lista',
    templateUrl: 'contatos-lista.component.html'
})
export class ContatosListaComponent implements OnInit {

    contatos: Array<Contato> = [];
    mensagem: {};
    classesCss: {};
    private currentTimeout: any;

    constructor(
        private contatoService: ContatoService,
        private dialogService: DialogService
    ) { }

    ngOnInit(): void {
        this.contatoService.findAll()
            .then((contatos: Array<Contato>) => {
                this.contatos = contatos;
            }).catch(err => {
                console.log(err);
                this.mostrarMensagem({
                    'tipo': 'danger',
                    'texto': 'Não foi possível carrega a lista de contatos.'
                });
            });
    }

    onDelete(contato: Contato): void {
        this.dialogService.confirm('Deseja deletar o contato ' + contato.nome + ' ?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.contatoService
                        .delete(contato)
                        .then(() => {
                            this.contatos = this.contatos.filter((c: Contato) => c.id != contato.id);

                            this.mostrarMensagem({
                                'tipo': 'success',
                                'texto': 'Contato excluído.'
                            });
                        }).catch(err => {
                            console.log(err);
                            this.mostrarMensagem({
                                'tipo': 'danger',
                                'texto': 'Falha ao excluir contato.'
                            });
                        });
                }
            });
    }

    private mostrarMensagem(mensagem: { tipo: string, texto: string }): void {
        this.mensagem = mensagem;
        this.montarClasses(mensagem.tipo);

        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        this.currentTimeout = setTimeout(() => {
            this.mensagem = undefined;
        }, 3000);
    }

    private montarClasses(tipo: string): void {
        this.classesCss = {
            'alert': true
        };

        this.classesCss['alert-' + tipo] = true;
    }

}