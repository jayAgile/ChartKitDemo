import {Text, StyleSheet, View, Dimensions} from 'react-native';
import React, {Component} from 'react';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const circularData = {
  labels: ['Swim', 'Bike', 'Run'], // optional
  data: [0.2, 0.5, 0.6, 0.8],
};
const chartConfig = {
  backgroundColor: '#fff',
  backgroundGradientFrom: 'green',
  backgroundGradientTo: '#000',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726',
  },
};
const barData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const screenWidth = Dimensions.get('window').width - 5;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  // Math.random() * 10,
                  // Math.random() * 10,
                  // Math.random() * 10,
                  // Math.random() * 10,
                  // Math.random() * 10,
                  // Math.random() * 10,
                  1, 2, 3, 4, 5, 6,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width - 5} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            // backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier={true}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
        <Text>Progress Ring</Text>
        <ProgressChart
          data={circularData}
          width={Dimensions.get('window').width - 5}
          height={220}
          strokeWidth={12}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        <Text style={{marginTop: 10}}>Bar Chart</Text>
        <BarChart
          // style={graphStyle}
          data={barData}
          width={screenWidth}
          height={220}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
