/** @jsx jsx */ jsx;
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import hideVisually from 'polished/lib/mixins/hideVisually';
import { colors, breakpoints } from '@heathmont/sportsbet-tokens';
import { spacing, mq } from '@heathmont/sportsbet-utils';
import rem from 'polished/lib/helpers/rem';

const navSkipLinkID = 'nav-skip';

const skipLink: CSSObject = {
  position: 'absolute',
  zIndex: 1,
  padding: `0 ${spacing('small')}`,
  top: '50%',
  left: spacing('small'),
  transform: 'translateY(-50%)',
  color: colors.neutral[10],
  backgroundColor: colors.neutral[90],
  '&:not(:focus)': {
    ...hideVisually(),
  },
};

const Nav = styled.nav(() => [
  {
    width: '100%',
    position: 'fixed',
    top: 0,
    height: rem(192),
    zIndex: 2,
    backgroundColor: colors.neutral[90],
    [mq(breakpoints.large)]: {
      height: rem(160),
    },
  },
]);

const navGrid: CSSObject = {
  display: 'grid',
  gridTemplateRows: `${rem(80)} auto auto`,
  gridTemplateColumns: '1fr 1fr',
  gridColumnGap: spacing(),
  gridTemplateAreas: `
      "hamburger    buttons"
      "search       search"
      "nav          nav"
    `,
  marginTop: 0,
  marginLeft: 0,
  height: '100%',
  [mq(breakpoints.small)]: {
    paddingLeft: spacing('large'),
    paddingRight: spacing('large'),
  },
  [mq(breakpoints.large)]: {
    gridTemplateColumns: 'fit-content(20%) auto fit-content(20%)',
    gridTemplateRows: `${rem(80)} auto`,
    gridTemplateAreas: `
        "hamburger    search    buttons"
        "nav          nav       nav"
      `,
  },
};

const Navigation: React.FC = ({ children }) => {
  return (
    <Nav>
      <a href={`#${navSkipLinkID}`} css={skipLink}>
        Skip to content
      </a>
      <div css={navGrid}>{children}</div>
      <span id={navSkipLinkID} />
    </Nav>
  );
};

export { Navigation };
