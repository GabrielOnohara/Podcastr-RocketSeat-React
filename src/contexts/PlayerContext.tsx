import  { createContext, useState, ReactNode} from  "react"  
import { useContext } from 'react';
type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

type PlayerContextData = {
  episodeList: Episode[]
  currentEpisodeIndex: number;
  play: (episode: Episode) =>void;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  togglePlay: () => void;
  toggleLoop: ()=> void;
  toggleShuffle: () => void;
  setPlayingState: (state:boolean) =>void;
  playList: (list: Episode[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  clearPlayState: () => void;
}


export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = {
  children: ReactNode;
}

export function PlayerContextProvider({children}: PlayerContextProviderProps){
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);



  function play(episode :Episode){
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list:Episode[], index:number){
    setEpisodeList(list);
    setCurrentEpisodeIndex(index)
    setIsPlaying(true);
  }

  function togglePlay(){
    setIsPlaying(!isPlaying);
  }

  function toggleLoop(){
    setIsLooping(!isLooping);
  }

  function toggleShuffle(){
    setIsShuffling(!isShuffling);
  }

  function clearPlayState(){
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  function setPlayingState(state:boolean){
    setIsPlaying(state);
  }

  const hasPrevious = currentEpisodeIndex - 1 > 0;
  const hasNext = isShuffling || currentEpisodeIndex + 1 < episodeList.length;

  function playNext(){
    const nextEpisodeIndex = currentEpisodeIndex + 1;
    if(isShuffling){
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    }
    else if(hasNext){
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }else{
      return;
    }
  }

  function playPrevious(){
    const nextEpisodeIndex = currentEpisodeIndex - 1;
    if(hasPrevious){
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }else{
      return;
    }
  }

  return (
    <PlayerContext.Provider value={{
        episodeList, 
        currentEpisodeIndex,
        play, 
        playList,
        playNext,
        isLooping,
        isShuffling,
        toggleShuffle,
        toggleLoop,
        playPrevious,
        hasNext,
        hasPrevious,
        isPlaying,
        togglePlay, 
        setPlayingState,
        clearPlayState,
        }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
}