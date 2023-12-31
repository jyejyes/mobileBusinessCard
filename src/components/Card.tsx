import styled from '@emotion/styled';
import { ReactComponent as EmailIcon } from '../../public/assets/ic-email.svg';
// import { ReactComponent as InstagramIcon } from "../../public/assets/ic-instagram.svg";
import { ReactComponent as PhoneIcon } from '../../public/assets/ic-phone.svg';
import { useState } from 'react';
import { Common } from '../styles/Common.ts';
import { colorChoice } from '../state/state.ts';
import { useSnapshot } from 'valtio';
import { IMAGE_URL } from '../../static/imageUrl.ts';

export const Card = () => {
  const { colorIndex } = useSnapshot(colorChoice);

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
      colorIndex={colorIndex}
    >
      <img src={IMAGE_URL[colorIndex]} alt='brie' />

      <Information colorIndex={colorIndex}>
        <h1 className='name'>박지혜(브리)</h1>
        <p className='number'>프론트엔드 개발자</p>

        <div className='contact'>
          <EmailIcon width={14} height={14} />

          <p>jh100m1@gmail.com</p>
        </div>
        <div className='contact'>
          <PhoneIcon width={14} height={14} />

          <p>-</p>
        </div>
        {/*<div className="contact">*/}
        {/*  <InstagramIcon width={14} height={14} />*/}

        {/*  <p>zerilog</p>*/}
        {/*</div>*/}
      </Information>
    </CardWrapper>
  );
};

type CardProps = {
  rotation: { x: number; y: number };
  colorIndex: number;
};

type InformationProps = {
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

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);

  ${Common.mediaQuery.mobile} {
    padding: 40px 0 40px;
  }

  img {
    border-radius: 50%;

    width: 55%;
    aspect-ratio: 1/1;

    transition: all 0.3s ease;

    object-fit: cover;
  }
`;

const Information = styled.div<InformationProps>`
  width: 100%;

  display: flex;
  gap: 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  color: ${(props) => Common.colors[props.colorIndex].text};

  ${Common.mediaQuery.mobile} {
    gap: 1rem;
  }

  .name {
    font-size: 3rem;
    font-family: 'Pretendard-Bold';

    ${Common.mediaQuery.mobile} {
      font-size: 2.5rem;
    }
  }

  .number {
    font-size: 1.4rem;
    margin-bottom: 3rem;
    font-weight: 500;
  }

  .contact {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-family: 'Pretendard-Medium';

    & > p {
      font-size: 1.3rem;
      font-weight: 500;
    }

    & > svg {
      fill: ${(props) => Common.colors[props.colorIndex].text};
    }
  }
`;
