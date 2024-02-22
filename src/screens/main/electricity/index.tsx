import ElectricityView from "./view";
import {BILLERS} from "../../../config/constant";
import {useState} from "react";
import {IBillers} from "../../../utils/interfaces";
import MeterType from "./view/meter.type";

const ElectricityScreen = () => {

    const [search, setSearch] = useState<string>("");
    const [biller, setBiller] = useState<string>("");

    const [data, setData] = useState<IBillers[]>(BILLERS);
    const [openModal, setOpenModal] = useState<boolean>(false)

    const _onChooseBiller = (biller: string) => {
        setBiller(biller);
        setOpenModal(true)
    }


    const _onFiler = (value: string) => {
        setSearch(value);
        if (value.length > 2) {
            const filtered = data.filter((biller) => biller.name.match(value));
            setData(filtered)
        }
        else setData(BILLERS);
    }

    return (
       <>
           <ElectricityView
               billers={data}
               onChooseBiller={_onChooseBiller}
               search={search}
               setSearch={_onFiler}
           />

           <MeterType
               biller={biller}
               open={openModal}
               setOpen={setOpenModal}
           />
       </>
    )
}

export default ElectricityScreen;
