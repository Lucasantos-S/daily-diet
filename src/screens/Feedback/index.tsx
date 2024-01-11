import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '@/components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import theme from '@/theme';
import Icons from '@/assets/icons';

type RoutersParams = {
  diet: boolean;
};

export function Feedback() {
  const route = useRoute();
  const { diet } = route.params as RoutersParams;
  const navigation = useNavigation();

  const returnHomePage = React.useCallback(() => {
    navigation.navigate('home');
  }, [navigation]);

  const isDiet = diet ? 'diet' : 'not_diet';

  const feedbackText = {
    diet: {
      subTitle: 'Você continua',
      emphasis: 'dentro da dieta.',
      motivation: 'Muito bem!',
    },
    not_diet: {
      subTitle: 'Você',
      emphasis: 'saiu da dieta',
      motivation: 'dessa vez, mas continue se esforçando e não desista!',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text
        style={[
          styles.title,
          { color: diet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK },
        ]}>
        {diet ? 'Continue assim!' : 'Que pena!'}
      </Text>
      <Text style={styles.subTitle}>
        {feedbackText[isDiet].subTitle}{' '}
        <Text style={styles.emphasis}>{feedbackText[isDiet].emphasis} </Text>{' '}
        {feedbackText[isDiet].motivation}
      </Text>
      <Icons name={diet ? 'PositiveIcon' : 'NegativeIcon'} />
      <View style={styles.ButtonContainer}>
        <Button
          size="auto"
          type="PRIMARY"
          text="Ir para a página inicial"
          onPress={returnHomePage}
        />
      </View>
    </SafeAreaView>
  );
}
