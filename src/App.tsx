import { Card } from "./components/Card.tsx";
import styled from "@emotion/styled";
import { Button } from "./components/TopSection/Button.tsx";
import { Common } from "./styles/Common.ts";

import { ReactComponent as ChangeIcon } from "../public/assets/ic-change.svg";

import { colorChoice } from "./state/state.ts";
import { useSnapshot } from "valtio";

function App() {
  const { colorIndex } = useSnapshot(colorChoice);

  const handleChangeColorIndex = () => {
    const max = Common.colors.length - 1;

    if (colorIndex === max) {
      colorChoice.colorIndex = 0;

      return;
    }

    colorChoice.colorIndex = Math.floor(Math.random() * (max + 1));
  };

  return (
    <Wrapper colorIndex={colorIndex}>
      <Button onClick={handleChangeColorIndex}>
        <Change width={28} height={28} />
      </Button>

      <Card />

      {/*<p>도움 받은 사이트 : https://webgradients.com/</p>*/}
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div<{ colorIndex: number }>`
  width: 100%;
  height: 100%;

  position: relative;

  padding: 5rem;

  ${Common.mediaQuery.mobile} {
    padding: 4rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  perspective: 1000px;

  background: ${(props) =>
    `linear-gradient(135deg, ${Common.colors[`${props.colorIndex}`].main} 0%, ${
      Common.colors[`${props.colorIndex}`].sub
    } 100%)`};
`;

const Change = styled(ChangeIcon)`
  animation: scale 1s linear infinite;

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
