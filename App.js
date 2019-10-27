import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Transform} from 'react-native';
export default class App extends Component {

 animation = new Animated.Value(0);
 animationSpring = new Animated.Value(0);
 move = new Animated.Value(0);
 move2 = new Animated.Value(600);

 componentDidMount() {
   Animated.timing(this.animation, {
     duration: 8000,
     toValue: 1,
   }).start()

   Animated.spring(this.animationSpring, {
     toValue: 1,
     speed: 1,
     bounciness: 15,
     velocity: 5
     
   }).start()

   Animated.timing(this.move, {
     toValue: 1000,
     duration: 5000,
     easing: Easing.linear

   }).start()

   Animated.timing(this.move2, {
    toValue: 10,
    duration: 5000,
    asing: Easing.linear

  }).start()

 }
    render() {
        return (
          <View style={styles.container}>
           <Animated.View style={{...styles.square1, left: this.move2, top: this.move}}></Animated.View>

           <Animated.View style={{...styles.square2,opacity: this.animation}}></Animated.View>

           <Animated.View style={{...styles.triangle1, top:this.move, left:this.move, transform: [{
            rotate: this.animationSpring.interpolate ({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']})
            }]}}>
           </Animated.View>

           <Animated.View style={{...styles.circle1, transform: [{ scale: this.animationSpring }]}}></Animated.View>

           <Animated.View style={{...styles.circle2, transform: [{ scale: this.animationSpring }]}}></Animated.View>

           <Animated.View style={{...styles.circle3, transform: [{ scale: this.animationSpring }]}}></Animated.View>
           
           <Animated.View style={{...styles.circle4, transform: [{ scale: this.animationSpring }]}}></Animated.View>
           
          </View>
      
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        //alignItems: 'center',
       //justifyContent: 'center',
 },
 text: {
   color: 'red',
   fontSize: 30,
 },
 
 square1: {
  width: 25,
  height: 25,
  backgroundColor: "blue",
  position: "absolute"
},

 square2: {
   width: 50,
   height: 50,
   backgroundColor: "green",
   position: "absolute",
   top: 350,
   left: 185
 },

 triangle1: {
  width: 0,
  height: 0,
  backgroundColor: 'transparent',
  borderStyle: 'solid',
  borderLeftWidth: 50,
  borderRightWidth: 50,
  borderBottomWidth: 100,
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
  borderBottomColor: 'skyblue',
  position: "absolute"
},

 circle1: {
  width: 100,
  height: 100,
  borderRadius: 100/2,
  backgroundColor: 'purple',
  position: "absolute",
  top: 200,
  left: 145
 },

 circle2: {
  width: 100,
  height: 100,
  borderRadius: 100/2,
  backgroundColor: 'orange',
  position: "absolute",
  top: 510,
  left: 45
 },

 circle3: {
  width: 100,
  height: 100,
  borderRadius: 100/2,
  backgroundColor: 'brown',
  position: "absolute",
  top: 240,
  left: 300
 },

 circle4: {
  width: 100,
  height: 100,
  borderRadius: 100/2,
  backgroundColor: 'grey',
  position: "absolute",
  top: 10,
  left: 145
 }

});