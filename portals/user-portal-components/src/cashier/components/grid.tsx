/** @jsx jsx */
import * as React from 'react';
import { jsx } from '@emotion/core';
import rem from 'polished/lib/helpers/rem';
import styled from '@emotion/styled';

import { mq, spacing, rhythm } from '@heathmont/sportsbet-utils';
import { breakpoints } from '@heathmont/sportsbet-tokens';
jsx;

export const LayoutHeader = styled.header({
  [mq(breakpoints.medium)]: {
    gridArea: 'header',
  },
});

export const LayoutMain = styled.main({
  maxWidth: '48rem',
  [mq(breakpoints.medium)]: {
    gridArea: 'main',
  },
});

export const LayoutAside = styled.aside({
  // ...rhythm(),
  [mq(breakpoints.medium)]: {
    gridArea: 'aside',
  },
});

type GridProps = {
  asideWidth: number;
};

const Grid = styled.div<GridProps>(({ asideWidth }) => ({
  [mq(breakpoints.medium)]: {
    display: 'grid',
    gridTemplateRows: `max-content auto`,
    gridRowGap: spacing(),
    gridTemplateColumns: `1fr ${rem(asideWidth)}`,
    gridColumnGap: spacing(),
    gridTemplateAreas: `
          "header  header"
          "main    aside"
        `,
    minHeight: '100vh',
  },
}));

export const CashierGrid: React.FC<GridProps> = ({ children, asideWidth }) => (
  <Grid asideWidth={asideWidth}>{children}</Grid>
);