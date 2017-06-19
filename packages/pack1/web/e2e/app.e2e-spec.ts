import { Pack1Page } from './app.po';

describe('pack1 App', () => {
  let page: Pack1Page;

  beforeEach(() => {
    page = new Pack1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
