import React from 'react';
import Layout from './../layout/layout.js';
import ImageUpload from './imageUpload.js';
import AppNavButton from './../nav/appNavButton.js';

const ImageUploadPage = () => {
  return (
    <Layout>
      <ImageUpload />
      <AppNavButton to="/address/to" text="Save this image" />
    </Layout>
  )
}

export default ImageUploadPage;
