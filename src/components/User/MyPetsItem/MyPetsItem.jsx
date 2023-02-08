// import PropTypes from "prop-types";
// import defaultimg from './'

import { PetsItemStyled } from './MyPetsItemStyled'
import {UserIcons} from '../UserIcons/UserIcons'
    const DefaultAvatar = 'https://pixabay.com/get/ge35962f200ea0ea7441289ecb0e39f1196ce1a91c141dd8be8eb77b52ea3b2870376e9653de67b3fd2446c6fda9120036ca62a25ccf170de170638fba75258ce_640.jpg';


export default function  MyPets ({_id, avatarURL=DefaultAvatar, name="default", data='01.01.1900', breed="default", comments="default", deletePet }) {
    
    // { id, img=DefaultAvatar, name="default", data='01.01.1900', breed="default", comments="default", owner, deletePet }
    // const { id, avatarURL, name, data, breed, comments, owner}=items
    return (
        // <PetsContainerStyled>
            <PetsItemStyled key={_id}>
            <img className='card-avatar' src={avatarURL} alt={name} />
            <div className='card-info' key={_id}>
                <div className='card-name'>
                    <p>
                        <b>Name: </b>{name}
                    </p>
                    <button
                        className='card-btn'
                        type="button"
                         onClick={() => {deletePet(_id); }}
                    >
                        <UserIcons id="icon-user_delete" />
                    </button>
                </div>
                <p>
                    <b>Date of birth: </b>{data}
                </p>
                <p >
                    <b>Breed: </b>{breed}
                </p>
                <p >
                    <b>Comments: </b>{comments}
                </p>
                </div>
            </PetsItemStyled>
    // </PetsContainerStyled>
  );
};

// MyPets.propTypes = {
  // id: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   data: PropTypes.string.isRequired,
//   breed: PropTypes.string.isRequired,
//   comments: PropTypes.string.isRequired,
  // owner: PropTypes.string.isRequired,
  // deletePet: PropTypes.string.isRequired,
// };

// export default MyPets;
