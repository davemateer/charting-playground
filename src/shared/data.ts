import { statusColors } from "./constants";

type caseOverTimeType = {
  date: string;
  pended: number;
};

export const sampleCasesOverTime: caseOverTimeType[] = [
  {
    date: "2021-09-05",
    pended: 16,
  },
  {
    date: "2021-09-06",
    pended: 15,
  },
  {
    date: "2021-09-07",
    pended: 21,
  },
  {
    date: "2021-09-08",
    pended: 20,
  },
  {
    date: "2021-09-09",
    pended: 23,
  },
  {
    date: "2021-09-10",
    pended: 15,
  },
  {
    date: "2021-09-11",
    pended: 10,
  },
];

interface caseStatusValue {
  name: keyof typeof statusColors;
  value: number;
}

export const caseStatusLast60Days: caseStatusValue[] = [
  { name: "approved", value: 45 },
  { name: "pending", value: 17 },
  { name: "canceled", value: 6 },
  { name: "denied", value: 19 },
];

export const averageTimeToClose = [
  {
    hours: "0-4",
    hh: 1,
    snf: 0,
    irf: 1,
  },
  {
    hours: "5-8",
    hh: 2,
    snf: 1,
    irf: 0,
  },
  {
    hours: "9-12",
    hh: 5,
    snf: 2,
    irf: 3,
  },
  {
    hours: "13-16",
    hh: 8,
    snf: 3,
    irf: 4,
  },
  {
    hours: "17-20",
    hh: 11,
    snf: 7,
    irf: 2,
  },
  {
    hours: "21-24",
    hh: 12,
    snf: 11,
    irf: 6,
  },
  {
    hours: "25-28",
    hh: 17,
    snf: 10,
    irf: 5,
  },
  {
    hours: "29-32",
    hh: 11,
    snf: 12,
    irf: 5,
  },
  {
    hours: "33-36",
    hh: 10,
    snf: 10,
    irf: 4,
  },
  {
    hours: "37-40",
    hh: 7,
    snf: 2,
    irf: 3,
  },
  {
    hours: "41-44",
    hh: 5,
    snf: 2,
    irf: 2,
  },
  {
    hours: "45-48",
    hh: 3,
    snf: 4,
    irf: 0,
  },
  {
    hours: "> 48",
    hh: 5,
    snf: 4,
    irf: 2,
  },
];
