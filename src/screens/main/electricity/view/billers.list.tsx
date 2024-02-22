import { FC } from "react";
import {IBillers} from "../../../../utils/interfaces";
import ItemsCard from "../../../../components/shared/items.card";
import {ICON} from "../../../../utils/icon";
import {FlatList} from "react-native";

type Props = {
    data: IBillers[],
    onChooseBiller: (name: string) => void
}

const BillersList:FC<Props> = ({data, onChooseBiller}) => {

    return (
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
                <ItemsCard
                    iconType={'image'}
                    icon={item.icon}
                    label={item.name}
                    rightIcon={ICON.arrow_right}
                    onPress={() => onChooseBiller(item.name)}
                />
            )}
            keyExtractor={item => item.id.toString()}
        />
    )
}

export default BillersList;
