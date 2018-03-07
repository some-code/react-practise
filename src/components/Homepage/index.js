import React from 'react';
import { 
  NavBar,
  Icon,
  Button,
  NoticeBar, 
  WhiteSpace, 
  WingBlank,
} from 'antd-mobile';
import './index.less';

function formatDateTime(time) {
  if(!time) return '';
  let date = new Date(time);
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
  let D = panLeft(date.getDate()) + ' ';
  let h = panLeft(date.getHours()) + ':';
  let m = panLeft(date.getMinutes()) + ':';
  let s = panLeft(date.getSeconds());
  return Y+M+D+h+m+s;
}

function panLeft(num){
  return num < 10 ? '0'+num : num;
}


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      local: formatDateTime(new Date()),
      date: this.getBeijingTime(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(()=>{
      this.setState({
        local: formatDateTime(new Date()),
        date: this.getBeijingTime()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getBaseTime() {
    let now = new Date();
    let distance = now.getTimezoneOffset() * 60 * 1000;
    let baseTime = new Date(now.getTime() + distance);
    return baseTime;
  }

  getBeijingTime() {
    let date = new Date(this.getBaseTime().getTime() + 8 * 60 * 60 * 1000).toString();
    return formatDateTime(date);
  }

  render() {
    return (
      <div className='homepage'>
        <NoticeBar mode="closable" 
          marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
          默认显示为北京时间(东八区)，如果需要查看其它时区时间，请在‘我的’选项卡里面进行设置。
        </NoticeBar>
        <WhiteSpace size="sm" />

        <WingBlank>
          <h2>北京时间</h2>  
          <WhiteSpace size="sm" />
          <div className='date'>
            {this.state.date}
          </div>
          <WhiteSpace size="lg" />


          <h3>本地时间</h3>  
          <WhiteSpace size="sm" />
          <div className='date-local'>
            {this.state.local}
          </div>

          <WhiteSpace size="lg" />
          <Button type="default" inline size='small'>新增闹钟</Button>

        </WingBlank>


      </div>
    );
  }
}

export default HomePage