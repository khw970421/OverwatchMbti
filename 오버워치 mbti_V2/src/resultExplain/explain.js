let explain = [
  `내향적이지만 책임감 있고 <br> 믿을 수 있으면서<br> 주어진 임무를 철저하게<br> 완수하려 노력하는 <br>규칙을 준수하는 유형`,
  `겉으로는 무덤덤해 보여도<br> 생각이 엄청 많으며<br> 성격이 온화하고 <br>배려심이 깊음`,
  `직관력과 통찰력이 강하고<br> 자기안의 갈등이 <br>많고 복잡하나 <br>신념과 열정이 강함.`,
  `행동과 사고에 있어 <br>독창적이며 독립적이고<br> 자신의 영감과 목적을<br> 실현시키려는 의지와 인내심을 가지나 <br>타인의 감정을 고려하고<br> 타인의 관점에 귀기울이는<br> 노력이 필요하다.`,

  `조용하고 말이 없으며 <br>논리적,분석적이고 <br>인생을 관찰하며 <br>일상 생활에 있어 <br>매우 적응력이 강하며 <br>자율적인 성향이 강하다`,
  `말이 적고 조용한 편이며<br> 내향적이고 마음이 따뜻하고<br> 순해서 정이 많음`,
  `감수성이 풍부하고 <br> 이해심이 많아<br> 더나은 상황을 만들어가고자<br> 긍정적으로 노력하는 이상주의자`,
  `사람을 중심으로 한 가치보다<br> ‘아이디어에 관심이 많다.<br> 매우 분석적이고 논리적이며<br> 일의 원리와 인과관계에 관심이 많으며<br> 실체보다는 실체가 안고 있는 <br>가능성에 관심이 많다`,

  `현실적이고 사실적이며 <br>체계적, 논리적으로 <br>사업이나 조직체를 이끌며<br> 분명한 규칙을 중요시하고 <br>그에 따라 행동하고<br> 일을 추진하고 완성한다`,
  `타인의 다양한 요구에 민감하고<br> 그것들을 현실적인 가치로 변환하여 <br>조화롭게 하고자 하는 것에 큰 관심을 쏟는다.`,
  `정의로운 사회운동가나<br> 언변능숙형으로 <br>마음이 따뜻하고 책임감이 강하며<br> 사교성이 풍부하며 동정심이 많다`,
  `리더쉽 완벽주의 계획형으로 <br>일에 대한 장기적인 안목이 있으나<br> 상대방의 감정에 다소 무감각`,

  `모험가 성향으로 리더쉽이 강하며 <br>문제해결능력 또한 탁월하고 <br>계획보다는 체험,경험을 중시하는 행동파`,
  `외향적이며 감각적, 감성적.<br> 사고적이고 활동적이며 <br>즐거움을 추구하는것을 즐김`,
  `재기 발랄한 활동가로 <br>따뜻하고 열정적이며 <br>때로는 분위기 메이커 역할을 하여<br> 어느 모임, 그룹에서도 <br>어렵지 않게 만날 수 있는 타입`,
  `외향적이고 직관적이며,<br> 사고적 탐구적인 성격으로<br> 모험심이 강해서 <br>위험을 감수해서라도 <br>새로운 시도를 마다하지 않으나<br> 일상적이고 세부적인 일에는<br> 태만하기 쉬운 성격`,
];

