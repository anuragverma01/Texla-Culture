import {View, Text, StyleSheet} from 'react-native';
import colors from '../../assets/Colors/colors';
export const styles = StyleSheet.create({
  parentView: {
    marginHorizontal: 20,
  },
  backkbutton: {
    marginVertical: 10,
  },
  TexlologoView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  TexlaCulture_Text: {
    fontSize: 22,
    fontFamily: 'Lexend-Regular',
    fontWeight: '600',
    color: colors.PurplePrimary,
    marginHorizontal: 10,
  },
  Header: {
    fontFamily: 'NunitoSans_7pt-Regular',
    fontSize: 28,
    fontWeight: '700',
    color: colors.Grey800,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'NunitoSans_7pt-Regular',
    color: colors.Grey700,
  },
  boxView: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  countrycodeview: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 14,
    paddingHorizontal: 10,
    borderColor: colors.TextLight,
  },
  countrycodeText: {
    fontSize: 14,
    color: colors.Grey800,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '700',
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 18,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    flex: 1,
    borderColor: colors.TextLight,
  },

  flexrow: {
    flexDirection: 'row',
  },
  subtitle2Text: {
    fontSize: 12,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '600',
    color: colors.GreyGreen,
    marginHorizontal: 5,
  },
  subtitletermstext: {
    fontSize: 12,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '700',
    color: colors.PurplePrimary,
  },
  touchablebutton: {
    backgroundColor: colors.PurplePrimary,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 12,
    marginVertical: 20,
  },
  touchablebuttontext: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '700',
    fontFamily: 'NunitoSans_7pt-Regular',
  },
  footertext: {
    fontSize: 12,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '600',
  },
  gethelptext: {
    fontSize: 12,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '700',
    marginHorizontal: 5,
    color: colors.PurplePrimary,
  },

  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////
  // ----------------------------Screen Four Styles---------------------------

  screen4textheader: {
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'NunitoSans_7pt-Regular',
    color: colors.Grey800,
    marginTop: 25,
    marginVertical: 10,
  },
  screen4subtext: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily: 'NunitoSans_7pt-Regular',
    color: colors.Grey700,
  },
  otpinputview: {
    width: '80%',
    height: 100,
  },
  codeinput: {
    borderWidth: 1,
    borderRadius: 14,
    marginHorizontal: 5,
    width: 55,
    height: 50,
    borderColor: colors.TextLight,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'NunitoSans_7pt-Regular',
    color: colors.Grey800,
  },

  screen4footertext: {
    fontSize: 12,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '700',
    color: colors.TextLightSecond,
  },
  resendcode: {
    fontSize: 12,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '700',
    color: colors.PurplePrimary,
    marginHorizontal: 5,
  },
});
