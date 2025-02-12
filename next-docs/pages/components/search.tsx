import React from 'react';
import styled from 'styled-components';

import { IconProfile } from '@heathmont/moon-assets';
import { Search } from '@heathmont/moon-core';
import { rem } from '@heathmont/moon-utils';

const Dropdown = styled.ul(({ theme: { space } }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: rem(space.xsmall),
  listStyle: 'none',
  li: {
    padding: rem(space.small),
  },
}));

const PreviewSearch = () => {
  const [searchString, setSearchString] = React.useState('');
  return (
    <div className="h-96 bg-white p-4">
      <Search
        closeButton={<span>Clear</span>}
        placeholder="Search"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchString(e.target.value);
        }}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        onClear={() => {
          setSearchString('');
        }}
        results={
          searchString ? (
            <Dropdown>
              <li>
                <button>Btn 1</button>
                <button>Btn 1</button>
              </li>
              <li>Recent Searches</li>
              <li
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IconProfile /> First Game
              </li>
              <li
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IconProfile /> Second Game
              </li>
              <li
                style={{ display: 'flex', gap: '10px', alignItems: 'center' }}
              >
                <IconProfile /> Third Game
              </li>
            </Dropdown>
          ) : (
            <Dropdown>
              <li>
                <span>No results</span>
              </li>
            </Dropdown>
          )
        }
      />
    </div>
  );
};

const PreviewSearchLoading = () => {
  return (
    <div className="h-40 bg-white p-4">
      <Search
        placeholder="Search"
        results={
          <Dropdown>
            <li>Loading...</li>
          </Dropdown>
        }
      />
    </div>
  );
};

export default function PageSearch() {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-5xl font-semibold">Search</h1>
        <p className="text-lg mt-4">An elegant search component.</p>
      </section>

      {/* Default */}
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Search component default values</h2>
        <PreviewSearch />
      </section>
      <section className="mt-8">
        <h2 className="text-2xl mb-4">Search loading</h2>
        <PreviewSearchLoading />
      </section>
    </>
  );
}
