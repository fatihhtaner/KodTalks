import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './Sign.style';
import Input from '../../../components/Input/Input.js';
import Button from '../../../components/Button/Button.js';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import {showMessage} from 'react-native-flash-message';

 const initialFormValues = {
   usermail: '',
   password: '',
   passwordAgain: '',
 };


const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(formValues) {
    if(formValues.password !== formValues.passwordAgain) {
      showMessage({
        message: 'Şifreleriniz uyuşmuyor.',
        type: 'danger',
      });
      return;
    }
    
      try {
        setLoading(true);
        await auth().createUserWithEmailAndPassword(formValues.usermail, formValues.passwordAgain);
        navigation.navigate('Login');
        showMessage({
          message: "Kayıt başarılı.",
          type: 'success',
        });
        setLoading(false);
      } catch (error) {
        showMessage({
          message: authErrorMessageParser(error.code),
          type: 'danger',
        });
        setLoading(false);
      }
    }
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title_container}>
        <Text style={styles.title}>kodtalks</Text>
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
              secureTextEntry
            />
            <Input
              value={values.passwordAgain}
              onChangeText={handleChange('passwordAgain')}
              text="şifrenizi tekrar giriniz..."
              secureTextEntry
            />
            <Button text="Kayıt Ol" theme="primary" onPress={handleSubmit} loading={loading}/>
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
