import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { SelectButton } from '@/components/SelectButton';
import { Meal, MealCreate } from '@/storage/NewMeal/mealCreate';

type RouterParams = {
  title: string;
  meal: Meal;
};

type FormData = {
  name: string;
  description: string;
  date: string;
  time: string;
  diet: boolean;
};

export function MealForm() {
  const [IsDiet, setIsDiet] = React.useState(true as boolean);

  const router = useRoute();
  const { title, meal } = router.params as RouterParams;

  const navigation = useNavigation();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit(data => {
    MealCreate({
      id: JSON.stringify(new Date()),
      ...data,
    });

    navigation.navigate('feedback', { diet: data.diet });
  });

  const handleSetValue = (infos: any) => {
    const fieldsKey = Object.keys(infos);

    fieldsKey.forEach((key: any) => {
      setValue(key, infos[key]);
    });
  };

  React.useEffect(() => {
    if (meal) handleSetValue(meal);
  }, [meal]);

  return (
    <SafeAreaView style={styles.container}>
      <MealHeader title={title}></MealHeader>
      <View style={styles.main}>
        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="name"
        />
        {errors.name && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: false,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Descrição"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={onSubmit}
              height={120}
              multiline
              textAlignVertical="top"
            />
          )}
          name="description"
        />
        {errors.description && <Text>This is required.</Text>}
        <View style={styles.dateContainer}>
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Data"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                width="45%"
              />
            )}
            name="date"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Hora"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                width="45%"
              />
            )}
            name="time"
          />
        </View>
        <Text style={styles.dietTitle}>Está dentro da dieta?</Text>
        <View style={styles.dietSelectContainer}>
          <SelectButton
            text="Sim"
            type="DIET"
            IsActive={IsDiet}
            onPress={() => setIsDiet(true)}
          />
          <SelectButton
            text="Não"
            type="NOT_DIET"
            IsActive={!IsDiet}
            onPress={() => setIsDiet(false)}
          />
        </View>
        <Button text="Cadastrar refeição" type="PRIMARY" onPress={onSubmit} />
      </View>
    </SafeAreaView>
  );
}
