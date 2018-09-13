import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';



export default class Mot extends Component{
  render() {
    return (
      <ScrollView style={{
        backgroundColor:'#e5e3e3',
        height:200,
        paddingBottom:10,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        padding:10,
        }}>
        <View style={{
          height:180,
          borderBottomWidth:2,
          borderRadius:2,
          borderColor:'#e5e3e3',
          backgroundColor:'white',
          flex:1
          }}>
            <View style={{
            flex:1,
            flexDirection:'row'
            }}> 
              <View style={{
                flex:5,
                paddingLeft:5
              }}> 
                <Text style={{fontStyle:'bold'}}>Dựa trên hoạt động gần đây của bạn</Text>
              </View>
              <View style={{
                flex:1,
              }}> 
               <Text style={{color:'green'}}> THÊM </Text>
              </View>
            </View>
            <View style={{
              horizontal: true,
              flex:5,
              flexDirection:'row',
              borderBottomWidth:5,
              borderColor:'#e5e3e3',
              }}> 
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush...</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/lytieulong.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Lý Tiểu Long</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity><TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/piratesking.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Pirates King</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/ninjaloanthi.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Loạn Thị</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>204 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/narutoninjapro.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Naruto Ninja Pro</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>144 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush Zombie Predator</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
            </View>
          
        </View>

        <View style={{
          height:180,
          borderBottomWidth:2,
          borderRadius:2,
          borderColor:'#e5e3e3',
          backgroundColor:'white',
          flex:1
          }}>
            <View style={{
            flex:1,
            flexDirection:'row',
            paddingLeft:5
            }}> 
              <View style={{
                flex:5
              }}> 
                <Text style={{fontStyle:'bold'}}>Mới + c.nhật</Text>
              </View>
              <View style={{
                flex:1,
              }}> 
               <Text style={{color:'green'}}> THÊM </Text>
              </View>
            </View>
            <View style={{
              horizontal: true,
              flex:5,
              flexDirection:'row',
              borderBottomWidth:5,
              borderColor:'#e5e3e3',
              }}> 
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush...</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/lytieulong.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Lý Tiểu Long</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity><TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/piratesking.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Pirates King</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/ninjaloanthi.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Loạn Thị</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>204 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/narutoninjapro.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Naruto Ninja Pro</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>144 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush Zombie Predator</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
            </View>
          
        </View>
        <View style={{
          height:180,
          borderBottomWidth:2,
          borderRadius:2,
          borderColor:'#e5e3e3',
          backgroundColor:'white',
          flex:1
          }}>
            <View style={{
            flex:1,
            flexDirection:'row'
            }}> 
              <View style={{
                flex:5,
                paddingLeft:5
              }}> 
                <Text style={{fontStyle:'bold'}}>Các trò chơi trong bảng xếp hạng</Text>
              </View>
              <View style={{
                flex:1,
              }}> 
               <Text style={{color:'green'}}> THÊM </Text>
              </View>
            </View>
            <View style={{
              horizontal: true,
              flex:5,
              flexDirection:'row',
              borderBottomWidth:5,
              borderColor:'#e5e3e3',
              }}> 
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush...</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/lytieulong.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Lý Tiểu Long</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity><TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/piratesking.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Pirates King</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/ninjaloanthi.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Loạn Thị</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>204 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/narutoninjapro.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Naruto Ninja Pro</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>144 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush Zombie Predator</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
            </View>
          
        </View>
        <View style={{
          height:180,
          borderBottomWidth:2,
          borderRadius:2,
          borderColor:'#e5e3e3',
          backgroundColor:'white',
          flex:1
          }}>
            <View style={{
            flex:1,
            flexDirection:'row'
            }}> 
              <View style={{
                flex:5,
                paddingLeft:5
              }}> 
                <Text style={{fontStyle:'bold'}}>Các trò chơi bạn có thể thích</Text>
              </View>
              <View style={{
                flex:1,
              }}> 
               <Text style={{color:'green'}}> THÊM </Text>
              </View>
            </View>
            <View style={{
              horizontal: true,
              flex:5,
              flexDirection:'row',
              borderBottomWidth:5,
              borderColor:'#e5e3e3',
              }}> 
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush...</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/lytieulong.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Lý Tiểu Long</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity><TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/piratesking.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Pirates King</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>240 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/ninjaloanthi.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Loạn Thị</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>204 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/narutoninjapro.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Naruto Ninja Pro</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>144 MB</Text></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={{marginRight:5,marginLeft:5}}>
                  <View>
                    <Image style={{ width: 70, height: 70, marginLeft: 5 , marginTop:5, borderRadius:5}}
                                source={require('./imgs/NinjaRushZombiePredator.png')}
                          />
                  </View >
                  <View style={{flexDirection:'row'}}>
                    <View style={{flex:5}}>
                      <Text style={{color:'black'}} >Ninja Rush Zombie Predator</Text>
                    </View>
                    <View style={{flex:1}}>
                      <Text>I</Text>
                    </View> 
                    </View>
                    <View><Text style={{fontSize:15}}>124 MB</Text></View>
                </View>
              </TouchableOpacity>
            </View>
          
        </View>
      </ScrollView>
    );
  }
}


