<template>
  <div class="container">
    <div class="left">
      <div class="tags">
        <div style="margin-left: 0rem;">&lt;html&gt;</div>
        <div style="margin-left: 1.6rem;">&lt;body&gt;</div>
      </div>

      <div class="main">
        <div class="section">
          <div class="tags" style="margin-left: 0rem;">&lt;h1&gt;</div>
          <h1 class="title" style="margin-left: 10px" v-for="text in titles" :key="text">{{ text }}</h1>
          <div class="tags" style="margin-left: 0rem;">&lt;/h1&gt;</div>
        </div>

        <div class="section">
          <div class="tags" style="margin-left: 0rem;">&lt;nav&gt;</div>
          <div style="margin-top: 10px" v-for="item in LinksMap" :key="item.showText">
            <div class="link-wrap">
              <div class="tags" style="margin-left: 1.6rem;">&lt;a&gt;</div>
              <a class="link" :href="item.link" target="_blank" rel="noreferrer noopener">{{ item.showText }}</a>
              <div class="tags" >&lt;/a&gt;</div>
            </div>
          </div>
          <div class="tags" style="margin-left: 0rem;">&lt;/nav&gt;</div>
        </div>
      </div>

      <div class="tags">
        <div style="margin-left: 1.6rem;">&lt;/body&gt;</div>
        <div style="margin-left: 0rem;">&lt;/html&gt;</div>
      </div>
    </div>

    <div class="right" >
      <div v-highlight>
        <code class="golang code-clip">{{ quickSortShow }}</code>
      </div>

      <div v-highlight v-show="showUseCode" style="margin-top:16px;">
        <code class="golang code-clip">{{ useCodeShow }}</code>
      </div>

      <div v-show="showWaitRet" class="code-clip" style="padding-left: 5px; margin-top:16px; font-family: monospace;">
        <div class="cursor-rotation"></div>
      </div>
      <div v-show="showRet" style="margin-top:16px; font-family: monospace;">
        <code class="code-clip code-ret">{{ retStr }}</code>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: "Home",
  components:{
  },
  data() {
    return {
      titles: ["Hi 👋,", "I'm Cookie 🍪,", "web developer."],
      LinksMap: [
        {showText: "Blog", link: ""},
        {showText: "About", link: "/about"},
        {showText: "Github", link: ""},
        {showText: "Twitter", link: ""},
        {showText: "Telegram", link: ""},
        {showText: "2061803022@qq.com", link: ""},
      ],

      quickSortIndex: 0,
      quickSortShow: "",
      quickSortText: "func quickSort(nums []int, left, right int) {\n" +
      "    if left >= right{\n        return\n    }\n\n    i, j := left, right\n    p := nums[i]\n" + 
      "    for i < j {\n" +
      "        for i < j && nums[i] < p {\n"+
      "            i++\n        }\n" +
      "        for i < j && nums[j] > p {\n" +
      "            j--\n        }\n" +
      "        nums[i], nums[j] = nums[j], nums[i]\n" +
      "    }\n" + 
      "    nums[j] = p\n\n" +
      "    quickSort(nums, left, i-1)\n" + 
      "    quickSort(nums, i+1, right)\n" +
      "}",

      showUseCode: false,
      useCodeIndex: 0,
      useCodeShow: "",
      useCodeText: "fmt.Println(quickSort([]int{6, 5, 3, 1, 8, 7, 2, 4}, 0, len(a) - 1))",

      showWaitRet: false,
      showRet: false,
      retStr: "[1, 2, 3, 4, 5, 6, 7, 8]",
    }
  },
  methods: {
    autoTyping(index, codeText) {
      index++;
      let codeShow = codeText.slice(0, index);
      if (index > codeText.length) {
        return codeShow;
      }

      return codeShow || "";
    },
  },
  mounted() {
    setInterval(() => {
      this.quickSortShow = this.autoTyping(this.quickSortIndex, this.quickSortText)
      this.quickSortIndex++;

      if (this.quickSortIndex > this.quickSortText.length) {
        this.showUseCode = true;
        this.useCodeShow = this.autoTyping(this.useCodeIndex, this.useCodeText);
        this.useCodeIndex++;
      }

      if (this.useCodeIndex == this.useCodeText.length) {
        setTimeout(() => {
          this.showWaitRet = true;
        });
        setTimeout(() => {
          this.showWaitRet = false;
          this.showRet = true;
        }, 3000);
      }

    }, 120);
  },
  beforeCreate() {
    document.querySelector('body')?.setAttribute('style', 'background-color: #212529');
  },
  beforeDestroy() {
    document.querySelector('body')?.removeAttribute('style');
  },
}

</script>

<style lang="scss" scoped>
.container {
  padding: 70px 100px;
  display: flex;
}

.tags {
  color: #495057;
  font-size: 1.2em;
  font-family: FiraCode,monospace;
  font-style: italic;
  user-select: none;
}

.main {
  margin: 30px 0;
  margin-left: 3.2rem;
}

.title {
  color: #fff;
  font-family: Exo,sans-serif;
  line-height: 1.2;
  font-size: 2.4em;
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.section {
  margin-bottom: 16px;
}

.link-wrap {
  display: flex;
  align-content: center;
  margin: 12px -4px 8px;
  * {
    margin-left: 4px;
    margin-right: 4px;
  }
}

.link {
  display: inline-block;
  padding: 4px 16px;
  border: 1px solid #ffc107;
  border-radius: 4px;
  text-decoration: none;
  color: #ffc107;
  letter-spacing: 2px;
  transition: all .3s;
  &:hover {
    color: #031633;
    background-color: #ffc107;
    transform: scale(1.1);
  }
}

.right {
  font-size: 18px;
  margin-left: 280px;
  line-height: 26px;
}

.code-clip {
  margin-top: 16px;
  background-color: transparent;
  white-space: pre-wrap;
}

.code-clip:before {
  content: ">";
  margin-left: -16px;
  margin-top: 2px;
  position: absolute;
  color: #fff;
}

.code-ret {
  padding-left: 5px;
  color: #fff;
}

.cursor-rotation {
  height: 16px;
  width: 16px;
  content: "|";
  margin-left: 4px;
  padding-top: 2px;
  font-size: 16px;
  color: #fff;
}

.cursor-rotation::after{
  content: "|";
  animation: rotation 2s infinite;
}

@keyframes rotation {
    25% {
      content: "/";
    }
    50% {
      content: "—";
    }
    75% {
      content: "\\";
    }
  }

</style>