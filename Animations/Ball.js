import React, { Component } from "react";
import { View, StyleSheet, Animated } from 'react-native';

class Ball extends Component {

	constructor(props) {
		super(props);

		this.position = new Animated.ValueXY(0, 0);

	}

	componentDidMount() {
		// this.position = new Animated.ValueXY(0, 0);
		Animated.spring(this.position, {
			toValue: { x: 200, y: 500 },
			useNativeDriver: false, // useNativeDriver does not work with position / flexbox properties
		}).start();
	}

	render() {
		return (
			<Animated.View style={this.position.getLayout()}>
				<View style={styles.ball} />
			</Animated.View>

		);
	}
}

const styles = StyleSheet.create({
	ball : {
		height: 60,
		width: 60,
		borderRadius: 30,
		borderWidth: 30,
		borderColor: '#000'
	}
});

export default Ball;
