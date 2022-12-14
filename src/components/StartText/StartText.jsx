import { BsEmojiWink } from 'react-icons/bs';
import { StartTxt } from './StartText.styled';

export const StartText = () => {
  return (
    <div>
      <StartTxt>
        Tons of pics are waiting for you!
        <BsEmojiWink />
      </StartTxt>
      <StartTxt>Let's start searching!</StartTxt>
    </div>
  );
};
