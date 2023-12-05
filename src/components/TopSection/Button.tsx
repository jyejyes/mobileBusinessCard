import { ComponentPropsWithoutRef } from "react";
import styled from "@emotion/styled";
import { useSnapshot } from "valtio";
import { colorChoice } from "../../state/state.ts";
import { Common } from "../../styles/Common.ts";

export type PickButtonTag = ComponentPropsWithoutRef<"button">;

type Props = {
  children: React.ReactNode;
} & PickButtonTag;
export const Button = ({ children, ...props }: Props) => {
  const { colorIndex } = useSnapshot(colorChoice);

  console.log('바보')

  return (
    <ButtonWrapper
      aria-label={"change theme"}
      colorIndex={colorIndex}
      onClick={props.onClick}
    >
      {children}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button<{ colorIndex: number }>`
  position: absolute;
  top: 5%;
  right: 5rem;

  z-index: 10;

  cursor: pointer;

  background: transparent;

  padding: 0.6rem 1.3rem;
  border: none;
  border-radius: 5px;

  font-size: 1.4rem;

  ${Common.mediaQuery.bigMobile} {
    top: 2%;
    right: 2%;
  }

  svg {
    fill: ${(props) => Common.colors[props.colorIndex].text};
  }

  &:hover {
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;
