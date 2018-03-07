import React from 'react';
import Layout from './../layout/layout.js';
import ImageUpload from './imageUpload.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';
import Button from './../button/button.js';
import PrimaryAction from './../layout/primaryAction.js';

const ImageUploadPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="select your image" />
        <ImageUpload />
        <Button to="/address/to" text="Save this image" enabledProp={'postcard.photo.imgSrc'} />
      </PageContent>
    </Layout>
  )
}

export default ImageUploadPage;
