export const getMarkerColor = (boothName: string): string => {
  if (boothName.includes('인생네컷')) {
    return '#FF58A0';
  } else if (boothName.includes('포토그레이')) {
    return '#767187';
  } else if (boothName.includes('포토이즘')) {
    return '#545763';
  } else if (boothName.includes('하루필름')) {
    return '#5584FF';
  } else if (boothName.includes('셀픽스')) {
    return '#EE9817';
  } else {
    return '#5E5E5E';
  }
};
