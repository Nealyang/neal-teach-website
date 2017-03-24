/**
 * Created by Nealyang on 17/3/23.
 */
const WebpackIsomorphicTools = require('webpack-isomorphic-tools/plugin');

module.exports = {
  assets:{
      images:{extensions:['png','jpg','jpeg','gif']},
      style_modules:{
          extensions:['css','scss'],
          filter:function (module,regex,options,log) {
              if(options.development){
                  return WebpackIsomorphicTools.style_loader_filter(module,regex,options,log);
              }else{
                  return regex.test(module.name);
              }
          },
          path:function (module,options,log) {
              if(options.development){
                  return WebpackIsomorphicTools.style_laoder_path_extractor(module,options,log);
              }else{
                  return module.name;
              }
          },
          parser:function (module,options,log) {
              if(options.development){
                  return WebpackIsomorphicTools.css_modules_loader_parser(module,options,log);
              }else{
                  return module.source;
              }
          }
      }
  }
};
