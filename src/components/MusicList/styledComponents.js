import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
`
export const ArtistBg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  height: 450px;
`
export const ArtistName = styled.p`
  font-size: 42px;
  font-weight: bold;
  font-family: roboto;
  color: white;
`
export const ArtistInfo = styled.p`
  font-size: 43px;
  font-weight: 400;
  font-family: roboto;
  color: white;
`

export const MusicPlayListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const MusicHeading = styled.h1`
  font-size: 32px;
  font-weight: 400;
  font-family: roboto;
  color: white;
`

export const SearchInput = styled.input`
  border: 1px solid white;
  border-radius: 4px;
  background: transparent;
  cursor: pointer;
  outline: none;
  margin-left: 15px;
  height: 30px;
  width: 18%;
  color: white;
`

export const MusicList = styled.ul`
  padding: 0px;
  margin-left: 50px;
  margin-right: 50px;
`
export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const NoSongsText = styled.p`
  font-family: roboto;
  font-size: 32px;
  font-weight: bold;
  color: white;
`
