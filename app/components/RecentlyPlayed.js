import { useAtom } from "jotai";
import { playingTrackState, playState } from "../atoms/playerAtom";

function RecentlyPlayed({ track, chooseTrack }) {
  const [play, setPlay] = useAtom(playState);
  const [playingTrack, setPlayingTrack] = useAtom(playingTrackState);

  const handlePlay = () => {
    chooseTrack(track);

    if (track.uri === playingTrack.uri) {
      setPlay(!play);
    }
  };

  return (
    <div className="flex items-center space-x-3" onClick={handlePlay}>
      <img
        src={track.albumUrl}
        alt=""
        className="rounded-full w-13 h-13"
      />
      <div>
        <h4 className="text-white text-[13px] mb-0.5 font-semibold hover:underline cursor-pointer truncate max-w-37.5">
          {track.title}
        </h4>
        <p className="text-xs text-[#686868] font-semibold cursor-pointer hover:underline">
          {track.artist}
        </p>
      </div>
    </div>
  );
}

export default RecentlyPlayed;