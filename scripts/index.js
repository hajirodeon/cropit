(function(){var a,b;b=function(){return $(this).find("input.cropit-image-input").click()},a=function(){var a;return a=this.cropit("croppedImageData"),window.open(a)},function(){var c;return c=$(".splash"),c.cropit({imageBackground:!0,imageState:{src:"http://scottcheng.github.io/cropit/images/0-1920.jpg",offset:{x:-112,y:0}}}),c.on("click",".select-image-btn",b.bind(c)),c.on("click",".download-btn",a.bind(c))}(),function(){var b;return b=$(".demo-wrapper.basic"),b.cropit({imageState:{src:"http://scottcheng.github.io/cropit/images/1-960.jpg",offset:{x:0,y:-125}}}),b.on("click",".download-btn",a.bind(b))}(),function(){var c;return c=$(".demo-wrapper.custom-button"),c.cropit({imageState:{src:"http://scottcheng.github.io/cropit/images/2-960.jpg",offset:{x:0,y:-94}}}),c.on("click",".select-image-btn",b.bind(c)),c.on("click",".download-btn",a.bind(c))}(),function(){var c;return c=$(".demo-wrapper.image-background"),c.cropit({imageBackground:!0,imageState:{src:"http://scottcheng.github.io/cropit/images/3-960.jpg",offset:{x:0,y:-86}}}),c.on("click",".select-image-btn",b.bind(c)),c.on("click",".download-btn",a.bind(c))}(),function(){var c;return c=$(".demo-wrapper.image-background-border"),c.cropit({imageBackground:!0,imageBackgroundBorderSize:20,imageState:{src:"http://scottcheng.github.io/cropit/images/4-960.jpg",offset:{x:0,y:-140}}}),c.on("click",".select-image-btn",b.bind(c)),c.on("click",".download-btn",a.bind(c))}()}).call(this);