import styled from 'styled-components';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsPlus,
} from 'react-icons/bs';

import { GrClose } from 'react-icons/gr';

import { MdDelete } from 'react-icons/md';

export const ArrowRightIcon = styled(BsChevronCompactRight)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
`;

export const ArrowLeftIcon = styled(BsChevronCompactLeft)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
`;

export const PlusIcon = styled(BsPlus)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
`;

export const CloseIcon = styled(GrClose)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
`;

export const DeleteIcon = styled(MdDelete)`
  color: inherit;
  font-size: inherit;
  transform: translateY(5%);
  cursor: pointer;
`;
