/**
 * Created by Nealyang on 17/3/31.
 */
import {SELECTNAVIGATION} from '../../actions/admin/navigation'

function selectNavigation(state={currentNav:"发布",navLink:"/issue"},action) {
    switch (action.type){
        case SELECTNAVIGATION:
            return Object.assign({},state,{
                currentNav:action.currentNav,
                navLink:action.navLink
            });
        default:return state;

    }
}

export default selectNavigation;
