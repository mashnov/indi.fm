<template>
  <div class="container-fluid upload-view">
    <UploadHeader />
    <UploadForm />
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import { UPLOAD } from '~/src/store/types';

  import UploadHeader from './UploadHeader';
  import UploadForm from './UploadForm';

  export default {
    name: 'UploadView',
    components: {
      UploadHeader,
      UploadForm,
    },
    created() {
      this.initUpload();
    },
    methods: {
      ...mapActions('upload', {
        initUpload: UPLOAD.INIT,
      }),
    },
  };
</script>
