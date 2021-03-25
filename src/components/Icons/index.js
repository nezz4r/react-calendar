import styled from 'styled-components';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsThreeDotsVertical,
} from 'react-icons/bs';

export const ArrowRightIcon = styled(BsChevronCompactRight)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
`;

export const ArrowLeftIcon = styled(BsChevronCompactLeft)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%) rotate;
  cursor: pointer;
`;

export const ThreeDots = styled(BsThreeDotsVertical)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%) rotate;
  cursor: pointer;
`;
