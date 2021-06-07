import axios from 'axios'
import React from 'react'

import './styles.scss'

export default class Dashboard extends React.Component {

    state = {
        name: {
            docter: "",
            patient: ""
        },
        temp: {
            ante: 0,
            toilet: 0,
            isolate: 0
        },
        press: {
            ante: 0,
            toilet: 0,
            isolate: 0
        },
        hum: 0,
        light: 0,
        hepadrop: 0,
        airtube: 0,
        uv: 0
    }

    componentDidMount() {
        this.getData()
        this.interval = setInterval(() => {
            this.getData()
        }, 500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    async getData() {
        let temp = 20 // +-2
        let hum = 65 // +-2
        let press = -2
        let light = 456
        let hepadrop = (Math.floor(Math.random() * 2) / 10) + 0.3
        let airtube = (Math.floor(Math.random() * 3) / 10) + 19.5
        let uv = (Math.floor(Math.random() * 5) / 10) + 26
        this.setState({hepadrop: hepadrop})
        this.setState({airtube: airtube})
        this.setState({uv:uv})
        this.state.temp.ante = temp + Math.floor(Math.random() *3)
        this.state.temp.isolate = temp + Math.floor(Math.random() *3)
        this.state.temp.toilet = temp + Math.floor(Math.random() *3)
        this.setState({hum: hum + Math.floor(Math.random() * 5)})
        this.setState({light:  light + Math.floor(Math.random() * 4)})
        await axios.get('http://127.0.0.1:5000/api/name')
        .then(res => res.data )
        .then(res => {
          if (res) {
            this.setState({
              name: res
            })
          }
        })        
    }

    render() {
        let date = new Date;
        let now = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
        let greenBackground = {background: 'green'}
        return (
            <div className='dashboard'>
                <div className='container'>
                    <div className='row'>
                        <div className='d-flex justify-content-center'>
                            <div className='title'>
                                โรงพยาบาลเชียงคาน
                            </div>
                        </div>
                        <div className='datenow d-flex justify-content-end'>
                            { now }
                        </div>
                    </div>
                </div>
                <div className='table container border border-3 rounded' style={{color: 'white'}}>
                    <div className='row'>
                        <div className='col border-end border-3'>
                            <div className='d-flex justify-content-center mt-3'>
                                    <table className='table table-bordered mx-5' style={{color: 'white', backgroundColor: '#000033', textAlign: 'center', fontSize: '24px'}}>
                                        <thead>
                                            <tr>
                                                <th style={{width: '30%'}}>Docter</th>
                                                <th>{ this.state.name.docter }</th>
                                            </tr>
                                            <tr>
                                                <th>Patient</th>
                                                <th>{ this.state.name.patient }</th>
                                            </tr>
                                        </thead>
                                    </table>
                            </div>
                            <div className='mx-0 pb-5'>
                                <table className='table table-bordered' style={{color: 'white', fontSize: '24px', textAlign: 'center'}}>
                                    <thead style={{backgroundColor: 'black'}}>
                                        <tr>
                                            <th scope='col'>SIGNAL</th>
                                            <th scope='col'>ISOLATE ROOM</th>
                                            <th scope='col'>ANTE ROOM</th>
                                            <th scope='col'>TOILET</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope='row'>
                                                Pressure(Pa)
                                            </th>
                                            <td style={greenBackground}>
                                                {Math.floor(Math.random() * 3)}
                                            </td>
                                            <td style={greenBackground}>
                                                { -9 }
                                            </td>
                                            <td style={{background: 'green'}}>
                                                { -13 }
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope='row'>
                                                Temperature(C)
                                            </th>
                                            <td style={greenBackground}>
                                                { this.state.temp.isolate }
                                            </td>
                                            <td style={greenBackground}>
                                                { this.state.temp.ante }
                                            </td>
                                            <td style={greenBackground}>
                                                { this.state.temp.toilet }
                                            </td>
                                        </tr>
                                        <tr style={{border: 'none'}}>
                                            <th scope='row' className='border'>
                                                Humidity(%)
                                            </th>
                                            <td style={greenBackground}>
                                                { this.state.hum }
                                            </td>
                                        </tr>
                                        <tr style={{border: 'none'}}>
                                            <th scope='row' className='border'>
                                                Light Intensity(lux)
                                            </th>
                                            <td className='border' style={{background:'green'}}>
                                                { this.state.light }
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='d-flex justify-content-center'>
                            </div>
                            <div className='border border-2 rounded mx-5 mt-3' style={{textAlign: 'center', backgroundColor: 'red', letterSpacing: '3px'}}>
                                <h5>
                                    INTERNET OFF LINE
                                </h5>
                            </div>
                            <div style={{marginLeft: '150px', marginRight: '150px'}}>
                                <table className='table table-bordered border' style={{textAlign: 'center', color: 'white', fontSize: '24px'}}>
                                    <thead>
                                        <tr>
                                            <th colSpan='3'>
                                                <span className='rounded-pill' style={{backgroundColor: 'whitesmoke', padding: '3px', letterSpacing: '3px', color: 'black'}}>
                                                    MAN
                                                </span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th>AUH</th>
                                            <th>AIR</th>
                                            <th>UV</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{backgroundColor: 'green'}}>
                                            <td>
                                                <b>
                                                    ON
                                                </b>
                                            </td>
                                            <td>
                                                <b>
                                                ON
                                                </b>
                                            </td>
                                            <td>
                                                <b>
                                                    ON
                                                </b>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <table className='table table-bordered mt-4' style={{textAlign: 'center', color: 'white', fontSize: '20px'}}>
                                    <thead style={{backgroundColor: 'black'}}>
                                        <tr>
                                            <th>
                                                SIGNAL
                                            </th>
                                            <th style={{width: '35%'}}>
                                                VALUE
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>
                                                UV(Lux)
                                            </th>
                                            <td>{ this.state.uv }</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Drop Hepa(Pa)
                                            </th>
                                            <td>{ (this.state.hepadrop) }</td>
                                        </tr>
                                        <tr>
                                            <th>
                                                Air Tube(C)
                                            </th>
                                            <td>{ this.state.airtube }</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-5' style={{textAlign: 'center', color: 'gold'}}>
                    <h1>
                        PIPE LINE ENGINEERING AND MANAGEMENT TEL. 061-932-1888
                    </h1>
                </div>
            </div>
        )
    }
}