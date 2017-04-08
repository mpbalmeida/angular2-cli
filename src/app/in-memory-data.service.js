"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Marvin', email: 'marvin@gmail.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Ringo', email: 'ringo@gmail.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Lanay', email: 'lanay@gmail.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Marcos', email: 'marcos@gmail.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Robson', email: 'robson@gmail.com', telefone: '(00) 0000-0000' }
        ];
        return {
            'contatos': contatos
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map