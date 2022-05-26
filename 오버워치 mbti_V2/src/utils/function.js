import { q, questionTitle2, questionTitle3 } from "../question/question.js";
import { A, B } from "../question/selection/second1Answer.js";
import { q3A, q3B } from "../question/selection/third2Answer.js";
import { result, result2 } from "../resultExplain/result.js";

let startTime, endTime;
var num = 1;
let mbti = "";
let isMore;
let timerId;

const shuffleArray = (array) => {
  for (let i = 1; i <= Object.keys(array).length; i++) {
    let j = Math.floor(Math.random() * i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
};

function start() {
  startTime = new Date();
  $(".start").hide();
  $(".question").show();
  shuffleArray(q);
  next();
}

$("#A").click(function () {
  clearTimeout(timerId);

  if (num < 13) {
    var type = $("#type").val();
    var preValue = $("#" + type).val();
    $("#" + type).val(parseInt(preValue) + 1);
  } else if (num == 14) {
    isMore = true;
  }
  console.log("Aclick", isMore, num);
  next();
});

$("#B").click(function () {
  clearTimeout(timerId);

  if (num == 14) {
    isMore = false;
  }
  next();
});

function next() {
  if (num == 13) {
    ganimedes();
    $("#EI").val() >= 2 ? (mbti += "E") : (mbti += "I");
    $("#SN").val() >= 2 ? (mbti += "S") : (mbti += "N");
    $("#TF").val() >= 2 ? (mbti += "T") : (mbti += "F");
    $("#JP").val() >= 2 ? (mbti += "J") : (mbti += "P");
    num++;
    $("#title").html(questionTitle2[mbti]);

    $("#A").html(A[mbti]);
    $("#B").html(B[mbti]);
  } else if (num < 13) {
    ganimedes();
    $(".progress-bar").attr("style", "width: calc(100/16*" + num + "%)");
    $("#title").html(q[num]["title"]);
    $("#type").val(q[num]["type"]);
    $("#A").html(q[num]["A"]);
    $("#B").html(q[num]["B"]);

    num++;
    $("#A").click(function () {
      return false;
    });
    $("#B").click(function () {
      return false;
    });
  } else if (num == 14) {
    ganimedes();
    $(".progress-bar").attr("style", "width: calc(100/16*" + num + "%)");
    $("#title").html(questionTitle3["1"]);

    $("#A").html(q3A["1"]);
    $("#B").html(q3B["1"]);

    num++;
    $("#A").click(function () {
      return false;
    });
    $("#B").click(function () {
      return false;
    });
  } else if (num == 15) {
    ganimedes();
    $(".progress-bar").attr("style", "width: calc(100/16*" + num + "%)");
    $("#title").html(questionTitle3["2"]);

    $("#A").html(q3A["2"]);
    $("#B").html(q3B["2"]);

    num++;
    $("#A").click(function () {
      return false;
    });
    $("#B").click(function () {
      return false;
    });
  } else {
    endTime = new Date();
    if ((endTime.getTime() - startTime.getTime()) / 1000 < 20) {
      $(".question").hide();
      $(".kakao_ad").hide();
      $("body").css("background-image", 'url("")');
      document.querySelector(".video").style.display = "block";
      document.querySelector(".videoTitle0").style.display = "block";
    } else {
      $(".question").hide();
      $(".result").show();

      console.log(isMore, result2[mbti]["HERO"]);

      if (isMore) {
        $("#img").attr("src", result[mbti]["img"]);
        $("#HERO").html(result[mbti]["HERO"]);
        $("#explain").html(result[mbti]["explain"]);
        $("#name").html(result[mbti]["HERO"] + "의 대사");
        for (let i = 0; i < result[mbti]["line"].length; i++) {
          document
            .getElementById("line")
            .insertAdjacentHTML(
              "afterend",
              `<h3 class="text-center mt-1 skyblueText properSize">${result[mbti]["line"][i]}</h3>`
            );
        }
      } else {
        $("#img").attr("src", result2[mbti]["img"]);
        $("#HERO").html(result2[mbti]["HERO"]);
        $("#explain").html(result2[mbti]["explain"]);
        $("#name").html(result2[mbti]["HERO"] + "의 대사");
        for (let i = 0; i < result2[mbti]["line"].length; i++) {
          document
            .getElementById("line")
            .insertAdjacentHTML(
              "afterend",
              `<h3 class="text-center mt-1 skyblueText properSize">${result2[mbti]["line"][i]}</h3>`
            );
        }
      }
    }
  }
}

function ganimedes() {
  timerId = setTimeout(() => {
    $(".question").hide();
    $(".kakao_ad").hide();
    $("body").css("background-image", 'url("")');
    document.querySelector(".video1").style.display = "block";
    document.querySelector(".videoTitle1").style.display = "block";
  }, 60000);
}

export { start };
