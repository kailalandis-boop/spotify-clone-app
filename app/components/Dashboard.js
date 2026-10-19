import SpotifyWebApi from "spotify-web-api-node";
import Sidebar from './Sidebar'
import Body from './Body'
import Right from './Right'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

function Dashboard() {
  return (
    <div>
        <Sidebar />
        <Body spotifyApi={spotifyApi}/>
        <Right />
    </div>
  )
}

export default Dashboard