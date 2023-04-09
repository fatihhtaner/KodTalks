    import React from 'react';
    import { View, Text, SafeAreaView} from 'react-native'
    import styles from './Login.style.js';
    import Input from '../../components/Input/Input.js'
    import Button from '../../components/Button/Button.js'
    import {Formik} from 'formik';

    const initialFormValues = {
      usermail: "",
      password: "",
    }

    const Login = ({navigation}) => {
      function handleFormSubmit(formValues) {
        console.log(formValues)
      }
        return (
          <SafeAreaView style={styles.container}>
            <View style={styles.title_container}>
              <Text style={styles.title}>codetalks</Text>
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
                  />
                  <Button
                    text="Giriş Yap"
                    theme="primary"
                    onPress={handleSubmit}
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