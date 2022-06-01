import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

/*

  

  function Square(props)
  {
      return(
          <button className='square' 
          onClick ={props.onClick}>
              {props.value}
          </button>
      );
  }
  class Board extends React.Component {

    renderSquare(i) {
      return <Square value ={this.props.squares[i]} 
          onClick ={() => this.props.onClick(i)}
      />;
    }
  
    render() {
        
  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
      constructor(props)
      {
          super(props);
          this.state = {
              history: [{
                  squares: Array(9).fill(null),
              }],
              xIsNext:true,
              stepNumber: 0,
          };
      }
      handleClick(i)
      {
          const history = this.state.history.slice(0, this.state.stepNumber + 1);
          const current = history[history.length - 1];
          const squares = current.squares.slice();

          const xIsNext = this.state.xIsNext;
          //const winner = this.state.winner;
          if (calculateWinner(squares) || squares[i]) {
              return;
            }
          if(xIsNext)
          {
              squares[i] = 'X';
              this.setState({xIsNext:false});
          }
          else
          {
              squares[i] = 'O';
              this.setState({xIsNext:true});
          }
          this.setState({
              history: history.concat([{
              squares:squares}]),
              stepNumber: history.length,
              });
      
        
      }

      jumpTo(step) {
        this.setState({
          stepNumber: step,
          xIsNext: (step % 2) === 0,
        });
      }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
              'Go to move #' + move :
              'Go to game start';
            return (
              <li key = {move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
              </li>
            );
          });

        let status;
        if(winner)
        {
            status = 'Winner: ' + winner;
        }
        else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }
      return (
        <div className="game">
          <div className="game-board">
            <Board 
                squares = {current.squares}
                onClick={(i)=>this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);
  */
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
            super(props);
            this.state = {
                currentMedicine: '',
                currentHour: '--',
                currentMin: '--',
                currentMeridian: '--',
                currentTime: '',
                medicineList: Array(0).fill(null),
            };

            this.handleChangeMed = this.handleChangeMed.bind(this);
            this.handleChangeHour = this.handleChangeHour.bind(this);
            this.handleChangeMin = this.handleChangeMin.bind(this);
            this.handleChangeMeridian = this.handleChangeMeridian.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        AddItem()
        {
            return(
                <form onSubmit={this.handleSubmit}>
                    <div className= 'text-fields'>
                        <div>
                            <label>Enter New Medicine Name Here: </label>
                            <textarea value = {this.state.currentMedicine} onChange={this.handleChangeMed} />
                        </div>
                        
                        <div>
                            <label>Time to take this medicine: </label>
                            
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
                            <label> : </label>
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
                    
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            ); 
        }

        handleSubmit(event)
        {
            const medicineList = this.state.medicineList;

            const medicineName = this.state.currentMedicine;
            const time = this.state.currentTime;
            const hour = this.state.currentHour;
            const min = this.state.currentMin;
            const meridian = this.state.currentMeridian;

            //console.log(time);

            //Make sure input is viable.
            if(medicineName.trim() === '')
                alert("Enter a medicine name.");
            else if(hour === "--" || min === "--" || meridian === "--")
                alert("Please enter a proper time.")
            else
                this.setState({medicineList: medicineList.concat([([medicineName, time])])}); 
            
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

        render()
        {
            console.log("Submit: " + this.state.medicineList);
        
            const medicineList = this.state.medicineList;

            const currentList = medicineList.map((key, item) => {
                return <li key = {key}>
                    <Item medicineList = {this.state.medicineList[item]}/>
                </li>
            });

            return(
                <div>
                    <div className = "enterMed">
                        {this.AddItem()}
                    </div>

                    <div className = "medList">
                        <div>Your Medicines and Times: </div>
                        <ul>{currentList}</ul>
                    </div>

                </div>
            );
        }
    }

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<Base />);
  