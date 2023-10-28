import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const MusicTrackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const MusicTrackImage = styled.img`
  width: 140px;
  height: 90px;
  margin-right: 20px;
`
export const NameAndGenreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.p`
  font-family: roboto;
  font-size: 15px;
  color: #3b82f6;
`
export const Genre = styled.p`
  font-family: roboto;
  font-size: 15px;
  color: white;
`

export const DurationAndDeleteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Duration = styled.p`
  font-family: roboto;
  font-size: 15px;
  color: white;
`

export const DeleteButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`
