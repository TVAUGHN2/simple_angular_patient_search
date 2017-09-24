import { AngularSearchPage } from './app.po';

describe('angular-search App', () => {
  let page: AngularSearchPage;

  beforeEach(() => {
    page = new AngularSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
