import {useNavigation} from '@react-navigation/native';
import React from 'react';

import ReviewNextPressable from '../BoothReview/ReviewNextPressable';
import {
  Container,
  PemissionSeperator,
  PemissionTextWrapper,
  PermissionContainer,
  PermissionSubTitle,
  PermissionTitle,
  PermissionWrapper,
  PressableWrapper,
  Subtitle,
  Title,
} from './PermissionOrganism.styles';

import requestcameraPermission from 'src/hooks/requestcameraPermission';
import requestLocationPermission from 'src/hooks/requestLocationPermission';
import PermissionCameraIcon from 'src/icons/Permission/CameraIcon';
import PermissionFileIcon from 'src/icons/Permission/FileIcon';
import PermissionLocationIcon from 'src/icons/Permission/LocationIcon';
import PermissionPhoneIcon from 'src/icons/Permission/PhoneIcon';

const PermissionOrganism = () => {
  const navigation = useNavigation();
  const nextHandler = () => {
    requestcameraPermission().then(() =>
      requestLocationPermission().then(() => navigation.navigate('AppInner' as never)),
    );
  };
  return (
    <Container>
      <Title>{'포톡스 서비스 이용을 위해\n아래 권한을 허용해주세요.'}</Title>
      <Subtitle>필수 접근 권한</Subtitle>
      <PermissionContainer>
        <PermissionWrapper>
          <PermissionPhoneIcon />
        </PermissionWrapper>
        <PemissionTextWrapper>
          <PermissionTitle>기기 및 앱 등록</PermissionTitle>
          <PermissionSubTitle>서비스 최적화 및 오류 확인</PermissionSubTitle>
        </PemissionTextWrapper>
      </PermissionContainer>
      <PemissionSeperator />
      <Subtitle>선택 접근 권한</Subtitle>
      <PermissionContainer>
        <PermissionWrapper>
          <PermissionLocationIcon />
        </PermissionWrapper>
        <PemissionTextWrapper>
          <PermissionTitle>위치 접근 권한</PermissionTitle>
          <PermissionSubTitle>현재 위치 확인, 지도에 위치 표기</PermissionSubTitle>
        </PemissionTextWrapper>
      </PermissionContainer>
      <PermissionContainer>
        <PermissionWrapper>
          <PermissionCameraIcon />
        </PermissionWrapper>
        <PemissionTextWrapper>
          <PermissionTitle>카메라</PermissionTitle>
          <PermissionSubTitle>게시물 작성, 부스 리뷰 작성을 위한 이미지 업로드</PermissionSubTitle>
        </PemissionTextWrapper>
      </PermissionContainer>
      <PermissionContainer>
        <PermissionWrapper>
          <PermissionFileIcon />
        </PermissionWrapper>
        <PemissionTextWrapper>
          <PermissionTitle>저장공간(사진)</PermissionTitle>
          <PermissionSubTitle>게시물 작성, 부스 리뷰 작성을 위한 이미지 업로드</PermissionSubTitle>
        </PemissionTextWrapper>
      </PermissionContainer>
      <PressableWrapper>
        <ReviewNextPressable onPress={nextHandler} />
      </PressableWrapper>
    </Container>
  );
};

export default PermissionOrganism;
