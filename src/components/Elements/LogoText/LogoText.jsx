import React, { Component } from 'react';
import $ from 'jquery';
import './LogoText.scss';

class LogoText extends Component {

    componentDidMount() {
        $('.anim-text-flow').html(function(i, html) {
          var chars = $.trim(html).split("");

          return '<span>' + chars.join('</span><span>') + '</span>';
        });
    }

    render() {
        return (
            <div className="logotext-container">
                <span className="anim-text-flow">Moola</span>
            </div>
        )
    }
}

export default LogoText;
