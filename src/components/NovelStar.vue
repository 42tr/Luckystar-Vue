<template>
  <div class='comics'>
    <div id='comicList'>
      <h4>收藏的小说</h4>
      <ul>
        <li v-for="star in stars" :key="star.starCode">
          <a>{{ star.starName }} <br> 历史：{{ star.chapterName }} <br> 最新：{{ star.latestChapterName }}</a>
          <button class="oper-btn continue-read" @click="continueRead(star.starCode, star.chapterId, star.starSourceCode)">继续观看</button>
          <button class="oper-btn qry-chapter" @click="chooseComic(star.starCode, star.starSourceCode)">查看目录</button>
          <button class="oper-btn cancel-star" @click="starComic(star.starCode, star.starName, star.starSource, star.starSourceCode)">取消收藏</button>
        </li>
      </ul>
      <hr/>
      <h4>小说搜索（点击即可收藏/取消收藏）</h4>
      <label><input id="comicSearch" type="text" class="search-query" style="width: 90%; margin-bottom: 15px;" @keyup.enter="searchComic" placeholder="输入漫画名"></label>
      <div class="search-comic-list">
        <ul>
          <li v-for="sc in searchComics" :key="sc.comicId">
            <a class="cover" @click="starComic(sc.comicId, sc.name, sc.starSource, sc.starSourceCode, sc.src)">
              {{sc.name}} <br> 更至：{{sc.latestChapter}} <br> 来源：{{sc.starSource}}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id='chapterList' style="display: none;">
      <ul>
        <li v-for="chapter in chapters" :key="chapter.chapterId" @click="openChapter(chapter.chapterId)">
          {{ chapter.chapter_id }} {{ chapter.title }}
        </li>
      </ul>
    </div>
    <div id='chapter' style="display: none;">
      <div id="mask" style="display: none">
        <div>
          <div class="top_comic_mask comic_mask_top" @click="reloadChapterImages()" @mousewheel.prevent @touchmove.prevent>
            <p class="comic_btn">重新获取</p>
          </div>
        </div>
        <div>
          <div class="left_comic_mask comic_mask_bottom" @click="beforeChapter()" @mousewheel.prevent @touchmove.prevent>
            <p class="comic_btn">上<br>一<br>话<br><br>快<br>捷<br>键<br>←</p>
          </div>
          <div class="middle_comic_mask comic_mask_bottom" @click="hideMask()" @mousewheel.prevent @touchmove.prevent>
            <p class="comic_btn">继<br>续<br>观<br>看</p>
          </div>
          <div class="right_comic_mask comic_mask_bottom" @click="afterChapter()" @mousewheel.prevent @touchmove.prevent>
            <p class="comic_btn">下<br>一<br>话<br><br>快<br>捷<br>键<br>→</p>
          </div>
        </div>
      </div>
      <div>
        <pre class="content" @click="showMask()">{{chapter}}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'Doupo',
  data () {
    return {
      searchComics: [],
      comic: null,
      stars: [],
      chapters: [],
      chapter: {},
      curChapter: 0,
      lastClickTime: 0,
      starSourceCode: null
    }
  },
  created () {
    let _this = this
    _this.$api.novelStar.qryStars().then(res => {
      if (res === null) {
        _this.kPopup('请求失败')
        return
      }
      if (res.code === 0) {
        _this._self.stars = res.data
      } else {
        _this.kPopup(res.msg)
      }
    })
    document.onkeydown = function (e) {
      // 事件对象兼容
      let e1 = e || event || window.event
      // 键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
      if (e1 && e1.keyCode === 37) {
        _this.beforeChapter()
      } else if (e1 && e1.keyCode === 39) {
        _this.afterChapter()
      }
    }
  },
  methods: {
    searchComic () {
      const _this = this
      const comicName = $('#comicSearch').val()
      _this.$api.novelStar.searchComic(comicName).then(res => {
        if (res.code === 0) {
          _this.searchComics = res.data
        } else {
          alert(res.msg)
        }
      })
    },
    starComic (comicId, comicName, starSource, starSourceCode, starImage) {
      const _this = this
      _this.$api.novelStar.starComic(comicId, comicName, starSource, starSourceCode, starImage).then(res => {
        if (res.code === 0) {
          _this.kPopup(res.data)
          window.location.reload()
        } else {
          alert(res.msg)
        }
      })
    },
    continueRead (comicId, chapterId, starSourceCode) {
      let _this = this
      if (chapterId === null) {
        _this.kPopup('还没开始看呢')
        return
      }
      _this.comic = comicId
      _this.curChapter = chapterId
      _this.starSourceCode = starSourceCode
      _this.$api.novelStar.qryChapterImages(comicId, chapterId, starSourceCode).then(res => {
        if (res.code === 0) {
          _this.chapter = res.data.data
          $('#comicList').hide()
          $('#chapter').show()
        } else {
          _this.kPopup(res.msg)
        }
      })
    },
    chooseComic (comic, starSourceCode) {
      let _this = this
      _this.comic = comic
      _this.starSourceCode = starSourceCode
      _this.$api.novelStar.qryChapter(comic, starSourceCode).then(res => {
        if (res == null) {
          alert('查询失败')
          return
        }
        _this.chapters = res.data
        $('#comicList').hide()
        $('#chapterList').show()
      })
    },
    openChapter (chapterId) {
      let _this = this
      _this.curChapter = chapterId
      _this.$api.novelStar.qryChapterImages(_this.comic, chapterId, _this.starSourceCode).then(res => {
        if (res.code === 0) {
          _this.chapter = res.data.data
          $('#chapterList').hide()
          $('#chapter').show()
          document.scrollingElement.scrollTop = 0
        } else {
          _this.kPopup(res.msg)
        }
      })
    },
    beforeChapter () {
      let _this = this
      var curChapterId = _this.curChapter
      _this.$api.novelStar.qryChapterImagesBefore(_this.comic, curChapterId, _this.starSourceCode).then(res => {
        if (res.code === 0) {
          $('.comic-img').hide()
          $('.load-img').show()
          _this.chapter = res.data.data
          _this.curChapter = res.data.chapterId
          document.scrollingElement.scrollTop = 0
        } else {
          _this.kPopup(res.msg)
        }
        _this.hideMask()
      })
    },
    afterChapter () {
      let _this = this
      var curChapterId = _this.curChapter
      _this.$api.novelStar.qryChapterImagesAfter(_this.comic, curChapterId, _this.starSourceCode).then(res => {
        if (res.code === 0) {
          $('.comic-img').hide()
          $('.load-img').show()
          _this.chapter = res.data.data
          _this.curChapter = res.data.chapterId
          document.scrollingElement.scrollTop = 0
        } else {
          _this.kPopup(res.msg)
        }
        _this.hideMask()
      })
    },
    reloadChapterImages () {
      const _this = this
      _this.$api.novelStar.reloadChapterImages(_this.comic, _this.curChapter, _this.starSourceCode).then(res => {
        if (res.code === 0) {
          $('.comic-img').hide()
          $('.load-img').show()
          _this.chapter = res.data.data
          _this.curChapter = res.data.chapterId
          document.scrollingElement.scrollTop = 0
        } else {
          _this.kPopup(res.msg)
        }
        _this.hideMask()
      })
    },
    showMask () {
      console.log('DING')
      var _this = this
      var nowTime = new Date().getTime()
      if (nowTime - _this.lastClickTime < 400) {
        _this.lastClickTime = 0
        $('#mask').show()
      } else {
        _this.lastClickTime = nowTime
      }
    },
    hideMask () {
      $('#mask').hide()
    },
    showImg (id) {
      console.log(id)
      $('#' + id).show()
      $('#' + id + 'load').hide()
    }
  }
}
</script>

