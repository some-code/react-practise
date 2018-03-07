import React from 'react';
import './index.less';

class HomePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      date: this.getBeijingTime(),
      actions: [],
    };

    this.addAction = this.addAction.bind(this);
    this.removeAction = this.removeAction.bind(this);

  }

  componentDidMount() {
    setInterval(()=>{
      this.setState({
        date: this.getBeijingTime()
      })
    }, 1000)
  }

  addAction() {
    this.setState((prevState, props) => ({
      actions: prevState.actions.concat([(Math.random())])
    }));
  }

  removeAction(index) {
    this.setState((prevState, props) => {
      prevState.actions.splice(index, 1);
      return {
        actions: prevState.actions
      }
    });
  }

  getBaseTime() {
    let now = new Date();
    let distance = now.getTimezoneOffset() * 60 * 1000;
    let baseTime = new Date(now.getTime() + distance);
    return baseTime;
  }

  getBeijingTime() {
    return new Date(this.getBaseTime().getTime() + 8 * 60 * 60 * 1000).toString();
  }

  render() {
    return <div>
      <p>北京时间， {this.state.date}</p>
      <p>todolist： 增加一个闹钟，然后提示</p>
      <p>
        <button onClick={this.addAction}>新增闹钟</button>
      </p>
      <ul>
        {
          this.state.actions.map((item, index)=>{
            return <li key={index}>
              {item}
              <button onClick={()=>{this.removeAction(index)}}>删除闹钟</button>
            </li>
          })
        }
      </ul>
    </div>
    
  }
}


export default HomePage;