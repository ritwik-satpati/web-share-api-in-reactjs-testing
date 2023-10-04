// npm install react react-dom
// npm install @ionic/react
// npm install @capacitor/core
// npm install ionicons
// npx cap sync                 ==> Not Installing

import React from 'react';
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonList, IonItem
} from '@ionic/react';
import { Plugins } from '@capacitor/core';

const { Share } = Plugins;

const Tab1 = () => {
  const shareRet = async () => {
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: 'http://ionicframework.com/',
      dialogTitle: 'Share with buddies'
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Share Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonButton onClick={() => shareRet()}>share</IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
