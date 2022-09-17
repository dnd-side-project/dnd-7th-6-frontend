import {Alert} from 'react-native';
import Mailer from 'react-native-mail';

interface Parameter {
  type: 'post' | 'review';
  targetId: number;
}

const report = ({type, targetId}: Parameter) => {
  Mailer.mail(
    {
      subject: `Photalks ${type} Report #${targetId}`,
      recipients: ['hot6.developer@gmail.com'],
      ccRecipients: ['hot6.developer@gmail.com'],
      bccRecipients: ['hot6.developer@gmail.com'],
    },
    (error, event) => {
      console.log(error);
      Alert.alert(error, event, [], {cancelable: true});
    },
  );
};

export default report;
