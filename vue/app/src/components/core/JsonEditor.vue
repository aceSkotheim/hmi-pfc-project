<template>
  <div id='editorHolder'></div>
</template>

<script>
import { JSONEditor } from '@json-editor/json-editor/dist/jsoneditor.amd.js'

export default {
  name: 'JsonEditContentDefault',
  data: function () {
    return {
      resultContent: null,
      schema: {},
      editor: {}
    }
  },
  methods: {
    //initialJsonToFormData () {
    //  return {}
    //},
    //initialJsonToRawText () {
    //  return this.$store.state.initialJsonString
    //},
    //formDataToJson () {
    //  return {}
    //}
  },
  watch: {
    resultContent () {
      let resultJson = this.resultContent
      window.console.log(resultJson)
      //this.$store.commit('setResultJson', {resultJson})
    }
  },
  mounted () {
    const el = document.getElementById('editorHolder')
    this.schema = {
  "title": "Person",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "First and Last name",
      "minLength": 4,
      "default": "Jason Skotheim"
    },
    "age": {
      "type": "integer",
      "default": 49,
      "minimum": 18,
      "maximum": 99
    },
    "favorite_color": {
      "type": "string",
      "format": "color",
      "title": "favorite color",
      "default": "#335471"
    },
    "gender": {
      "type": "string",
      "enum": [
        "male",
        "female"
      ]
    },
    "location": {
      "type": "object",
      "title": "Location",
      "properties": {
        "city": {
          "title": "City",
          "type": "string",
          "default": "Saskatoon"
        },
        "prov": {
          "title": "Province",
          "type": "string",
          "default": "SK"
        },
        "city_prov": {
          "title": "City and Province",
          "type": "string",
          "description": "This is generated automatically from the previous two fields",
          "template": "{{city}}, {{prov}}",
          "watch": {
            "city": "location.city",
            "prov": "location.prov"
          }
        }
      }
    },
    "pets": {
      "type": "array",
      "format": "table",
      "title": "Pets",
      "uniqueItems": true,
      "items": {
        "type": "object",
        "title": "Pet",
        "properties": {
          "type": {
            "type": "string",
            "enum": [
              "cat",
              "dog",
              "bird",
              "reptile",
              "other"
            ],
            "default": "dog"
          },
          "name": {
            "type": "string"
          }
        }
      },
      "default": [
        {
          "type": "dog",
          "name": "Comet"
        }
      ]
    }
  }
}
    window.console.log(JSONEditor)
    //this.resultContent = JSON.parse(this.initialJsonToRawText())
    this.editor = new JSONEditor(el, {
      schema: this.schema,
      theme: "bootstrap4",
      compact: true,
      disable_properties: true,
      disable_array_reorder: true
    })
    //this.editor.setValue(this.resultContent)

    this.editor.on('change', () => {
      this.resultContent = this.editor.getValue()
    })
  }
}
</script>

<style>
@import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
</style>