<style>
.comics li {
  background-color: #EEEEEE;
  padding: 10px;
  margin-top: 10px;
  position: relative;
}
.comics ul {
  list-style-type: none;
  padding-left: 0;
}
.content pre {
  white-space:pre-wrap; /* css3.0 */
  white-space:-moz-pre-wrap; /* Firefox */
  white-space:-pre-wrap; /* Opera 4-6 */
  white-space:-o-pre-wrap; /* Opera 7 */
  word-wrap:break-word; /* Internet Explorer 5.5+ */
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif;
}
.comics li {
  background-color: #EEEEEE;
  padding: 10px;
  margin-top: 10px;
  position: relative;
}
.comics ul {
  list-style-type: none;
  padding-left: 0;
}
#comicList a {
  cursor: pointer;
}
hr {
  height:2px;
  border:none;
  border-top:2px dotted #185598;
}
.search-comic-list {
  width: 1000px;
  max-width: 100%;
}
.common-comic-item {
  float: left;
  margin-bottom: 30px;
  font-size: 12px;
  line-height: 18px;
  color: #999;
  width: 180px;
  /*height: 300px;*/
  margin-right: 20px;
  max-width: 40%;
}
.common-comic-item .cover {
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 5px;
}
.cover > img {
  width: 100%;
  height: 100%;
  border: none;
}
.comic__title {
  max-width: 100%;
  font-size: 15px;
  line-height: 26px;
  font-weight: 600;
  color: #28292d;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.common-comic-item .comic-update {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search-query {
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding: 0 15px 0 30px;
  border: 1px solid #e3e3e3;
  color: #273849;
  outline: none;
  border-radius: 15px;
  margin-right: 10px;
  transition: border-color 0.2s ease;
  background: #fff url(../assets/search.png) 8px 5px no-repeat;
  background-size: 20px;
  vertical-align: middle !important;
}
#chapter img {
  max-width: 100%;
}
.left_comic_mask {
  left: 0;
  width: 30%;
  opacity: 0.6;
  z-index: 100;
}
.right_comic_mask {
  right: 0;
  width: 30%;
  opacity: 0.6;
  z-index: 100;
}
.middle_comic_mask {
  left: 30%;
  width: 40%;
  opacity: 0.7;
  z-index: 100;
}
.top_comic_mask {
  left: 0;
  width: 100%;
  opacity: 0.65;
  z-index: 100;
}
.comic_mask_bottom {
  position: fixed;
  height: 85%;
  bottom: 0;
  background-color:#000000;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  z-index: 100;
}
.comic_mask_top {
  position: fixed;
  height: calc(15% - 40px);
  width: 100%;
  top: 40px;
  background-color:#000000;
  text-align: center;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  z-index: 100;
}
.comic_btn {
  color: #FFFFFF;
}.oper-btn {
   position: absolute;
   right: 10px;
 }
.continue-read {
  top: 1px;
}
.qry-chapter {
  top: 24px;
}
.cancel-star {
  top: 47px;
}
</style>
