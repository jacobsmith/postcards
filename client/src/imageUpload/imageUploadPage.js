import React from 'react';
import Layout from './../layout/layout.js';
import ImageUpload from './imageUpload.js';
import AppNavButton from './../nav/appNavButton.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';

const ImageUploadPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader text="Select your image" />
        <ImageUpload />
      </PageContent>

      <AppNavButton to="/address/to" text="Save this image" />
    </Layout>
  )
}

export default ImageUploadPage;