let explain2 = [
  `일의 세부사항에 집착하고 <br>고집하는 경향이 있으나<br> 사실에 대하여 정확하고 <br>체계적으로 기억하며 <br>일 처리에 있어서도 신중하며<br> 책임감이 강하다`,
  `경험을 통해서 <br>자신이 틀렸다고 인정하기까지<br> 어떠한 난관이 있어도 <br>꾸준히 밀고 나가며 <br>세부적이고 치밀성과 <br>반복을 요하는 일을 끝까지<br> 해 나가는 인내력이 높다.`,
  `독창성과 독립심이 강하고,<br> 확고한 신념과 뚜렷한 원리원칙을<br> 생활 속에 가지고 있으면서<br> 통찰력이 뛰어나다`,
  `주관적인 감정보다는 <br>논리와 객관적인 정보에 <br>더 중점을 두는 특징이며<br> 자신만의 기준이 있고<br> 호기심이 많으나 감성적이 부족`,

  `독립적이고 내향적이면서<br> 낙관적이고 느긋하여 <br>계획보단 하루하루를<br> 살아가는 스타일`,
  `마음이 따뜻하고 동정적이나<br> 상대방을 잘 알게 될 때까지<br> 이 따뜻함을 잘 드러내지 않으며<br> 자신의 주관이나 가치를 <br>타인에게 요구하지 않는다.`,
  `자신이 관계하는 사람이나 <br>일에 대하여 책임감이 강하고<br> 성실하며 이해심과 적응력이 많고<br> 대체로 관대하며 개방적이다.`,
  `조용하고 과묵하며 <br>논리를 바탕으로 <br>분석하는 것을 즐기며<br> 문제를 해결하기 좋아함.<br> 관심이 있는 분야에 대해 <br>말을 잘하며 이해가 빠르고<br> 높은 직관력을 가짐`,

  `외향적이고 논리적이고<br> 책임감이 있으며 사실적이고<br> 현실 감각이 뛰어나 <br>일을 조직, 계획, 추진하는 능력이 <br>뛰어난 지도자의 성격을 가짐`,
  `다른 사람들에게 관심을 쏟고<br> 친절하고 재치가 있으며<br> 일상적인 일에 잘 적응하며 <br>현실적이고 실제적이다.`,
  `남을 돕기를 좋아하는 성격이며<br>  동정심과 동료애가 많으며 <br>친절하고 재치 있고<br> 인화를 아주 중요하게 여기며<br>  우호적이고 참을성이 많고<br> 성실한 현실주의자`,
  `행정적인 일과 장기계획을 선호하며<br> 논리적이고 분석적이나 <br>다소 냉소적이며 자신의 목표에만 <br>더욱 집중한다.<br> 타인의 감정에 관심을 갖고 <br>자신의 느낌이나 감정을<br> 인정하고 표현하는 것이 필요`,

  `현실적으로 야기되는<br> 문제의 해결에<br> 뛰어난 능력을 발휘하며<br> 읽고 쓰는 것을 통해 배우기보다<br> 직접적인 경험을 통해<br> 배우는 것을 선호`,
  `즐거움을 추구하고 <br>새로운 경험을 즐기며 호기심이 많고,<br> 도전적이며, 진취적이다. <br>다른 사람의 일이나 활동에 <br>관심이 많으며 재치 있고 꾀가 많다.`,
  `풍부한 에너지를 가지고 <br>순발력있게 일을 해결하는 솔선과<br> 관심이 있는 일이면 <br>무엇이든 척척 해내는 열성파이다. <br>새로운 가능성을 추구하고 창의적, 즉흥적이다.`,
  `넓은 안목을 가지고 있으며 <br>여러 가지 일에 재능을 발휘하고<br> 가치관이 뚜렷하며 자존감과 자신감이 많으나<br> 다소 개인적인 성향이 강하고 인내심이 부족하다.`,
];

// 소전 추가로 인한 explain3 추가
let explain3 = [
  `아는 범위 내에서는 <br> 눈치가 매우 빠르지만<br>  나서는 것을 좋아하지 않고<br>  치밀성과 반복을 요구하는 일을<br> 끝까지 해나가는 인내력이 있으며<br> 계획에 없던 것을 하는 것을 싫어한다. `,
  `사람들을 이끄는 것에<br>
   타고난 기질이 있고<br>
    언변이 능숙하며 <br>
    지도자 성향이 있다.<br> 
    자신뿐 아니라 더 나아가<br>
     살기 좋은 공동체를 만들기 위해<br>
      사람들을 동참시키고 이끄는 데에서<br>
       큰 자부심과 행복을 느낍니다.<br>`,
  `마음이 따뜻하고 조용하며,<br>
   자신이 하고있는 일이나<br>
  알고있는 사람들에 대해서 <br>
  책임감이 강하고 성실하다. <br> 
  이해심이 많은 편이고 관대하며, <br>
  자신이 추구하는 이상에 대하여 <br>
  정열적인 신념을 가진다.<br>`,
];

export { explain, explain2, explain3 };
