import React, {FC} from "react";
import {View, StyleSheet} from "react-native";
import {Controller, useForm} from "react-hook-form";
import { TLoginView } from "../../../../utils/interfaces";
import ScreenContainer from "../../../../components/containers/screen.container";
import { Spacer } from "../../../../components/spacer";
import theme from "../../../../utils/theme";
import { ErrorBadge } from "../../../../components/error.badge";
import {DefaultTextInput} from "../../../../components/inputs/input.field";
import {PrimaryButton} from "../../../../components/button";
import {TLoginSchemaType} from "../../../../utils/rules";
import AppText from "../../../../components/app.text";

const LoginView:FC<TLoginView> = ({
  onLogin,
  loading
}) => {

    const { control, handleSubmit, formState: { errors } } = useForm<TLoginSchemaType>({
        mode: 'onChange', // when the user is typing
        defaultValues: {
            password: '',
            email: ''
        }
    });

    return (
        <ScreenContainer isScrollable>
            <View style={styles.container}>
                <View style={styles.logo}>
                    <AppText style={{color: '#FFFFFF'}}>LOGO</AppText>
                </View>
                <Spacer height={theme.SCREEN_SIZE.height * 0.05} />

                <Controller
                    control={control}
                    name='email'
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DefaultTextInput
                            onBlur={onBlur}
                            label={'Email Address'}
                            value={value}
                            onChangeText={onChange}
                            keyboardType={'email-address'}
                            placeholder={"Enter Email Address"}
                        />
                    )}
                />
                { errors.email?.type === 'required' && <ErrorBadge message={'Email address is required'}/> }


                <Spacer />
                <Controller
                    control={control}
                    name='password'
                    rules={{ required: true }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <DefaultTextInput
                            onBlur={onBlur}
                            label={'Password'}
                            value={value}
                            onChangeText={onChange}
                            keyboardType={'default'}
                            isPassword={true}
                            withEye={true}
                            placeholder={"Enter Password"}
                        />
                    )}
                />
                { errors.password?.type === 'required' && <ErrorBadge message={'Password is required'}/> }


                <Spacer height={theme.SCREEN_SIZE.height * 0.05} />
                <PrimaryButton
                    title={'Login'}
                    onPress={handleSubmit(onLogin)}
                    loading={loading}
                />
            </View>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        width: theme.SCREEN_SIZE.width * 0.3,
        height: theme.SCREEN_SIZE.width * 0.3,
        backgroundColor: theme.COLORS.primary,
        borderRadius: theme.SCREEN_SIZE.width * 0.3,
        marginTop: theme.SCREEN_SIZE.height * 0.08
    },
    container: {
        flex: 1,
        marginBottom: theme.SCREEN_SIZE.height * 0.1,
    },
});


export default LoginView;
