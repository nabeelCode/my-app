import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = { fahrenheit: '', celsius: '' }
    }

    //celsius to fahrenheit.
    cToF = (e) => {
        const c = parseFloat(e.target.value)
        //avoiding non-numbers
        if(Number.isNaN(c)) return ''
        const f = (c * 9 / 5) + 32
        //rounds float value
        const rounded = Math.round( f * 1000 ) / 1000
        this.setState(()=>({ 
            fahrenheit: rounded,
            celsius: ''
        }))
    }
    //fahrenheit to celsius.
    fToC = (e) => {
        const f = parseFloat(e.target.value)
        //avoiding non-numbers
        if(Number.isNaN(f)) return ''
        else{
            const c = (f - 32) * 5 / 9
            //rounds float value
            const rounded = Math.round( c * 1000 ) / 10000
            this.setState(()=>({ 
                celsius: rounded,
                fahrenheit: ''
            }))
        }
    }

    render(){
        return(
            <div style={{textAlign:'center'}}>
                <h3>Celsius Fahrenheit Convertor</h3>
                <table  style={{
                    marginLeft: "auto",
                    marginRight: 'auto'
                }}>
                    <tr>
                        <td>
                            <tr>
                                <input 
                                    onChange={this.cToF} 
                                    value={this.state.celsius != ''  ? this.state.celsius:null}
                                />
                            </tr>
                            <tr>
                                celsius
                            </tr>
                        </td>
                        <td>
                            <tr>
                                <input 
                                    onChange={this.fToC}    
                                    value={this.state.fahrenheit != '' ? this.state.fahrenheit:null}
                                />
                            </tr>
                            <tr>
                                fahrenheit
                            </tr>
                        </td>
                    </tr>
                </table>
                
               
            </div>
        )
    }
} 
ReactDOM.render(
        <App/>,
        document.getElementById('root')
    )