import React, { Component } from 'react';

export default class CallToAction extends Component {
  constructor(props) {
    super(props);
    this.rootClassNames = this.rootClassNames.bind(this)
  }

  rootClassNames() {
    let names;
    if (!!this.props.className) {
      names = this.props.className.split(' ');
    }
    else {
      names = []
    }
    names.push('action-button');
    if (this.props.dark) names.push('action-button-dark');
    return names.join(' ');
  }

  render() {
    if (this.props.href) {
      return(
        <a id={this.props.id} className={this.rootClassNames()} href={this.props.href}>{this.props.children}</a>
      )
    }
    return(
      <button id={this.props.id} className={this.rootClassNames()}>{this.props.children}</button>
    )
  }
}