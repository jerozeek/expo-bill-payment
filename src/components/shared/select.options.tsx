import React, {FC, Fragment, useEffect, useState} from "react";
import {FlatList, Image, TouchableOpacity, View} from "react-native";
import {ISelectItem} from "../../utils/interfaces";
import SmallText from "../small.text";
import theme from "../../utils/theme";
import {ICON} from "../../utils/icon";
import { MaterialIcons } from '@expo/vector-icons';
import FullModal from "../modals/full.modal";
import {Spacer} from "../spacer";
import {SearchInput} from "../inputs/search.input";

type TProps = {
    value: string,
    setValue: (value: string) => void,
    data: ISelectItem[]
    placeholder: string
    label: string
}

const SelectOptions:FC<TProps> = ({value, setValue, data,placeholder, label}) => {

    const [visible, setVisible] = useState<boolean>(false);

    const [text, setText] = useState<string>('');
    const [list, setList] = useState<ISelectItem[]>(data);

    useEffect(() => {
        setList(data)
    }, [data])

    const onChoose = (item: ISelectItem) => {
        setValue(item.name);
        setVisible(false)
    }

    const onSearch = (value: string) => {
        setText(value)
        if (value.length > 2) {
            const filter = list.filter((item) => item.name.match(value));
            setList(filter);
        }
        else {
            setList(data)
        }
    }

    return (
        <Fragment>
            <SmallText style={{ color: '#8F9BB3'}}>{label}</SmallText>
            <TouchableOpacity
                onPress={() => setVisible(!visible)}
                style={{
                    borderRadius: theme.SCREEN_SIZE.height * 0.01,
                    height: theme.SCREEN_SIZE.height * 0.065,
                    justifyContent: 'center',
                    paddingLeft: theme.SCREEN_SIZE.width * 0.04,
                    marginTop: theme.SCREEN_SIZE.height * 0.01,
                    backgroundColor: '#F3F3F5',
                }}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{ justifyContent: 'center'}}>
                        <SmallText style={{ color: '#8F9BB3' }}>{value ? value : placeholder}</SmallText>
                    </View>

                    <View style={{ justifyContent: 'center', paddingRight: theme.SCREEN_SIZE.width * 0.03}}>
                        <MaterialIcons
                            name="keyboard-arrow-down"
                            size={24}
                            color={'#8F9BB3'}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <FullModal
                visible={visible}
                setVisible={setVisible}
                animationType={'slide'}
            >
                <View style={{
                    flex:1
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity onPress={() => setVisible(false)} style={{justifyContent: 'center'}}>
                            <Image
                                source={ICON.close}
                                style={theme.COMMON_STYLES.smallIcon}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        <View style={{justifyContent: 'center'}}>
                            <SmallText>Choose Options</SmallText>
                        </View>
                        <View />
                    </View>

                    <Spacer />
                    <SearchInput
                        value={text}
                        onChangeText={(value) => onSearch(value)}
                        placeholder={"Search Plan"}
                    />

                    <Spacer />
                    <FlatList
                        data={list}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => onChoose(item)}
                                style={{
                                    backgroundColor: value === item.name ? theme.COLORS.primary : theme.COLORS.grey,
                                    padding: theme.SCREEN_SIZE.width * 0.03,
                                    marginBottom: theme.SCREEN_SIZE.width * 0.03,
                                    borderRadius: theme.SCREEN_SIZE.height * 0.01
                                }}
                            >
                                <SmallText style={{
                                    color: value === item.name ? theme.COLORS.mainWhite : theme.COLORS.dark
                                }}>
                                    {item.name}
                                </SmallText>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </FullModal>
        </Fragment>
    )
}


export default SelectOptions;
