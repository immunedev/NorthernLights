import { forwardRef } from "react";
import { ReactComponent as CalenderIcon } from "./assets/calender.svg";
import DatePicker from "react-datepicker"

import classNames from "classnames"

const DatePickerCustomInput = forwardRef(({value, onClick, placeholder}, ref) => (
  <>
    <div ref={ref} onClick={onClick} className={classNames("date-text", { placeholder: !value })}>{value || placeholder}</div>
    <button className="open-button">
      <CalenderIcon className='calender-icon'></CalenderIcon>
    </button>
  </>
));

DatePickerCustomInput.displayName = "datePicker";

const DatePickerWrapper = ({placeholder, selected, onChange, minDate, maxDate}) => {
  return (
    <div className="date-picker-form">
      <DatePicker calendarClassName="date-picker-calendar" wrapperClassName="date-picker-inner" placeholderText={placeholder} selected={selected} onChange={onChange} minDate={minDate} maxDate={maxDate} customInput={<DatePickerCustomInput />} dateFormat="dd.MM.yyyy" calendarStartDay={1} />
    </div>
  )
}

export default DatePickerWrapper;