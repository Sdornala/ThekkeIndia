import React from 'react';

import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Category_header from '../component/Headers/Category_header';

import Swiper from 'react-native-swiper'
import { colors } from '../global/styles';
import { category_products } from '../global/Data';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Category({navigation}) {
    return (
        <View style={styles.container}>
            <Category_header />
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

                <SafeAreaView>
                    <FlatList
                        scrollEnabled={true}
                        vertical
                        data={category_products}
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
                                <View style={[styles.smallCard, styles.shadow]}>
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
                </SafeAreaView>



            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    sliderContainer: {
        height: 200,
        width: '90%',
        marginTop: 10,
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

    smallCard: {
        borderRadius: 15,
        backgroundColor: colors.cardbackground,
        justifyContent: "center",
        alignItems: 'center',
        padding: 5,
        width: 160,
        margin: 20,
        height: 170,
        marginBottom: 0
    },

    smallCardText: {
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 18,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'black'
    },

    shadow: {
        elevation: 60,
        shadowColor: 'black',
    },
})