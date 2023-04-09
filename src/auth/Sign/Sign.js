import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './Sign.style';
import Input from '../../components/Input/Input.js';
import Button from '../../components/Button/Button.js';
import {Formik} from 'formik';

 const initialFormValues = {
   usermail: '',
   password: '',
   passwordAgain: '',
 };


const Sign = ({navigation}) => {
  function handleFormSubmit(formValues) {
    console.log(formValues)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>codetalks</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onChangeText={handleChange('usermail')}
              text="e-postanizi giriniz..."
            />
            <Input
              value={values.password}
              onChangeText={handleChange('password')}
              text="şifrenizi giriniz..."
            />
            <Input
              value={values.password}
              onChangeText={handleChange('password')}
              text="şifrenizi tekrar giriniz..."
            />
            <Button text="Kayıt Ol" theme="primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        text="Geri"
        theme="secondary"
        onPress={() => navigation.goBack()}
      />
    </SafeAreaView>
  );
};

export default Sign;
