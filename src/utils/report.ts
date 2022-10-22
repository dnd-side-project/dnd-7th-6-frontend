import {Alert} from 'react-native';
import Mailer from 'react-native-mail';

import mutatePostReport from 'src/apis/mutatePostReport';

interface Parameter {
  type: 'post' | 'review';
  targetId: number;
}

const report = ({type, targetId}: Parameter) => {
  const description = `이 게시물을 신고하는 이유를 알려주세요.

  포톡스 팀에서 해당 유저 및 콘텐츠의 커뮤니티 가이드 위반 여부를 판단하여 적절한 조치를 취하도록 하겠습니다. 내용을 자세히 작성해 주시면 해당 문제를 더 빠르게 해결 할 수 있습니다.
  
  ex)
  지나친 상업적 홍보 내용으로 신고합니다.
  도배 콘텐츠로 신고합니다.
  저작권에 침해되는 게시물입니다.
  
  *신고는 익명으로 접수 되며 상대방에게 신고 정보를 알리지 않습니다.`;

  Mailer.mail(
    {
      subject: `Photalks ${type} Report #${targetId}`,
      recipients: ['hot6.developer@gmail.com'],
      ccRecipients: ['hot6.developer@gmail.com'],
      bccRecipients: ['hot6.developer@gmail.com'],
      body: description,
    },
    (error, event) => {
      if (error) {
        return Alert.alert(error, event, [], {cancelable: true});
      }
      if (type === 'post') {
        return mutatePostReport(targetId);
      }
      if (type === 'review') {
        return;
      }
    },
  );
};

export default report;
