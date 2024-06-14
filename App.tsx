import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Platform, ImageBackground, SafeAreaView, Dimensions, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { ProgressBar } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { width, height } = Dimensions.get('window');
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [increase,setIncrese]=useState(0.00000000)

  useEffect(() => {
    const loadValue = async () => {
      try {
        const value = await AsyncStorage.getItem('increase');
        if (value !== null) {
          setIncrese(parseFloat(value));
        }
      } catch (e) {
        console.error('Failed to load value from AsyncStorage', e);
      }
    };

    loadValue();
  }, []);

  const handleIncrement = async () => {
    try {
      const newIncrease = (increase + 0.1).toFixed(8);
      setIncrese(parseFloat(newIncrease));
      await AsyncStorage.setItem('increase', newIncrease);
    } catch (e) {
      console.error('Failed to save value to AsyncStorage', e);
    }
  };





  return (
    <View style={{ flex: 1 }}>

      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground resizeMode='cover' style={{ flex: 1 }}
        source={require('./src/assets/images/bg_image.jpeg')}>
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 10 }}>
          <View style={styles.mainView} >

            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ flexGrow: 1, paddingBottom: '10%' }} style={styles.container}>
              <View style={styles.header}>
                <Image
                  style={styles.profileImage}
                  source={require('./src/assets/images/userImage.png')} />

                <View style={styles.profileInfo}>
                  <Image
                    source={require('./src/assets/images/walletImg.png')} />
                  <Text style={styles.profileSubText}>  BTC</Text>
                </View>
              </View>
              <View style={styles.balanceSection}>
                <Image
                  style={styles.coinimage}
                  source={require('./src/assets/images/coinImg.png')} />
                <Text style={styles.balanceText}>{increase.toFixed(8)}</Text>
              </View>
              <TouchableOpacity activeOpacity={0.8}
              // onPress={handleIncrement}
              >
                <View style={styles.bitCoinBorder}>
                  <Image
                    resizeMode='contain'
                    style={styles.bitCoinStyle}
                    source={require('./src/assets/images/bitCoinImg.png')} />
                </View>
              </TouchableOpacity>
              <View style={[styles.energyBackgroundArea, { marginTop: 60, paddingRight: 18, }]}>
                <View style={[{
                  position: "absolute",
                  shadowColor: '#D6A13A',
                  shadowOffset: { width: 5, height: 5, },
                  shadowOpacity: 1,
                  shadowRadius: 100,
                  elevation: 10, // For Android
                  borderRadius: 100,
                  height: 10,
                  width: "90%",
                  top: 7,
                  right: 18,
                  overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
                }]}></View>

                <View style={{ width: "10%", justifyContent: "center", alignItems: "center" }} >
                  <Image
                    style={styles.energyIcon}
                    source={require('./src/assets/images/light.png')} />
                </View>

                <View style={styles.shadowWrapper}>
                  <LinearGradient
                    // colors={['green', 'yellow', 'green']}
                    colors={["#D6A13A", "#D6A13A", "#D6A13A", "#D6A13A", "#D6A13A"]}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={[styles.gradientOverlay,]}
                  >
                    <ProgressBar progress={0.990} color="#D6A13A" style={styles.progressBar} />
                  </LinearGradient>
                </View>
              </View>


              <View style={[styles.energyBackgroundArea, { marginTop: '8%', justifyContent: 'space-between' }]}>

                <View style={{ flexDirection: "row", alignItems: "center", width: "60%" }} >
                  <View style={{ width: "10%", justifyContent: "center", alignItems: "center" }} >
                    <Image
                      resizeMode='contain'
                      style={styles.usersIcon}
                      source={require('./src/assets/images/Users.png')}></Image>
                  </View>
                  <View style={{ flexDirection: "row", width: "80%", justifyContent: "space-between", marginLeft: 10 }} >
                    <View>
                      {/* <BrightnessComp /> */}
                      <ProgressBar progress={0.976} color="#D6A13A" style={styles.progressBarSections} />
                    </View>
                    <View>
                      {/* <BrightnessComp /> */}
                      <ProgressBar progress={0.976} color="#D6A13A" style={styles.progressBarSections} />
                    </View>
                    <View>
                      {/* <BrightnessComp /> */}
                      <ProgressBar progress={0.976} color="#D6A13A" style={[styles.progressBarSections]} />
                    </View>
                    <View>
                      {/* <BrightnessComp /> */}
                      <ProgressBar progress={0.0} style={[styles.progressBarSections, { backgroundColor: '#4B3218' }]} />
                    </View>
                    <View>
                      {/* <BrightnessComp /> */}
                      <ProgressBar progress={0.0} style={[styles.progressBarSections, { backgroundColor: '#4B3218' }]} />
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.inviteSection}>
                  <Text style={styles.inviteText}>Invite friends</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.referralList}>
                {Array.from({ length: 18 }).map((_, index) => (
                  <View key={index} style={styles.referralItem}>

                    <Image
                      style={styles.listImage}
                      source={require('./src/assets/images/userImage.png')} />

                    <Text style={styles.referralName}>20%{'\n'}
                      <Text style={styles.referralAmount}>0.0000051 BTC</Text>
                    </Text>
                    <View style={styles.greenDot}></View>

                  </View>

                ))}
              </View>

            </ScrollView>
          </View>
        </SafeAreaView>
      </ImageBackground>

    </View>
  );
};

