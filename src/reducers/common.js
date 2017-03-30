/**
 * Created by Nealyang on 17/3/30.
 */
import {SETCONFIRMCONTENT,CLEARCONFIRM} from '../actions/common/common'

function confirm(state="",action) {
    switch (action.type){
        case SETCONFIRMCONTENT:
            return action.content;
        case CLEARCONFIRM:
            return "";
        default:
            return state;
    }
}

export default confirm;
