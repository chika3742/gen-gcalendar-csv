# Google Calendar CSV Generator

This is a simple script that generates a CSV file that can be imported into Google Calendar.
You can specify the start date, end date, and the days of the week that you want to generate events for.

## Installation

```bash
npm config set @chika3742:registry https://npm.pkg.github.com
npm -g install @chika3742/gen-gcalendar-csv
```

## Usage

```bash
gen-gcalendar-csv <subject> <yyyy/MM> <start time (HH:mm)> <end time (HH:mm)> <days (dd,dd,...)> <output file>
```