const BrightnessComp = () => {

  return (
    <>
      <View style={{
        width: wp('7%'),
        height: 10,
        position: "absolute",
        shadowColor: '#D6A13A',
        shadowOffset: { width: 0, height: 0, },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 1, // For Android
        borderRadius: 10,
        bottom: -2,
        right: 0,
        zIndex: 0,
        overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
      }} ></View>
      <View style={{
        width: wp('7%'),
        height: 10,
        position: "absolute",
        shadowColor: '#D6A13A',
        shadowOffset: { width: 0, height: 0, },
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 1, // For Android
        borderRadius: 10,
        top: -4,
        right: 0,
        zIndex: 0,
        overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
      }} ></View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientOverlay: {
    borderRadius: 10,
  },
  greenDot: {
    backgroundColor: '#00FF0A',
    width: 5,
    height: 5,
    borderRadius: 100,
    position: 'absolute',
    right: 6,
    top: 5
  },
  energyIcon: {
    width: 25,
    height: 25,
    right: 5,

  },
  usersIcon: {
    height: 25,
    width: 22,
  },
  header: {
    paddingTop: hp('1%'),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  time: {
    color: '#fff',
    fontSize: 18,
  },
  profileImage: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('8%'),
  },
  listImage: {
    width: 23,
    height: 23,
    borderRadius: 25,
  },
  profileInfo: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#00FF7530',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  profileText: {
    color: '#fff',
    fontSize: 16,
  },
  profileSubText: {
    color: '#fff',
    fontSize: 12,
    marginLeft: 15,
    fontWeight: '500',
    fontFamily:"Josefin Sans"
  },
  balanceSection: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '10%',
    marginBottom: '2%'
  },
  balanceText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans', // Use the name of your font file without the file extension

  },
  coinimage: {
    width: 20,
    height: 20,
    marginHorizontal: 15,
  },
  dailyBalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dailyBalanceText: {
    color: '#888',
    fontSize: 14,
  },
  dailyBalanceAmount: {
    color: '#4CAF50',
    fontSize: 14,
    marginLeft: 5,
  },
  energySection: {
    alignItems: 'center',
    marginBottom: 20,
    bottom: 30,
  },
  energyText: {
    color: '#888',
    fontSize: 14,
    marginBottom: 5,
  },
  progressBar: {
    width: wp('5%'),
    height: 8,
    borderRadius: 5,
  },
  progressBarSections: {
    width: wp('6%'),
    height: 8,
    borderRadius: 5,
    marginHorizontal: 2,
    zIndex: 1
  },
  referralText: {
    color: '#888',
    fontSize: 14,
    marginTop: 10,
  },
  referralProgress: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  dotFilled: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD700',
    marginHorizontal: 5,
  },
  dotEmpty: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#444',
    marginHorizontal: 5,
  },
  inviteSection: {
    backgroundColor: '#0075FF',
    paddingHorizontal: '5%',
    borderRadius: 30,
    right: 4,
    width: "40%",
    height:25,
    alignItems:"center",
    justifyContent:"center"
  },
  inviteText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
    paddingVertical: 3,
    fontFamily: 'Josefin Sans', // Use the name of your font file without the file extension
  },
  referralList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  referralItem: {
    alignItems: 'center',
    marginBottom: 10,
    width: wp('28.5%'),
    height: 42,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: '#D9D9D920',
    borderColor: 'transparent',
    opacity: 3,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 5
  },
  referralImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  referralName: {
    color: '#0075FF',
    marginHorizontal: 5,
    fontSize: 8.5,
    left: 2
  },
  referralAmount: {
    color: '#FFFFFF90',
    opacity: 0.3,
    fontWeight: '400',
    fontSize: 8,
    left: 4,
    fontFamily:"Josefin Sans"
  },
  energyBackgroundArea: {
    flexDirection: 'row',
    opacity: 8, // adjusted to 0.8 from 8 for valid opacity value
    backgroundColor: '#D9D9D920',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'transparent',
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: 'space-between'
  },

  bitCoinStyle: {
    alignSelf: 'center',
    width: 400,
    height: 450,
    marginVertical: 90
  },
  bitCoinBorder: {
    borderRadius: 1000,
    borderWidth: 5,
    borderColor: '#FFFFFF30',
    width: 300,
    height: 300,
    alignSelf: 'center',
    justifyContent: "center",
    marginTop: '10%'

  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  shadowWrapper: {
    // flex: 1,
    // shadowColor: 'yellow',
    // shadowOffset: { width: 5, height: 5, },
    // shadowOpacity: 1,
    // shadowRadius: 10,
    // elevation: 10, // For Android
    // borderRadius: 10,
    // overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    width: "90%",
  },

  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  mainView: {
    height: "100%",
    paddingHorizontal: wp('3%'),
    marginTop: Platform.OS === 'ios' ? hp('5%') : hp('5%')
  }

});
export default App;