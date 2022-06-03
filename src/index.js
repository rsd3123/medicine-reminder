/***
 * Author: Rudy DeSanti
 * Last Modified: June 2, 2022
 * Application Name: Medicine Reminder
 * Purpose: User enters the name of a medicine and what time(s) they take that medicine. Then they are notified to take that medicine on the given time.
 * 
 * Features to add:
 *  -Sound notification when reminder goes off.
 *  -Remove medicine.
 *  -Remove certain time from list.
 *  -Clear list (done already by refreshing page)
 *  -Create account to save reminders.
 *  -Check-off wether or not you took a certain medicine. (Resets every day)
 *  -Add ability to add multiple times at once.
 *      -Num of times box, create new text for each one.
 *  -Add ability to set medicine for 'anytime', where the user would checkoff if they took that medicine for the day.
 *  -Clean up/modulate/comment code.
 *  -Add more CSS.
 *      -Color scheme
 *      -Spacing 
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Item extends React.Component
{
    render()
    {
        const medicineName = this.props.medicineList[0];
        const time = this.props.medicineList[1];
        
        return(
            <div>
                {medicineName + " @ "+ time}
            </div>
        );
    }
}

class Base extends React.Component
{
    constructor(props)
    {
        const date = new Date();

        super(props);
        this.state = {
            currentMedicine: '',

            startSeconds: date.getSeconds(),
            currentHour: '--',
            currentMin: '--',
            currentMeridian: '--',
            currentTime: '',

            //Holds: [medicineName, [displayTime (AM/PM)], [militaryTime]]
            medicineList: Array(0).fill(null),

            realTime: this.getRealTime(),

            /*
            playingSound: false,
            audio: new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'),
            popupVisible: false,
            alarmItem: null,
            */
            //Holds all times that have been called that day- Set to null each new day
            // alreadyCalled: Array(0).fill(null),
            timeChecked: false,
        };

        this.handleChangeMed = this.handleChangeMed.bind(this);
        this.handleChangeHour = this.handleChangeHour.bind(this);
        this.handleChangeMin = this.handleChangeMin.bind(this);
        this.handleChangeMeridian = this.handleChangeMeridian.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getRealTime()
    {
        const date = new Date();
        this.setState({timeChecked: false})
        return date.getHours() + ':' + date.getMinutes();
    }

    componentDidMount()
    {
        var startSeconds = this.state.startSeconds;

        //Timer starts with an interval of 60-startSeconds, then transitions to 60 second intervals.
        this.timerID = setInterval(()=>{

            this.setState({realTime : this.getRealTime()});
            startSeconds = 0;
            
            //Start 60 second intervals
            clearInterval(this.timerID);
            this.timerID = setInterval(()=>{
                this.setState({realTime : this.getRealTime()});
            }, 60000);

        },(60000-(startSeconds*1000)));
    }

    componentWillUnmount() 
    {
        clearInterval(this.timerID);
    }

    AddItem()
    {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className = 'userInput'>
                    <div className='inputName'>
                        <label>Enter New Medicine Name Here: </label>
                        <textarea rows = '1' className='input' id = "nameTextArea" value = {this.state.currentMedicine} onChange={this.handleChangeMed} />
                    </div>
                    
                    <div className = "enterTime">
                        <label className='input'>Time to take this medicine: </label>
                        
                        <div className = 'selectTime'>
                            <select value = {this.state.currentHour} onChange={this.handleChangeHour}>
                                <option defaultValue="--">--</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <label>: </label>
                            <select value = {this.state.currentMin} onChange={this.handleChangeMin}>
                                <option defaultValue="--">--</option>
                                <option value="00">00</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                                
                            </select>
                            <select value = {this.state.currentMeridian} onChange={this.handleChangeMeridian}>
                                <option defaultValue="--">--</option>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select>
                        </div>
                    </div>
                
                    <input className='input' id='submitButton' type="submit" value="Set Reminder"/>
                </div>
            </form>
        ); 
    }

    handleSubmit(event)
    {
        //Initilize Variables
        const medicineList = this.state.medicineList;
        const medicineName = this.state.currentMedicine.toUpperCase();

        const time = this.state.currentTime;
        var realTime;

        const hour = this.state.currentHour;
        var hourInt = parseInt(hour);

        const min = this.state.currentMin;
        var minInt = parseInt(min);

        const meridian = this.state.currentMeridian;

        //Convert to military time
        if(time.endsWith("PM") && hourInt !== 12)
            hourInt += 12;
        else if(time.endsWith("AM") && hourInt === 12)
            hourInt = 0;
        realTime = hourInt.toString() + ':' + minInt.toString();
        
        //Make sure input is viable.
        if(medicineName.trim() === '')
            alert("Enter a medicine name.");
        else if(hour === "--" || min === "--" || meridian === "--")
            alert("Please enter a proper time.")

        //If input is viable, put into list
        else
        {
            var alreadyIn = false;
            //If medicine is already in the list
            for(var i = 0; i <= medicineList.length - 1; i++)
            {
                //If medicine name is already in list
                if(medicineName === medicineList[i][0])
                {
                    console.log("Name Already In");
                    alreadyIn = true;
                    //If time is the same alert already in
                    if(medicineList[i][2].includes(realTime))
                    {
                        alert("That medicine and time has already been added.");
                    }
                    //If time is not in list
                    else
                    {
                        medicineList[i][1].push(time);
                        medicineList[i][2].push(realTime);
                        this.setState({medicineList: medicineList}); 
                    }
                }
            }
            if(!alreadyIn)
                this.setState({medicineList: medicineList.concat([([medicineName, [time], [realTime]])])}); 
        }
        
        event.preventDefault();
    }

    handleChangeMed(event)
    {
        this.setState({currentMedicine: event.target.value});
    }

    handleChangeMeridian(event)
    {
        this.setState({currentMeridian: event.target.value,
            currentTime: this.state.currentHour+ ":" + this.state.currentMin + ' ' + event.target.value});
    }
    
    handleChangeHour(event)
    {
        this.setState({currentHour: event.target.value,
            currentTime: event.target.value + ":" + this.state.currentMin + ' ' + this.state.currentMeridian });
    }

    handleChangeMin(event)
    {
        this.setState({currentMin: event.target.value,
            currentTime: this.state.currentHour+ ":" + event.target.value + ' ' + this.state.currentMeridian });
    }

    checkForMedicineTime()
    {
        const medicineList = this.state.medicineList;
        const realTime =  this.state.realTime;
        // const alreadyCalled = this.state.alreadyCalled;

        //Loop through medicine list, if time == realTime then send an alert.
        for(var i = 0; i <= medicineList.length - 1; i++)
        {
            console.log(medicineList[i][2] + " == " + realTime)
            if(medicineList[i][2].includes(realTime))
            {
                alert("Time to take " + medicineList[i][0]);
            }
        }

        this.setState({timeChecked: true});
    }

    render()
    {
        console.log("Submit: " + this.state.medicineList);
        console.log("Date: " + this.state.realTime);
    
        const medicineList = this.state.medicineList;
        const currentList = medicineList.map((key, item) => {
            return <li key = {key}>
                <Item medicineList = {this.state.medicineList[item]}/>
            </li>
        });
        
        //Call check to see if it's time to take a medicine.
        const timeChecked = this.state.timeChecked;

        if(!timeChecked)
            this.checkForMedicineTime();
    
        return(
            <div className = 'Base'>
                <h1>Medicine Reminder</h1>
                <div className='header'>
                    <div className='instructions'>
                    <ol id = 'directions'>
                        <li>Enter the name of each medicine you take and the time you take it. </li>
                        <li>Enter the same medicine name with a different time to add multiple reminders for that medicine. </li>
                        <li>Reminders take the form of alerts that pop-up on screen. When not on this page, reminders take the form of a notification on the tab of this website.</li>
                        <li>To clear all set reminders, refresh this page. Reminders will stay active until this page is closed/refreshed, so no need to re-set reminders every day.</li>
                    </ol>
                    </div>
                </div>

                <div className = "enterMed">
                    <h4 id ='enterNameText'>Enter Medicines and Times: </h4>
                    {this.AddItem()}
                </div>

                <div className = "medList">
                    <h4 className = 'listTitle'>Your Medicines and Times: </h4>
                    <ul>{currentList}</ul>
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Base />);
