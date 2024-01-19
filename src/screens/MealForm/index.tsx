import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './styles';
import { MealHeader } from '@/components/MealHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InputText } from '@/components/InputText';
import { Button } from '@/components/Button';
import { SelectButton } from '@/components/SelectButton';
import { Meal, mealCreate } from '@/storage/meal/mealRegister';
import { uuid } from '@/utils/uuid';
import DateTimePicker from '@react-native-community/datetimepicker';
import { mealData, mealSchema } from '@/utils/schema';

type RouterParams = {
  title: string;
  meal: Meal;
};

type FormData = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  diet: boolean;
};

export function MealForm() {
  const [openCalendar, setOpenCalendar] = React.useState(false as boolean);
  const [openTime, setOpenTime] = React.useState(false as boolean);

  const dateInputRef = React.useRef<TextInput>(null);
  const timeInputRef = React.useRef<TextInput>(null);

  const router = useRoute();
  const { title, meal } = router.params as RouterParams;

  const navigation = useNavigation();

  const {
    register,
    setValue,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<mealData>({
    defaultValues: {
      name: '',
      description: '',
      date: '',
      time: '',
      diet: true,
    },
    resolver: zodResolver(mealSchema),
  });

  const { diet } = watch();
  const onSubmit = handleSubmit(data => {
    const { id, ...rest } = data;
    mealCreate({
      id: uuid(),
      ...rest,
    });

    navigation.navigate('feedback', { diet: diet });
  });

  const handleSetValue = (infos: any) => {
    const fieldsKey = Object.keys(infos);

    fieldsKey.forEach((key: any) => {
      setValue(key, infos[key]);
    });
  };

  const toggleDatePicker = () => {
    setOpenCalendar(!openCalendar);
    dateInputRef.current?.blur();
  };

  const toggleTimePicker = () => {
    setOpenTime(!openTime);
    timeInputRef.current?.blur();
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
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label="Nome"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              error={errors.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
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
              error={errors.description?.message}
            />
          )}
          name="description"
        />
        <View style={styles.dateContainer}>
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                inputRef={dateInputRef}
                label="Data"
                onFocus={toggleDatePicker}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                width="45%"
                error={errors.date?.message}
              />
            )}
            name="date"
          />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputText
                label="Hora"
                inputRef={timeInputRef}
                onBlur={onBlur}
                onFocus={toggleTimePicker}
                onChangeText={onChange}
                value={value}
                width="45%"
                error={errors.time && errors.time?.message}
              />
            )}
            name="time"
          />
        </View>
        {openCalendar && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              if (selectedDate) {
                const formattedDate = selectedDate.toLocaleDateString('pt-BR');
                setValue('date', formattedDate);
                dateInputRef.current?.blur();
                toggleDatePicker();
              }
            }}
          />
        )}

        {openTime && (
          <DateTimePicker
            value={new Date()}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={(event, selectedTime) => {
              if (selectedTime) {
                const formattedTime = selectedTime.toLocaleTimeString('pt-BR', {
                  hour: '2-digit',
                  minute: '2-digit',
                });
                setValue('time', formattedTime);
                timeInputRef.current?.blur();
                toggleTimePicker();
              }
            }}
          />
        )}

        <Text style={styles.dietTitle}>Está dentro da dieta?</Text>
        <View style={styles.dietSelectContainer}>
          <SelectButton
            text="Sim"
            type="DIET"
            IsActive={diet}
            onPress={() => setValue('diet', true)}
          />
          <SelectButton
            text="Não"
            type="NOT_DIET"
            IsActive={!diet}
            onPress={() => setValue('diet', false)}
          />
        </View>
        <Button
          text={!meal ? 'Cadastrar refeição' : 'Atualizar refeição'}
          type="PRIMARY"
          onPress={onSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
