import { AiFillPropertySafety } from 'react-icons/ai';
import profile from './resources/profile.jpg';

export default function(props){
    return (
        <div className="feedPosts">
            <div className="feedPostSingle">
              <div className="feedPost_profile">
                <img src={profile} />
                <h3>{props.nome}<br /> <span>{props.horario}</span></h3>
              </div> 
              <div className="feedPost_content">
                <p>{props.conteudo}</p>
                <img src="https://scontent-gig2-1.xx.fbcdn.net/v/t1.0-9/115821669_3277065165685867_4717826110837061049_n.jpg?_nc_cat=102&ccb=2&_nc_sid=110474&_nc_ohc=6r3fxPSni3kAX-2ng5D&_nc_ht=scontent-gig2-1.xx&oh=265611751333ff5650f4531199790b45&oe=5FD5A1D9" />
              </div>
            </div>
          </div>
    )
}