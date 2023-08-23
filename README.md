# Google Calendar CSV Generator

This is a simple script that generates a CSV file that can be imported into Google Calendar.
You can specify the month, start time, end time, and dates that you want to generate events for.

## Installation

```bash
npm -g install gen-gcalendar-csv
```

## Usage

```
gen-gcalendar-csv <subject> <yyyy/MM> <start time (HH:mm)> <end time (HH:mm)> <dates (dd,dd,...)> <output file>
```

## Example

```bash
gen-gcalendar-csv "My Event" 2021/08 10:00 12:00 1,3,5 events.csv
```

### Output

```csv
Subject,Start date,Start time,End date,End time
My Event,2021/08/01,10:00,2021/08/01,12:00
My Event,2021/08/03,10:00,2021/08/03,12:00
My Event,2021/08/05,10:00,2021/08/05,12:00
```