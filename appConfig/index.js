var fs = require('fs');

var patterns = {
    constructor: "constructor.js",
    module: "module.json",
    revealingModule: "revealingModule.json",
    singleton: "singleton.json",
    observer: "observer.json",
    mediator: "mediator.json",
    prototype: "prototype.json",
    command: "command.json",
    facade: "facade.json",
    factory: "factory.json",
    mixin: 'mixin.json',
    decorator: "decorator.json",
    fileReader: "fileReader.json",
    terator: "terator.json",
    proxy: "proxy.json",
    builder: "builder.json"
}

var pattern = {

    //invoke only once to create files
    init: function () {
        for (var prop in patterns) {

            (function (propName) {

                fs.writeFile(__dirname + '/patterns/' + patterns[propName], '', 'utf8', function (err) {
                    if (err) throw `Error: ${patterns[propName]} failed`;
                    console.log(`${patterns[propName]} created`);
                });

            } (prop))
        }
    },
    
    patternNames: function(){
        var names  = [];
        for(var prop in patterns){
            names.push(prop);
        }
        
        return names;
    },

    paste: function (patternName) {
        if (patterns.hasOwnProperty(patternName)) {
            var dir = process.cwd();
            
            fs.stat(dir, function(err, stat){
                if(err) return 'Oops! sorry, you may have to try again!';
                
                var patternTemplate = fs.readFileSync(__dirname + '/patterns/' + patternName + '.js', 'utf8');
                
                if(!stat.isFile()){
                    fs.writeFile(dir + '/' + patternName + '.js', patternTemplate, 'utf8', function(err){
                        
                        if(err) return 'Oops!, sorry, operation failed';
                        
                    });
                    
                }else{
                    
                    fs.appendFile(dir + '/' + patternName + '.js', patternTemplate, 'utf8', function(err){
                        
                        if(err) return 'Oops!, sorry, operation failed';
                        
                    });
                    
                }
                
                
            })
        }
    }

};

module.exports = pattern;
