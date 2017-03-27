/**
 * Created by Nealyang on 17/3/25.
 */
import crypto from 'crypto'

module.exports = {
    MD5_SUFFIX: 'DJFLJAfajiji349939ajfjajkdjfa 案件发卡机饿哦我@#￥%——）（*@#￥%……',
    md5:function (pwd) {
        let md5 = crypto.createHash('md5');
        return md5.update(pwd).digest('hex');
    }
};
