import React from "react";
import PropTypes from "prop-types";
import { ThermostatOutlined } from "@mui/icons-material";
import "./WeatherInfo.scss";
import { IconColor, IconSize } from "../../utils";

export const WeatherInfo = (props) => {
  const { data } = props;
  const { title, value, suffix, icon } = data;

  const renderIcon = () => {
    if (icon)
      return (
        <ThermostatOutlined fontSize={IconSize.medium} color={IconColor} />
      );
    return <></>;
  };
  return (
    <div className="container">
      <p className="title">{title}</p>
      <div className="valueContainer">
        {renderIcon()}
        <p className="value">{value}</p>
        {suffix && <p className="suffix">{suffix}</p>}
      </div>
    </div>
  );
};

WeatherInfo.propTypes = {
  data: PropTypes.object.isRequired,
};
