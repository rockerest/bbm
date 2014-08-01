define(
    ["layouts/scheleton", "layouts/main", "views/seminars/seminars", "views/seminars/seminar"],
    function( ScheletonLayout, MainLayout, SeminarsView, SeminarView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /\/seminars(\/)?/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": SeminarsView
                        }
                    }
                });
            });

            rtr.get( /\/seminar\/(\d+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": SeminarView
                        }
                    },
                    "sub": {
                        "main": {
                            "construct": {
                                "content": {
                                    "id": this.params.splat[0]
                                }
                            }
                        }
                    }
                });
            });

            rtr.get( /\/seminar\/(\w+)$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": SeminarView
                        }
                    },
                    "sub": {
                        "main": {
                            "construct": {
                                "content": {
                                    "action": this.params.splat[0]
                                }
                            }
                        }
                    }
                });
            });

            rtr.get( /seminar\/(\w+)\/([\d\w\-]+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": SeminarView
                        }
                    },
                    "sub": {
                        "main": {
                            "construct": {
                                "content": {
                                    "action": this.params.splat[0] || "",
                                    "id": this.params.splat[1] || ""
                                }
                            }
                        }
                    }
                });
            });
        };

        return mod;
    }
);
