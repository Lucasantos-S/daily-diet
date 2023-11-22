import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';

type RouterParams = {
  title: string;
};

type FormData = {
  name: string;
  description: string;
  date: string;
  hours: number;
};

export function MealForm() {
  const router = useRoute();
  const { title } = router.params as RouterParams;

  const {
    register,
    setValue,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <SafeAreaView style={styles.container}>
      <MealHeader title={title}></MealHeader>
      <View style={styles.main}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              onSubmitEditing={onSubmit}
            />
          )}
          name="name"
        />
        {errors.name && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Nome"
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
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Data"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={onSubmit}
                width="45%"
              />
            )}
            name="description"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Hora"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                onSubmitEditing={onSubmit}
                width="45%"
              />
            )}
            name="description"
          />
        </View>
        <Button text="Cadastrar refeição" type="PRIMARY" />
      </View>
    </SafeAreaView>
  );
}
