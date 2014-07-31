define(
    ["layouts/scheleton", "views/seminars/seminars", "views/seminars/seminar"],
    function( ScheletonLayout, SeminarsView, SeminarView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /\/seminars(\/)?/, function(){
                var layout = new ScheletonLayout({"main": SeminarsView});

                new (layout.build())();
            });

            rtr.get( /\/seminar\/(\d+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": SeminarView});

                new (layout.build({
                    "construct": {
                        "main": {
                            "id": this.params.splat[0]
                        }
                    }
                }))();
            });

            rtr.get( /\/seminar\/(\w+)$/, function(){
                var layout = new ScheletonLayout({"main": SeminarView});

                new (layout.build({
                    "construct": {
                        "main": {
                            "action": this.params.splat[0]
                        }
                    }
                }))();
            });

            rtr.get( /seminar\/(\w+)\/([\d\w\-]+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": SeminarView});

                new (layout.build({
                    "construct": {
                        "main": {
                            "action": this.params.splat[0] || "",
                            "id": this.params.splat[1] || ""
                        }
                    }
                }))();
            });
        };

        return mod;
    }
);
