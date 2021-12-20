import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import Header from '../component/Headers/Header';

import Swiper from 'react-native-swiper'
import { colors } from '../global/styles';
import { Categories, New_Products } from '../global/Data';



export default function Home({ navigation }) {

    return (


        <View style={styles.container}>
            <Header />

            <ScrollView
            stickyHeaderIndices={[0]}
            marginTop={20}
            >
                <View style={styles.sliderContainer}>
                    <Swiper autoplay={true} height={200} dotColor='black' activeDotColor="grey">
                        <View style={styles.banner}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/banner1.png')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.banner}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/banner2.png')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.banner}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/banner3.png')}
                                resizeMode="cover"
                            />
                        </View>
                        <View style={styles.banner}>
                            <Image
                                style={styles.image}
                                source={require('../assets/images/banner4.png')}
                                resizeMode="cover"
                            />
                        </View>
                    </Swiper>
                </View>


                <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 30 }}>
                    <Text style={styles.headertext}> Our Exclusive Categories</Text>
                    <TouchableOpacity>
                        <Text style={styles.headertext2}>See all{'>'} </Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <FlatList
                        scrollEnabled={true}
                        vertical
                        data={Categories}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Products', {
                                        screen: 'Products',
                                        params: { item: item, itemId: item.id },
                                    });
                                }}>
                                <View style={styles.smallCard}>
                                    <Image
                                        style={{ height: 80, width: 80, borderRadius: 60, backgroundColor: colors.green }}
                                        source={item.image}
                                    />

                                    <View>
                                        <Text style={styles.smallCardText}>{item.name}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                    />
                </View>

                <View style={{ marginTop: 30 }}>
                    <Text style={styles.headertext}> Newly Added Products</Text>
                </View>

                <View>
                    <FlatList
                        scrollEnabled={true}
                        horizontal
                        data={New_Products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <View style={styles.smallCard2}>
                                <View style={{ backgroundColor: colors.green, alignSelf: 'flex-start', marginBottom: 7, borderBottomEndRadius: 8 }}>
                                    <Text style={{ fontSize: 17, margin: 5, fontWeight: 'bold' }}>New</Text>
                                </View>
                                <Image
                                    style={{ height: 80, width: 80, }}
                                    source={item.image}
                                />

                                <View style={{ marginTop: 10, alignSelf: 'flex-start' }}>
                                    <Text>Festival Offer</Text>
                                </View>

                                <View>
                                    <Text numberOfLines={1} style={styles.smallCardText2}>{item.name}</Text>
                                </View>

                                <View style={{ alignSelf: 'flex-start', marginLeft: 3 }}>
                                    <Text style={{ fontWeight: 'bold' }}>1Kit | ₹ {item.Price}.00</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView >
        </View >




    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    sliderContainer: {
        flex:1,
        height: 200,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },
    banner: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8
    },

    image: {
        borderRadius: 8,
        alignSelf: 'center',
        width: "100%",
        height: "100%"
    },

    headertext: {
        color: colors.text,
        marginLeft: 15,
        fontSize: 17,
        fontWeight: "bold"
    },

    headertext2: {
        marginRight: 30,
        fontSize: 16
    },

    smallCard: {
        borderRadius: 15,
        backgroundColor: colors.cardbackground,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        width: 180,
        margin: 10,
        height: 190,
    },

    smallCardText: {
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black'
    },


    smallCard2: {
        borderRadius: 15,
        backgroundColor: colors.cardbackground,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        width: 160,
        margin: 20,
        height: 210
    },

    smallCardText2: {

        fontWeight: "bold",
        fontSize: 16,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black',

    },


})