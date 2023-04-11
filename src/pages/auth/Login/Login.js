    import React, {useState} from 'react';
    import { View, Text, SafeAreaView} from 'react-native'
    import styles from './Login.style.js';
    import Input from '../../../components/Input/Input.js'
    import Button from '../../../components/Button/Button.js'
    import {Formik} from 'formik';
    import {showMessage} from 'react-native-flash-message';
    import auth from '@react-native-firebase/auth';
    import authErrorMessageParser from '../../../utils/authErrorMessageParser';

    const initialFormValues = {
      usermail: "",
      password: "",
    }

    const Login = ({navigation}) => {
      const [loading, setLoading] = useState(false);
      
      async function handleFormSubmit(formValues) {
        try {
          setLoading(true);
          await auth().signInWithEmailAndPassword(formValues.usermail, formValues.password);
          navigation.navigate('HomeStack');
          showMessage({
            message: "Giriş başarılı.",
            type: 'success',
          })
          setLoading(false);
        } catch (error) {
          showMessage({
            message: authErrorMessageParser(error.code),
            type: 'danger',
          });
        }
      }
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.title_container}>
              <Text style={styles.title}>kodtalks</Text>
            </View>
            <Formik
              initialValues={initialFormValues}
              onSubmit={(handleFormSubmit)}>
              {({values, handleChange, handleSubmit}) => (
                <>
                  <Input
                    value={values.usermail}
                    onChangeText={handleChange("usermail")}
                    text="e-postanizi giriniz..."
                  />
                  <Input
                    value={values.password}
                    onChangeText={handleChange("password")}
                    text="şifrenizi giriniz..."
                    secureTextEntry
                  />
                  <Button
                    text="Giriş Yap"
                    theme="primary"
                    onPress={handleSubmit}
                    loading={loading}
                  />
                </>
              )}
            </Formik>
            <Button
              text="Kayıt Ol"
              theme="secondary"
              onPress={() => navigation.navigate('Sign')}
            />
          </SafeAreaView>
        );
    }

    export default Login;