import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';

export default class StarScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
            star_name : this.props.navigation.getParam("Star_name"),
            distance : this.props.navigation.getParam("Distance"),
            mass : this.props.navigation.getParam("Mass"),
            radius : this.props.navigation.getParam("Radius"),
            surface_gravity : this.props.navigation.getParam("Gravity"),
            image: ""
        }
    }

    componentDidMount() {
        this.setImage()
    }

    setImage = () => {
        const star_name = this.state.star_name
        var image = "";
        switch(star_name) {
            case "Sun":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "Sirius":
                image = require('../assets/stars/Sirius.jpg')
                break;
            case "Alpha Centauri":
                image = require('../assets/stars/Alphacen.jpg')
                break;
            case "Altair":
                image = require('../assets/stars/Altair.jpg')
                break;
            case "Fomalhaut":
                image = require('../assets/stars/Fomalhaut.jpg')
                break;
            case "Tau Ceti":
                image = require('../assets/stars/TauCeti.jpg')
                break;
            case "Delta Pavonis":
                image = require('../assets/stars/deltapav.jpg')
                break;
            case "Titawin":
                image = require('../assets/stars/Titawin.jpg')
                break;
            case "54 Piscium":
                image = require('../assets/stars/54P.jpg')
                break;
            case "2MASSW J0045214+163445":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "WISEP J004701.06+680352.1 [fr]":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASS J03264225-2102057 [de]":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASS J03552337+1133437":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASS J04433764+0002040":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASS J05012406-0010452 [de]":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "LSR 0602+3910 [de]":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASS J10224821+5825453 [de]":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "DENIS-P J142527.97-365023.4 [de]":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASSW J2206450-421721":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASSW J2244316+204343":
                image = require('../assets/stars/Sun.jpg')
                break;
            case "2MASS J23224684-3133231":
                image = require('../assets/stars/Sun.jpg')
                break;
            default:
                image = require('../assets/stars/Sun.jpg')
        }
        this.setState({
            image: image
        })
    }

    render() {
        const { image } = this.state
        return(
            <View style = {{flex: 1, backgroundColor: 'black'}}>
                <Card containerStyle = {{marginTop: 45}}>
                    <Card.Title style = {styles.header}>
                        {this.state.star_name}
                    </Card.Title>
                    <Card.Image source = {image} resizeMode = "contain"/>
                    <View>
                        <Text style = {styles.darkDesc}>{`Distance from Earth : ${this.state.distance} light years`}</Text>
                        <Text style = {styles.lightDesc}>{`Mass : ${this.state.mass} Sun`}</Text>
                        <Text style = {styles.darkDesc}>{`Radius : ${this.state.radius} Sun`}</Text>
                        <Text style = {styles.lightDesc}>{`Gravity : ${this.state.surface_gravity} m/s^2`}</Text>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        color: 'pink'
    },
    darkDesc: {
        fontSize: 18,
        marginTop: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    lightDesc: {
        fontSize: 18,
        marginTop: 30,
        color: 'gray',
        fontWeight: 'bold'
    }
})