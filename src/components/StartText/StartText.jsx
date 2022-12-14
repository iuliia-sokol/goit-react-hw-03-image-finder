import { BsEmojiWink } from 'react-icons/bs';
import { StartTxtWrapper, StartTxt } from './StartText.styled';

export const StartText = () => {
  return (
    <StartTxtWrapper>
      <StartTxt>
        Tons of pics are waiting for you!
        <BsEmojiWink />
      </StartTxt>
      <StartTxt>Let's start searching!</StartTxt>
    </StartTxtWrapper>
  );
};
