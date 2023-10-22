/* eslint-disable react/react-in-jsx-scope */
import {View, StatusBar, Text, TextInput, Image} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../assets/Colors/colors';
import TexlaLogo from '../../assets/images/Frame_7779.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {styles} from './styles';
import {useNavigation, useRoute} from '@react-navigation/native';
import text from '../../assets/Text/text';

export const Screenfour: React.FC = props => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(colors.white);
    }, []),
  );
  const route = useRoute();

  const phonevalue = route.params ? route.params.value : '';
  const phonenumber = phonevalue.replace(/.(?=.{4,}$)/g, '*');
  const [count, setCount] = useState(10);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    let timer: any;
    if (count > 0) {
      timer = setInterval(() => setCount(c => c - 1), 1000);
    }

    if (count === 0) {
      setDisabled(false); // Enable the button when the timer is complete
    }

    return () => clearInterval(timer);
  }, [count]);

  const resendOTP = () => {
    if (!disabled) {
      setDisabled(true);
      setCount(10);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: colors.white,
      }}>
      <View style={styles.parentView}>
        <View>
          <Icon
            onPress={() => navigation.navigate('screen3')}
            name="keyboard-arrow-left"
            size={30}
            style={styles.backkbutton}
          />
        </View>
        <View style={styles.TexlologoView}>
          <Image source={TexlaLogo} />
          <Text style={styles.TexlaCulture_Text}>{text.texlatext}</Text>
        </View>

        <View>
          <Text style={styles.screen4textheader}>{text.screenfourheader}</Text>
          <Text style={styles.screen4subtext}>
            {text.screenfoursub}
            {phonenumber}
          </Text>
        </View>
        <View>
          <OTPInputView
            style={styles.otpinputview}
            pinCount={4}
            codeInputFieldStyle={styles.codeinput}
            placeholderTextColor={colors.PurplePrimary}
            placeholderCharacter={'0'}
          />
        </View>
        <View style={styles.flexrow}>
          <Text style={styles.screen4footertext}>
            {text.screenfourresendcode}
          </Text>
          <Text
            disabled={disabled}
            onPress={resendOTP}
            style={styles.resendcode}>
            {count > 0 ? `Resend OTP  0:${count}sec` : 'Resend OTP'}
          </Text>
        </View>
      </View>
    </View>
  );
};
