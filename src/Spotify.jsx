 export const authEndpoint = 'https://accounts.spotify.com/authorize';
 //const redirecturi=" https://handrail-bribe-unlucky.ngrok-free.dev ";
//const redirecturi = 'https://127.0.0.1:5173/';
const redirecturi = 'https://spotify-clone-nu-weld-58.vercel.app/';
 const clientId="de4631e9b1a24f9b91faeea2c94bf51f";
 const scopes = [
"user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state",
 ];

 export const getTokenfromUrl = () => {
  const params = new URLSearchParams(window.location.search);

  const code = params.get("code");

  console.log(code);

  return { code };
}
//%20 for ascii and respomse_type=token is used to send as a string and get the access token in the url rytaaa
 //export const loginurl='${authEndpoint}?client_id=${clientId}&scope=${scopes.join("%20")}&response_type=token&show-dialog=true';
export const loginurl=`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirecturi}&scope=${scopes.join("%20")}&response_type=code&show_dialog=true`;
 console.log(loginurl);
