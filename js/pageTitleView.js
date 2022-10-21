import Adapt from 'core/js/adapt';
import { templates } from 'core/js/reactHelpers';
import React from 'react';
import ReactDOM from 'react-dom';

export default class PageTitleView extends Backbone.View {

  get className() {
    return [
      'page__nav-title center'
    ];
  }

  get template() {
    return 'pageTitle.jsx';
  }

  initialize(options) {
    this.navView = options.navView;
    this.listenTo(this.model, 'change:title', this.render);
    Adapt.on('pageView:preRender menuView:preRender', this.updatePageTitle.bind(this));
    this.render();
  }

  render() {
    const data = this.model.toJSON();
    const Template = templates[this.template.replace('.jsx', '')];
    ReactDOM.render(<Template {...data} />, this.el);
    this.navView.$el.append(this.$el);
    return this;
  }

  updatePageTitle(pageView) {
    const title = pageView.model.get('title') || pageView.model.get('displayTitle');
    this.model.set('title', title);
  }

}
