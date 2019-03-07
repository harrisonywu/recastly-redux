import Redux from 'redux';

var currentVideo = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state. 
  /*
   if the action type is equal to CHANGE_VIDEO "Switch"
  
  */
   switch(action.type){
       case 'CHANGE_VIDEO':
         return action.video; // want to change the current video being played to our passed in video key (action.video)
       default:
         return state;  
   }
};

export default currentVideo;
