import { estj, intp } from "./selection/firstMbti.js";

const questionTitle1 = [
  "게임을 시작하기 전",
  "게임 큐를 돌리기 전에",
  "올해의 목표를 세우려 한다. 어떤 목표를 세울까?",

  "상대 딜러 1명에 의해 팀원들이 처치 당하는 것이 반복될 때",
  "하루 동안 경쟁전에서 8연승을 했을 때",
  "이번 주까지 할 일이 너무 많은데 어떻게 끝내야 할까?",

  "적 팀 겐지가 5인 궁 POTG를 먹을 때",
  "자신의 팀원들이 상대가 핵이라고 할 때",
  "나노 겐지 용검으로 팀원이 1킬 후 죽고 다시 아나인 자신에게 나노 겐지 용검을 제안할 때",

  "현재 한타가 진 와중에 자신에게 디바 궁극기가 있을 때 할 행동은?",
  "파멸의 일격을 사용했을 때 나는",
  "게임에 패배하고 나서 나는",
];

const questionTitle2 = {
  ISTJ: "12시에 모이는 곳에 가야 할 때",
  ISFJ: "팀원들과의 목표한 결과가 나오지 않았을 때",
  INFJ: "팀원과 궁극기를 연계하고 싶은데 계속 팀원이 먼저 사용할 때",
  INTJ: "게임 시작 전 팀보이스로 팀원이 게임과 관련없는 얘기를 계속 할 경우",

  ISTP: "라인하르트인 자신이 궁극기로 상태 팀 대부분을 눕혔을 때 상대 디바의 자폭이 우리 팀 뒤쪽으로 날아온다면  ",
  ISFP: "게임이 승리하고",
  INFP: "자신이 힐러일 때 팀원 힐러가 자신을 버리고 도망칠 때",
  INTP: "상대팀 딜러가 정크랫과 시메트라로 히트 스캔 영웅이 없을 때",

  ESTJ: "시간이 부족한 시험에서 시험문제를 풀 때",
  ESFJ: "식당에서 누군가 밥을 먹고 나갈 때 중요한 물건을 떨어뜨리고 나갔을 때 ",
  ENFJ: "팀원 중 한명이 게임을 던지고 있을때",
  ENTJ: "팀원끼리 리더를 정하려고 할 때 ",

  ESTP: "공격에서 시간이 얼마 안남은 상황에서 화물이 거의 다 밀려 있을 때",
  ESFP: "게임에서 팀 보이스로 오라고 누군가 채팅을 할 때",
  ENFP: "게임 한판 한판 플레이를 할 때",
  ENTP: "영웅을 플레이하려고 할 때 ",
};

const questionTitle3 = {
  1: "둘 중 하나를 선택해야 할 때",
  2: "자신에게 더욱 의미있는 것은?",
};

const mbtiQuestionObj = {
  1: { title: questionTitle1[0], type: "EI", A: estj[0], B: intp[0] },
  2: { title: questionTitle1[1], type: "EI", A: estj[1], B: intp[1] },
  3: { title: questionTitle1[2], type: "EI", A: estj[2], B: intp[2] },
  4: { title: questionTitle1[3], type: "SN", A: estj[3], B: intp[3] },
  5: { title: questionTitle1[4], type: "SN", A: estj[4], B: intp[4] },
  6: { title: questionTitle1[5], type: "SN", A: estj[5], B: intp[5] },
  7: { title: questionTitle1[6], type: "TF", A: estj[6], B: intp[6] },
  8: { title: questionTitle1[7], type: "TF", A: estj[7], B: intp[7] },
  9: { title: questionTitle1[8], type: "TF", A: estj[8], B: intp[8] },
  10: { title: questionTitle1[9], type: "JP", A: estj[9], B: intp[9] },
  11: { title: questionTitle1[10], type: "JP", A: estj[10], B: intp[10] },
  12: { title: questionTitle1[11], type: "JP", A: estj[11], B: intp[11] },
};

export { questionTitle2, questionTitle3, mbtiQuestionObj };
