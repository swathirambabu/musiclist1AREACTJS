import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicListItem,
  MusicTrackContainer,
  MusicTrackImage,
  NameAndGenreContainer,
  Name,
  Genre,
  DurationAndDeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {musicItemDetails, deleteItem} = props
  const {id, name, genre, duration, imageUrl} = musicItemDetails

  const onDeleteTrack = () => {
    deleteItem(id)
  }

  return (
    <MusicListItem>
      <MusicTrackContainer>
        <MusicTrackImage src={imageUrl} alt="track" />
        <NameAndGenreContainer>
          <Name>{name}</Name>
          <Genre>{genre}</Genre>
        </NameAndGenreContainer>
      </MusicTrackContainer>
      <DurationAndDeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onCliCk={onDeleteTrack}
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DurationAndDeleteContainer>
    </MusicListItem>
  )
}
export default MusicItem
