import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class DefaultLogoIcon extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const { dark, height, width } = this.props;
    console.log(dark);
    console.log(height);
    console.log(width);
    console.log(this.props);
    if (dark)
    return (
      <img src="https://assets.sospays.com/logo-bw.png"  width="90px" alt="SOSPays"/>

      );
    else
      {return (
        <img src="https://assets.sospays.com/logo.png" width="90px" alt="SOSPays"/>

      );}

  }
}

export default function LogoIcon(props) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
