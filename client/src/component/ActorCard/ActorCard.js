//  BUG FIX "M is not defined"
import 'materialize-css/dist/css/materialize.min.css';
import { Card, Col, CardTitle } from 'react-materialize';
import { IMG_URL, IMG_SIZE } from '../../constants/Constants';
import './ActorCard.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';

const ActorCard = ({
  profile_path,
  birthday,
  character,
  deathday,
  name,
  release,
}) => {
  const img = `${IMG_URL}/${IMG_SIZE}${profile_path}`;

  //  Get the difference between the release of the movie and the actor's age's
  const playedAtAge = (release, birthday) => {
    const yearRelease = release.split('-')[0];
    const yearBirthActor = birthday.split('-')[0];
    return yearRelease - yearBirthActor;
  };
  //  Get the difference between actual year and the actor's age's
  const getCurrentAge = (birthday) => {
    const today = new Date();
    const yearBirthActor = birthday.split('-')[0];
    return today.getFullYear() - yearBirthActor;
  };

  return (
    <Col xs={12} s={6} m={3} l={2} xl={2} className="moviedetails__cast">
      <Card
        className="moviedetails__cast__card small"
        header={
          <CardTitle image={img}>
            <span className="moviedetails__cast__card--title">{character}</span>
          </CardTitle>
        }
      >
        <div
          style={{ display: 'flex', flexDirection: 'column' }}
          className="moviedetails__cast__card--info"
        >
          <span className="moviedetails__cast__card--info--playedAtAge badge red">
            {playedAtAge(release, birthday)}
          </span>
          <span className="moviedetails__cast__card--info--name">{name}</span>
          <div className="moviedetails__cast__card--card-action card-action">
            <span
              className={`moviedetails__cast__card--info--age ${
                deathday ? 'badge black dead' : `badge green`
              }`}
            >
              {deathday ? (
                <FontAwesomeIcon icon={faSkull} />
              ) : (
                getCurrentAge(birthday)
              )}
            </span>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default ActorCard;
