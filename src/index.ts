import {stringify} from "csv-stringify/sync"
import * as fs from "fs";
import {parseArgs} from "util"

export const main = () => {
  const {values: options, positionals: args} = parseArgs({
    strict: true,
    options: {
      help: {
        type: "boolean",
        short: "h",
        default: false,
      }
    },
    allowPositionals: true,
  })

  if (process.argv.length < 6 || options.help) {
    console.log("Usage: gen-gcalendar-csv <subject> <yyyy/MM> <start time (HH:mm)> <end time (HH:mm)> <days (dd,dd,...)> <output file>")
    if (options.help) {
      process.exit(0)
    } else {
      process.exit(1)
    }
  }

  const subject = args[0]
  const yearAndMonth = args[1]
  const startTime = args[2]
  const endTime = args[3]
  const days = args[4].split(",")
  const outputFile = args[5]

  const rows = days.map(day => ({
    Subject: subject,
    "Start date": `${yearAndMonth}/${day}`,
    "Start time": startTime,
    "End date": `${yearAndMonth}/${day}`,
    "End time": endTime,
  }))

  const csv = stringify(rows, {header: true})

  fs.writeFileSync(outputFile, csv)
}
