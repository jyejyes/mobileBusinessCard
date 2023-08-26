import styled from "@emotion/styled";
import { ReactComponent as EmailIcon } from "../../public/assets/ic-email.svg";
import { ReactComponent as PhoneIcon } from "../../public/assets/ic-phone.svg";
import { ReactComponent as InstagramIcon } from "../../public/assets/ic-instagram.svg";
import { useState } from "react";
import { Common } from "../styles/Common.ts";
import { colorChoice } from "../state/state.ts";
import { useSnapshot } from "valtio";

export const Card = () => {
  const { colorIndex } = useSnapshot(colorChoice);

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (innerWidth / 2 - e.pageX) / 20;
    const y = (innerHeight / 2 - e.pageY) / 20;

    setCardRotation({ x, y });
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setCardRotation({ x: 0, y: 0 });
    setIsMouseOver(false);
  };

  return (
    <CardWrapper
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onMouseOver={handleMouseOver}
      rotation={cardRotation}
      isMouseOver={isMouseOver}
      colorIndex={colorIndex}
    >
      <img src="https://picsum.photos/200/302" alt="brie" />

      <Information isMouseOver={isMouseOver} colorIndex={colorIndex}>
        <h1 className="name">박지혜</h1>
        <p className="position">FRONTEND DEVELOPER</p>

        <div className="contact">
          <PhoneIcon width={16} height={16} />

          <p>010-2939-9481</p>
        </div>
        <div className="contact">
          <EmailIcon width={16} height={16} />

          <p>jh100m1@gmail.com</p>
        </div>
        <div className="contact">
          <InstagramIcon width={16} height={16} />

          <p>zerilog</p>
        </div>
      </Information>
    </CardWrapper>
  );
};

type CardProps = {
  rotation: { x: number; y: number };
  isMouseOver: boolean;
  colorIndex: number;
};

type InformationProps = {
  isMouseOver: boolean;
  colorIndex: number;
};

const CardWrapper = styled.div<CardProps>`
  max-width: 40rem;
  width: 100%;
  min-width: 20rem;

  aspect-ratio: 2/3;

  border-radius: 10px;
  background: ${(props) => Common.colors[props.colorIndex].cardBg};

  transform: rotateY(${(props) => props.rotation.x}deg)
    rotateX(${(props) => props.rotation.y}deg);
  transform-style: preserve-3d;
  transition: all 0.1s ease;

  padding: 50px 0 60px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

  ${Common.mediaQuery.mobile} {
    padding: 40px 0 40px;
  }

  img {
    border-radius: 50%;

    width: 55%;
    aspect-ratio: 1/1;

    transform: ${(props) =>
      props.isMouseOver ? "translate3d(0,0,100px)" : ""};
    transition: all 0.3s ease;
  }
`;

const Information = styled.div<InformationProps>`
  width: 100%;

  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: ${(props) => (props.isMouseOver ? "translate3d(0,0,80px)" : "")};
  transition: all 0.3s ease;

  color: ${(props) => Common.colors[props.colorIndex].text};

  ${Common.mediaQuery.mobile} {
    gap: 1rem;
  }

  .name {
    font-size: 3rem;
    font-weight: 700;
    font-family: "Pretendard-Bold";

    ${Common.mediaQuery.mobile} {
      font-size: 2.5rem;
    }
  }

  .position {
    font-size: 1.6rem;
    margin-bottom: 3rem;
    font-weight: 500;
    font-family: "Pretendard-Medium";
  }

  .contact {
    display: flex;
    gap: 1rem;
    align-items: center;

    & > p {
      font-size: 1.6rem;
      font-weight: 500;
    }

    & > svg {
      fill: ${(props) => Common.colors[props.colorIndex].text};
    }
  }
`;