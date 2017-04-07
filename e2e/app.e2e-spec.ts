import { ContatosPage } from './app.po';

describe('contatos App', () => {
  let page: ContatosPage;

  beforeEach(() => {
    page = new ContatosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
