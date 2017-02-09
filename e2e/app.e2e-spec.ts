import { WtsUiPage } from './app.po';

describe('wts-ui App', function() {
  let page: WtsUiPage;

  beforeEach(() => {
    page = new WtsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
