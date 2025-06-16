import React, { Component, useContext, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { CurrencyContext } from "../context/CurrencyContext";
 const ApexChart = () => {
    const {key, value} = useContext(CurrencyContext)

       const [state, setState] = useState({
            series: [{
                name: "Desktops",
                // data: Object.values(curData)
                //  data:[4.58108357, 0.0033355406, 1.38372567, 3.6725, 69.83412483, 2.81809666, 0.74394486, 5.08028076, 85.22777554, 4.58108357, 0.0033355406, 1.38372567, 3.6725, 69.83412483, 2.81809666, 0.74394486, 5.08028076, 85.22777554]
                 data:value
            }],
            options: {
              chart: {
                height: 350,
                width:7000,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'left'
              },
              grid: {
                // row: {
                //   colors: ['#ffffff'], // takes an array which will be repeated on columns
                //   opacity: 1
                // },
              },
              xaxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                // categories: ['1inch', 'aave', 'ada', 'aed', 'afn', 'agix', 'akt', 'algo','1inch', 'aave', 'ada', 'aed', 'afn', 'agix', 'akt', 'algo']
                categories:key

              }
            },
          
          
        });

        useEffect(()=>{
            setState({
            series: [{
                name: "Desktops",
                // data: Object.values(curData)
                //  data:[4.58108357, 0.0033355406, 1.38372567, 3.6725, 69.83412483, 2.81809666, 0.74394486, 5.08028076, 85.22777554, 4.58108357, 0.0033355406, 1.38372567, 3.6725, 69.83412483, 2.81809666, 0.74394486, 5.08028076, 85.22777554]
                 data:value
            }],
            options: {
              chart: {
                height: 350,
                width:7000,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Product Trends by Month',
                align: 'left'
              },
              // grid: {
              //   row: {
              //     colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              //     opacity: 0.5
              //   },
              // },
              xaxis: {
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                // categories: ['1inch', 'aave', 'ada', 'aed', 'afn', 'agix', 'akt', 'algo','1inch', 'aave', 'ada', 'aed', 'afn', 'agix', 'akt', 'algo']
                categories:key

              }
            },
        })
        },[key])

        console.log(value, key)


        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="area" height={300} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }


   export default ApexChart