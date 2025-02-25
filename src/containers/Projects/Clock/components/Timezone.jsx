import React from "react";
import styled from "styled-components";

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  appearance: none;

  &:focus {
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const TIMEZONES = {
  "local": "local",
  "UTC+0": "Etc/GMT-0",
  "UTC+1": "Etc/GMT-1",
  "UTC+2": "Etc/GMT-2",
  "UTC+3": "Etc/GMT-3",
  "UTC+4": "Etc/GMT-4",
  "UTC+5": "Etc/GMT-5",
  "UTC+6": "Etc/GMT-6",
  "UTC+7": "Etc/GMT-7",
  "UTC+8": "Etc/GMT-8",
  "UTC+9": "Etc/GMT-9",
  "UTC+10": "Etc/GMT-10",
  "UTC+11": "Etc/GMT-11",
  "UTC+12": "Etc/GMT-12",
  "UTC-11": "Etc/GMT+11",
  "UTC-10": "Etc/GMT+10",
  "UTC-9": "Etc/GMT+9",
  "UTC-8": "Etc/GMT+8",
  "UTC-7": "Etc/GMT+7",
  "UTC-6": "Etc/GMT+6",
  "UTC-5": "Etc/GMT+5",
  "UTC-4": "Etc/GMT+4",
  "UTC-3": "Etc/GMT+3",
  "UTC-2": "Etc/GMT+2",
  "UTC-1": "Etc/GMT+1"
};

export default function ClockTimezone({ setTimezone }) {
  const handleChange = e => {
    const newTimezone = e.target.options[e.target.selectedIndex].dataset.timezone;
    setTimezone(newTimezone);
  };

  return (
    <Select onChange={handleChange} defaultValue="Select a timezone">
      {Object.keys(TIMEZONES).map(zone => (
        <option data-timezone={TIMEZONES[zone]} key={zone}>
          {zone === "local" ? "Local time" : zone}
        </option>
      ))}
    </Select>
  );
}
