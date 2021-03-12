import { useState } from "react";

import { Button } from "react-bootstrap";
import DateRangePicker from "react-bootstrap-daterangepicker";
import moment from "moment";

interface CustomDateRangeProps {
  wrapperStyles: String;
  dateRange: { stareDate: any, endDate: any };
  onChange({ startData: any, endData: any }): void;
}

const CustomDateRange = ({
  wrapperStyles,
  dateRange,
  onChange,
}: CustomDateRangeProps) => {
  const [dropdownOpen, setDropDownOpen] = useState(false);

  const getInitialDateRagen = () => {
    return dateRange.startDate || dateRange.endDate ? dateRange : {};
  };

  const handleCallback = (start, end, label) => {
    onChange({ startDate: start, endDate: end });
  };

  const getSelectedDate = () => {
    if (dateRange.startDate && dateRange.endDate) {
      if (
        dateRange.startDate.startOf("day").valueOf() ===
        dateRange.endDate.startOf("day").valueOf()
      )
        return moment(dateRange.startDate).format("MMM D");
      else
        return `${moment(dateRange.startDate).format("MMM D")} - ${moment(
          dateRange.endDate
        ).format("MMM D")}`;
    } else if (!dateRange.startDate && !dateRange.endDate) {
      return "Select Date";
    } else if (dateRange.startDate) {
      return `${moment(dateRange.startDate).format("MMM D")} -`;
    } else if (dateRange.endDate) {
      return `- ${moment(dateRange.endDate).format("MMM D")}`;
    }
    return "Select Date";
  };

  return (
    <DateRangePicker
      initialSettings={{
        ...getInitialDateRagen(),
        opens: "center",
        autoApply: true,
      }}
      onCallback={handleCallback}
      onShow={() => {
        setDropDownOpen(true);
      }}
      onHide={() => {
        setDropDownOpen(false);
      }}
    >
      <Button
        className={`btn-date-range-dropdown ${dropdownOpen && "open"}`}
        style={wrapperStyles}
        variant="outline-primary"
      >
        {getSelectedDate()}
      </Button>
    </DateRangePicker>
  );
};

export default CustomDateRange;
