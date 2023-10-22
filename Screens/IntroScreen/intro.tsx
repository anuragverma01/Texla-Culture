import {Image, Text, View, StatusBar, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import img1 from '../../assets/images/collaboration_1.png';
import img2 from '../../assets/images/task-management_1.png';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import colors from '../../assets/Colors/colors';
import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import text from '../../assets/Text/text';
import {useRef} from 'react';

const dot = () => {
  return <View style={styles.dot} />;
};
const activeDot = () => {
  return <View style={styles.activeDot} />;
};
export default () => {
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor(colors.FrameColor);
    }, []),
  );
  const swiperRef: any = useRef(null);
  const handlePaginationPress = (index: number) => {
    swiperRef?.current?.scrollBy(index);
  };
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('screen3');
  };
  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      loop={false}
      showsPagination={true}
      paginationStyle={styles.paginationStyle}
      dot={dot()}
      activeDot={activeDot()}>
      <View testID="Hello" style={styles.slide1}>
        <Image resizeMode="stretch" style={styles.image} source={img1} />
        <Text style={styles.headertext}>{text.introoneHedaline}</Text>
        <Text style={styles.subtitletext}>{text.introonesubtitle} </Text>
        <TouchableOpacity
          onPress={() => {
            handlePaginationPress(1);
          }}
          style={styles.buttonView}>
          <Text style={styles.buttontext}>{text.buttonone}</Text>
        </TouchableOpacity>
      </View>
      <View testID="Beautiful" style={styles.slide2}>
        <Image resizeMode="stretch" style={styles.image} source={img2} />
        <Text style={styles.headertext}>{text.introtowHeadline}</Text>
        <Text style={styles.subtitle2text}>{text.introtwosubtitle} </Text>
        <TouchableOpacity onPress={handlePress} style={styles.buttonView}>
          <Text style={styles.buttontext}>{text.buttontwo}</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  );
};
