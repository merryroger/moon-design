import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import { getGridTemplateColumns } from '../getGridTemplateColumns';

export const WeekGrid = styled.div<{
  weekStartsOn: number;
  isWeekendMinimized: boolean;
}>(
  ({ weekStartsOn, isWeekendMinimized }) => `
  height: 100%;
  display: grid;
  grid-template-columns: ${getGridTemplateColumns({
    weekStartsOn,
    isWeekendMinimized,
  })};
  grid-template-rows: ${rem(24)} auto;
`
);
