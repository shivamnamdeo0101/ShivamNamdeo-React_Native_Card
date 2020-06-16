import React, { Component } from 'react';
import { StyleSheet,Image ,View,Dimensions,Modal} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Container, DeckSwiper, Text, Icon } from 'native-base';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')


const cards = [
  {
    title:'Title Stocks in news: Bajaj Auto, Tata Motors, Dabur, Colgate, Marico, LIC Housing, IOC and more',
    text: 'Stocks in news: Bajaj Auto, Tata Motors, Dabur, Colgate, Marico, LIC Housing, IOC and more',
    image: require('./assets/1.png'),
  },
  {
    title:'Title Stocks in news: Bajaj Auto, Tata Motors, Dabur, Colgate, Marico, LIC Housing, IOC and more',
    text: 'Here is a list of top stocks that are likely to be in focus in Thursdays trading session based on latest developments. Investors are also awaiting December quarter earnings that are scheduled to be released today. Companies set to announce their earnings are Bajaj Auto, Force Motors, Tata Motors, Dabur, Colgate, Marico, Bharti Infratel among others.',
    image: require('./assets/img.png'),
  },
 
];
export default class App extends React.Component {

  state = {  
    isVisible: false, //state of modal default false  
  } 
  static navigationOptions={
    header:null
  };
  
  render() {
    return (
      <Container>
        {/*Linear gredient BG */} 

       <LinearGradient
          colors={['#aaf', '#007bff', '#aaf']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: SCREEN_HEIGHT,
            width: SCREEN_WIDTH,

          }}
        />

        {/*Linear gredient BG */} 

        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              
              <View style={styles.card}>

                {/*Model*/} 

                <View style = {styles.container}>  
                  <Modal            
                      animationType = {"fade"}  
                      transparent = {false}  
                      visible = {this.state.isVisible}  
                      onRequestClose = {() =>{ console.log("Modal has been closed.") } }
                  >  
                
                  <View style = {styles.modal}>

                      <Icon type="FontAwesome" name="close" style={styles.cancel}onPress = {() => {  
                        this.setState({ isVisible:!this.state.isVisible})}}
                      />

                       
                      {/*Card Body Image And text*/} 
                      <Image style={styles.img_model}source={item.image} />
                      <Text style = {styles.text}>
                        {item.text}
                      </Text> 
                      {/*Card Body Image And text*/} 
                  </View>  
                </Modal>  
              </View>

              {/*Model*/} 

              <View >
                  <Image style={styles.img} source={item.image} />
              </View>
              <View >
                  {/*Title*/} 
                    <Text style={styles.text} 
                      onPress = {() => {this.setState({ isVisible: true})}}
                    >{item.title}
                    
                    </Text>
                  {/*Title*/} 
                </View>      
              </View>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

  card:{
    width:'80%',
    height:'100%',
    backgroundColor:'#f0f3f5',
    alignSelf:"center",
    marginTop:'20%',
    borderRadius:18,
 
    
  },
  img:{
    width:'100%',
    height:300,
    borderTopLeftRadius:18,
    borderTopRightRadius:18,

    
  },
  text: {  
    color: '#000',  
    paddingLeft:5, 
    paddingRight:5,
  },
  modal: {  
   flex:1,
   backgroundColor : "#f0f3f5",   
  
  },
  img_model:{
    width:'100%',
    height:'35%',

  },
  cancel:{
    backgroundColor:"#f0f3f5",
    color:"#aaf",
    textAlign:"right",
    paddingRight:15,
    position:"relative",
  },


});