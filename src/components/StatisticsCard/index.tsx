import React from 'react';
import { DimensionValue, View } from 'react-native';

import { styles } from './styles';
import { PercentageText } from '../PercentageText';
import theme from '@/theme';

type StatisticsCardProps = {
  value: string;
  description: string;
  color: string;
  height?: number;
  width?: DimensionValue;
};

export function StatisticsCard({
  description,
  value,
  color,
  height = 89,
  width = '100%',
}: StatisticsCardProps) {
  return (
    <View
      style={[
        styles.container,
        { height: height, width: width, backgroundColor: color },
      ]}>
      <PercentageText
        value={value}
        description={description}
        fontSize={theme.FONT_SIZE.XL}
      />
    </View>
  );
}
