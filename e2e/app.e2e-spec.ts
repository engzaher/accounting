import { AccountingPage } from './app.po';

describe('accounting App', () => {
  let page: AccountingPage;

  beforeEach(() => {
    page = new AccountingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
