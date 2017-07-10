import { Angular4TableExample1Page } from './app.po';

describe('angular4-table-example1 App', () => {
  let page: Angular4TableExample1Page;

  beforeEach(() => {
    page = new Angular4TableExample1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
