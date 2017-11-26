import React from 'react';
import Layout from './../layout/layout.js';
import ImageUpload from './imageUpload.js';
import AppNavButton from './../nav/appNavButton.js';
import AppHeader from './../layout/appHeader.js';
import PageContent from './../page/pageContent.js';
import PrimaryButton from './../button/primaryButton.js';
import PrimaryAction from './../layout/primaryAction.js';
import Footer from './../layout/footer.js';

const ImageUploadPage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="select your image" />
        <ImageUpload />
        <PrimaryButton to="/address/to" text="Save this image" enabledProp={'postcard.photo.imgSrc'} />
      </PageContent>
    </Layout>
  )
}

export default ImageUploadPage;
