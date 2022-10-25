function timeConversion(s) {
  // deklarasi variable dan juga formatting / pemformatan PM dan AM
  let militaryTime = 0,
    militaryHour = 0,
    timeFormatPm = {},
    timeFormatAm = {};
  timeFormatPm = {
    "01": 13,
    "02": 14,
    "03": 15,
    "04": 16,
    "05": 17,
    "06": 18,
    "07": 19,
    "08": 20,
    "09": 21,
    10: 22,
    11: 23,
    12: 12,
  };
  timeFormatAm = {
    12: "00",
  };

  // coditional untuk mengambil 2 angka depan dengan cara di substring
  if ("PM" == s.substring(s.length - 2, s.length)) {
    console.log(s, "data parameter");
    militaryHour = timeFormatPm[s.substring(0, 2)];
    console.log(militaryHour, "data Hour di pm");
  } else if (
    "AM" == s.substring(s.length - 2, s.length) &&
    12 == s.substring(0, 2)
  ) {
    militaryHour = timeFormatAm[s.substring(0, 2)];
    console.log(militaryHour, "data Hour di AM");
  } else {
    militaryHour = s.substring(0, 2);
  }

  // untuk menggabungkan 2 angkan depan hasil dari conditional dengan 4 angka belakang
  militaryTime = militaryHour + s.substring(2, s.length - 2);

  console.log(militaryTime);
  return militaryTime;
}

const numArr = "12:05:45AM";
timeConversion(numArr);
