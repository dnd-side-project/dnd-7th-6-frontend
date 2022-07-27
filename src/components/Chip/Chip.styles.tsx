import styled from '@emotion/native';

import {Props} from './Chip';

export const Container = styled.Pressable<Props>`
  width: auto;
  align-self: flex-start;
  border-radius: 6px;
  padding: 6px 10px;
  background-color: ${({mode}) => (mode === 'bright' ? 'white' : '#F6F6F6')};
  ${({mode}) => (mode === 'bright' ? 'border: 1px solid #E5E5E5' : '')};
`;

export const ChipText = styled.Text<Props>`
  font-size: 14px;
  color: ${({mode}) => (mode === 'bright' ? '#666' : '#191919')};
`;
