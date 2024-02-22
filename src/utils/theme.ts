import { Dimensions, Platform } from "react-native";

const {width, height}   = Dimensions.get("window");
const PADDING_TOP       = Platform.OS === "ios" ? height * 0.045 : height * 0.07;
const TAB_PADDING_TOP   = Platform.OS === "ios" ? height * 0.04 : 0.02;
const ICON_DIMENSIONS   = width * 0.05;

const BLACK             = '#000';
const VERIFIED          = '#33B14F';
const LIGHT             = '#FFF';
const DARKGREY          = '#F2F2F2';
const GREY              = '#F3F3F5';
const WHITE             = '#FFFFFF';
const ORANGE            = '#ebb71a';
const PURPLE            = '#7853FF';
const RED               = '#E81913';
const SUCCESS           = '#218E2C';
const DANGER            = '#A72020';
const DARK              = '#1F1F1F';
const BLUE_OPACITY      = 'rgba(49,194, 241, 0.54)';
const PRIMARY           = '#009DDF';
const BORDER_TOP        = '#0254D3';
const BORDER_BOTTOM     = '#1CA593';
const LIGHT_WHITE       = '#F3F3F5';



const theme = {
    SCREEN_SIZE: {
        width,
        height,
    },
    TEST: {
        COLORS: {
            yellow: 'rgba(255,242, 0, 0.50)',
            red: '#E81913',
            green: '#4BB543',
        },
    },
    COLORS: {
        primary: PRIMARY,
        background: LIGHT,
        secondary: PURPLE,
        accent: PURPLE,
        backgroundColor: WHITE,
        mainWhite: LIGHT,
        white: WHITE,
        grey: GREY,
        blueOpacity: BLUE_OPACITY,
        darkGrey: DARKGREY,
        dark: DARK,
        verified: VERIFIED,
        red: RED,
        success: SUCCESS,
        danger: DANGER,
        lightWhite: LIGHT_WHITE,
        buttons: {
            primary: ORANGE,
            secondary: WHITE,
        },
        shadowProp: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4
        },
        border: {
            top: BORDER_TOP,
            bottom: BORDER_BOTTOM,
        }
    },
    FONTS:{
        light: 'Quicksand_300Light',
        regular: 'Quicksand_400Regular',
        medium: 'Quicksand_500Medium',
        semiBold: 'Quicksand_600SemiBold',
        bold: 'Quicksand_700Bold',
    },
    COMMON_STYLES: {
        screenContainer: {
            flex: 1,
            paddingLeft: width * 0.05,
            paddingRight: width * 0.05,
            backgroundColor: LIGHT
        },
        screenFull: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        tabContainer: {
            flex: 1,
            backgroundColor: BLACK,
        },
        tabScrollViewContainer: {
            backgroundColor: LIGHT,
            paddingLeft: width * 0.03,
            paddingRight: width * 0.03,
            paddingTop: TAB_PADDING_TOP,
        },
        scrollViewContainer: {
            backgroundColor: LIGHT,
            paddingLeft: width * 0.05,
            paddingRight: width * 0.05,
            paddingTop: PADDING_TOP,
        },
        appScrollViewContainer: {
            paddingLeft: width * 0.05,
            paddingRight: width * 0.05,
        },
        text: {
            color: BLACK,
            fontSize: width * 0.04,
            fontFamily: 'Quicksand_300Regular',
        },
        bigText: {
            color: BLACK,
            fontSize: width * 0.07,
            fontFamily: 'Quicksand_500Medium',
        },
        icon: {
            width: ICON_DIMENSIONS,
            height: ICON_DIMENSIONS,
        },
        smallIcon: {
            width: ICON_DIMENSIONS * 0.8,
            height: ICON_DIMENSIONS * 0.8,
        },
        bigIcon: {
            width: ICON_DIMENSIONS * 1.5,
            height: ICON_DIMENSIONS * 1.5,
        },
    },
};


export default theme;
