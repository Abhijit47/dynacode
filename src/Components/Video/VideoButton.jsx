import { useModalVideo } from './ModalVideoContext';

const VideoButton = ({ videoUrl }) => {
  const { openModal } = useModalVideo();

  return (
    <button
      title='Play Video'
      className='request-loader'
      onClick={() => openModal(videoUrl)}>
      <span className={'visually-hidden'}>video button</span>
      <i className='fa-solid fa-play'></i>
    </button>
  );
};

export default VideoButton;
