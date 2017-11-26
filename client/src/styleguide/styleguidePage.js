import React from 'react';
import Layout from './../layout/layout.js';
import AppHeader from './../layout/appHeader.js';
import AppNavButton from './../nav/appNavButton.js';
import PageContent from './../page/pageContent.js';
import PrimaryAction from './../layout/primaryAction.js';
import PrimaryButton from './../button/primaryButton.js';
import PostcardImageReview from './../review/postcardImageReview.js';

import LoadingIndicator from './../loading/loadingIndicator';

import './styleguide.css';


const Text = (props) => {
  return (
    <div className="styleguideText">
      {props.children}
    </div>
  )
}

const StyleguideElement = (props) => {
  return (
    <div className="styleguideElement">
      {props.children}
    </div>
  )
}

const StyleguidePage = () => {
  return (
    <Layout>
      <PageContent>
        <AppHeader />
        <PrimaryAction text="Styleguide" />

        <StyleguideElement>
          <LoadingIndicator />
        </StyleguideElement>

        <StyleguideElement>
          <LoadingIndicator text="Uploading"/>
        </StyleguideElement>

        <StyleguideElement>
          <LoadingIndicator text="Securely processing your payment and sending the postcard!" wide={true} />
        </StyleguideElement>

        <StyleguideElement>
          <Text>Fetching Postcard</Text>
          <PostcardImageReview preview={{fetchingPostcard: true}} />
        </StyleguideElement>

        <StyleguideElement>
          <Text>Errored Postcard</Text>
          <PostcardImageReview preview={{errorDuringFetch: true}} />
        </StyleguideElement>

        <StyleguideElement>
          <Text>Successful Preview</Text>
          <PostcardImageReview preview={{frontImage: "https://placebear.com/600/400", backImage: "https://placebear.com/600/400"}} />
        </StyleguideElement>

        <StyleguideElement />
      </PageContent>
    </Layout>
  )
}

export default StyleguidePage;
