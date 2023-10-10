# 모바일 명함 만들기 👩🏻‍🌾

## 제작 이유

별거 아니지만 네트워킹 때 명함이 없어 간단히 제작한 모바일 명함이다.   
카드 위의 마우스 위치에 따라 카드가 움직이고, refresh 버튼을 누르면 다른 색상과 사진을 구경할 수 있다.   
개발기간은 하루 정도로 카페에서 만들어보았다.   

![모바일 명함](https://github.com/jyejyes/mobileBusinessCard/assets/41052126/62d52c45-1c89-4e52-afa1-370240e6eaec)

---

## 주요코드
굉장히 간단한 방법으로 만든것이기 때문에 어려운 방법으로 개발하진 않았다.
### 1. 사진 및 색상 변경
#### Common 파일 : 사진 및 색상 지정 파일
```ts
export const Common = {
  colors: [
    { main: "#a8edea", sub: "#fed6e3", text: "#CD6381", cardBg: "#FCF5F5" },
    { main: "#fddb92", sub: "#d1fdff", text: "#109886", cardBg: "#FAF8ED" },
    { main: "#feada6", sub: "#f5efef", text: "#D36F66", cardBg: "#F9ECE7" },
    { main: "#c1dfc4", sub: "#deecdd", text: "#397C4C", cardBg: "#FCFAEB" },
    { main: "#fff1eb", sub: "#ace0f9", text: "#377BC3", cardBg: "#FEFEFE" },
    { main: "#a1c4fd", sub: "#c2e9fb", text: "#377BC3", cardBg: "#E8F5FB" },
    { main: "#e9defa", sub: "#cd9cf2", text: "#8B32A7", cardBg: "#FAEAFC" },
    { main: "#616161", sub: "#243949", text: "#243949", cardBg: "#dddddd" },
  ],
};
```

#### state 파일 : 배열의 인덱스를 지정해주는 파일
간단하게 변경하고 사용할 수 있는 전역 상태 라이브러리인 valtio를 사용해주었다.   
index를 설정해주고
```
import { proxy } from "valtio";

type ColorChoiceType = {
  colorIndex: number;
};
export const colorChoice = proxy<ColorChoiceType>({
  colorIndex: 0,
});

/**
* Refresh 클릭 함수 : color index를 random 으로 변경해준다.
*/
const handleChangeColorIndex = () => {
 const max = Common.colors.length - 1;

 colorChoice.colorIndex = Math.floor(Math.random() * (max + 1));
};
```

### 2. 마우스 오버 시 효과
#### <App.tsx 파일>
```
return(
   <Wrapper>
      <Card/>
   </Wrapper>
)

//css
const Wrapper = styled.div<{ colorIndex: number }>`
     perspective: 1000px;
`
```
#### <Card 컴포넌트>
```
const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });

const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
 const x = (innerWidth / 2 - e.pageX) / 25;
 const y = (innerHeight / 2 - e.pageY) / 25;

 setCardRotation({ x, y });
};

const handleMouseOut = () => {
 setCardRotation({ x: 0, y: 0 });
};

return (
   <CardWrapper
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      rotation={cardRotation}
      isMouseOver={isMouseOver}
      colorIndex={colorIndex}
   >
    ...
   </CardWrapper>
)


//css
type CardProps = {
  rotation: { x: number; y: number };
};

const CardWrapper = styled.div<CardProps>`
  transform: rotateY(${(props) => props.rotation.x}deg)
    rotateX(${(props) => props.rotation.y}deg);
  transform-style: preserve-3d;
  transition: all 0.1s ease;
`
```


## 사용한 기술 스택
React, emotion, vite, valtio
