/**
 * Created by Nealyang on 17/3/30.
 */
export const SETCONFIRMCONTENT = "SETCONFIRMCONTENT";
export const CLEARCONFIRM = "CLEARCONFIRM";

export function setConfirmContent(content) {
    return{
        type:SETCONFIRMCONTENT,
        content
    }
}

export function clearConfirm() {
    return{
        type:CLEARCONFIRM
    }
}