import { WnzlAngulartwoMaterialPage } from './app.po';

describe('wnzl-angulartwo-material App', function() {
  let page: WnzlAngulartwoMaterialPage;

  beforeEach(() => {
    page = new WnzlAngulartwoMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
