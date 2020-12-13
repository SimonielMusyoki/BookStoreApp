import React from 'react';
import { 
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    Platform,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

import { icons,COLORS, FONTS, SIZES, images} from '../constants'
import { profileData, myBooksData, categoriesData } from "../data/booksData";

const Home = ({navigation}) => {

    const [profile, setProfile] = React.useState(profileData)
    const [myBooks, setMyBooks] = React.useState(myBooksData)
    const [categories, setCategories] = React.useState(categoriesData)
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0])

    function renderGreetings(x){
        return (
            <View style={{
                padding: SIZES.padding,
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <View>
                    <Text style={{ color: COLORS.white, ...FONTS.h3}}>Good Morning</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body2}}>{ x.name }</Text>
                </View>
                <View style={{
                    backgroundColor: COLORS.lightRed,
                    flexDirection: 'row',
                    borderRadius: SIZES.radius *2,
                    height: "50%",
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    paddingVertical: SIZES.padding,
                    bottom: 0,
                    right: 15,
                    top: 30
                }}>
                    <View style={{
                        backgroundColor: COLORS.darkRed,
                        width: 35,
                        height: 35,
                        marginHorizontal: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 35/2
                    }}>
                        <Image 
                            source={icons.plus}
                            resizeMode="contain"
                            style={{
                                width: 20,
                                height: 20,
                            }}
                        />
                    </View>
                    
                    <Text style={{ color: COLORS.white, ...FONTS.body3, paddingRight: 10}}>{x.point} points</Text>
                </View>
            </View>
        )
    }

    function renderActionBar() {
        return (
            <View style={{
                marginHorizontal: SIZES.padding,
                padding: 10,
                backgroundColor: COLORS.darkBlue,
                flexDirection: 'row',
                borderRadius: SIZES.radius,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image  
                        source={icons.claim}
                        resizeMode= 'contain'
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10,
                        }}
                    />
                    <Text style={{ color: COLORS.white, ...FONTS.body3}}>Claim</Text>
                </TouchableOpacity>
                <Text style={{color: COLORS.white, ...FONTS.body1}}>|</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image  
                        source={icons.point}
                        resizeMode= 'contain'
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10,
                        }}
                    />
                    <Text style={{ color: COLORS.white, ...FONTS.body3}}>Get Points</Text>
                </TouchableOpacity>
                <Text style={{color: COLORS.white, ...FONTS.body1}}>|</Text>
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image 
                        source={icons.card}
                        resizeMode= 'contain'
                        style={{
                            width: 30,
                            height: 30,
                            marginHorizontal: 10,
                        }}
                    />
                    <Text style={{ color: COLORS.white, ...FONTS.body3}}>My Card</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderMyBooks() {
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity 
                    style={{
                        width: 150,
                        marginLeft: SIZES.padding / 2
                        
                    }}
                    onPress = {() => navigation.navigate('BookDetail', {
                        item: item,
                    })}
                >
                    <Image 
                        source={item.bookCover}
                        resizeMode="cover"
                        style={{
                            width: 150,
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            margin: 5, 
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <Image 
                                source={icons.clock}
                                resizeMode="contain"
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.lightGray,
                                    marginRight: 5
                                }}
                            />
                            <Text style={{ color: COLORS.lightGray}}>{item.lastRead}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            margin: 5,
                            justifyContent: "center",
                            alignItems: 'center'
                        }}>
                            <Image 
                                source={icons.page_filled}
                                resizeMode="contain"
                                style={{
                                    height: 20,
                                    width: 20,
                                    tintColor: COLORS.lightGray,
                                    marginRight: 5
                                }}
                            />
                            <Text style={{ color: COLORS.lightGray}}>{item.completion}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding}}>
                <Text style={{ color: COLORS.white, ...FONTS.body2, marginBottom: 5}}>My Books</Text>
                <FlatList 
                    data={myBooks}
                    keyExtractor={item=>`${item.id}`}
                    renderItem = {renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    function renderBookCategories() {

        const renderItem = ({item}) => {
            return (
                <TouchableOpacity style={{
                        marginHorizontal: SIZES.padding * 0.8,
                    }}
                    onPress={()=> setSelectedCategory(item)}
                >
                    <Text style={{...FONTS.h3, color: selectedCategory && selectedCategory == item ? COLORS.white : COLORS.lightGray}}>{item.categoryName}</Text>
                </TouchableOpacity>
                
            )
        }

        return (
            <View style={{
                marginLeft: SIZES.padding,
                justifyContent: 'space-between'
            }}>
                <FlatList
                data={categories}
                keyExtractor={item=> `${item.id}`}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
             />
            </View>
            
        )
    }

    function renderSelectedCategoriesItems() {
        const renderItem = ({item}) => {
            return(
                <TouchableOpacity style={{
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.padding * 0.3,
                    flexDirection: 'row'
                }}>
                    <View>
                        <Image
                            source={item.bookCover}
                            resizeMode= "cover"
                            style={{
                                width:100,
                                height: 180,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </View>
                    <View style={{ flex: 1}}>
                        <View style={{ paddingHorizontal: SIZES.padding}}>
                            <Text style={{ color: COLORS.white, ...FONTS.h2}}>{item.bookName}</Text>
                            <Text style={{ color: COLORS.lightGray, ...FONTS.body2}}>{item.author}</Text>
                        </View>
                        <View style={{ paddingHorizontal: SIZES.padding,paddingVertical: SIZES.padding*0.5, flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={{ flexDirection: 'row', alignItems: "center"}}>
                                <Image 
                                    source={icons.page}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height:20,
                                        tintColor: COLORS.lightBlue
                                    }}
                                />
                                <Text style={{ color: COLORS.lightGray, ...FONTS.body3}}>{item.pageNo}p</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: "center"}}>
                                <Image 
                                    source={icons.read}
                                    resizeMode="contain"
                                    style={{
                                        width: 20,
                                        height:20,
                                        tintColor: COLORS.lightBlue
                                    }}
                                />
                                <Text style={{ color: COLORS.lightGray, ...FONTS.body3}}>{item.readed}</Text>
                            </View>
                            
                        </View>
                        <View style={{ paddingHorizontal: SIZES.padding, flexDirection: 'row', }}>
                            {
                                item.genre.map(gen=>{
                                    return (
                                        <View style={{ backgroundColor: COLORS.lightGray4, borderRadius: SIZES.radius, padding: SIZES.padding * 0.5,marginRight: 3}}>
                                            <Text style={{ color: COLORS.white}}>{gen}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <View>
                        <Image 
                        source={icons.bookmark}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: COLORS.lightGray4,
                            paddingTop: SIZES.padding*2
                        }}
                        />
                    </View>
                    <View>

                    </View>
                </TouchableOpacity>

            )
        }
        return (
            <FlatList 
                data={selectedCategory.books}
                keyExtractor={item=>`${item.id}`}
                renderItem={renderItem}
                numColumns={1}
                showsVerticalScrollIndicator={false}
            />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black, ...styles.container}}>
            {/* Header Greetings */}
            <ScrollView>
            { renderGreetings(profile) }
            { renderActionBar() }
            { renderMyBooks() }
            { renderBookCategories() }
            { renderSelectedCategoriesItems() }
            </ScrollView>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS =="android" ? 30 : 0,
    }
    
})

export default Home;