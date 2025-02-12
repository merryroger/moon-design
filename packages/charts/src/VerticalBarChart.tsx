import React from 'react';
import styled from 'styled-components';
import { ColorProps, useTheme } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';

import { Panel } from './private/Panel';
import { Header } from './private/Header';
import ChartIcons from './ChartIcons';
import { VerticalBar } from './private/VerticalBar';
import { Loader } from './private/Loader';
import { getAxisPosition, getBarChartData } from './private/utils';

const Container = styled.div({
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

type Props = {
  title: string;
  data: {
    label: string | React.ReactNode;
    code: string;
    dataKey: string;
    value: number;
  }[];
  onUpdate?: () => void;
  onShare?: () => void;
  onExpand?: () => void;
  isUpdating?: boolean;
  hasUpdates?: boolean;
  filter?: React.ReactNode;
  height?: string | number;
  icon?: any;
  positiveColor?: ColorProps;
  negativeColor?: ColorProps;
  formatFn?: (props: { value: any; key: string }) => any;
  loaderText?: string | React.ReactNode;
};

const VerticalBarChart: React.FC<Props> = ({
  title,
  data,
  onUpdate,
  onShare,
  onExpand,
  isUpdating = false,
  hasUpdates = false,
  filter,
  height = 446,
  icon = <ChartIcons.Countries />,
  positiveColor = 'krillin.100',
  negativeColor = 'chiChi.100',
  formatFn = ({ value }) => value,
  loaderText = 'No data',
}) => {
  const theme = useTheme();
  const isLoading = !data.length;

  const chartData = getBarChartData({
    data,
    formatFn,
    positiveColor: themed('color', positiveColor)(theme),
    negativeColor: themed('color', negativeColor)(theme),
  });

  return (
    <Panel
      isUpdating={isUpdating}
      hasUpdates={hasUpdates}
      onUpdate={onUpdate}
      onShare={onShare}
      onExpand={onExpand}
      height={height}
    >
      <>
        <Header icon={icon} title={title} filter={filter} />
        <Container>
          {isLoading ? (
            <Loader icon={<ChartIcons.BarChartLoading />} title={loaderText} />
          ) : (
            <VerticalBar
              axisPosition={getAxisPosition(data)}
              data={chartData}
            />
          )}
        </Container>
      </>
    </Panel>
  );
};

export default VerticalBarChart;
