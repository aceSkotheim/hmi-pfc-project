<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
        <v-flex mb-4>
            <div>
                <v-file-input multiple label="File input"></v-file-input>
                <v-btn small @click="submitFiles()">Submit</v-btn>
            </div>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  import axios from 'axios';
  
  export default {
    /*
      Defines the data used by the component
    */
    data(){
      return {
        files: '',
        access_token: ''
      }
    },
    mounted(){
      this.access_token = 'Token ' + this.$store.getters.ACCESSTOKEN
    },

    methods: {
      /*
        Submits all of the files to the server
      */
      submitFiles() {
        window.console.log('tried submitting')
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

        formData.append('description', 'blah blah blah');

        /*
          Make the request to the POST /multiple-files URL
        */
        axios.post( 'https://hmidev.ddns.net/upload/',
          formData,
          {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authentication': this.access_token
            }
          }
        ).then(function(){
          window.console.log('SUCCESS!!');
        })
        .catch(function(error) {
          window.console.log('FAILURE!!');
          window.console.log(error.response);
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

<style>
  /*input[type="file"]{
    position: absolute;
    top: -500px;
  }*/
</style>