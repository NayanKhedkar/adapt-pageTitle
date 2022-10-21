import Adapt from 'core/js/adapt';
import PageTitleView from './pageTitleView';

class PageTitle extends Backbone.Controller {

  initialize() {
    Adapt.on('navigationView:postRender', this.setUpPageTitle);
  }

  setUpPageTitle(navView) {
    if (!Adapt.course?.get('_pageTitle')?._isEnabled) return;
    const model = new Backbone.Model({
      title: 'page title'
    });
    new PageTitleView({ model, navView });
  }

}

export default new PageTitle();
