import { Assignment154Page } from './app.po';

describe('assignment15-4 App', function() {
  let page: Assignment154Page;

  beforeEach(() => {
    page = new Assignment154Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
