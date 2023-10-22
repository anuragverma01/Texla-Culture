/* eslint-disable react/react-in-jsx-scope */
import {View, StatusBar, Text, TextInput, Image} from 'react-native';
import {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../assets/Colors/colors';
import TexlaLogo from '../../assets/images/Frame_7779.png';
import Flag from '../../assets/images/emojione_flag-for-india.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import text from '../../assets/Text/text';
export const Screenthree: React.FC = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [value, setvalue] = useState('');
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(colors.white);
    }, []),
  );

  return (
    <View
      style={{
        flex: 1, // Paddings to handle safe area
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        backgroundColor: colors.white,
      }}>
      <View style={styles.parentView}>
        <View>
          <Icon
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
          <Text style={styles.Header}>{text.screenthreeheader}</Text>
          <Text style={styles.subTitle}>{text.screenthreesub}</Text>
        </View>
        <View style={styles.boxView}>
          <View style={styles.countrycodeview}>
            <Image source={Flag} />
            <Text style={styles.countrycodeText}>{text.countrycode}</Text>
          </View>
          <TextInput
            value={value}
            onChangeText={setvalue}
            inputMode="numeric"
            keyboardType="phone-pad"
            placeholder="Enter your Mobile here"
            maxLength={10}
            style={styles.textinput}
          />
        </View>
        <View style={styles.flexrow}>
          <Text style={styles.subtitle2Text}>{text.screenthreepolicy}</Text>
          <Text style={styles.subtitletermstext}>
            {text.screenthreeprivacy}
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('screen4', {value});
            }}
            style={styles.touchablebutton}>
            <Text style={styles.touchablebuttontext}>{text.otpbutton}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.flexrow}>
          <Text style={styles.footertext}>{text.troubletext}</Text>
          <Text style={styles.gethelptext}>{text.helptext}</Text>
        </View>
      </View>
    </View>
  );
};
