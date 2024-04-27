import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Formik, useField } from 'formik'
import StyledTextInput from '../components/StyledTextInput.jsx'
import StyledText from '../components/StyleText.jsx'
import { loginValidationSchema } from '../validationSchemas/login.js'


const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  error:{
    color: 'red',
    fontSize:12,
    marginBottom:20,
    marginTop:-10
  },
  form:{
    margin:12
  }
})

const FormInputValue = ({name, ...props}) => {
  const [field, meta, helpers] = useField(name)
  return(
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

// const validate = values => {
//   const errors = {}

//   if(!values.email){
//     errors.email = 'E-mail is required!'
//   }

//   console.log(errors)

//   return errors
// }

export default function LoginPage() {
  return (
    // <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
    <Formik validationSchema={loginValidationSchema} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({handleSubmit}) => {
        return (
          <View style={styles.form}>
            <FormInputValue
              placeholder='E-mail'
              name='email'
            />
            <FormInputValue
              placeholder='Password'
              name='password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}
