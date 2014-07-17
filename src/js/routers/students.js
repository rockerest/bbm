define(
    ["layouts/scheleton", "views/students/students", "views/students/student"],
    function( ScheletonLayout, StudentsView, StudentView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /students/, function(){
                var layout = new ScheletonLayout({"main": StudentsView});

                layout
                    .setup()
                    .render();
            });

            rtr.get( /\/student\/(\d+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": StudentView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "id": this.params.splat[0]
                        }
                    });
            });

            rtr.get( /\/student\/(\w+)$/, function(){
                var layout = new ScheletonLayout({"main": StudentView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": this.params.splat[0]
                        }
                    });
            });

            rtr.get( /student\/(\w+)\/([\d\w\-]+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": StudentView});

                layout
                    .setup()
                    .render({
                        "main": {
                            "action": this.params.splat[0],
                            "id": this.params.splat[1]
                        }
                    });
            });
        };

        return mod;
    }
);
