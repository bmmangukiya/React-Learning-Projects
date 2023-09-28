import React, { useEffect } from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

const StreamShow = (props) => {
  // let player = undefined;
  const videoRef = React.createRef();


  useEffect(() => {
    const {id} = props.match.params;
    props.fetchStream(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const playerInstance = buildPlayer();
    return () => {
      playerInstance.destroy();
    }
  })

  useEffect(() => {
    return () => {
      console.log('I was unmounted')
    }
  })
  
  const buildPlayer = () => {
    let player = undefined;
    if(player || !props.stream) {
      return;
    }
    const {id} = props.match.params;
    player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`
    });
    
    player.attachMediaElement(videoRef.current);
    player.load();
    return player;
  }

  if (!props.stream) {
    return <div>Loading...</div>;
  }

  const {title, description} = props.stream;

  return (
    <div>
      <video ref={videoRef} style={{width: '100%'}} controls={true} />
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{fetchStream})(StreamShow);
