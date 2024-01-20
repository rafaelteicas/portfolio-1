import React from 'react';
import {CardContainer} from './styles/card.styles';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

export function Card({children, onClick}: Props) {
  return <CardContainer onClick={onClick}>{children}</CardContainer>;
}
