<template>
  <div id="app">
    <div class="header">
      <div class="header-left">
        <span class="icon-Investment">
          <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span>
        </span>
        <span>{{ carrieroperator }}</span>
        <span class="icon-wifi"></span>
      </div>
      <div class="header-content">
        <span class="icon-camera"></span>
      </div>
      <div class="header-right">
        <span class="icon-alarm_clock"></span>
        <span class="icon-alarm_clock"></span>
        <span>75%</span>
        <span class="icon-alarm_clock"></span>
      </div>
    </div>
    <div class="container">
      <p>{{ hh }}:{{ mm }}</p>
      <p>{{ month }}月{{date}}日&nbsp{{week}}</p>
      <p>{{year}}年</p>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      nowTime: "",
      year: "",
      month: "",
      date: "",
      hh: "",
      mm: "",
      ss: "",
      week: "",
      carrieroperator: ""
    }
  },
  methods: {
    //获取时间
    timeFormate (timeStamp) {
      let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      this.year = new Date(timeStamp).getFullYear();
      this.month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      this.date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      this.hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      this.mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      this.ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      this.week = week[new Date(timeStamp).getDay()];
      // this.nowTime = this.year + "年" + this.month + "月" + this.date +"日"+" "+this.hh+":"+this.mm+":"+this.ss+this.week;
    },
    nowTimes () {
      this.timeFormate(new Date());
      // this.Nowcarrieroperator();
      setInterval(this.nowTimes,1000);
    },
    //获取运营商数据
    Nowcarrieroperator () {
      const carrieroperator =  ['中国移动', '中国联通', '中国电信'];
      let changeCarrieroperator = Math.floor(((this.mm * 10) % 100) / 10) % 5;
      let carrieroperatorIndex = changeCarrieroperator < 3 ? changeCarrieroperator : changeCarrieroperator - 2;
      this.carrieroperator = carrieroperator[carrieroperatorIndex];
    }
  },
  components: {
  },
  // 创建完成时
  created () {
    this.nowTimes();
    this.Nowcarrieroperator();
  }
}
</script>

<style>
html,body {
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  height: 100%;
  width: 100%;
  background: url(../static/images/bg.jpg) no-repeat;
  background-size: cover;
}
#app .header {
  width: 100%;
  height: 20px;
  font-size: 16px;
  color: #fff;
  /* background-color: #f40; */
}
.header .header-left {
  position: absolute;
  font-weight: 500;
  line-height: 16px;
}
.header .header-left .icon-Investment {
  font-size: 20px;
  margin-left: 2px;
}
.header .header-content {
  position: absolute;
  top: 4px;
  left: 50%;
  transform:translateX(-50%);
}
.header .header-right {
  position: absolute;
  top: 4px;
  right: 0;
  margin-right: 5px;
  font-family: Arial;
}
</style>
