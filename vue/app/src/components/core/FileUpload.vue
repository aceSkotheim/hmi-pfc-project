<template>
    <div>
        <v-file-input multiple label="File input"></v-file-input>
        <v-btn small>Submit</v-btn>
    </div>
</template>

<script>
import axios from 'axios';
  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        files: ''
      }
    },

    methods: {
      /*
        Submits all of the files to the server
      */
      submitFiles(){
        /*
          Initialize the form data
        */
        let formData = new FormData();

        /*
          Iteate over any file sent over appending the files
          to the form data.
        */
        for( var i = 0; i < this.files.length; i++ ){
          let file = this.files[i];

          formData.append('files[' + i + ']', file);
        }

        /*
          Make the request to the POST /multiple-files URL
        */
        axios.post( '/multiple-files',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          window.console.log('SUCCESS!!');
        })
        .catch(function(){
          window.console.log('FAILURE!!');
        });
      },

      /*
        Handles a change on the file upload
      */
      handleFilesUpload(){
        this.files = this.$refs.files.files;
      }
    }
  }
</script>