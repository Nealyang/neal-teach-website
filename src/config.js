/**
 * Created by Nealyang on 17/3/23.
 */
module.exports = {
    host:process.env.HOST || 'localhost',
    port:process.env.PORT || (process.env.NODE_ENV === 'production'?8080:3000),
    apiHost:process.env.APIHOST || 'localhost',
    apiPort:process.env.APIPORT || '3030',
    app:{
        title:'Neal\'s personal tech-website',
        description:'Neal\' s personal website about technology',
        head:{
            titleTemplate:'Neal\'s personal website',
            meta:[
                {
                    name:'description',
                    content:'Neal\' s personal website about technology'
                },
                {charset:'utf-8'}
            ]
        }
    }
}