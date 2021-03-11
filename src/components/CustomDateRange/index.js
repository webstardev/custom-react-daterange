import React from "react";
import { useState } from "react";
import moment from "moment";
import styled from "styled-components";
import { DateRangePicker } from "react-date-range";

const CustomDateRange = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: moment(new Date()),
      key: "selection",
    },
  ]);

  return (
    <StyledDateRangePicker
      onChange={(item) => setState([item.selection])}
      showSelectionPreview={false}
      moveRangeOnFirstSelection={false}
      months={2}
      ranges={state}
      direction="horizontal"
      showDateDisplay={false}
      renderStaticRangeLabel={() => {
        return false;
      }}
      showMonthAndYearPickers={false}
      // showDateDisplay={false}
    />
  );
};

const StyledDateRangePicker = styled(DateRangePicker)`
  .rdrCalendarWrapper {
    position: relative;
  }

  .rdrDefinedRangesWrapper {
    display: none;
  }

  .rdrMonthPicker {
    pointer-events: none;
  }

  .rdrMonthAndYearWrapper {
    position: absolute;
    width: 100%;
    align-items: flex-start;
    padding-top: 11px;
  }

  .rdrMonthAndYearPickers {
    display: none;
  }

  .rdrMonthName {
    text-align: center;
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;
    color: #393f3e;
  }

  .rdrWeekDay {
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 32px;
    text-align: center;
    color: #747978;
  }

  .rdrDayNumber {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    span {
      font-family: Manrope;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
  }

  .rdrEndEdge {
    border: none !important;
  }

  .rdrDayHovered {
    background: #e4f4f1;
    border-radius: 4px;
  }

  .rdrDayStartPreview {
    border: none;
  }

  .rdrDayToday .rdrDayNumber span:after {
    display: none;
  }

  .rdrDayActive {
    background: #18bc9c;
  }

  .rdrSelected {
    background: #18bc9c;
    border: 2px solid #ffffff;
    border-radius: 4px;
  }

  .rdrSelected,
  .rdrInRange,
  .rdrStartEdge,
  .rdrEndEdge {
    background: #18bc9c;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .rdrStartEdge {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .rdrEndEdge {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .rdrDayEndOfMonth .rdrInRange,
  .rdrDayEndOfMonth .rdrStartEdge,
  .rdrDayEndOfWeek .rdrInRange,
  .rdrDayEndOfWeek .rdrStartEdge {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .rdrDayStartOfMonth .rdrInRange,
  .rdrDayStartOfMonth .rdrEndEdge,
  .rdrDayStartOfWeek .rdrInRange,
  .rdrDayStartOfWeek .rdrEndEdge {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: none;
    background: #e4f4f1;
  }

  .rdrDayStartPreview {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .rdrDayEndPreview {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .rdrDayEndOfMonth .rdrDayInPreview,
  .rdrDayEndOfMonth .rdrDayStartPreview,
  .rdrDayEndOfWeek .rdrDayInPreview,
  .rdrDayEndOfWeek .rdrDayStartPreview {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  .rdrDayStartOfMonth .rdrDayInPreview,
  .rdrDayStartOfMonth .rdrDayEndPreview,
  .rdrDayStartOfWeek .rdrDayInPreview,
  .rdrDayStartOfWeek .rdrDayEndPreview {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .rdrDayNumber {
    z-index: 1;
  }

  .rdrNextPrevButton {
    background: #ffffff;
    border: 1px solid #d8d8d4;
    box-sizing: border-box;
    box-shadow: 0px 2px 2px rgba(218, 227, 225, 0.1),
      inset 0px -1px 1px rgba(218, 227, 225, 0.15);
    border-radius: 4px;
    &:hover {
      border-color: #18bc9c;
    }
  }

  .rdrPprevButton {
    margin-left: 25px;
  }

  .rdrNextButton {
    margin-right: 25px;
  }

  .rdrDay {
    cursor: pointer;
    height: 32px;
    line-height: 32px;
    margin-bottom: 2px;

    .rdrDayPassive {
      .rdrDayNumber {
        span {
          color: #babdb7;
        }
      }
    }
  }

  .rdrDayStartPreview + .rdrDayNumber span,
  .rdrDayEndPreview + .rdrDayNumber span {
    color: #393f3e !important;
  }

  .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span,
  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: white;
  }

  .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span {
    color: white;
  }
`;

export default CustomDateRange;
