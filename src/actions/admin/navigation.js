/**
 * Created by Nealyang on 17/3/31.
 */

export const SELECTNAVIGATION = "SELECTNAVIGATION";
import {browserHistory} from 'react-router'

export function selectNavigation(currentNav,navLink) {
    browserHistory.push('/admin'+navLink);
    return{
        type:SELECTNAVIGATION,
        currentNav,
        navLink
    }
}
