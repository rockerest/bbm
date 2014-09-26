define(
    ["layouts/scheleton", "layouts/main", "views/students/students", "views/students/student"],
    function( ScheletonLayout, MainLayout, StudentsView, StudentView ){
        var mod = {};

        mod.register = function( rtr ){
            rtr.get( /students/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": StudentsView
                        }
                    }
                });
            });

            rtr.get( /\/student\/(\d+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": StudentView
                        }
                    },
                    "passdown": {
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

            rtr.get( /\/student\/(\w+)$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": StudentView
                        }
                    },
                    "passdown": {
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

            rtr.get( /student\/(\w+)\/([\d\w\-]+)(:?\/)?$/, function(){
                var layout = new ScheletonLayout({"main": MainLayout});

                layout.render({
                    "construct": {
                        "main": {
                            "content": StudentView
                        }
                    },
                    "passdown": {
                        "main": {
                            "construct": {
                                "content": {
                                    "action": this.params.splat[0],
                                    "id": this.params.splat[1]
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
