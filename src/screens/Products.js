import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import { colors } from '../global/styles';
import { Icon, withBadge } from 'react-native-elements'


import { category_products } from '../global/Data';
import Product_header from '../component/Headers/Product_header';
import ActionSheet from "react-native-actions-sheet";

export default function Products({ route, navigation }) {

    const { params: { params: { itemId } } } = route;

    const [count, setCount] = useState(0);
    const [activeProduct, setActiveProduct] = useState(null);

    let actionSheet = useRef();

    const showActionSheet = (product) => {
        actionSheet.current.show();

        console.log('active product ', product);
        setActiveProduct(product);
    }

    const category = category_products.find(c => c.id === itemId);
    const products = category.Products;

    return (
        <View>

            <View>
                <Product_header />
                <ScrollView >
                    <FlatList
                        scrollEnabled={true}
                        vertical
                        data={products}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity >
                                <View style={[styles.smallCard]}>

                                    <Image
                                        style={{ height: 80, width: 80, backgroundColor: colors.cardbackground, marginLeft: 20, }}
                                        source={item.image}
                                    />

                                    <View>
                                        <Text style={styles.smallCardText}>{item.name}</Text>
                                        <Text style={styles.smallCardText2}>{item.quantity}</Text>
                                        <Text style={styles.smallCardText3}>₹ {item.price}0</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    onPress={() => showActionSheet(item)}
                                    style={styles.btn}
                                >
                                    <Text style={styles.btntext}>ADD</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    />

                    <ActionSheet
                        ref={actionSheet}
                        closeOnTouchBackdrop={false}
                    >
                        <View>
                            <View style={styles.actiontext}>
                                <Text style={{ margin: 15, color: colors.cardbackground, fontSize: 16, fontWeight: 'bold' }}>Select Variant</Text>
                                <TouchableOpacity
                                    onPress={() => actionSheet.current?.hide()}
                                >
                                    <Icon
                                        type="material-community"
                                        name="close"
                                        color={colors.cardbackground}
                                        size={24}
                                        style={{ marginVertical: 15, marginLeft: 240 }}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View style={{ margin: 20 }}>
                                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Quantity/Size</Text>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Choose one option from the following</Text>
                            </View>

                            <View>

                                <View>
                                    <Text style={styles.Text2}>{activeProduct?.quantity}</Text>
                                    <Text style={styles.Text}>₹ {activeProduct?.price}0</Text>
                                </View>
                                {count > 0 ? (
                                    <View style={styles.addbtn}>
                                        <TouchableOpacity
                                            onPress={() => setCount(c => Math.max(c - 1, 0))}

                                        >
                                            <View style={{ backgroundColor: colors.green, marginRight: 13 }} >
                                                <Text style={{ marginVertical: 3, marginHorizontal: 11, color: colors.cardbackground, fontSize: 18, }}>-</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <Text style={styles.counter} >{count}</Text>

                                        <TouchableOpacity onPress={() => setCount(c => c + 1)}>
                                            <View style={{ backgroundColor: colors.green, marginLeft: 13 }} >
                                                <Text style={{ marginVertical: 3, marginHorizontal: 11, color: colors.cardbackground, fontSize: 18, fontWeight: 'bold', }}>+</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                ) : (

                                    <TouchableOpacity
                                        onPress={() => setCount(c => c + 1)}
                                        style={styles.addbtn2}
                                    >
                                        <Text style={styles.btntext2}>ADD</Text>
                                    </TouchableOpacity>


                                )}


                                <View style={{ alignItems: 'flex-end', justifyContent: 'center', marginRight: 30 }}>
                                    <Text style={{ fontWeight: 'bold', color: 'black' }}>MRP ₹ {activeProduct?.price * count} </Text>
                                </View>
                            </View>




                            <TouchableOpacity
                                style={{ backgroundColor: colors.green, margin: 22, borderRadius: 30, }}
                            >
                                <Text style={{ margin: 15, color: colors.cardbackground, textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Add to Cart  ₹ {activeProduct?.price * count}</Text>
                            </TouchableOpacity>
                        </View>


                    </ActionSheet>
                </ScrollView>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
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
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: colors.cardbackground,
        alignItems: 'center',
        padding: 5,
        margin: 20,
        marginBottom: 10,
        marginRight: 50,
        height: 120,
    },

    smallCardText: {
        marginLeft: 25,
        fontWeight: "bold",
        fontSize: 17,
        justifyContent: 'center',
        alignSelf: 'center',
        color: 'grey'
    },

    smallCardText2: {
        marginTop: 4,
        marginLeft: 25,
        fontWeight: "bold",
        fontSize: 17,
        justifyContent: 'center',
        color: "grey"
    },

    smallCardText3: {
        marginTop: 4,
        marginLeft: 25,
        fontWeight: "bold",
        fontSize: 17,
        justifyContent: 'center',
        color: colors.green
    },

    btn: {
        backgroundColor: colors.green,
        marginLeft: 320,
        marginVertical: 60,
        borderRadius: 10,
        position: 'absolute'
    },

    btntext: {
        fontSize: 14,
        marginHorizontal: 25,
        marginVertical: 10,
        fontWeight: 'bold',
        color: colors.cardbackground,
    },

    actiontext: {
        flexDirection: 'row',
        borderRadius: 10,
        backgroundColor: colors.green
    },

    btntext2: {
        fontSize: 12,
        marginHorizontal: 35,
        marginVertical: 6,
        fontWeight: 'bold',
        color: colors.cardbackground,

    },

    addbtn: {
        marginLeft: 290,
        marginVertical: 5,
        flexDirection: 'row',
        position: 'absolute',
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 4
    },

    addbtn2: {
        marginLeft: 290,
        marginVertical: 5,
        flexDirection: 'row',
        position: 'absolute',
        backgroundColor: colors.green,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },

    Text: {
        marginLeft: 30,
        fontWeight: 'bold',
        color: colors.green,
    },
    Text2: {
        marginLeft: 30,
        fontWeight: 'bold'
    },

    counter: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
    },


})
