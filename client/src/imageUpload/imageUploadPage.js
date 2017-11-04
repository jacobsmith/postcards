import React from 'react';
import Layout from './../layout/layout.js';
import ImageUpload from './imageUpload.js';
import AppNavButton from './../nav/appNavButton.js';
import AppHeader from './../layout/appHeader.js';

const ImageUploadPage = () => {
  return (
    <Layout>
      <AppHeader text="Select your image" />
      <ImageUpload />
      <AppNavButton to="/address/to" text="Save this image" />
    </Layout>
  )
}

export default ImageUploadPage;
