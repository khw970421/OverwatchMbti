import { img, img2, img3 } from "./img.js";
import { explain, explain2, explain3 } from "./explain.js";

const isRandom = () => Math.ceil(Math.random() * 10) % 2 === 0;

let result = {
  ISTJ: {
    HERO: "파라",
    explain: explain[0],
    img: img[0],
    line: ["무고한 이들을 지키겠습니다.", "시스템 이상무, 전투기동 대기중"],
  },
  ISFJ: isRandom()
    ? {
        HERO: "오리사",
        explain: explain[1],
        img: img[1],
        line: [
          "추후 분석을 위해 기록을 저장합니다.",
          "지켜드릴테니 제 곁을 떠나지 마십시오",
        ],
      }
    : {
        HERO: "바스티온",
        explain: explain2[1],
        img: img2[1],
        line: ["뿌잉 뿌잉 뿌잉!", "쀼쀼 쀼쀼쀼", "삐유우우웃"],
      },
  INFJ: {
    HERO: "메이",
    explain: explain[2],
    img: img[2],
    line: [
      "제 몸 하나는 지킬 수 있다고요",
      "개인적인 감정은 없어요",
      "빨리 시작하고 싶어요",
    ],
  },
  INTJ: {
    HERO: "모이라",
    explain: explain[3],
    img: img[3],
    line: [
      "내 날카로운 분석에 따르면, 벌써 패턴이 형성되고 있는 것 같아.",
      "흥, 보아하니 새로운 방법론이 필요하겠군.",
      "일이 계획대로 풀리지 않으면, 가정(假定)에 의문을 품어야 해.",
    ],
  },
  ISTP: {
    HERO: "맥크리",
    explain: explain[4],
    img: img[4],
    line: [
      "지루할 틈이 없는 인생이라니까.",
      "석양 속으로 사라질 시간인가. ",
      "서두를 거 없잖아?",
    ],
  },
  ISFP: {
    HERO: "겐지",
    explain: explain[5],
    img: img[5],
    line: [
      "마음을 비우고 눈앞의 임무에 집중해",
      "망자에게 애도를",
      "하나되어 수비하라 승리가 코앞이다.",
    ],
  },
  INFP: {
    HERO: "젠야타",
    explain: explain[6],
    img: img[6],
    line: [
      "여기서 채비를 갖추어야하오",
      "낙담하지 마시오, 처음에는 누구나 무지한 법이니",
      "잘했소!",
    ],
  },
  INTP: {
    HERO: "시그마",
    explain: explain[7],
    img: img[7],
    line: [
      "(흥얼거림), 음… 아, 실례 ",
      "이 명제가 참인지 곧 알게 되겠지.",
      "실험으로 일관적인 결과가 도출되니, 더 진행해도 되겠어",
    ],
  },
  ESTJ: {
    HERO: "브리기테",
    explain: explain[8],
    img: img[8],
    line: [
      "마지막으로 체크할게요. 다들 준비됐죠?",
      "연습이 완벽을 만들지...만, 멍이랑 혹도 필수지~",
      "제가 여러분의 방패가 되어드릴게요!",
    ],
  },
  ESFJ: {
    HERO: "자리야",
    explain: explain[9],
    img: img[9],
    line: [
      "새해목표요? 온세상의 평화입니다",
      "해내실 줄 알았습니다",
      "저격수다. 조심하십시오",
    ],
  },
  ENFJ: {
    HERO: "메르시",
    explain: explain[10],
    img: img[10],
    line: [
      "뭐 치료는 해드릴게요. 늘 그랫듯이",
      "잠시만 차분하게 평화를 즐겨볼까여? 물론 그리 길진않겠지만",
      "항상 폭력만이 해법이 되어야할까요?",
    ],
  },
  ENTJ: {
    HERO: "솔져",
    explain: explain[11],
    img: img[11],
    line: [
      "뺀질거리지 말고 이동할 준비해",
      "널 지휘하게 되어 영광이다.",
      "전술적인 선택이었다.",
    ],
  },
  ESTP: {
    HERO: "둠피스트",
    explain: explain[12],
    img: img[12],
    line: [
      "임무가 시작되면, 노닥거릴 시간은 없을 거다.",
      "비키지 않으면, 뭉개버리겠다!",
      "더 빠르게 처리해주마.",
    ],
  },
  ESFP: {
    HERO: "디바",
    explain: explain[13],
    img: img[13],
    line: [
      "좋았어 이제부터 진지모드",
      "이런게 팀워크지",
      "신기록 한번 세워볼까?",
    ],
  },
  ENFP: {
    HERO: "트레이서",
    explain: explain[14],
    img: img[14],
    line: ["안녕 친구들 해결사가 왔어", "잽싸게 해치워버리자", "같이 가"],
  },
  ENTP: {
    HERO: "정크랫",
    explain: explain[15],
    img: img[15],
    line: [
      "내꺼 내꺼 내꺼 이 거점은 내꺼야",
      "저 밖에 폭파시킬게 얼마나 많은데 여기서 계속 기다리라고?",
      "나의 모든 노력이 하얗게 불타고있어",
    ],
  },
};

