import { FC } from "react";
import ScreenContainer from "../../../../components/containers/screen.container";
import BillersList from "./billers.list";
import {IBillers} from "../../../../utils/interfaces";
import {Spacer} from "../../../../components/spacer";
import {SearchInput} from "../../../../components/inputs/search.input";

type Props = {
    billers: IBillers[]
    onChooseBiller: (name: string) => void
    search: string,
    setSearch: (search: string) => void
}

const ElectricityView:FC<Props> = ({
   billers,
   onChooseBiller,
   search,
   setSearch
}) => {

    return (
        <ScreenContainer
            backNavigation
            headerText={'Select Biller'}
            subText={'Select or search for the service provider'}
        >
            <Spacer />
            <SearchInput
                value={search}
                onChangeText={(search) => setSearch(search)}
                placeholder={'Search Biller'}
            />
            <Spacer />
            <BillersList
                data={billers}
                onChooseBiller={onChooseBiller}
            />
        </ScreenContainer>
    )
}


export default ElectricityView;
