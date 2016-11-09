import { DataServicePage } from './app.po';

describe('data-service App', function() {
  let page: DataServicePage;

  beforeEach(() => {
    page = new DataServicePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