let result2 = {
  ISTJ: {
    HERO: "에코",
    explain: explain2[0],
    img: img2[0],
    line: [
      "계획을 따르되, 필요하다면 유동적으로 대처하세요.",
      "목표에 집중하고, 오류를 줄이고, 변화하는 전장의 상황에 적응하세요. 마지막으로, 행운을 빌어요.",
      "향후 분석을 위해 리플레이 저장 중.",
    ],
  },
  ISFJ: {
    HERO: "소전",
    explain: explain3[0],
    img: img3[0],
    line: [
      "함께 헤쳐나가는 거다. 우리 모두.",
      "계획하고 이기거나, 얌전히 지거나.",
      "마지막 기회다. 반드시 성공시켜.",
    ],
  },
  INFJ: {
    HERO: "애쉬",
    explain: explain2[2],
    img: img2[2],
    line: [
      "가장 위험한 1%를 조심했어야지.",
      "다들 뭐 하는 거야? 화물을 옮겨야 할 거 아냐!",
      "이런 건 계획에 없었는데!",
    ],
  },
  INTJ: {
    HERO: "시메트라",
    explain: explain2[3],
    img: img2[3],
    line: [
      "모두가 자기역할을 다하면 승리할 수 밖에 없죠",
      "계획대로만 하면 승리는 우리거에요",
      "적 포탑을 파괴했어요  훗, 구조가 열악하더군요.",
    ],
  },
  ISTP: {
    HERO: "리퍼",
    explain: explain2[4],
    img: img2[4],
    line: [
      "혼자서라도 다 쓸어주지",
      "타 죽기 싫으면 내 앞에서 썩 꺼져 ",
      "죽음이 너의 곁을 걷는다.",
    ],
  },
  ISFP: {
    HERO: "한조",
    explain: explain2[5],
    img: img2[5],
    line: [
      "약해. (적 처치)",
      "너에게 주는 선물이다.",
      "어떻게든 내가 안고 갈 짐이다.",
    ],
  },
  INFP: {
    HERO: "아나",
    explain: explain2[6],
    img: img2[6],
    line: [
      "너희를 집으로 무사히 돌려보내겠다.",
      "현명하게 행동해라. 함께 헤쳐 나가자.",
      "우리 팀엔 아직 내가 필요해.",
    ],
  },
  INTP: {
    HERO: "윈스턴",
    explain: explain2[7],
    img: img2[7],
    line: [
      "제 계산에 따르면 저희의 생존 가능성을 32.33%입니다. 아 물론 순환소수죠 ",
      "이게 바로 응용과학이죠",
      "흥, 증명완료",
    ],
  },
  ESTJ: {
    HERO: "토르비욘",
    explain: explain2[8],
    img: img2[8],
    line: [
      "할일이 천지인데 이렇게 노닥거리다니",
      "헤헤헤 참 잘했어요. 도장찍어줄까?",
      "다들 뭐하는거야? 화물이 움직이는걸 보고만 있으라고?",
    ],
  },
  ESFJ: {
    HERO: "솜브라",
    explain: explain2[9],
    img: img2[9],
    line: [
      "보호막이 있으면 좋겠네.",
      "거점을 점령 중이야. 합류할 사람?",
      "(리퍼 : 임무에 집중해라. 솜브라...) 글쎄, 누군가는 그 꼼꼼한 계획이 생각대로 안 풀릴 땔 대비해야 한다고.",
    ],
  },
  ENFJ: {
    HERO: "바티스트",
    explain: explain2[10],
    img: img2[10],
    line: [
      "최악의 상황을 떠올려 봐. 그리고 그렇게 하지 마.",
      "내가 하는 거 잘 보고 배우라고.",
      "너랑 일하면, 일이 잘 풀린다니까.",
    ],
  },
  ENTJ: {
    HERO: "위도우",
    explain: explain2[11],
    img: img2[11],
    line: [
      "한 방이면 충분해.",
      "넌 한때 전설이었지만, 지금은 껍질만 남은 여자일 뿐이야",
      "난 표적을 놓치지 않아.",
    ],
  },
  ESTP: {
    HERO: "라인하르트",
    explain: explain2[12],
    img: img2[12],
    line: [
      "남자가 망치를 들었으면 뭐든 후려쳐야지",
      "영광스러운 전장에서 우리의 용기를 증명하게나",
      "날 막을 순 없다.",
    ],
  },
  ESFP: {
    HERO: "레킹볼",
    explain: explain2[13],
    img: img2[13],
    line: ["햄스터가 만족스러워 함.", "로드킬. 하 하", "최대속력 달성."],
  },
  ENFP: {
    HERO: "루시우",
    explain: explain2[14],
    img: img2[14],
    line: [
      "루시우가 여러분을 찾아갑니다!",
      "와아, 우리 팀 좀 봐. 진짜 잘할 거야!",
      "하하! 우리가 녀석들을 보내 버렸어!",
    ],
  },
  ENTP: {
    HERO: "로드호그",
    explain: explain2[15],
    img: img2[15],
    line: ["고통을 즐겨.", "다시 설쳐볼까.", "날뛰어 볼까?"],
  },
};

export { result, result2 };
