document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("dateInput");
  const calBtn = document.getElementById("calBtn");
  const result = document.getElementById("result");

  calBtn.addEventListener("click", function () {
    const birthdate = new Date(dateInput.value);
    const currentDate = new Date();

    const ageInMilliseconds = currentDate - birthdate;

    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;

    const zodiac = [
      "ชวด-หนู",
      "ฉลู-วัว",
      "ขาล-เสือ",
      "เถาะ-กระต่าย",
      "มะโรง-งูใหญ่",
      "มะเส็ง-งูเล็ก",
      "มะเมีย-ม้า",
      "มะแม-แพะ",
      "วอก-ลิง",
      "ระกา-ไก่",
      "จอ-สุนัข",
      "กุน-หมู",
    ];

    const birthYears = birthdate.getFullYear(); // ค.ศ.
    const beYears = birthYears + 543; //พ.ศ.

    if (beYears < 1) {
      console.log("error");
    }
    const x = (beYears + 5) % 12;
    const z = zodiac[x];

    console.log(z);
    
    result.innerHTML = `คุณมีอายุ <span>${years}</span> ปี <span>${months}</span> เดือน <span>${days}</span> วัน ปีนักษัตร <span>${z}</span> `;
  });
});
