import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Contato } from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService {


    createDb(): {} {
        let contatos: Array<Contato> = [
            { id: 1, nome: 'Marvin', email: 'marvin@gmail.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ringo', email: 'ringo@gmail.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Lanay', email: 'lanay@gmail.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Marcos', email: 'marcos@gmail.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Robson', email: 'robson@gmail.com', telefone: '(00) 0000-0000' }
        ];
        return { 
            'contatos': contatos
        };
    }


}