<template>
  <div class="allContent">
    <div class="news" v-for= "iCnew in iCnews">
      <div class="zan">
        
        <i class="el-icon-caret-top zanButton"></i>
        {{iCnew.zan}}
      </div>
      <div class="content">
        <div class="title">
            <a :href="iCnew.url" > {{iCnew.content}}</a>
        </div>
        <div class="time">发布于 {{iCnew.time}}</div>
        
      </div>
      <div class="collect">
          <i class="el-icon-star-on"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name: 'iCnew',
  data() {
    return {
      iCnews: [{
        zan: 1, content: '我是第一条新闻，合肥工业大学取消期末考试', time: '2016/12/29', collect: true, url: 'https://www.baidu.com',
      }, {
        zan: 2, content: '我是第二条新闻，合肥工业大学恢复期末考试制度', time: '2016/12/29', collect: true,
      }],
    };
  },
  methods: {

  },

};

</script>
<style>
.allContent{
  padding-top: 30px;
  line-height: 1.5;
}
.news{
  margin: 0 auto;
  border-bottom: 1px solid #eee;
  background: #fff;
  border: 1px solid rgba(0,0,0,.09);
  box-shadow: 0 1px 4px 0 rgba(0,0,0,.04);
  border-radius: 3px;
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
}
.content{
  width: 30rem;

}
.time{
  font-size: 0.8em;
}
.collect{
  margin: 0.5rem;
}
.collect :hover{
  color: red;
}
.zan{
  margin: 0.5rem;
}
.zan :hover{
  color: blue;
}
@media (min-width: 1200px){
  .news{
      width: 1140px;
  }
}
@media (min-width: 992px){
  .news{
    width: 970px;
  }
}

@media (min-width: 768px){
  .news{
    width: 750px;
  }
}
 
</style>