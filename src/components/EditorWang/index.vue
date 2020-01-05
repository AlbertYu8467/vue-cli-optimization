<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
        <el-button type="primary" style="margin-top:20px;" v-on:click="getContent">查看内容</el-button>
    </div>
</template>

<script>
    export default {
      name: 'EditorWang',
      data () {
        return {
          editorContent: ''
        }
      },
      methods: {
        getContent: function () {
            alert(this.editorContent)
        }
      },
      mounted() {
        var E = window.wangEditor;
        var editor = new E(this.$refs.editor)
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
      }
    }
</script>