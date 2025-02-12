import {
  Button,
  FilterDropdown,
  SingleItemSelect,
} from '@heathmont/moon-components';
import React, { useRef, useState } from 'react';
import { IconChevronDownRounded } from '@heathmont/moon-assets';
import styled from 'styled-components';
import { rem } from '@heathmont/moon-utils';

import useClickAway from './__private__/useClickAway';

const Wrapper = styled.div({
  display: 'inline-block',
  position: 'relative',
});

const Dropdown = styled.div(({ theme }) => ({
  position: 'absolute',
  bottom: '100%',
  left: 0,
  minWidth: '100%',
  width: 'auto',
  marginBottom: rem(theme.space.small),
  zIndex: theme.zIndex.dialog,
  '& > div': {
    minWidth: 'auto',
    width: '100%',
  },
}));

const ButtonDefault = styled(Button)(({ theme }) => ({
  color: theme.color.trunks[100],
  background: 'none',
  borderColor: theme.color.beerus[100],
  transition: `color ${theme.transitionDuration.default}s`,
  '&:hover:not([disabled]), &:focus:not([disabled])': {
    background: 'none',
    color: theme.color.piccolo[100],
  },
}));

const ChangePageSize = ({ children, pageSize, onChange, options }: any) => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useClickAway(ref, () => setIsOpen(false));

  const handlePageSizeChange = (value: number) => {
    setIsOpen(false);
    onChange(value);
  };

  return (
    <Wrapper ref={ref}>
      <ButtonDefault
        variant="tertiary"
        size="xsmall"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children}
        <IconChevronDownRounded />
      </ButtonDefault>
      {isOpen && (
        <Dropdown test-id="dropdown">
          <FilterDropdown>
            <SingleItemSelect
              value={pageSize}
              options={options}
              onChange={handlePageSizeChange}
            />
          </FilterDropdown>
        </Dropdown>
      )}
    </Wrapper>
  );
};

export default ChangePageSize;
