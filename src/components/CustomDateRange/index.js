import React from "react";
import { useState } from "react";

import { Button } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";

const CustomDateRange = ({ styles }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: moment(new Date()),
      key: "selection",
    },
  ]);
  const [dropdownOpen, setDropDownOpen] = useState(false);

  return (
    <DateRangePicker
      initialSettings={{ opens: "center", autoApply: true }}
      onShow={() => {
        setDropDownOpen(true);
      }}
      onHide={() => {
        setDropDownOpen(false);
      }}
    >
      <Button
        className={`btn-date-range-dropdown ${dropdownOpen && "open"}`}
        style={styles}
        variant="outline-primary"
      >
        Primary
      </Button>
    </DateRangePicker>
  );
};

export default CustomDateRange;
