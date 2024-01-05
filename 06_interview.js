var eligibleOrNot = function (gradScore, hscScore, sscScore, candidateName) {
  if (gradScore >= 70 || hscScore >= 80 || sscScore > 90) {
    console.log(
      `Congrates ${candidateName} you are eligible for TCS interview. `
    );
    console.log("");
  } else {
    console.log(
      `Unfotunately ${candidateName} you are not eligible for interview`
    );
    console.log("");
  }
};

eligibleOrNot(80, 86, 90, "Kashinath");
eligibleOrNot(70, 65, 55, "Yash");
eligibleOrNot(60, 79, 88, "Prayag");
